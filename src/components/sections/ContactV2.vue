<template>
  <section id="contact">
    <div class="wrapper">
      <div class="form-wrapper">
        <h2
          data-aos="fade-in"
          class="section-title"
        >
          {{ $t("contact.contact") }}
        </h2>
        <form data-aos="fade-down-right" class="contact-form validate-form">
          <div  class="input-wrapper validate-form">
            <input
              class="input"
              type="text"
              name="name"
              :placeholder="$t('contact.name')"
            />
            <span class="focus-input"></span>
          </div>
          <div class="input-wrapper validate-form">
            <input
              class="input"
              type="text"
              name="email"
              :placeholder="$t('contact.email')"
            />
            <span class="focus-input"></span>
          </div>
          <div class="input-wrapper validate-form">
            <textarea
              class="input"
              name="message"
              :placeholder="$t('contact.message')"
              style="margin-top: 0px; margin-bottom: 0px; height: 169px"
            ></textarea>
            <span class="focus-input"></span>
          </div>
          <div class="btn-wrapper">
            <button class="btn-submit" ref="btnSubmit" @click="handleSubmit">
              {{ $t("contact.send") }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        message: "",
      },
      btnOldHtml: "",
    };
  },
  methods: {
    handleSubmit() {
      this.disableSubmission(this.$refs.btnSubmit);
      setTimeout(() => {
        this.enableSubmission(this.$refs.btnSubmit);
      }, 2000);
      this.user = {};
    },
    handleCancel() {
      this.user = {};
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
.dark {
  #contact {
    background: $bg-dark;
    .wrapper {
      background-image: $contact-bg-gradient-dark;

      .form-wrapper {
        .section-title {
          color: $section-title-dark;
          &:after {
            color: $fuchsia;
          }
        }
      }
    }
  }
}

#contact {
  background: $white;
  .wrapper {
    width: 100%;
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-top: 10rem;
    position: relative;
    background-image: $contact-bg-gradient;
    -webkit-clip-path: $clip-path-polygon;
    clip-path: $clip-path-polygon;

    .form-wrapper {
      width: 550px;
      background: transparent;
      padding: 50px 0px 160px 0px;

      .section-title {
        margin: 0 0 4.5rem;
        font-size: 4rem;
        font-weight: 700;
        text-transform: uppercase;

        &::after {
          content: ".";
          color: $frog-green;
        }
      }

      .contact-form {
        width: 100%;

        .input-wrapper {
          width: 100%;
          background-color: #fff;
          border-radius: 31px;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;

          textarea {
            outline: none;
            border: none;
            overflow: auto;
            resize: vertical;
            &.input {
              min-height: 169px;
              padding: 19px 35px 0 35px;
            }
          }

          input {
            outline: none;
            border: none;
            &.input {
              height: 62px;
              padding: 0 35px 0 35px;
            }
          }

          .input {
            position: relative;
            display: block;
            width: 100%;
            background: #fff;
            border-radius: 31px;
            font-size: 1.8rem;
            color: #8f8fa1;
            line-height: 1.2;
          }

          .focus-input {
            display: block;
            position: absolute;
            z-index: -1;
            width: 100%;
            height: 100%;
            top: 0;
            left: 50%;
            -webkit-transform: translateX(-50%);
            -moz-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            -o-transform: translateX(-50%);
            transform: translateX(-50%);
            border-radius: 31px;
            background-color: #fff;
            pointer-events: none;
            -webkit-transition: all 0.4s;
            -o-transition: all 0.4s;
            -moz-transition: all 0.4s;
            transition: all 0.4s;
          }
        }

        .btn-wrapper {
          display: -webkit-box;
          display: -webkit-flex;
          display: -moz-box;
          display: -ms-flexbox;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          padding-top: 10px;

          .btn-submit {
            color: #fff;
            background: $fuchsia;
            border: 1px solid $fuchsia;
            font-weight: 700;
            font-size: 1.6rem;
            padding: 10px;
            border-radius: 32px;
            width: 100%;

            i {
              color: #fff;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 75em) {
  #contact {
    .wrapper {
      clip-path: none;
      margin-top: 0;
      -webkit-clip-path: none;
    }
  }
}

@media (max-width: 56.25em) {
  #contact {
    .wrapper {
      .form-wrapper {
        width: 95% !important;
      }
    }
  }
}
</style>
