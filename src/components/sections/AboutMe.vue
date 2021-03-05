<template>
  <section id="about">
    <div class="container">
      <h2 v-scrollanimation class="section-title">{{ $t("about.me") }}</h2>
      <div class="row about-wrapper">
        <div class="col-md-6 col-sm-12">
          <div
            v-scrollanimation
            class="about-wrapper-image d-flex justify-content-center h-100"
          >
            <img
              class="img-fluid rounded shadow-lg"
              height="auto"
              width="300px"
              src="../../assets/profile_img.jpg"
            />
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div
            v-scrollanimation
            class="about-wrapper-info d-flex justify-content-center flex-column h-100"
          >
            <p class="about-wrapper-info-text">
              {{ $t('about.motivation') }}.
            </p>
            <p class="about-wrapper-info-text">
              {{ $t('about.openminded') }}.
            </p>
            <span class="d-flex mt-3">
              <a class="cta-btn cta-btn-resume" href="#resume"> {{ $t("about.resume") }} </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

section {
    padding: 5rem 0;
}

#about {
  background-color: #bd7ae3;
  background-image: linear-gradient(135deg, #bd7ae3, #8461c9);
  color: #fff;
  height: 100%;
  border-top: 0;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  padding-bottom: 10%;

  .about-wrapper-image {
    align-items: center;
  }

  .about-wrapper-info {

      .about-wrapper-info-text {
          font-size: 1.6rem;
          text-align: left;
      }

      span {

    .cta-btn {
      display: inline-block;
      position: relative;
      padding: 0.8rem 1.6rem;
      font-weight: 700;
      line-height: 1;
      font-size: 1.6rem;
      z-index: 1;
      transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
    }
    .cta-btn-resume {
      color: #fff;
      border: 2px solid #fff;
    }

    a:hover {
        transition: all .3s ease-in-out;
    }

    .cta-btn-resume:hover {
        color: #bd7ae3;
        text-decoration: none;
    }

    .cta-btn:after {
      background: #fff;
    }

    .cta-btn-resume:hover:after {
        width: 100%;
    }

    .cta-btn-resume:after {
      content: "";
      display: block;
      position: absolute;
      width: 0;
      height: 100%;
      left: 0;
      bottom: 0;
      z-index: -1;
      transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    }
         }
  }

  .section-title {
    margin: 0 0 4.5rem;
    font-size: 4rem;
    font-weight: 700;
    text-transform: uppercase;
  }
}

.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}

/** Media queries */

@media (max-width: 75em) {
#about {
    height: 100%;
    -webkit-clip-path: none;
    clip-path: none;

    .about-wrapper-image {
        height: 100%;
    }
}

}

@media (max-width: 56.25em) {
#about {
    .about-wrapper-info-text {
    text-align: left;
}
}
}

@media (max-width: 48em) {
#about {
    .about-wrapper-image {
    padding-bottom: 6.4rem;
}
.about-wrapper-info{
    align-items: center;

    .about-wrapper-info-text {
    text-align: center;
}
}
}
}

@media (max-width: 37.5em){
    section {
        border: none;
    padding-left: 1rem;
    padding-right: 1rem;
    }
#about {
    .section-title {
    font-size: 2.8rem;
}
.about-wrapper {
    padding-bottom: 5rem;
}
}
}

</style>
