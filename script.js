(function init() {
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

})();

if(window.screen.width < 480){
  let msg = document.querySelector('#message');
  let btn = document.querySelector('#message button');
  msg.style.display = 'flex';
  btn.addEventListener('click',()=>{
    btn.style.backgroundColor = 'green';
    msg.style.opacity = 0;
    setTimeout(() => {
      msg.style.display = 'none';
    }, 1500);
  })


  gsap.to('#second img',{
    scrollTrigger : {
        trigger : '#second',
        scroller : '#main',
        start : 'Top 10%',
        pin: true,
        scrub : true,
    },
    top : '-10%',
    scale : 2,
    opacity: 0,
  })
}else{
  gsap.to('#second img',{
    scrollTrigger : {
        trigger : '#second',
        scroller : '#main',
        start : 'Top 10%',
        pin: true,
        scrub : 2,
    },
    top : '-70%',
    filter: 'blur(1.5px)',
    onUpdate: ()=>{
        let img=document.querySelector("#second img");
        let val=document.querySelector("#second img").getBoundingClientRect().top*0.11;
        console.log(val);
        document.querySelector("#second img").style.transform=`rotate3d(1,1,0,${val}deg)`
      }
})
}

gsap.to('#second #text h1',{
  repeat : -1,
  x : '-100%',
  duration : 4,
  ease : 'linear'
})

gsap.to('#second #text2 h1',{
  repeat : -1,
  x : '-100%',
  duration : 2,
  ease : 'linear'
})

var movingimgdiv = document.querySelectorAll('.himg');
movingimgdiv.forEach(e =>{
  e.addEventListener('mousemove',(me)=>{
    e.children[1].style.opacity = 1;
    e.children[1].style.transform = `translate(-50%,-50%) translateX(${me.pageX*.6}px) rotate(${me.pageX*.05}deg)`;
  })

  e.addEventListener('mouseout',(me)=>{
    e.children[1].style.opacity = 0;
    e.children[1].style.top = '50%';
    e.children[1].style.left = '30%';
    e.children[1].style.transform = 'translate(0,-50%)';
  })
})

var section = document.querySelector('section');
var currentPos = section.getBoundingClientRect().left;

document.querySelector('#home').addEventListener('scroll',()=>{
  let newPos = section.getBoundingClientRect().left;
  let diff = Math.floor((newPos - currentPos)*.11);
  console.log(diff);
  currentPos = newPos;
  document.querySelectorAll(".photu").forEach(e => {
    e.style.transform = ` translate(-50%,-50%) skew(${diff}deg)`;
    setTimeout(() => {
      e.style.transform = ` translate(-50%,-50%) skew(0deg)`;
    }, 200);
  })
})

// document.querySelector("#cross").addEventListener("click", function(){
//   document.querySelector("#fullnav").style.transform = "translateX(0%)"
// });

// document.querySelector("#right i").addEventListener("click", function(){
//   document.querySelector("#fullnav").style.transform = "translateX(100%)"
// });

var text1 = document.querySelectorAll('.effect1');
gsap.set(".effect1", {opacity: 0});

text1.forEach(el =>{
  gsap.to(el,{
    scrollTrigger : {
        trigger : el,
        scroller : '#main',
        start : 'Top 100%',
    },
    opacity : 1,
    onStart : function() {
      $(el).textillate({in: { effect: 'fadeInUp'}});
    }
  })
})

var text2 = document.querySelectorAll('.effect2');
gsap.set(".effect2", {opacity: 0});

text2.forEach(el =>{
  gsap.to(el,{
    scrollTrigger : {
        trigger : el,
        scroller : '#main',
        start : 'Top 100%',
    },
    opacity : 1,
    onStart : function() {
      $(el).textillate({in: { effect: 'fadeInUp', sync : true}});
    }
  })
})

var text3 = document.querySelectorAll('.effect3');
gsap.set(".effect3", {opacity: 0});

text3.forEach(el =>{
  gsap.to(el,{
    scrollTrigger : {
        trigger : el,
        scroller : '#main',
        start : 'Top 100%',
    },
    opacity : 1,
    onStart : function() {
      $(el).textillate({ in: { effect: 'fadeIn', shuffle : true}});
    }
  })
})

var text4 = document.querySelectorAll('.effect4');
gsap.set(".effect4", {opacity: 0});

text4.forEach(el =>{
  gsap.to(el,{
    scrollTrigger : {
        trigger : el,
        scroller : '#main',
        start : 'Top 100%',
    },
    opacity : 1,
    onStart : function() {
      $(el).textillate({in: { effect: 'fadeInRight'}});
    }
  })
})

// console.log(document.documentElement.clientWidth);
// console.log(document.documentElement.clientHeight);
// console.log(window.screen);