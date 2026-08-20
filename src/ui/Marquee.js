import React from "react";

/**
 * Infinite horizontal scroller.
 *
 * The children are rendered twice and each copy is exactly 100% of the track
 * width, so translating one full track width loops seamlessly.
 */
export default function Marquee({
  items,
  renderItem,
  duration = 32,
  reverse = false
}) {
  const track = (
    <div className="marquee__track" aria-hidden="true">
      {items.map((item, i) => renderItem(item, i))}
    </div>
  );

  return (
    <div
      className={`marquee${reverse ? " marquee--reverse" : ""}`}
      style={{"--marquee-duration": `${duration}s`}}
    >
      {track}
      {/* duplicate copy that fills the gap as the first scrolls away */}
      {React.cloneElement(track)}
    </div>
  );
}
