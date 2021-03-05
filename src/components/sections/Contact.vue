<template>
  <section id="contact">
    <div class="container">
      <h2 v-scrollanimation class="section-title">{{ $t("contact.contact") }}</h2>

      <!-- The container that holds the form -->
      <div v-scrollanimation class="container" style="width: 650px">
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
                <div class="app-form-group">
                  <input
                    type="number"
                    class="app-form-control"
                    :placeholder="$t('contact.number')"
                    v-model="user.number"
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
                  <button class="app-form-button btn-cancel mr-3" @click="handleCancel">
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

$salmon: #ff647c;

.screen {
  position: relative;
  background: #3e3e3e;
  border-radius: 15px;
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
  background: #4d4d4f;
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
  background: white;
}

.screen-header-button.closee {
  background: #ed1c6f;
}

.screen-header-button.maximize {
  background: #e8e925;
}

.screen-header-button.minimize {
  background: #74c54f;
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
  color: #ddd;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
  transition: border-color 0.2s;
}

.app-form-control::placeholder {
  color: #666;
}

.app-form-control:focus {
  border-bottom-color: $salmon;
}

.app-form-button {
  font-size: 12px;
  cursor: pointer;
  outline: none;
}

.app-form-button.btn-cancel {
     color: $salmon;
     border:none;
     background: none;
}

.app-form-button.btn-submit {
    color: #fff;
    background: $salmon;
    border: 1px solid $salmon;
    padding: 10px;
    border-radius: 10px;

    i {
        color: #fff;
    }
}

.app-form-button.btn-cancel:hover {
  color: rgba($color: $salmon, $alpha: 0.5);
}


#contact {
  background-image: linear-gradient(135deg, #CDDDF4, #CDBAFA);
  -webkit-clip-path: polygon(0 15vh, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(0 15vh, 100% 0, 100% 100%, 0 100%);
  padding: 10rem 0 10rem;
  margin-top: -10rem;
  margin-bottom: -1px;
  color: #fff;
  .container {
    .section-title {
      margin: 0 0 4.5rem;
      font-size: 4rem;
      font-weight: 700;
      text-transform: uppercase;
    }
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
</style>
