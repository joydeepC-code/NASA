gsap.from("#background", {
    duration: 2,
    ease: "expo.inOut",
    scale: 2.5,
    opacity: 0
});


gsap.from("nav h3", {
    duration: 3.5,
    ease: "expo.inOut",
    x: -300
});


gsap.from("nav a", {
    duration: 3.5,
    ease: "expo.inOut",
    x: 300
});

gsap.from("#background h1", {
    duration: 3,
    ease: "expo.inOut",
    opacity: 0,
    y: -100
});

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#content",
        start: "top",
        toggleActions: 'play pause resume reverse'
    }
});

tl2.from('.block', {
    stagger: .3,
    opacity: 0,
    delay: 1,
    duration: 1,
})

.from('.block .img', {
    stagger: .4,
    opacity: 0,
    duration: 1.5,
})

.from('footer p', {
    stagger: .5,
    y: 10,
    opacity: 0,
    duration: 3,
})