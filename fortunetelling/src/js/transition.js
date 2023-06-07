function transition(){
    let page = document.querySelector("main");
    window.onload = gsap.fromTo(page, 1, { opacity: 0 }, { opacity: 1});
}

export {transition};