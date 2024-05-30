import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    x: 700,
    rotate: 360,
    duration: 3,
    scrollTrigger: {
        trigger: ".square",
        start: "top 80%",
        end: "top 30%",
        toggleActions: "restart none none none",
        scrub: 2,
        //              onEnter onLeave onEnterBack onLeaveBack
        markers: true,
        toggleClass: "red"
    }
})


