<template>
  <div class="about-contact">
    <div id="contact-half" class="half-contact is-contact">
      <div class="giga-text">{{ $t("contact.contact") }}</div>
      <div class="contact-info">
        <h3 class="info-title">{{ $t("contact.contact") }}</h3>
        <div class="inner-container">
          <form
            id="contact-form"
            method="post"
            class="form"
            @submit.prevent="sendEmail"
          >
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
                ref="btnSubmit"
                class="button submit-btn"
                @click="clearForm"
              >
                <span class="button-text">{{ $t("contact.send") }}</span>
                <div class="button-mask"></div>
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
import { init } from "emailjs-com";

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      btnOldHtml: "",
    };
  },
  mounted() {
    init("user_BatA0UzJbm7mv43AnVe6G");
  },
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm("service_unh9x8m", "template_c1dkja8", e.target).then(
        (result) => {
          console.log("SUCCESS!", result.status, result.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    },
    clearForm() {
      this.disableSubmission(this.$refs.btnSubmit);
      setTimeout(() => {
        this.enableSubmission(this.$refs.btnSubmit);
      }, 2000);

      (this.name = ""), (this.email = ""), (this.message = "");
    },
    closeContact() {
      const contactModal = document.querySelector(".about-contact");
      contactModal.classList.remove("isopen");
      const html = document.querySelector("html");
      html.style.overflow = "";
    },
    disableSubmission: function disableSubmission(btn) {
      btn.setAttribute("disabled", "disabled");
      this.btnOldHtml = btn.innerHTML;
      btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Please wait...';
    },
    enableSubmission: function enableSubmission(btn) {
      btn.removeAttribute("disabled");
      btn.innerHTML = this.btnOldHtml;
    },
  },
};
</script>

<style lang="scss" scoped>
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
    z-index: 995;
    transition: visibility 1s, z-index 1s, box-shadow 0.5s ease 0.4s;

    .half-contact {
      opacity: 1 !important;
      -webkit-transform: translateY(0) !important;
      transform: translateY(0) !important;

      .is-about {
           transition-delay: 0s;
      }
      .is-contact {
           transition-delay: .2s;
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
