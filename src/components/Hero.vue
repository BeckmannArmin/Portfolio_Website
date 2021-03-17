<template>
  <div id="hero" class="jumbotron">
    <canvas id="c"></canvas>
    <div class="container d-flex flex-column">
      <h1 class="hero-title">
        <span data-aos="fade-in">
          <span class="text-color-main">
            <span class="title">
              <span class="block"></span>
              <h2 class="text-color-main">Armin Beckmann</h2>
            </span>
          </span>
        </span>
        <span class="intro" data-aos="fade-in"
          >{{ $t("hero.introduction.frontend") }}
          <button id="rippleBtn" type="button" class="ripple-btn"></button>
        </span>
      </h1>
      <div class="d-inline-block home-nav">
        <a class="cta-btn cta-btn-hero" href="#experience">{{
          $t("experience.resume")
        }}</a>
        <b>/</b>
        <a class="cta-btn cta-btn-hero" href="#projects">{{
          $t("projects.projects")
        }}</a>
        <b>/</b>
        <a class="cta-btn cta-btn-hero" href="#contact">{{
          $t("contact.contact")
        }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
export default {
  mounted() {
    this.animateCanvas();
  },
  methods: {
    animateCanvas() {
      /**
       * Source: https://codepen.io/alexzaworski/pen/mEkvAG
       * Credits to: Alex Zaworski
       * */
      var c = document.getElementById("c");
      var ctx = c.getContext("2d");
      var cH;
      var cW;
      var bgColor = "#181818";
      var animations = [];

      var colorPicker = (function () {
        var colors = ["#181818", "#FFBE53", "#2980B9", "#282741"];
        var index = 0;
        function next() {
          index = index++ < colors.length - 1 ? index : 0;
          return colors[index];
        }
        function current() {
          return colors[index];
        }
        return {
          next: next,
          current: current,
        };
      })();

      function removeAnimation(animation) {
        var index = animations.indexOf(animation);
        if (index > -1) animations.splice(index, 1);
      }

      function calcPageFillRadius(x, y) {
        var l = Math.max(x - 0, cW - x);
        var h = Math.max(y - 0, cH - y);
        return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
      }

      /** We add an event listener to our rippleBtn instead of our whole hero section */
      function addClickListeners() {
        //document.addEventListener("touchstart", handleEvent);
        //document.addEventListener("mousedown", handleEvent);
        const rippleBtn = document.querySelector("#rippleBtn");
        rippleBtn.addEventListener("click", handleEvent);
      }

      function handleEvent(e) {
        if (e.touches) {
          e.preventDefault();
          e = e.touches[0];
        }

        /** We generate a random number that lies between our window and that should´t go voer the bounds */
        var winWidth = window.innerWidth;
        var winHeight = window.innerHeight;
        var randomX = getRandomNumber(0, winHeight);
        var randomY = getRandomNumber(0, winWidth);

        const rippleBtn = document.querySelector("#rippleBtn");
        rippleBtn.style.transform = `translateX(${randomX}px) translateY(${randomY}px)`;

        var currentColor = colorPicker.current();
        var nextColor = colorPicker.next();
        var targetR = calcPageFillRadius(e.pageX, e.pageY);
        var rippleSize = Math.min(200, cW * 0.4);
        var minCoverDuration = 750;

        var pageFill = new Circle({
          x: e.pageX,
          y: e.pageY,
          r: 0,
          fill: nextColor,
        });
        var fillAnimation = anime({
          targets: pageFill,
          r: targetR,
          duration: Math.max(targetR / 2, minCoverDuration),
          easing: "easeOutQuart",
          complete: function () {
            bgColor = pageFill.fill;
            removeAnimation(fillAnimation);
          },
        });

        var ripple = new Circle({
          x: e.pageX,
          y: e.pageY,
          r: 0,
          fill: currentColor,
          stroke: {
            width: 3,
            color: currentColor,
          },
          opacity: 1,
        });
        var rippleAnimation = anime({
          targets: ripple,
          r: rippleSize,
          opacity: 0,
          easing: "easeOutExpo",
          duration: 900,
          complete: removeAnimation,
        });

        var particles = [];
        for (var i = 0; i < 32; i++) {
          var particle = new Circle({
            x: e.pageX,
            y: e.pageY,
            fill: currentColor,
            r: anime.random(24, 48),
          });
          particles.push(particle);
        }
        var particlesAnimation = anime({
          targets: particles,
          x: function (particle) {
            return particle.x + anime.random(rippleSize, -rippleSize);
          },
          y: function (particle) {
            return (
              particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15)
            );
          },
          r: 0,
          easing: "easeOutExpo",
          duration: anime.random(1000, 1300),
          complete: removeAnimation,
        });
        animations.push(fillAnimation, rippleAnimation, particlesAnimation);
      }

      function extend(a, b) {
        for (var key in b) {
          // eslint-disable-next-line no-prototype-builtins
          if (b.hasOwnProperty(key)) {
            a[key] = b[key];
          }
        }
        return a;
      }

      var Circle = function (opts) {
        extend(this, opts);
      };

      Circle.prototype.draw = function () {
        ctx.globalAlpha = this.opacity || 1;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        if (this.stroke) {
          ctx.strokeStyle = this.stroke.color;
          ctx.lineWidth = this.stroke.width;
          ctx.stroke();
        }
        if (this.fill) {
          ctx.fillStyle = this.fill;
          ctx.fill();
        }
        ctx.closePath();
        ctx.globalAlpha = 1;
      };

      anime({
        duration: Infinity,
        update: function () {
          ctx.fillStyle = bgColor;
          ctx.fillRect(0, 0, cW, cH);
          animations.forEach(function (anim) {
            anim.animatables.forEach(function (animatable) {
              animatable.target.draw();
            });
          });
        },
      });

      var resizeCanvas = function () {
        cW = window.innerWidth;
        cH = window.innerHeight;
        c.width = cW * devicePixelRatio;
        c.height = cH * devicePixelRatio;
        ctx.scale(devicePixelRatio, devicePixelRatio);
      };

      (function init() {
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        addClickListeners();
        handleInactiveUser();
      })();

      function handleInactiveUser() {
        var inactive = setTimeout(function () {
          fauxClick(cW / 2, cH / 2);
        }, 2000);

        function clearInactiveTimeout() {
          clearTimeout(inactive);
          document.removeEventListener("mousedown", clearInactiveTimeout);
          document.removeEventListener("touchstart", clearInactiveTimeout);
        }

        document.addEventListener("mousedown", clearInactiveTimeout);
        document.addEventListener("touchstart", clearInactiveTimeout);
      }

      function fauxClick(x, y) {
        var fauxClick = new Event("mousedown");
        fauxClick.pageX = x;
        fauxClick.pageY = y;
        document.dispatchEvent(fauxClick);
      }

      function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/**
#master.stage-0 {
  transform: translateX(0);
  color: $black;
}
#master.stage-1 #hero,
#master.stage-2 #hero {
  transform: translateX(105vw);
}
*/

canvas {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

#hero {
  /** disable transformations */
  position: relative !important;
  transform: none !important;

  min-height: 100vh;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 0;
  background: $white;
  font-weight: 400;
  color: $white;
  padding: 0 5.6rem;
  margin-bottom: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  background: $hero-bg-gradient;
  transition: transform 1s cubic-bezier(1, 0, 0, 1);

  .title {
    width: 70%;
    position: relative;
    display: inline-block;
    height: 100%;

    .block {
      width: 0%;
      height: inherit;
      background: $frog-green;
      position: absolute;
      animation: mainBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
      display: flex;
      border-radius: 4px;
    }

    h2 {
      font-size: 6.2rem;
      font-weight: 700;
      -webkit-animation: mainFadeIn 2s forwards;
      -o-animation: mainFadeIn 2s forwards;
      animation: mainFadeIn 2s forwards;
      animation-delay: 1.6s;
      opacity: 0;
      mix-blend-mode: difference;

      &.text-color-main {
        background: $hero-title-gradient;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;

        background: -moz-linear-gradient(
          135deg,
          $fuchsia,
          $fuchsia_light
        ); /* FF3.6+ */

        background: -webkit-gradient(
          135deg,
          $fuchsia,
          $fuchsia_light
        ); /* Chrome,Safari4+ */

        background: -webkit-linear-gradient(
          135deg,
          $fuchsia,
          $fuchsia_light
        ); /* Chrome10+,Safari5.1+ */

        background: -o-linear-gradient(
          135deg,
          $fuchsia,
          $fuchsia_light
        ); /* Opera 11.10+ */

        background: -ms-linear-gradient(
          135deg,
          $fuchsia,
          $fuchsia_light
        ); /* IE10+ */
      }

      /**
      &::after {
        content: ".";
        width: 0px;
        height: 0px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        transform: scale(2);
        background: $frog-green;
        -webkit-animation: load 0.6s cubic-bezier(0.74, 0.06, 0.4, 0.92)
          forwards;
        animation: popIn 0.8s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
        animation-delay: 2s;
        position: absolute;
        right: -15px;
      }
       */
    }
  }

  .home-nav {
    > a:first-of-type {
      margin-left: 0;
    }
    a {
      margin: 0 1rem;
      font-size: 1.6rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: $white;
      mix-blend-mode: difference;
    }

    b {
      font-size: 1.4rem;
      color: $fuchsia;
      font-weight: 900;
      mix-blend-mode: difference;
    }
  }

  .hero-title {
    display: flex;
    flex-flow: column;
    font-size: 5.6rem;
    font-weight: 700;
    margin-bottom: 3.2rem;
    text-align: left;
    mix-blend-mode: difference;
    .intro {
      font-size: 3rem;
      display: inline-block;
      .ripple-btn {
        width: 15px;
        height: 15px;
        mix-blend-mode: difference;
        border-radius: 50%;
        display: inline-flex;
        border: none;

        &::before {
          position: relative;
          content: "";
          top: 2px;
          right: 4px;
          border: 5px solid #fff;
          border-radius: 50%;
          animation: animate 2s linear infinite;
        }
      }
    }
  }
}

@keyframes animate {
  100% {
    transform: scale(4);
    opacity: 0;
  }
}

@keyframes mainBlock {
  0% {
    width: 0%;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes secBlock {
  0% {
    width: 0%;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes mainFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes popIn {
  0% {
    width: 0px;
    height: 0px;
    background: $frog-green;
    border: 0px solid #ddd;
    opacity: 0;
  }
  50% {
    width: 10px;
    height: 10px;
    background: $frog-green;
    opacity: 1;
    bottom: 45px;
  }
  65% {
    width: 7px;
    height: 7px;
    bottom: 0px;
    width: 15px;
  }
  80% {
    width: 10px;
    height: 10px;
    bottom: 20px;
  }
  100% {
    width: 7px;
    height: 7px;
    background: $frog-green;
    border: 0px solid #222;
    bottom: 13px;
  }
}

/** Media queries */
@media (max-width: 75em) {
  #hero {
    .hero-title {
      font-size: 4rem;

      .title {
        width: 100%;
        h2 {
          font-size: 5rem;
        }
      }
    }
  }
}

@media (max-width: 56.25em) {
  #hero {
    .hero-title {
      font-size: 3.6rem;

      .title {
        h2 {
          font-size: 4rem;
        }
      }
    }
  }
}
@media (max-width: 37.5em) {
  #hero {
    padding: 0 1.6rem;
    .hero-title {
      font-size: 3.5rem;
      line-height: 1.5;

      .title {
        h2 {
          font-size: 3.5rem;
        }
      }

      .intro {
          font-size: 2.5rem;
      }
    }

    .home-nav {
      a {
        font-size: 1.2rem;
        margin: 0;
        letter-spacing: 0;
        padding: 0.75rem;
      }
    }
  }
}

@media (max-width: 20em) {
  #hero {
    .hero-title {
      font-size: 2.8rem;
      .title {
        h2 {
          font-size: 2.8rem;
        }
      }
      .intro {
          font-size: 2rem;
      }
    }
  }
}
</style>
