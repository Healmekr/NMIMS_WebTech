const menus = document.querySelector("nav ul");
const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
menuBtn.addEventListener("click", () => {
    menus.classList.add("display");
});
closeBtn.addEventListener("click", () => {
    menus.classList.remove("display");
});
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 20) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        menus.classList.remove("display");
    });
});
const countersEl = document.querySelectorAll('.numbers');
countersEl.forEach((countersEl) => {
    countersEl.textContent = 0;
    function incrementCounters() {
        let currentNum = +countersEl.textContent;
        const dataCeil = countersEl.getAttribute("data-ceil");
        const increment = dataCeil / 25;
        currentNum = Math.ceil(currentNum + increment);
        if (currentNum < dataCeil) {
            countersEl.textContent = currentNum;
            setTimeout(incrementCounters, 70);
        } else {
            countersEl.textContent = dataCeil;
        }
    }
    incrementCounters();
});