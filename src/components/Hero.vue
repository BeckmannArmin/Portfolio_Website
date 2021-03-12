<template>
  <div id="hero" class="jumbotron">
    <div class="container d-flex flex-column align-items-center">
      <h1 class="hero-title">
        <span data-aos="fade-in">
          Hi, {{ $t("hero.introduction.name") }}
          <span data-text="Nimra" class="span-name text-color-main">
            <span class="title">
              <span class="block"></span>
              <h2 class="text-color-main">Armin</h2>
            </span>
          </span>
        </span>
        <span class="intro" data-aos="fade-in">{{
          $t("hero.introduction.frontend")
        }}</span>
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


<style lang="scss" scoped>
#master.stage-0 {
  transform: translateX(0);
  color: $black;
}
#master.stage-1 #hero,
#master.stage-2 #hero {
  transform: translateX(105vw);
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
    width: 25%;
    position: relative;
    display: flex;
    align-items: center;
    height: 5rem;

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
      font-size: 5.6rem;
      font-weight: 700;
      -webkit-animation: mainFadeIn 2s forwards;
      -o-animation: mainFadeIn 2s forwards;
      animation: mainFadeIn 2s forwards;
      animation-delay: 1.6s;
      opacity: 0;
      display: flex;
      align-items: baseline;
      position: relative;

      &.text-color-main {
        background: $hero-title-gradient;
        -webkit-background-clip: text;
        background-clip: text;

        -webkit-text-fill-color: transparent;
        color: transparent;

        background: -moz-linear-gradient(
          135deg,
          $salmon,
          $salmon_light
        ); /* FF3.6+ */

        background: -webkit-gradient(
          135deg,
          $salmon,
          $salmon_light
        ); /* Chrome,Safari4+ */

        background: -webkit-linear-gradient(
          135deg,
          $salmon,
          $salmon_light
        ); /* Chrome10+,Safari5.1+ */

        background: -o-linear-gradient(
          135deg,
          $salmon,
          $salmon_light
        ); /* Opera 11.10+ */

        background: -ms-linear-gradient(
          135deg,
          $salmon,
          $salmon_light
        ); /* IE10+ */
      }

      &::after {
        content: ".";
        width: 0px;
        height: 0px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;

        background: $frog-green;
        -webkit-animation: load 0.6s cubic-bezier(0.74, 0.06, 0.4, 0.92)
          forwards;
        animation: popIn 0.8s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
        animation-delay: 2s;
        margin-left: 5px;
        margin-top: -10px;
        position: absolute;
        bottom: 13px;
        right: -12px;
      }
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

  .home-nav {
    a {
      margin: 0 1rem;
      font-size: 1.6rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: $white;
    }

    b {
      font-size: 1.4rem;
      color: $salmon;
      font-weight: 900;
    }
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
    color: $salmon;
  }

  a:hover {
    transition: all 0.2s ease-in-out;
  }

  .cta-btn-hero:hover {
    color: $salmon;
    text-decoration: none;
  }

  .hero-title {
    font-size: 5.6rem;
    font-weight: 700;
    margin-bottom: 3.2rem;
    text-align: left;
    .intro:after {
      content: ".";
      color: $frog-green;
    }
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

      .span-name {
        font-size: 4rem;
      }

      .title {
        width: 100%;
        h2 {
          font-size: 4rem;
        }
      }
    }
  }
}

@media (max-width: 56.25em) {
  #hero {
    .hero-title {
      font-size: 3.6rem;
      text-align: center;

      .title {
        justify-content: center;
        h2 {
          font-size: 3.6rem;
        }
      }
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

      .title {
        h2 {
          font-size: 3.5rem;
        }
      }
    }

    .home-nav {
      a {
        font-size: 1.2rem;
        margin: 0;
        letter-spacing: 0;
        padding: 1rem;
      }
    }
  }
  .span-name {
    font-size: 3.5rem;
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
    }
  }
  .span-name {
    font-size: 2.8rem;
  }
}
</style>
