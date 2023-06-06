class transition extends highway.Transition {
  // Built-in methods
  in({ from, to, trigger, done }) {
    // [...]
    from.remove();
    gsap.fromTo(to, 0.5, {opacity:0}, {opacity:1, onComplete: done});
    console.log("transition active");
  }

  out({ from, trigger, done }) {
    // [...]
    gsap.fromTo(from, 0.5, {opacity:1}, {opacity:0, onComplete:done});
  }
}

// Don`t forget to export your transition
export default transition;