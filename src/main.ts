/* variables Declaration */
const StickyHeader = document.querySelector('.sticky-header');
const MobileHeader = document.querySelector('.mobile-header');
const MenuOpen = document.querySelector('.menu_open');
const ToogleImg = document.querySelector('.menu_open img');
const MobileNav = document.querySelector('.mobile_nav');
let Open = false;

/* Sticky Header */
window.addEventListener("scroll", () => {
    StickyHeader?.classList.toggle('header-fixed', scrollY > 0);
    MobileHeader?.classList.toggle('header-fixed', scrollY > 0);
});


/* Menu Open */
MenuOpen?.addEventListener("click", () => {
    Open = !Open;
    MobileHeader?.classList.toggle('menu-open', Open);
    MobileNav?.classList.toggle('!block', Open);
    ToogleImg?.setAttribute("src", `assets/icons/menu_${Open ? "close" : "bar"}.png`);
});

/* FAQs Accordin */
const Collapse = document.querySelectorAll('.collapse-heading');

Collapse.forEach((Accordin) => {
    Accordin.addEventListener("click", function () {

        // Reverse collapse
        Collapse?.forEach((collapse) => {
            collapse.nextElementSibling?.classList.add('hidden');
            collapse.querySelector('img')?.setAttribute("src", `assets/icons/plus.svg`);
        });

        Accordin.nextElementSibling?.classList.remove('hidden');
        Accordin.querySelector('img')?.setAttribute("src", `assets/icons/minus.svg`);
    });
});

