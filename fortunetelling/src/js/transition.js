/**
 * Transition Class for page transition
 */
class transition extends highway.Transition {
	/** Fade in function */
	in({ from, to, done }) {
		// [...]
		from.remove();
		gsap.fromTo(to, 0.5, { opacity: 0 }, { opacity: 1, onComplete: done });
		console.log('transition active');
	}

	/** Fade out function */
	out({ from, done }) {
		// [...]
		gsap.fromTo(from, 0.5, { opacity: 1 }, { opacity: 0, onComplete: done });
	}
}

// Don`t forget to export your transition
export default transition;
