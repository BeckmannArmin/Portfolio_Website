<template>
  <div id="hero" class="jumbotron">
    <div class="container">
      <h1 class="hero-title">
        <span class="revealOnLoad delay-1" style="opacity: 0">
          Hi, {{ $t("hero.introduction.name") }}
          <span
            data-text="Nimra"
            class="span-name text-color-main glitch glitch--v1"
          >
            Armin
          </span></span
        ><br /><span class="revealOnLoad delay-2" style="opacity: 0"
          >{{ $t("hero.introduction.frontend") }}.</span
        >
      </h1>
      <p class="d-flex revealOnLoad delay-2" style="opacity: 0">
        <a class="cta-btn cta-btn-hero" href="#about">{{
          $t("about.knowmore")
        }}</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    setInterval(() => {
      document.querySelector(".glitch").classList.toggle("glitch--v1");
      setTimeout(() => {
        document.querySelector(".glitch").classList.toggle("glitch--v2");
      }, 100);
    }, 5000);
  },
};
</script>

<style lang="scss" scoped>
$shades_of_pink: #e91e63;
$salmon: #FF647C;

#master.stage-0 {
      transform: translateX(0);
      color: #000;
}

#master.stage-1 #hero, #master.stage-2 #hero {
    transform: translateX(105vw);
}

#hero {
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 0;
  background: #fff;
  font-weight: 400;
  color: #fff;
  padding: 0 5.6rem;
  margin-bottom: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  background: radial-gradient(#252525,#181818);
  transition: transform 1s cubic-bezier(1,0,0,1);


  .glitch {
    position: relative;
    font-size: 5.6rem;
    &--v1 {
      &:before {
        -webkit-animation: glitch--v2 2.2s linear;
        animation: glitch--v2 2.2s linear;
        animation-iteration-count: infinite;
        animation-delay: 0.115s;
      }
      &:after {
        -webkit-animation: glitch-anim-1 2s linear;
        animation: glitch-anim-1 2s linear;
        animation-iteration-count: infinite;
        animation-delay: 0.055s;
      }
    }
    &--v2 {
      &:before {
        -webkit-animation: glitch-anim-1 1.4s ease;
        animation: glitch-anim-2 1.4s ease;
        animation-iteration-count: infinite;
        animation-delay: 0.315s;
      }
      &:after {
        -webkit-animation: glitch--v2 1.2s linear;
        animation: glitch--v2 1.2s linear;
        animation-iteration-count: infinite;
        animation-delay: 0.55s;
      }
    }
    &:after,
    &:before {
      font-size: 5.6rem;
      content: attr(data-text);
      position: absolute;
      top: 0;
      width: 100%;
      background: #000;
      clip: rect(0, 0, 0, 0);
    }
    &:before {
      left: -2px;
      text-shadow: 3px 0 rgba(252, 77, 122, 0.75);
    }
    &:after {
      left: 2px;
      text-shadow: -3px 0 #272341;
    }
  }

  /** In order to make this work we have to give the rect large enough values to grow*/
  @keyframes glitch--v2 {
    0% {
      clip: rect(9px, 9999px, 11px, 0);
    }

    15% {
      clip: rect(11px, 9999px, 38px, 0);
    }

    30% {
      clip: rect(1px, 9999px, 26px, 0);
    }

    50% {
      clip: rect(0, 0, 0, 0);
    }

    70% {
      clip: rect(23px, 9999px, 36px, 0);
    }

    80% {
      clip: rect(0, 0, 0, 0);
    }
    100% {
      clip: rect(9px, 9999px, 11px, 0);
    }
  }

  @keyframes glitch-anim-1 {
    0% {
      top: 4px;
      left: 3px;
      clip: rect(36px, 9999px, 44px, 0);
    }

    20% {
      clip: rect(42px, 9999px, 147px, 0);
    }

    40% {
      clip: rect(4px, 9999px, 100px, 0);
    }

    60% {
      clip: rect(71px, 9999px, 108px, 0);
    }

    80% {
      clip: rect(90px, 9999px, 140px, 0);
    }

    100% {
      top: 1px;
      left: 0;
      clip: rect(128px, 9999px, 78px, 0);
    }
  }

  .container {
    .animated {
      opacity: 1 !important;
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      transition: opacity 1s cubic-bezier(0.5, 0, 0, 1) 0.5s,
        transform 1s cubic-bezier(0.5, 0, 0, 1) 0.5s;
    }
    .fadeInLeft {
      visibility: visible;
    }
    .delay-1 {
      transition-delay: 1s;
    }

    .delay-2 {
      transition-delay: 1.5s;
    }
  }

  .hero-cta a {
    font-size: 2.4rem;
  }

  .cta-btn {
    display: inline-block;
    position: relative;
    padding: 0.8rem 1.6rem;
    font-weight: 700;
    line-height: 1;
    font-size: 1.6rem;
    z-index: 1;
    transition: all 0.2s ease-in;
  }

  .cta-btn-hero {
    color: $shades_of_pink;
    border: 2px solid $shades_of_pink;
  }

  a:hover {
    transition: all 0.2s ease-in-out;
  }

  .cta-btn-hero:hover {
    color: #fff;
    text-decoration: none;
  }

  .cta-btn:after {
    background: $shades_of_pink;
  }

  .cta-btn-hero:hover:after {
    width: 100%;
  }

  .cta-btn-hero:after {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
    transition: all 0.1s ease-in;
  }

  .hero-title {
    font-size: 5.6rem;
    font-weight: 700;
    margin-bottom: 3.2rem;
    text-align: left;

    .text-color-main {
      background-image: linear-gradient(135deg, $shades_of_pink, $salmon);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
    }
  }
}

/** Media queries */
@media (max-width: 75em) {
  #hero .hero-title {
    font-size: 4rem;

    .span-name {
      font-size: 4rem;
    }
  }
}

@media (max-width: 56.25em) {
  #hero {
    .hero-title {
      font-size: 3.6rem;
      text-align: center;
    }

    .span-name {
      font-size: 3.6rem;
    }
    p {
      justify-content: center;
    }
  }
}
@media (max-width: 37.5em) {
  #hero {
      padding: 0 1.6rem;
      .hero-title {
    font-size: 3.5rem;
    line-height: 1.5;
  }
  }
  .span-name {
    font-size: 3.5rem;
  }
}

@media (max-width: 20em) {
  #hero .hero-title {
    font-size: 2.8rem;
  }
  .span-name {
    font-size: 2.8rem;
  }
}
</style>
