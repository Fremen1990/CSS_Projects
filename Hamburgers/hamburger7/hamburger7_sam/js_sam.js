// pobieranier elementów 

const menu = document.querySelector('nav');
const arrow = document.querySelector('.arrow')


// uruchomienie nasłuchiwania

arrow.addEventListener('click', function () {
    arrow.classList.toggle("on");
    menu.classList.toggle("on");
})

// użycie funkcji