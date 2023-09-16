let lastScroll = 0;
window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll) {
        document.querySelector(".navbar").style.top = "-120px"
    }
    else {
        document.querySelector(".navbar").style.top = "0"
    }
    lastScroll = currentScroll
});

// gsap.from(".navbar", {
//     y: -150,
//     duration: 0.5
// })

gsap.from("h1", {
    onStart: function () {
        $('h1').textillate({
            in: { effect: 'flip' }
        });
    }
})