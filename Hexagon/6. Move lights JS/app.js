const button = document.querySelector('button');
const container = document.querySelector('.container');


const startHexa = () => {
    console.log("TOCUH!! ");
    button.style.zIndex = "-1";
    button.style.opacity = "0";
    button.style.left = "-100%"
    container.style.opacity = "1";
    container.classList.add("visibleContainer")
    document.documentElement.requestFullscreen();
    window.scrollTo(0, 1);
}

button.addEventListener("touchstart", startHexa)


const cursor = document.getElementById('cursor');
window.onmousemove = (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
}

window.ontouchmove = (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
}
