import Highway from '@dogstudio/highway';
import { gsap } from 'gsap';

class transition extends Highway.Transition {
  // Built-in methods
  in({ from, to, trigger, done }) {
    // [...]
    from.remove();
    gsap.fromTo(to, 0.5, {opacity:0}, {opacity:1, onComplete: done});
  }

  out({ from, trigger, done }) {
    // [...]
    gsap.fromTo(from, 0.5, {opacity:1}, {opacity:0, onComplete:done});
  }
}

// Don`t forget to export your transition
export default transition;