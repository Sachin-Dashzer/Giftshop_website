
gsap.to('nav', {

    y: 100,
    duration: 1,
    opacity: 1
})


const tl = gsap.timeline();

tl.from(" header section h1" , {
    x : -200,
    duration:1,
    delay:1,
    opacity:0
})
tl.from(" header section h2" , {
    x : -200,
    duration:1,
    opacity:0
})
tl.from("header section p" , {
    x : -200,
    duration:0.8,
    opacity:0
})
tl.from("header section button" , {
    x : -200,
    duration:0.6,
    opacity:0
})



gsap.from("#about", {

    y: 200,
    opacity: 0,
    duration: 1.5,

    scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        // markers:true,
        // start:"top 50%",
        // end:"top 30%",

    }


})



// gsap.from(".lol", {

//     y: 200,
//     opacity: 0,
//     duration: 1.5,

//     scrollTrigger: {
//         trigger: ".lol",
//         scroller: "body",
//         // markers:true,
//         // start:"top 50%",
//         // end:"top 30%",

//     }


// })


gsap.from("#shop", {

    y: 100,
    opacity: 0,
    duration: 1.5,

    scrollTrigger: {
        trigger: "#shop",
        scroller: "body",
        // markers:true,
        // start:"top 50%",
        // end:"top 30%",

    }


})

gsap.from(".box1", {

    x: 200,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".box1",
        scroller: "body",
        // markers:true,
        // start:"top 50%",
        // end:"top 30%",

    }
})
// gsap.from(".box", {

//     x: 200,
//     opacity: 0,
//     duration: 1.5,
//     scrollTrigger: {
//         trigger: ".box",
//         scroller: "body",
//         // markers:true,
//         // start:"top 50%",
//         // end:"top 30%",

//     }
// })

// gsap.from("footer", {

//     y: 200,
//     opacity: 0,
//     duration: 1.5,
//     scrollTrigger: {
//         trigger: "footer",
//         scroller: "body",
//         // markers:true,
//         // start:"top 50%",
//         // end:"top 30%",

//     }
// })