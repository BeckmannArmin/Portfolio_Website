<template>
  <section id="contact">
    <div class="container">
      <h2 data-aos="fade-in" class="section-title">
        {{ $t("contact.contact") }}
      </h2>

      <!-- The container that holds the form -->
      <div data-aos="fade-in" class="d-flex justify-content-center">
        <div class="screen">
          <!-- MACOS screen header -->
          <div class="screen-header">
            <div class="screen-header-left">
              <div class="screen-header-button closee"></div>
              <div class="screen-header-button maximize"></div>
              <div class="screen-header-button minimize"></div>
            </div>
            <div class="screen-header-right">
              <div class="screen-header-ellipsis"></div>
              <div class="screen-header-ellipsis"></div>
              <div class="screen-header-ellipsis"></div>
            </div>
          </div>
          <div class="screen-body">
            <div class="screen-body-item">
              <div class="app-form">
                <div class="app-form-group">
                  <input
                    type="text"
                    class="app-form-control"
                    :placeholder="$t('contact.name')"
                    v-model="user.name"
                  />
                </div>
                <div class="app-form-group">
                  <input
                    type="email"
                    class="app-form-control"
                    :placeholder="$t('contact.email')"
                    v-model="user.email"
                  />
                </div>
                <div class="app-form-group message">
                  <input
                    type="text"
                    class="app-form-control"
                    :placeholder="$t('contact.message')"
                    v-model="user.message"
                  />
                </div>
                <div class="app-form-group buttons">
                  <button
                    class="app-form-button btn-cancel mr-3"
                    @click="handleCancel"
                  >
                    {{ $t("contact.cancel") }}
                  </button>
                  <button
                    class="app-form-button btn-submit"
                    @click="handleSubmit"
                    ref="btnSubmit"
                  >
                    {{ $t("contact.send") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        number: "",
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

.screen {
  position: relative;
  background: $screen-bg;
  border-radius: 15px;
  width: 515px;
}

.screen:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 20px;
  right: 20px;
  bottom: 0;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  z-index: -1;
}

.screen-header {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: $screen-header;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.screen-header-left {
  margin-right: auto;
}

.screen-header-button {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 3px;
  border-radius: 8px;
  background: $white;
}

.screen-header-button.closee {
  background: $screen-close-btn;
}

.screen-header-button.maximize {
  background: $screen-maxi-btn;
}

.screen-header-button.minimize {
  background: $screen-mini-btn;
}

.screen-header-right {
  display: flex;
}

.screen-header-ellipsis {
  width: 3px;
  height: 3px;
  margin-left: 2px;
  border-radius: 8px;
  background: #999;
}

.screen-body {
  display: flex;
}

.screen-body-item {
  flex: 1;
  padding: 50px;
}

.screen-body-item.left {
  display: flex;
  flex-direction: column;
}

.app-contact {
  margin-top: auto;
  font-size: 8px;
  color: #888;
}

.app-form-group {
  margin-bottom: 15px;
}

.app-form-group.message {
  margin-top: 40px;
}

.app-form-group.buttons {
  margin-bottom: 0;
  text-align: right;
}

.app-form-control {
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  color: $neutral-grey;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
  transition: border-color 0.2s;
}

.app-form-control::placeholder {
  color: #666;
}

.app-form-control:focus {
  border-bottom-color: $fuchsia;
}

.app-form-button {
  font-size: 12px;
  cursor: pointer;
  outline: none;
}

.app-form-button.btn-cancel {
  color: $fuchsia;
  border: none;
  background: none;
}

.app-form-button.btn-submit {
  color: #fff;
  background: $fuchsia;
  border: 1px solid $fuchsia;
  padding: 10px;
  border-radius: 10px;

  i {
    color: #fff;
  }
}

.app-form-button.btn-cancel:hover {
  color: rgba($color: $fuchsia, $alpha: 0.5);
}

#contact {
  background-image: $contact-bg-gradient;
  -webkit-clip-path: $clip-path-polygon;
  clip-path: $clip-path-polygon;
  padding: 15rem 0 10rem;
  margin-top: -10rem;
  margin-bottom: -1px;
  color: $white;
  .container {
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
  }

  &:after {
    background-image: $contact-bg-gradient-reversed;
    -webkit-clip-path: $clip-path-polygon;
    clip-path: $clip-path-polygon;
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
  #contact {
    padding: 10rem 0;
    clip-path: none;
    margin-top: 0;
    -webkit-clip-path: none;
  }
}

@media (max-width: 37.5em) {
  #contact .container .section-title {
    font-size: 2.8rem;
    .app-form-group.buttons {
        padding: 1rem;
    }
  }
}

@media only screen and (max-width: 800px) {
.screen {
    width: 95%;
}
}
</style>
