<template>
  <div id="hero" class="jumbotron">
    <div class="container">
      <h1
        class="hero-title revealOnLoad"
    
      >
        Hi, {{ $t('hero.introduction.name')}} <span class="text-color-main"> Armin </span><br />{{ $t('hero.introduction.frontend')}}.
      </h1>
      <p
        class="d-flex revealOnLoad"
      
        style="
          visibility: visible;
          opacity: 1;
          transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          transition: opacity 1s cubic-bezier(0.5, 0, 0, 1) 1s,
            transform 1s cubic-bezier(0.5, 0, 0, 1) 1s;
        "
      >
        <a class="cta-btn cta-btn--hero" href="#about">Know more </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
   
}
</script>

<style lang="scss" scoped>
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
          opacity: 1;
           transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          transition: opacity 1s cubic-bezier(0.5, 0, 0, 1) 0.5s,
            transform 1s cubic-bezier(0.5, 0, 0, 1) 0.5s;
      }
      .fadeInLeft {
             visibility: visible;
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
    transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .cta-btn--hero {
    background-image: linear-gradient(135deg, #BD7AE3, #8461C9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;

    color: #BD7AE3;
    -webkit-text-fill-color: #BD7AE3;
    border: 2px solid transparent;
    border-image: linear-gradient(135deg, #BD7AE3, #8461C9);
    border-image-slice: 1;
  }

  .hero-title {
    font-size: 5.6rem;
    font-weight: 700;
    margin-bottom: 3.2rem;
    text-align: left;

    .text-color-main {
      background-image: linear-gradient(135deg, #BD7AE3, #8461C9);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
    }
  }
}
</style>