var tl = new TimelineMax();

function animateGS(){
    tl.to(".zdog-canvas2", 1, {x:-150, ease:Power1.easeOut}, 1);    
    tl.to(".zdog-canvas3", 1, {y:50, ease:Power1.easeOut}, 1);   
}

animateGS();