
gsap.from('nav', {
    y : -100,
    opacity: 0,
    duration: 1,
})


const tl = gsap.timeline();

tl.from(" header section h1" , {
    x : -200,
    duration:1,
    stagger : 0.5,
    opacity:0
})
tl.from(" header section h2" , {
    x : -200,
    duration:0.8,
    opacity:0
})
tl.from("header section p" , {
    x : -200,
    duration:0.6,
    opacity:0
})
tl.from("header section button" , {
    x : -200,
    duration:0.4,
    opacity:0
})



gsap.from("#about", {

    y: 50,
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



gsap.from("#shop", {

    y: 50,
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

    x: 100,
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



let menu = document.querySelector("#menubar");
let menuBtn = document.querySelector("#menubutton");

let ans = false;


menuBtn.addEventListener("click" , function(){

    ans = !ans;


    if(ans == true){

    gsap.to(menu , {
        right : 0,
        opacity : 1,
        duration : 1,
        

    })}

    else{
        gsap.to(menu , {
            right : "-23%",
            opacity : 0,
            duration : 1,
            
    
        })
    
    }

});
