const openNav = document.querySelector(".open-nav");
const closeNav = document.querySelector(".close-nav");
const openLineOne = document.querySelector(".open-nav .line-1");
const openLineTwo = document.querySelector(".open-nav .line-2");
const openLineThree = document.querySelector(".open-nav .line-3");
const closeLineOne = document.querySelector(".close-nav .line-1");
const closeLineTwo = document.querySelector(".close-nav .line-2");
const coverLeft = document.querySelector(".overlay-cover .block-left");
const coverRight = document.querySelector(".overlay-cover .block-right");
const menuBar = document.querySelectorAll(".menu");

const menu = document.querySelectorAll(".menu ul li");

const tlOpenNav = new TimelineMax({ paused: true, reversed: true });

tlOpenNav
    .to(
        openLineOne,
        0.3,
        {
            x: 100,
            ease: Expo.easeInOut
        },
        0.1
    )
    .to(
        openLineTwo,
        0.3,
        {
            x: 100,
            ease: Expo.easeInOut
        },
        0
    )
    .to(openLineThree, 0.3, { x: 100, ease: Expo.easeInOut }, 0.1)
    .to(coverLeft, 0.5, { left: "0%" })
    .to(coverRight, 0.5, { left: "50%" }, "-=0.5")
    .to(closeNav, 0.01, { display: "flex" }, "-=0.3")
    .to(menuBar, 0.3, { display: "block" }, "-=0.01")
    .staggerFrom(menu, 0.3, { opacity: 0, x: 20 }, 0.03)
    .from(
        closeLineOne,
        0.35,
        {
            transformOrigin: "50% 50%",
            x: "100px",
            y: "100px",
            opacity: 0,
            ease: Expo.easeInOut
        },
        0.7
    )
    .from(
        closeLineTwo,
        0.35,
        {
            transformOrigin: "50% 50%",
            x: "-100px",
            y: "100px",
            opacity: 0,
            ease: Expo.easeInOut
        },
        0.85
    )
    .to(closeLineOne, 0.3, { rotation: 0 })
    .to(closeLineTwo, 0.3, { rotation: 0 }, "-=0.3")
    .to(closeNav, 0.3, { rotation: 360 })
    .to(closeLineOne, 0.3, { rotation: 45 })
    .to(closeLineTwo, 0.3, { rotation: -45 }, "-=0.3");

openNav.addEventListener("click", () => {
    if (tlOpenNav.reversed()) {
        tlOpenNav.play();
    }
});
closeNav.addEventListener("click", () => {
    tlOpenNav.reverse();
});
