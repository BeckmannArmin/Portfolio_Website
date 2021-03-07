<template>
  <section id="projects">
    <div class="container">
      <div class="project-wrapper">
        <h2 v-scrollanimation class="section-title salmon-text">
          {{ $t("projects.projects") }}
        </h2>
        <!-- Whitebird -->
        <div v-scrollanimation class="row justify-content-center">
          <div class="col-lg-4 col-sm-12">
            <div class="project-wrapper-text">
              <h3 class="project-title">Whitebird</h3>
              <div>
                <p class="mb-4">
                  <span class="text-color-main">Whitebird</span>
                  {{ $t("projects.whitebird") }}.
                </p>
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
            <!--  Animated Whitebird card -->
            <div class="row justify-content-center">
              <div class="animated-card-wrapper">
                <a
                  href="https://github.com/BuchholzTim/Whitebird"
                  target="_blank"
                  class="animated-card-link"
                >
                  <div
                    class="animated-card-content animated-card-content-left d-flex justify-content-center"
                  >
                    <img
                      class="img-fluid"
                      src="../../assets/whitebird_logo.svg"
                    />
                  </div>
                  <div
                    class="animated-card-content animated-card-content-right d-flex justify-content-center"
                    aria-hidden="true"
                  >
                    <img
                      class="img-fluid"
                      src="../../assets/whitebird_logo.svg"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Hly -->
        <div v-scrollanimation class="row justify-content-center">
          <div class="col-lg-4 col-sm-12">
            <div class="project-wrapper-text">
              <h3 class="project-title">HLY Hard Seltzer</h3>
              <div>
                <p class="mb-4">
                  <span class="text-color-main">HLY </span>
                  {{ $t("projects.hly") }}.
                </p>
              </div>

              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=bZbDIigXlNc"
                class="cta-btn cta-btn-projects"
              >
                {{ $t("projects.see") }}
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <!--  Animated Hly card -->
            <div class="row justify-content-center">
              <div class="animated-card-wrapper">
                <a
                  href="https://www.youtube.com/watch?v=bZbDIigXlNc"
                  target="_blank"
                  class="animated-card-link"
                >
                  <div
                    class="animated-card-content animated-card-content-left d-flex justify-content-center"
                  >
                    <img class="img-fluid" src="../../assets/hly_logo.png" />
                  </div>
                  <div
                    class="animated-card-content animated-card-content-right d-flex justify-content-center"
                    aria-hidden="true"
                  >
                    <img class="img-fluid" src="../../assets/hly_logo.png" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Holy Spot -->
        <div v-scrollanimation class="row justify-content-center">
          <div class="col-lg-4 col-sm-12">
            <div class="project-wrapper-text">
              <h3 class="project-title">conForm</h3>
              <div>
                <p class="mb-4">
                  <span class="text-color-main">conForm</span>
                  {{ $t("projects.conForm") }}.
                </p>
              </div>

              <a
                target="_blank"
                href="https://github.com/BeckmannArmin/conForm"
                class="cta-btn cta-btn-projects"
              >
                {{ $t("projects.see") }}
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="row justify-content-center">
              <div class="animated-card-wrapper">
                <a
                  href="https://github.com/BeckmannArmin/conForm"
                  target="_blank"
                  class="animated-card-link"
                >
                  <div
                    class="animated-card-content animated-card-content-left d-flex justify-content-center"
                  >
                    <img
                      class="img-fluid"
                      src="../../assets/conForm_logo.png"
                    />
                  </div>
                  <div
                    class="animated-card-content animated-card-content-right d-flex justify-content-center"
                    aria-hidden="true"
                  >
                    <img
                      class="img-fluid"
                      src="../../assets/conForm_logo.png"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.animated-card-wrapper {
  cursor: pointer;
  position: relative;
  perspective: 1000px;
  animation-name: animateIn;
  animation-duration: 0.35s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
}

.animated-card-wrapper:before {
  content: "";
  position: absolute;
  top: calc(8px * -2);
  left: calc(8px * -2);
  border: 2px dashed #fff;
  background-image: repeating-linear-gradient(
    -24deg,
    transparent,
    transparent 4px,
    rgba(255, 255, 255, 0.5) 0,
    rgba(255, 255, 255, 0.5) 5px
  );
  z-index: -1;
}

.animated-card-wrapper,
.animated-card-wrapper:before {
  width: 250px;
  height: 250px;
}

.animated-card-link {
  background-color: #5c55ba;
  border: 2px solid #fff;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 22px;
}

.animated-card-link:after {
  content: "";
  position: absolute;
  top: 50%;
  right: calc(8px * 3);
  width: calc(8px * 2);
  height: calc(8px * 2);
  margin-top: calc(8px * -1);
  clip-path: polygon(75% 0, 100% 50%, 75% 100%, 0 100%, 25% 50%, 0 0);
  -webkit-clip-path: polygon(75% 0, 100% 50%, 75% 100%, 0 100%, 25% 50%, 0 0);
  background-color: #fff;
  opacity: 0;
  transition: opacity 0.5s ease-in, transform 0.3s ease-in-out 0ms;
}

.animated-card-content {
  background-color: #fff;
  position: absolute;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: calc(8px * 2);
  border: 2px solid rgba(0, 0, 0, 0.125);
  border-radius: 22px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.125);

  img {
    height: 150px;
  }
}

.animated-card-content-left {
  clip-path: polygon(0 0, 51% 0, 51% 100%, 0 100%);
  -webkit-clip-path: polygon(0 0, 51% 0, 51% 100%, 0 100%);
}

.animated-card-content-right {
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
  -webkit-clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
  transition: transform 0.5s ease-in-out, background-color 0.4s ease-in-out;
}

.animated-card-link:hover .animated-card-content-right {
  background-color: #f5f5f5;
  transform: rotateY(-50deg);
}

.animated-card-link:hover:after {
  opacity: 1;
  transform: translateX(calc(8px * 1.5));
  transition: opacity 0.5s ease-in, transform 0.3s ease-in-out 0.25s;
}

section {
  padding: 5rem 0;
}

p,
a {
  font-size: 1.6rem;
}

#projects {
  background-color: #fff;
  color: #272341;
  margin-top: -10rem;
  padding-top: 15rem;

  .project-wrapper {
    margin-bottom: 10rem;

    .project-wrapper-text {
      text-align: left;
    }
  }

  .row {
    margin-bottom: 8rem;
  }

  .text-color-main {
    background-image: linear-gradient(135deg, #bd7ae3, #8461c9);
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
    transition: all 0.2s ease-in;
  }
  .cta-btn-projects {
    color: #bd7ae3;
    border: 2px solid #bd7ae3;
  }

  a:hover {
    transition: all 0.2s ease-in-out;
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
    transition: all 0.1s ease-in;
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
    transition: all 1s ease-out;
  }

  .enter {
    opacity: 1;
    transform: translateY(0px);
  }
}

/** Media queries */
@media (max-width: 75em) {
  #projects {
    margin-top: 0;
    padding-top: 5rem;

    .project-wrapper-text {
      margin-bottom: 4.8rem;
    }
  }
}

@media (max-width: 37.5em) {
  section {
    border: none;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  #projects {
    .project-wrapper {
      margin-bottom: 0;

      .row {
        margin-bottom: 4rem;
      }

      .project-wrapper-text {
        margin-bottom: 2.5rem !important;
        .project-title {
          font-size: 2rem;
        }

        .cta-btn-projects {
    background-image: none;
    border: 2px solid #bd7ae3;
    -webkit-text-fill-color: #bd7ae3;
        }
      }
    }
    .section-title {
      font-size: 2.8rem;
    }
  }
}
</style>
