<template>
  <div id="hero" class="jumbotron">
    <!-- The canvas which fills our screen on toggle -->
    <canvas id="c"></canvas>
    <!-- My personal logo -->
    <div class="brand">
      <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
        <symbol id="logo" viewBox="0 0 848.48 722.27">
          <path
            d="M296 86.74a4.42 4.42 0 006.14 1c95.45-69.14 181.53-44.61 221.56 8.09 40.81 53.72 41.38 145-52.59 219.71a4.42 4.42 0 00-.74 6.17l22.27 28.83a4.13 4.13 0 005.83.73c51.78-41 84.12-90.87 93.63-144.44 8.84-49.85-2.73-98.94-32.57-138.22C530 29.67 486.4 5.63 436.86.87 383.74-4.24 328 13.27 275.31 51.54a4.45 4.45 0 00-1 6.26zM847.74 448.1c-6.32-74-52.48-139.72-120.47-171.43-36.46-17-77.78-23.38-119.47-18.44a4.21 4.21 0 00-3.44 2.7A218.27 218.27 0 01584 301.24a4.2 4.2 0 004.54 6.36c42-10.25 83.22-7.16 119.73 9.86 53.42 24.91 89.73 76.44 94.63 134.47 5.86 68.63-31 134.23-103.75 184.75-2.22 1.47-72.82 47.13-182.89 16.86a4.21 4.21 0 00-5.14 2.89L501 691.59a4.2 4.2 0 002.9 5.21 323.65 323.65 0 0086.52 12.11c81.38 0 131.4-33.19 134.14-35l.17-.12c44.6-30.94 77.86-67.26 98.86-108 19.17-37.28 27.54-77.97 24.15-117.69z"
          />
          <path
            d="M380.91 385.18a4 4 0 00-5.53-.75L101.27 592.78a4 4 0 01-6.1-4.5l152.92-418.54a3.94 3.94 0 016.83-1.05l356.17 462.78a4 4 0 005.53.72L646 609.56a4 4 0 00.72-5.54l-406-527.58a3.94 3.94 0 00-6.83 1.06L.26 717a3.94 3.94 0 006.09 4.49l396.26-301.24a4 4 0 00.76-5.53z"
          />
        </symbol>
      </svg>
      <svg class="logo-white logo-large">
        <use
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="#logo"
        ></use>
      </svg>
    </div>
    <!-- Hero title and subtitle -->
    <div class="container d-flex flex-column">
      <h1 class="hero-title">
        <span>
          <span class="text-color-main">
            <span class="title">
              <h2 class="text-color-main">Armin Beckmann</h2>
            </span>
          </span>
        </span>
        <span class="intro"
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

        /** We generate a random number that lies between our window and that should´t go over the bounds */
        var winWidth = window.innerWidth / 5;
        var winHeight = window.innerHeight / 5;
        var randomX = getRandomNumber(winWidth, winHeight);
        var randomY = getRandomNumber(winHeight, winWidth);

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

  .brand {
    position: absolute;
    left: 50%;
    z-index: 3;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;

    .logo-white {
      fill: #fff;
    }

    .logo-large {
      height: 45vh;
    }
  }

  .title {
    width: 70%;
    position: relative;
    display: inline-block;
    height: 100%;

    h2 {
      font-size: 6.2rem;
      font-weight: 700;
      -webkit-animation: mainFadeIn 2s forwards;
      -o-animation: mainFadeIn 2s forwards;
      animation: mainFadeIn 2s forwards;
      animation-delay: 3s;
      opacity: 0;

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
    }
  }

  .home-nav {
    z-index: 6;
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
      text-decoration: none;
      mix-blend-mode: difference;

      &:hover {
          color: $fuchsia-light;
      }
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
    z-index: 6;
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

@keyframes mainFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
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
    .brand {
      svg {
        width: 100%;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }
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
