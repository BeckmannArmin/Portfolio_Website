<template>
  <div id="hero" class="jumbotron">
    <div class="container">
      <h1
        class="hero-title"
      >
        <span class="revealOnLoad delay-1" style="opacity: 0"> Hi, {{ $t('hero.introduction.name')}} <span class="text-color-main"> Armin </span></span><br /><span class="revealOnLoad delay-2" style="opacity: 0">{{ $t('hero.introduction.frontend')}}.</span>
      </h1>
      <p
        class="d-flex revealOnLoad delay-2"
        style="opacity: 0"
      >
        <a class="cta-btn cta-btn-hero" href="#about">{{ $t('about.knowmore') }}</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$english-violet: #BD7AE3;

#hero {
  min-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  border-bottom: 0;
  background: #fff;
  font-weight: 400;
  color: #272341;
  padding: 0 5.6rem;
  margin-bottom: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;

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
    z-index: 1;
    transition: all 0.2s ease-in;
  }

  .cta-btn-hero {
    color: $english-violet;
    border: 2px solid $english-violet;
  }

  a:hover {
    transition: all 0.2s ease-in-out;
  }

  .cta-btn-hero:hover {
    color: #fff;
    text-decoration: none;
  }

  .cta-btn:after {
    background: $english-violet;
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
      background-image: linear-gradient(135deg, $english-violet, #8461C9);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
    }
  }
}
</style>
