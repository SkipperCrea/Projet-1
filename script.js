document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', e => {
        const p = dropdown.querySelector('p');
        if (dropdown.classList.contains('open')) {
            // Closing: animate to 0
            p.style.maxHeight = '0px';
            dropdown.classList.remove('open');
        } else {
            // Opening: set maxHeight to scrollHeight for smooth animation
            dropdown.classList.add('open');
            p.style.maxHeight = p.scrollHeight + 'px';
        }
    });
});
const slider = document.querySelector('.slider-content');
const nbLanguages = document.querySelectorAll('.slider-content .card').length;

let i = 0;
let changeInProgress = false;
setInterval(() => {
    if (changeInProgress) {
        changeInProgress = false;
        return;
    }
    let nbDisplayedLanguages = window.innerWidth > 768 ? 4 : 2;
    i = (i < nbLanguages - nbDisplayedLanguages) ? i + 1 : 0;

    slider.style.transform = 'translateX(-' + (248 * i) + 'px)';
}, 2000);

document.querySelector('#left').addEventListener('click', () => {
    changeInProgress = true;
    let nbDisplayedLanguages = window.innerWidth > 768 ? 4 : 2;
    i = i > 0 ? i - 1 : (nbLanguages - nbDisplayedLanguages);
    slider.style.transform = 'translateX(-' + (248 * i) + 'px)';
});

document.querySelector('#right').addEventListener('click', () => {
    changeInProgress = true;
    let nbDisplayedLanguages = window.innerWidth > 768 ? 4 : 2;
    i = (i < nbLanguages - nbDisplayedLanguages) ? i + 1 : 0;
    slider.style.transform = 'translateX(-' + (248 * i) + 'px)';
});