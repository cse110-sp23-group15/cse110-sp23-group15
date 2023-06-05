window.addEventListener('DOMContentLoaded', init);

async function init() {
    const image = document.getElementById("noodleImg");
    let noodle = localStorage.getItem('noodle');
    image.setAttribute('src', noodle);
}