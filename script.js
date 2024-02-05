
// gsap.from("#random-text-1",{
//     opacity:0,
//     y:"-200%",
//     duration:2
// })
// gsap.from("#random-text-2",{
//     opacity:0,
//     y:"500",
//     duration:2
// })
gsap.timeline(
)
    .from("#lowest", {
        onStart: function () {
            $('#lowest').textillate({
                in: {
                    effect: 'fadeInUp',
                    callback() {
                        $('#lowest').textillate('out');
                    }
                },
                out: { effect: 'fadeOutUp' }
            });
        }
    })
    .from("#second-lowest", {
        opacity: 0,
        delay:0.8,
        onStart: function () {
            $('#second-lowest').textillate({
                in: {
                    effect: 'fadeInUp',
                    callback() {
                        $('#second-lowest').textillate('out');
                    }
                },
                out: { effect: 'fadeOutUp' }
            });
        }
    })
    .from("#second-top", {
        opacity: 0,
        delay:0.8,
        onStart: function () {
            $('#second-top').textillate({
                in: {
                    effect: 'fadeInUp',
                    callback() {
                        $('#second-top').textillate('out');
                    }
                },
                out: { effect: 'fadeOutUp' }
            });
        }
    })
    .from("#top", {
        opacity: 0,
        delay:0.8,
        onStart: function () {
            $('#top').textillate({
                in: {
                    effect: 'fadeInUp',
                },  
            });
        }
    })
    .to("#top-screen",{
        // top:"-100%",
        delay:0.5,
        opacity: 0,
        // duration:1.2,
        // ease:"Power4.easeOut"
    })
    .from("#intro-h1", {
        opacity:0,
        scale:5,
        x:-50
    })













const tl3=gsap.timeline({paused:true});

    tl3.from("#team-topic",{
        opacity:0,
        y:-50,
        scale:0.4
    })
    .from("#team-member-1",{
        opacity:0,
        scale:0.3
    })
    .from("#team-member-2",{
        opacity:0,
        scale:0.3
    })
    .from("#team-member-3",{
        opacity:0,
        scale:0.3
    })
    .from("#team-member-4",{
        opacity:0,
        scale:0.3
    })
    .from("#team-member-5",{
        opacity:0,
        scale:0.3
    })
ScrollTrigger.create({
        trigger:".team-container",
        start:"top 60%",
        end:"bottom top",
        onEnter:()=>tl3.play(),
})
    




var elems=document.querySelectorAll(".elem");
var plan=document.querySelector("#plan");

elems.forEach(function(ele){
    // console.log(ele);
    ele.addEventListener("mouseenter", function(){

        var bgimg=ele.getAttribute("data-img");

        plan.style.background=`linear-gradient(rgba(0, 6, 14, 0.6), rgba(0, 2, 8, 0.6)), url(${bgimg}) center center/cover`;  
        
    })
})















// carousel page code
var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 2000, // Time in milliseconds between slides
        disableOnInteraction: false, // Allow manual interaction to stop autoplay
      },
  });


















// color change code

gsap.utils.toArray(".color").forEach(function(elem) {

    var color = elem.getAttribute('data-color');
    
    ScrollTrigger.create({
      trigger: elem,
      start:'top 50%',
      end:'bottom 20%',
      onEnter: () => gsap.to('body', {backgroundColor:color}), 
      onEnterBack: () => gsap.to('body', {backgroundColor:color})
    });
  
  });


















