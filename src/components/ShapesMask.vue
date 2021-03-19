<template>
  <div id="shapes">
    <!-- Lower B -->
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
      <symbol id="upperB" viewBox="0 0 848.48 722.27">
        <path
          d="M296,86.74a4.42,4.42,0,0,0,6.14,1c95.45-69.14,181.53-44.61,221.56,8.09,40.81,53.72,41.38,145-52.59,219.71a4.42,4.42,0,0,0-.74,6.17l22.27,28.83a4.13,4.13,0,0,0,5.83.73c51.78-41,84.12-90.87,93.63-144.44,8.84-49.85-2.73-98.94-32.57-138.22C530,29.67,486.4,5.63,436.86.87,383.74-4.24,328,13.27,275.31,51.54a4.45,4.45,0,0,0-1,6.26Z"
        />
      </symbol>
    </svg>

     <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
      <symbol id="completeA" viewBox="0 0 848.48 722.27">
        <path
            d="M296 86.74a4.42 4.42 0 006.14 1c95.45-69.14 181.53-44.61 221.56 8.09 40.81 53.72 41.38 145-52.59 219.71a4.42 4.42 0 00-.74 6.17l22.27 28.83a4.13 4.13 0 005.83.73c51.78-41 84.12-90.87 93.63-144.44 8.84-49.85-2.73-98.94-32.57-138.22C530 29.67 486.4 5.63 436.86.87 383.74-4.24 328 13.27 275.31 51.54a4.45 4.45 0 00-1 6.26zM847.74 448.1c-6.32-74-52.48-139.72-120.47-171.43-36.46-17-77.78-23.38-119.47-18.44a4.21 4.21 0 00-3.44 2.7A218.27 218.27 0 01584 301.24a4.2 4.2 0 004.54 6.36c42-10.25 83.22-7.16 119.73 9.86 53.42 24.91 89.73 76.44 94.63 134.47 5.86 68.63-31 134.23-103.75 184.75-2.22 1.47-72.82 47.13-182.89 16.86a4.21 4.21 0 00-5.14 2.89L501 691.59a4.2 4.2 0 002.9 5.21 323.65 323.65 0 0086.52 12.11c81.38 0 131.4-33.19 134.14-35l.17-.12c44.6-30.94 77.86-67.26 98.86-108 19.17-37.28 27.54-77.97 24.15-117.69z"
          />
      </symbol>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
      <symbol id="completeB" viewBox="0 0 848.48 722.27">
        <path
            d="M380.91 385.18a4 4 0 00-5.53-.75L101.27 592.78a4 4 0 01-6.1-4.5l152.92-418.54a3.94 3.94 0 016.83-1.05l356.17 462.78a4 4 0 005.53.72L646 609.56a4 4 0 00.72-5.54l-406-527.58a3.94 3.94 0 00-6.83 1.06L.26 717a3.94 3.94 0 006.09 4.49l396.26-301.24a4 4 0 00.76-5.53z"
          />
      </symbol>
    </svg>



    <svg width="70px" height="70px" class="layer a1">
      <use
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xlink:href="#completeA"
      ></use>
    </svg>

    <svg width="55px" height="35px" class="layer a2">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#upper"></use>
    </svg>

    <svg width="45px" height="40px" class="layer a3">
      <use
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xlink:href="#completeA"
      ></use>
    </svg>

    <svg width="62px" height="62px" class="layer a4">
      <use
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xlink:href="#upperB"
      ></use>
    </svg>

    <svg width="68px" height="68px" class="layer a5">
      <use
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xlink:href="#upperB"
      ></use>
    </svg>

    <svg width="77px" height="72px" class="layer a6">
      <use
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xlink:href="#completeB"
      ></use>
    </svg>

    <svg width="83px" height="79px" class="layer a7">
      <use
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xlink:href="#upperB"
      ></use>
    </svg>

    <svg width="89px" height="88px" class="layer a8">
      <use
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xlink:href="#completeB"
      ></use>
    </svg>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  mounted() {
    (function () {
      const safeToAnimate = window.matchMedia(
        "(prefers-reduced-motion: no-preference)"
      ).matches;
      if (!safeToAnimate) return;

      // Get the elements that we need
      const dom = {
        a1: document.querySelector(".a1"),
        a2: document.querySelectorAll(".a2"),
        a3: document.querySelector(".a3"),
        a4: document.querySelector(".a4"),
        a5: document.querySelector(".a5"),
        a6: document.querySelectorAll(".a6"),
        a7: document.querySelector(".a7"),
        a8: document.querySelector(".a8"),
      };

      let xPosition;
      let yPosition;

      let storedXPosition;
      let storedYPosition;

      // Set up our coordinate mapping with GSAP utils!
      let mapWidth;
      let mapHeight;
      function setMaps() {
        mapWidth = gsap.utils.mapRange(0, innerWidth, -50, 50);
        mapHeight = gsap.utils.mapRange(0, innerHeight, -50, 50);
      }
      window.addEventListener("resize", setMaps);
      setMaps();

      function moveSVG() {
        // only recalculating if the value changes
        if (storedXPosition === xPosition && storedYPosition === yPosition)
          return;
        var x = xPosition;
        var y = yPosition;

        gsap.to(dom.a7, {
          yPercent: y / 30,
          xPercent: x / 30,
        });
        gsap.to(dom.a2, {
          yPercent: y / 3,
          xPercent: x / 2,
        });
        gsap.to(dom.a3, {
          yPercent: y / 6,
          xPercent: x / 6,
        });
        gsap.to(dom.a4, {
          yPercent: y * 1.2,
          xPercent: x / 3,
        });
        gsap.to(dom.a5, {
          yPercent: (y / 3) * -1,
          xPercent: (x / 3) * -1,
        });
        gsap.to(dom.a6, {
          yPercent: (y / 1.5) * -1,
          xPercent: (x / 10) * -1,
        });
        gsap.to([dom.a1, dom.a8], {
          yPercent: y * 1.3,
          xPercent: x * 1.3,
        });

        // update the stored positions with the current positions
        storedXPosition = xPosition;
        storedYPosition = yPosition;
      }
      // gsap's RAF, falls back to set timeout
      gsap.ticker.add(moveSVG);

      // updating the mouse coordinates
      function updateMouseCoords(event) {
        xPosition = mapWidth(event.clientX);
        yPosition = mapHeight(event.clientY);
      }
      window.addEventListener("mousemove", updateMouseCoords);
    })();
  },
};
</script>


<style lang="scss" scoped>
#shapes {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: opacity 0.25s ease 0.65s;

  .a1 {
    left: 30%;
    top: 20%;
    fill: $fuchsia;
  }

  .a2 {
    left: 32%;
    top: 70%;
    fill: $frog-green;
    -webkit-transform: rotate(12deg);
    transform: rotate(12deg);
  }

  .a3 {
    right: 15%;
    bottom: 75%;
    fill: $fuchsia_light;
    transform: scale(-1,1);
    -webkit-transform: scale(-1,1);
  }

  .a4 {
    left: 2%;
    top: 20%;
    fill: $blue;
    -webkit-transform: rotate(34deg);
    transform: rotate(34deg);
  }

  .a5 {
    left: 50%;
    top: 6%;
    fill: $frog-green-light;
  }

  .a6 {
    left: 85%;
    bottom: 4%;
    fill: $blue;
    -webkit-transform: rotate(-122deg);
    transform: rotate(122deg);
  }

  .a7 {
    left: 53%;
    bottom: 2%;
    -webkit-transform: rotate(85deg);
    transform: rotate(85deg);
    fill: fuchsia_light;
  }

  .a8 {
    left: 5%;
    top: 80%;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    fill: $light-blue;
  }

  .layer {
    position: absolute;
    z-index: 3;
  }
}

@media only screen and (min-width: 64em) {
  #shapes {
    opacity: 0;
    transition: opacity 0.45s ease 0.65s;

    &.loaded {
      opacity: 1;
    }
  }
}
</style>
