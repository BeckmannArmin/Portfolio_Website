<template>
  <section id="projects">
    <div class="container">
      <div v-scrollanimation class="mb-4">
        <h2 class="section-title salmon-text">{{ $t("projects.projects") }}</h2>
        <!-- Whitebird -->
        <div class="row justify-content-center">
          <div class="col-lg-4 col-sm-12">
            <div class="text-left">
              <h3 class="project-title">Whitebird</h3>
              <div>
                <p class="mb-4"><span class="text-color-main">Whitebird</span> {{ $t('projects.whitebird') }}</p>
              </div>

              <a
                target="_blank"
                href="https://github.com/BuchholzTim/Whitebird"
                class="cta-btn cta-btn-projects"
              >
                {{ $t("projects.see") }}
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
              <div class="m-auto" style="width: 90%">
                  <img class="img-fluid" style="height: 200px" src="../../assets/whitebird_logo.svg">
              </div>
          </div>
        </div>
        <!-- conForm -->
         <div class="row justify-content-center">
          <div class="col-lg-4 col-sm-12">
            <div class="text-left">
              <h3 class="project-title">conForm</h3>
              <div>
                <p class="mb-4"><span class="text-color-main">conForm</span> {{ $t('projects.conForm') }}.</p>
              </div>

              <a
                target="_blank"
                href="https://github.com/BuchholzTim/Whitebird"
                class="cta-btn cta-btn-projects"
              >
                {{ $t("projects.see") }}
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
              <div class="m-auto" style="width: 90%">
                  <img class="img-fluid" style="height: 200px" src="../../assets/conForm_logo.png">
              </div>
          </div>
        </div>

        <!-- Holy Spot -->
          <div class="row justify-content-center">
          <div class="col-lg-4 col-sm-12">
            <div class="text-left">
              <h3 class="project-title">conForm</h3>
              <div>
                <p class="mb-4"><span class="text-color-main">conForm</span> {{ $t('projects.conForm') }}.</p>
              </div>

              <a
                target="_blank"
                href="https://github.com/BuchholzTim/Whitebird"
                class="cta-btn cta-btn-projects"
              >
                {{ $t("projects.see") }}
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
              <div class="m-auto" style="width: 90%">
                  <img class="img-fluid" style="height: 200px" src="../../assets/conForm_logo.png">
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#projects {
  background-color: #fff;
  color: #272341;
  margin-top: -10rem;
  padding-top: 15rem;

  .row {
    margin-bottom: 8rem;
  }

  .text-color-main {
      background-image: linear-gradient(135deg, #BD7AE3, #8461C9);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
      font-weight: 700;
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
  .cta-btn-projects {
    color: #bd7ae3;
    border: 2px solid #bd7ae3;
  }

  a:hover {
    transition: all 0.3s ease-in-out;
  }

  .cta-btn-projects:hover {
    color: #fff;
    text-decoration: none;
  }

  .cta-btn:after {
    background: #bd7ae3;
  }

  .cta-btn-projects:hover:after {
    width: 100%;
  }

  .cta-btn-projects:after {
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

  .project-title {
    font-weight: 700;
    margin-bottom: 1.8rem;
    font-size: 2.5rem;
  }

  .section-title {
    margin: 0 0 4.5rem;
    font-size: 4rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .salmon-text {
    color: #3f3356;
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
}
</style>