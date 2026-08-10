function navAnimation(){
    var nav = document.querySelector("nav")

nav.addEventListener("mouseenter",function(){
    var tl = gsap.timeline()

    tl.to("#nav-bottom",{
        height:"21vh"
    });
    tl.to(".nav-elem h5",{
        display:"block"
    })
    tl.from(".nav-part2 h5 span",{
        y:0,
        // duration:0.5,
        stagger:{
            amount:0.6
        }
    })
});
nav.addEventListener("mouseleave",function(){
    let tl = gsap.timeline()
    tl.to(".nav-part2 h5 span",{
        y:25,
        // duration:0.5,
        stagger:{
            amount:0.2
        }
    })
    tl.to(".nav-part2 h5",{
        display:"none",
        duration:0.1
      })  
        tl.to("#nav-bottom",{
            height:0,
            duration:0.2
        })
});
}

navAnimation()

//for learning
// nav.addEventListener("mouseleave", function () {
//     gsap.to("#nav-bottom", {
//         height: 0,
//         duration: 0.5,
//         ease: "power2.out"
//     });
// });

var rightElems = document.querySelectorAll(".right-elem")

rightElems.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
       gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:1
        })
    })
    elem.addEventListener("mouseleave", function(){
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0
        })
    })
    elem.addEventListener("mousemove",function(){
        console.log(elem.getBoundingClientRect().y)
    })
})
