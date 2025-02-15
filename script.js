const compressButton = document.getElementById("compressButton");

compressButton.addEventListener("click", () => {
  // Add the animation class to the body element
  document.body.classList.add("compress-animation");

  // Remove the animation class after the animation is complete
  setTimeout(() => {
    document.body.classList.remove("compress-animation");
  }, 500); // 500ms is the duration of the animation

  // Open the compress.html page
  window.location.href = "compress.html";
});

// play on load for gallery view
setTimeout(transition, 1000);

$(".js-trigger-transition").on("click", function (e) {
  e.preventDefault();
  transition();
});

function transition() {
  var tl = new TimelineMax();

  tl.to(
    CSSRulePlugin.getRule("body:before"),
    0.2,
    { cssRule: { top: "50%" }, ease: Power2.easeOut },
    "close"
  )
    .to(
      CSSRulePlugin.getRule("body:after"),
      0.2,
      { cssRule: { bottom: "50%" }, ease: Power2.easeOut },
      "close"
    )
    .to($(".loader"), 0.2, { opacity: 1 })
    .to(
      CSSRulePlugin.getRule("body:before"),
      0.2,
      { cssRule: { top: "0%" }, ease: Power2.easeOut },
      "+=1.5",
      "open"
    )
    .to(
      CSSRulePlugin.getRule("body:after"),
      0.2,
      { cssRule: { bottom: "0%" }, ease: Power2.easeOut },
      "-=0.2",
      "open"
    )
    .to($(".loader"), 0.2, { opacity: 0 }, "-=0.2");
}
