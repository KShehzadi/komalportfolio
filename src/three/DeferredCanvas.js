import React, {Suspense, useEffect, useRef, useState} from "react";

/**
 * Catches anything the WebGL subtree throws — a missing/half-written model, a
 * failed texture, no WebGL context — and shows the plain fallback instead.
 *
 * Without this, one failed asset takes the whole page down with an uncaught
 * error, which is exactly what a decorative canvas must never do. drei's loader
 * caches the rejection, so the error also repeats on every re-render until the
 * boundary stops it.
 */
class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {failed: false};
  }

  static getDerivedStateFromError() {
    return {failed: true};
  }

  componentDidCatch(error) {
    // eslint-disable-next-line no-console
    console.warn("3D scene failed to load; using the static fallback.", error);
  }

  render() {
    if (this.state.failed) {
      return this.props.fallback || null;
    }
    return this.props.children;
  }
}

/**
 * Keeps three.js off the critical path.
 *
 * Two gates, both of which must open before any WebGL code is even fetched:
 *
 *   1. Visibility — an IntersectionObserver waits until the placeholder is
 *      near the viewport. The dynamic import() does not start before that, so
 *      the three.js chunk is never requested for a section nobody scrolls to.
 *   2. Idle — after mount we wait for requestIdleCallback so the canvas never
 *      competes with the first contentful paint.
 *
 * Anything that fails these gates simply renders `fallback`, which means the
 * page is fully readable with WebGL disabled, on a reduced-motion setting, or
 * on a device where the import fails.
 */
export default function DeferredCanvas({
  load,
  fallback = null,
  rootMargin = "300px",
  className,
  style,
  disabled = false,
  componentProps
}) {
  const ref = useRef(null);
  const [Component, setComponent] = useState(null);
  const [isNear, setIsNear] = useState(false);

  // Callers pass an inline `() => import(...)`, whose identity changes every
  // render. Pin it so the idle callback below is not cancelled and rescheduled
  // on each render before the chunk has landed.
  const loadRef = useRef(load);
  loadRef.current = load;

  // gate 1: near the viewport
  useEffect(() => {
    if (disabled) {
      return undefined;
    }
    const node = ref.current;
    if (!node) {
      return undefined;
    }
    if (!("IntersectionObserver" in window)) {
      setIsNear(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsNear(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {rootMargin}
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, disabled]);

  // gate 2: browser is idle, then fetch the chunk
  useEffect(() => {
    if (!isNear || disabled || Component) {
      return undefined;
    }

    let cancelled = false;
    const start = () => {
      loadRef
        .current()
        .then(module => {
          if (!cancelled) {
            // Wrapped in a thunk: a bare function passed to a state setter is
            // treated as an updater and would be *called* rather than stored.
            setComponent(() => module.default);
          }
        })
        .catch(() => {
          /* leave the fallback in place */
        });
    };

    const idle = window.requestIdleCallback
      ? window.requestIdleCallback(start, {timeout: 1200})
      : window.setTimeout(start, 200);

    return () => {
      cancelled = true;
      if (window.cancelIdleCallback && window.requestIdleCallback) {
        window.cancelIdleCallback(idle);
      } else {
        window.clearTimeout(idle);
      }
    };
  }, [isNear, disabled, Component]);

  return (
    <div ref={ref} className={className} style={style}>
      {Component ? (
        <CanvasErrorBoundary fallback={fallback}>
          <Suspense fallback={fallback}>
            <Component {...componentProps} />
          </Suspense>
        </CanvasErrorBoundary>
      ) : (
        fallback
      )}
    </div>
  );
}
