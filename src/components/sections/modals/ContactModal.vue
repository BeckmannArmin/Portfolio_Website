<template>
  <div class="about-contact">
    <div id="contact-half" class="half-contact is-contact">
      <div class="giga-text">{{ $t("contact.contact") }}</div>
      <div class="contact-info">
        <h3 class="info-title">{{ $t("contact.contact") }}</h3>
        <div class="inner-container">
          <form id="contact-form" class="form" @submit.prevent="sendEmail">
            <div class="input">
              <input
                type="text"
                v-model="name"
                name="name"
                id="name"
                :placeholder="$t('contact.name')"
              />
            </div>
            <div class="input">
              <input
                type="text"
                v-model="email"
                name="email"
                id="email"
                :placeholder="$t('contact.email')"
              />
            </div>
            <div class="input">
              <textarea
                id="message"
                name="message"
                v-model="message"
                :placeholder="$t('contact.message')"
              ></textarea>
            </div>
            <div class="inner-container">
              <button
                type="submit"
                value="Send"
                class="paperplane-button"
                @click="animateAndClearForm"
              >
                <span class="default">{{ $t("contact.send") }}</span>
                <span class="success">
                  <svg viewBox="0 0 16 16">
                    <polyline points="3.75 9 7 12 13 5"></polyline></svg
                  >Sent
                </span>
                <svg class="trails" viewBox="0 0 33 64">
                  <path
                    d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"
                  ></path>
                  <path
                    d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"
                  ></path>
                </svg>
                <div class="plane">
                  <div class="left"></div>
                  <div class="right"></div>
                </div>
              </button>
            </div>
          </form>
        </div>
        <div class="close-contact" @click="closeContact">
          <div class="leftright"></div>
          <div class="rightleft"></div>
        </div>
      </div>
    </div>
    <div class="half-contact is-about">
      <div class="giga-text">{{ $t("about.me") }}</div>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import gsap from "gsap";

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      btnOldHtml: "",
    };
  },
  methods: {
    sendEmail: (e) => {
      emailjs
        .sendForm(
          "service_unh9x8m",
          "template_c1dkja8",
          e.target,
          "user_BatA0UzJbm7mv43AnVe6G"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    },
    animateAndClearForm() {
      const button = document.querySelector(".paperplane-button");

      let getVar = (variable) =>
        getComputedStyle(button).getPropertyValue(variable);

      if (!button.classList.contains("active")) {
        button.classList.add("active");

        gsap.to(button, {
          keyframes: [
            {
              "--left-wing-first-x": 50,
              "--left-wing-first-y": 100,
              "--right-wing-second-x": 50,
              "--right-wing-second-y": 100,
              duration: 0.2,
              onComplete() {
                gsap.set(button, {
                  "--left-wing-first-y": 0,
                  "--left-wing-second-x": 40,
                  "--left-wing-second-y": 100,
                  "--left-wing-third-x": 0,
                  "--left-wing-third-y": 100,
                  "--left-body-third-x": 40,
                  "--right-wing-first-x": 50,
                  "--right-wing-first-y": 0,
                  "--right-wing-second-x": 60,
                  "--right-wing-second-y": 100,
                  "--right-wing-third-x": 100,
                  "--right-wing-third-y": 100,
                  "--right-body-third-x": 60,
                });
              },
            },
            {
              "--left-wing-third-x": 20,
              "--left-wing-third-y": 90,
              "--left-wing-second-y": 90,
              "--left-body-third-y": 90,
              "--right-wing-third-x": 80,
              "--right-wing-third-y": 90,
              "--right-body-third-y": 90,
              "--right-wing-second-y": 90,
              duration: 0.2,
            },
            {
              "--rotate": 50,
              "--left-wing-third-y": 95,
              "--left-wing-third-x": 27,
              "--right-body-third-x": 45,
              "--right-wing-second-x": 45,
              "--right-wing-third-x": 60,
              "--right-wing-third-y": 83,
              duration: 0.25,
            },
            {
              "--rotate": 60,
              "--plane-x": -8,
              "--plane-y": 40,
              duration: 0.2,
            },
            {
              "--rotate": 40,
              "--plane-x": 45,
              "--plane-y": -300,
              "--plane-opacity": 0,
              duration: 0.375,
              onComplete() {
                setTimeout(() => {
                  button.removeAttribute("style");
                  gsap.fromTo(
                    button,
                    {
                      opacity: 0,
                      y: -8,
                    },
                    {
                      opacity: 1,
                      y: 0,
                      clearProps: true,
                      duration: 0.3,
                      onComplete() {
                        button.classList.remove("active");
                      },
                    }
                  );
                }, 1800);
              },
            },
          ],
        });

        gsap.to(button, {
          keyframes: [
            {
              "--text-opacity": 0,
              "--border-radius": 0,
              "--left-wing-background": getVar("--primary-dark"),
              "--right-wing-background": getVar("--primary-dark"),
              duration: 0.11,
            },
            {
              "--left-wing-background": getVar("--primary"),
              "--right-wing-background": getVar("--primary"),
              duration: 0.14,
            },
            {
              "--left-body-background": getVar("--primary-dark"),
              "--right-body-background": getVar("--primary-darkest"),
              duration: 0.25,
              delay: 0.1,
            },
            {
              "--trails-stroke": 171,
              duration: 0.22,
              delay: 0.22,
            },
            {
              "--success-opacity": 1,
              "--success-x": 0,
              duration: 0.2,
              delay: 0.15,
            },
            {
              "--success-stroke": 0,
              duration: 0.15,
            },
          ],
        });
      }
    },
    closeContact() {
      const contactModal = document.querySelector(".about-contact");
      contactModal.classList.remove("isopen");
      const html = document.querySelector("html");
      html.style.overflow = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.paperplane-button {
  --primary: #f6f8ff;
  --primary-dark: #d1d6ee;
  --primary-darkest: #8a91b4;
  --shadow: #{rgba(#000, 0.3)};
  --text: #e91e63;
  --text-opacity: 1;
  --success: #eeecff;
  --success-x: -12;
  --success-stroke: 14;
  --success-opacity: 0;
  --border-radius: 7;
  --overflow: hidden;
  --x: 0;
  --y: 0;
  --rotate: 0;
  --plane-x: 0;
  --plane-y: 0;
  --plane-opacity: 1;
  --trails: #{rgba(#fff, 0.15)};
  --trails-stroke: 57;
  --left-wing-background: var(--primary);
  --left-wing-first-x: 0;
  --left-wing-first-y: 0;
  --left-wing-second-x: 50;
  --left-wing-second-y: 0;
  --left-wing-third-x: 0;
  --left-wing-third-y: 100;
  --left-body-background: var(--primary);
  --left-body-first-x: 50;
  --left-body-first-y: 0;
  --left-body-second-x: 50;
  --left-body-second-y: 100;
  --left-body-third-x: 0;
  --left-body-third-y: 100;
  --right-wing-background: var(--primary);
  --right-wing-first-x: 50;
  --right-wing-first-y: 0;
  --right-wing-second-x: 100;
  --right-wing-second-y: 0;
  --right-wing-third-x: 100;
  --right-wing-third-y: 100;
  --right-body-background: var(--primary);
  --right-body-first-x: 50;
  --right-body-first-y: 0;
  --right-body-second-x: 50;
  --right-body-second-y: 100;
  --right-body-third-x: 100;
  --right-body-third-y: 100;
  display: block;
  cursor: pointer;
  position: relative;
  border: 0;
  padding: 10px 20px;
  min-width: 100px;
  text-align: center;
  margin: 0;
  line-height: 2.4rem;
  font-weight: 600;
  font-size: 1.6rem;
  background: none;
  outline: none;
  color: var(--text);
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  .plane,
  .trails {
    pointer-events: none;
    position: absolute;
  }
  .plane {
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    filter: drop-shadow(0 3px 6px var(--shadow));
    transform: translate(calc(var(--x) * 1px), calc(var(--y) * 1px))
      rotate(calc(var(--rotate) * 1deg)) translateZ(0);
    .left,
    .right {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      opacity: var(--plane-opacity);
      transform: translate(
          calc(var(--plane-x) * 1px),
          calc(var(--plane-y) * 1px)
        )
        translateZ(0);
      &:before,
      &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border-radius: calc(var(--border-radius) * 1px);
        transform: translate(var(--part-x, 0.4%), var(--part-y, 0))
          translateZ(0);
        z-index: var(--z-index, 2);
        background: var(--background, var(--left-wing-background));
        clip-path: polygon(
          calc(var(--first-x, var(--left-wing-first-x)) * 1%)
            calc(var(--first-y, var(--left-wing-first-y)) * 1%),
          calc(var(--second-x, var(--left-wing-second-x)) * 1%)
            calc(var(--second-y, var(--left-wing-second-y)) * 1%),
          calc(var(--third-x, var(--left-wing-third-x)) * 1%)
            calc(var(--third-y, var(--left-wing-third-y)) * 1%)
        );
      }
    }
    .left:after {
      --part-x: 0;
      --z-index: 1;
      --background: var(--left-body-background);
      --first-x: var(--left-body-first-x);
      --first-y: var(--left-body-first-y);
      --second-x: var(--left-body-second-x);
      --second-y: var(--left-body-second-y);
      --third-x: var(--left-body-third-x);
      --third-y: var(--left-body-third-y);
    }
    .right:before {
      --part-x: -0.4%;
      --z-index: 2;
      --background: var(--right-wing-background);
      --first-x: var(--right-wing-first-x);
      --first-y: var(--right-wing-first-y);
      --second-x: var(--right-wing-second-x);
      --second-y: var(--right-wing-second-y);
      --third-x: var(--right-wing-third-x);
      --third-y: var(--right-wing-third-y);
    }
    .right:after {
      --part-x: 0;
      --z-index: 1;
      --background: var(--right-body-background);
      --first-x: var(--right-body-first-x);
      --first-y: var(--right-body-first-y);
      --second-x: var(--right-body-second-x);
      --second-y: var(--right-body-second-y);
      --third-x: var(--right-body-third-x);
      --third-y: var(--right-body-third-y);
    }
  }
  .trails {
    display: block;
    width: 33px;
    height: 64px;
    top: -4px;
    left: 16px;
    fill: none;
    stroke: var(--trails);
    stroke-linecap: round;
    stroke-width: 2;
    stroke-dasharray: 57px;
    stroke-dashoffset: calc(var(--trails-stroke) * 1px);
    transform: rotate(68deg) translateZ(0);
  }
  span {
    display: block;
    position: relative;
    z-index: 4;
    opacity: var(--text-opacity);
    &.success {
      z-index: 0;
      position: absolute;
      left: 0;
      right: 0;
      top: 8px;
      transform: translateX(calc(var(--success-x) * 1px)) translateZ(0);
      opacity: var(--success-opacity);
      color: var(--success);
      svg {
        display: inline-block;
        vertical-align: top;
        width: 16px;
        height: 16px;
        margin: 4px 8px 0 0;
        fill: none;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 14px;
        stroke: var(--success);
        stroke-dashoffset: calc(var(--success-stroke) * 1px);
      }
    }
  }
}

.about-contact {
  position: absolute;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 90%;
  z-index: 9999;
  position: fixed;
  background-color: transparent;
  overflow: hidden;
  visibility: hidden;
  transition: visibility 1s, z-index 1s, box-shadow 0.3s;

  &.isopen {
    visibility: visible;
    box-shadow: 0 20px 80px 0 rgba(0, 0, 0, 0.55);
    transition: visibility 1s, z-index 1s, box-shadow 0.5s ease 0.4s;

    .half-contact {
      opacity: 1 !important;
      -webkit-transform: translateY(0) !important;
      transform: translateY(0) !important;

      .is-about {
        transition-delay: 0s;
      }
      .is-contact {
        transition-delay: 0.2s;
      }
    }
  }

  .giga-text {
    font-size: 190px;
    position: absolute;
    opacity: 0.07;
    z-index: 0;
  }

  .half-contact {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    width: 50%;
    height: 100%;
    overflow: hidden;

    .contact-info {
      position: absolute;
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      top: 17%;
      text-align: left;
      width: 70%;
      margin: 0 auto;

      .close-contact {
        position: absolute;
        display: block;
        padding: 12px;
        top: -55px;
        right: -5px;
        cursor: pointer;
        color: #fff;
        width: 65px;
        height: 65px;
        transition: all 0.3s ease;
        z-index: 10;

        &:hover {
          .leftright {
            transform: rotate(-45deg);
            background-color: $fuchsia;
          }

          .rightleft {
            transform: rotate(45deg);
            background-color: $fuchsia;
          }
        }

        .leftright {
          height: 4px;
          width: 50px;
          position: absolute;
          margin-top: 24px;
          background-color: $fuchsia_light;
          border-radius: 2px;
          transform: rotate(45deg);
          transition: all 0.3s ease-in;
        }

        .rightleft {
          height: 4px;
          width: 50px;
          position: absolute;
          margin-top: 24px;
          background-color: $fuchsia_light;
          border-radius: 2px;
          transform: rotate(-45deg);
          transition: all 0.3s ease-in;
        }
      }

      .info-title {
        font-size: 2.6rem;
        font-weight: bold;
      }
    }

    &.is-about {
      transition-delay: 0.2s;
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
      background-color: hsla(0, 0%, 95%, 0.97);
      transition: opacity 0.3s,
        -webkit-transform 0.5s cubic-bezier(0.694, 0.048, 0.335, 1);
      transition: transform 0.5s cubic-bezier(0.694, 0.048, 0.335, 1),
        opacity 0.3s;
      transition: transform 0.5s cubic-bezier(0.694, 0.048, 0.335, 1),
        opacity 0.3s,
        -webkit-transform 0.5s cubic-bezier(0.694, 0.048, 0.335, 1);
      z-index: 60;

      .giga-text {
        top: -10px;
        left: 100px;
        color: #4a4a4a;
      }
    }

    &.is-contact {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
      background-color: rgba(28, 29, 37, 0.985);
      left: auto;
      right: 0;
      transition: opacity 0.3s,
        -webkit-transform 0.45s cubic-bezier(0.694, 0.048, 0.335, 1);
      transition: transform 0.45s cubic-bezier(0.694, 0.048, 0.335, 1),
        opacity 0.3s;
      transition: transform 0.45s cubic-bezier(0.694, 0.048, 0.335, 1),
        opacity 0.3s,
        -webkit-transform 0.45s cubic-bezier(0.694, 0.048, 0.335, 1);
      z-index: 59;

      .contact-info {
        color: $white;

        .inner-container {
          width: 100%;
          position: relative;

          .form {
            padding: 20px 0 0;
            width: 100%;
            position: relative;
            .input {
              margin-bottom: 33px;
              width: 100%;
              position: relative;

              &:hover {
                &::before,
                &::after {
                  width: 101%;
                }
              }

              &::before,
              &::after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 2px;
                transition: width 0.45s cubic-bezier(0.694, 0.048, 0.335, 1);
              }

              &::before {
                background: #26408b;
                transition-delay: 0.1s;
                z-index: 10;
              }

              &::after {
                background: #f06449;
                z-index: 9;
              }

              textarea {
                width: 100%;
                border: 0;
                border-bottom: 2px solid silver;
                padding: 8px 5px;
                font-size: 1.5rem;
                background: transparent;
                color: silver;
                transition: border-color 0.25s;
                height: auto;
                min-height: 100px;
                margin: 0;

                &:focus {
                  outline: none;
                  border-color: #26408b;
                }
              }

              input {
                display: block;
                width: 100%;
                border: 0;
                border-bottom: 2px solid silver;
                padding: 8px 5px;
                font-size: 1.5rem;
                border-radius: 0;
                background: transparent;
                color: silver;
                transition: border-color 0.25s;

                &:focus {
                  outline: none;
                  border-color: #26408b;
                }
              }
            }

            /*
            .button {
              font-size: 2rem;
              letter-spacing: 3px;
              padding: 12px 20px;
              background-color: #f06449;
              background: linear-gradient(270deg, #f06449, #ef3636);
              color: $white;
              position: relative;
              transition: all 0.3s;
              display: inline-block;
              text-align: center;
              vertical-align: middle;

              &.submit-btn {
                cursor: pointer;
                text-decoration: none;
                border: 0;
                border-radius: 4px;
              }

              &:hover {
                .button-mask {
                  &::before,
                  &::after {
                    -webkit-transform: translateX(200%);
                    transform: translateX(200%);
                  }
                }
              }

              .button-mask::after,
              .button-mask::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                -webkit-transform: translateX(-110%);
                transform: translateX(-110%);
              }

              .button-mask {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;

                &::after {
                  width: 80%;
                  background-color: #26408b;
                  background: linear-gradient(270deg, #235aa6, #213777);
                  transition: -webkit-transform 0.6s
                    cubic-bezier(0.694, 0.048, 0.335, 1);
                  transition: transform 0.6s
                    cubic-bezier(0.694, 0.048, 0.335, 1);
                  transition: transform 0.6s
                      cubic-bezier(0.694, 0.048, 0.335, 1),
                    -webkit-transform 0.6s cubic-bezier(0.694, 0.048, 0.335, 1);
                  z-index: 2;
                }

                &::before {
                  width: 100%;
                  background-color: #1b2e63;
                  background: linear-gradient(270deg, #235aa6, #101b3b);
                  transition: -webkit-transform 0.6s
                    cubic-bezier(0.694, 0.048, 0.335, 1) 0.05s;
                  transition: transform 0.6s
                    cubic-bezier(0.694, 0.048, 0.335, 1) 0.05s;
                  transition: transform 0.6s
                      cubic-bezier(0.694, 0.048, 0.335, 1) 0.05s,
                    -webkit-transform 0.6s cubic-bezier(0.694, 0.048, 0.335, 1) 0.05s;
                  z-index: 1;
                }
              }

              .button-text {
                position: relative;
                z-index: 3;
              }
            }
*/
          }
        }
      }

      .giga-text {
        bottom: -30px;
        right: -200px;
        color: #fff;
        opacity: 0.03;
      }
    }
  }
}

@media only screen and (min-width: 75em) {
  .about-contact {
    width: 1170px;
  }
}

@media only screen and (max-width: 64em) {
  .about-contact {
    width: 95%;
  }
}

@media only screen and (max-width: 53.125em) {
  .about-contact {
    width: 100%;
    height: 100%;
    overflow-y: auto;

    .half-contact {
      position: relative;
      top: auto;
      left: auto;
      float: left;
      width: 100%;
      height: auto;
      padding: 40px 0;
      &.is-about,
      &.is-contact {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
      }

      .contact-info {
        position: absolute;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        position: relative;
        top: auto;
        left: auto;
        -webkit-transform: none;
        transform: none;
        -webkit-transform-style: initial;
        transform-style: flat;
      }
    }

    &.isopen {
      .half-contact {
        transition-delay: 0s !important;
        opacity: 1 !important;
        -webkit-transform: translateX(0) !important;
        transform: translateX(0) !important;

        &.is-contact {
          right: auto;
          padding-top: 80px;

        }
      }
    }
  }
}

@media only screen and (max-width: 28.75em) {
  .about-contact .half-contact .contact-info {
    width: 85%;
  }
}
</style>
