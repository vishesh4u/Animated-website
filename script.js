var nav = document.querySelector("nav")

nav.addEventListener("mouseenter",function(){

    var tl = gsap.to("#nav-bottom",{
        height:"25vh",
    });
    tl.to("nav h5",{
        display:"initial"
    })
});

// nav.addEventListener("mouseleave", function () {
//     gsap.to("#nav-bottom", {
//         height: 0,
//         duration: 0.5,
//         ease: "power2.out"
//     });
// });
