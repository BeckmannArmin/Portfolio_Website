<template>
  <section id="footer">
    <footer class="footer position-relative text-center">
      <div class="footer-wrapper position-absolute">
        <div class="container">
          <div
            id="curved"
            class="position-relative d-flex justify-content-center align-items-center flex-column"
          >
            <div class="socials d-flex justify-content-center flex-row">
              <a href="https://github.com/BeckmannArmin" target="_blank">
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
              <a
                href="https://www.linkedin.com/in/armin-beckmann/"
                target="_blank"
              >
                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
              </a>
              <a href="https://codepen.io/Preefix99" target="_blank">
                <font-awesome-icon :icon="['fab', 'codepen']" />
              </a>
            </div>
            <div class="info pt-4">
              <div class="deal-with-it">
                <img
                  class="img-fluid image-me"
                  style="height: 125px"
                  alt="Thats me"
                  src="../../assets/armin.png"
                />
                <img
                  alt="deal with it"
                  class="deal-with-it-img"
                  src="../../assets/deal-with-it.png"
                  :style="{ opacity: opacity + '!important' }"
                />
                <img
                  alt="im on fire"
                  class="fire-img"
                  src="../../assets/burn-baby-burn.gif"
                  :style="{ opacity: opacity + '!important' }"
                />
              </div>
            </div>
            <LocaleSwitcher />
            <a href="#top">
              <div class="arrow"></div>
            </a>
            <div class="legal-wrapper d-flex flex-row">
              <a @click="showPrivacy = true"> {{ $t("footer.privacy") }} </a>
              <a @click="showLegal = true"> {{ $t("footer.legal") }} </a>
            </div>
          </div>
        </div>
      </div>
      <LegalNotice v-if="showLegal" :class="showLegal ? 'enter' : ''" @closeLegal="showLegal = false" />
      <Privacy v-if="showPrivacy" :class="showPrivacy ? 'enter' : ''" @closePrivacy="showPrivacy = false" />
    </footer>
  </section>
</template>

<script>
import LocaleSwitcher from "../LocaleSwitcher.vue";
import LegalNotice from "./modals/LegalNotice.vue";
import Privacy from "./modals/PrivacyPolicy.vue";

export default {
  mounted () {
    this.scrollBottom();
  },
  components: {
    LocaleSwitcher, LegalNotice, Privacy
  },
  data() {
    return {
      opacity: 0,
      showLegal: false,
      showPrivacy: false,
      scrolledToBottom: false
    };
  },
  methods: {
    scrollBottom () {
  window.onscroll = () => {
    let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

    if (bottomOfWindow) {
      this.scrolledToBottom = true;
      this.opacity = 1;
    } else {
      this.scrolledToBottom = false;
      this.opacity = 0;
    }

 }
}
  }
};
</script>

<style lang="scss" scoped>
.dark {
  #footer {
    background-image: $bg-dark;
  }
}
/** reversed gradient of contact section */
#footer {
  background: hsl(300, 11%, 96%);
  padding-top: 100px;
}
.footer {
  height: 300px;
  min-height: 300px;
  padding: 2em 0;

  .logo {
    width: 12em;
    height: 12em;
    margin: 2em auto;
  }

  .footer-wrapper {
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    z-index: 1000;

    .socials {
      margin-top: 2em;
      a {
        margin: 0.5em;
        font-size: 4rem;
        line-height: 1.5em;
        text-align: center;
        border-radius: 50%;

        svg {
          color: $white;

          &:hover {
            color: $fuchsia;
          }
        }
      }
    }

    .info {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      .deal-with-it {
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;

        .image-me {
          z-index: 2;
        }

        .deal-with-it-img {
          position: absolute;
          right: 18%;
          top: 12%;
          z-index: 3;
          width: 65px;
          -webkit-align-self: flex-end;
          -ms-flex-item-align: end;
          align-self: flex-end;
          opacity: 0;
        }
        .fire-img {
          position: absolute;
          z-index: 1;
          width: 200px;
          -webkit-align-self: flex-end;
          -ms-flex-item-align: end;
          align-self: flex-end;
          opacity: 0;
          transform: translate(15px, 15px);
        }
      }
    }

    .arrow {
      margin: 4rem auto 2rem;
      width: 35px;
      height: 35px;
      box-sizing: border-box;
      position: relative;
      transform: rotate(-45deg);
      &::before {
        content: "";
        width: 100%;
        height: 100%;
        border-width: 0.8vmin 0.8vmin 0 0;
        border-style: solid;
        border-color: $neutral-blue;
        transition: 0.2s ease;
        display: block;
        transform-origin: 100% 0;
      }
      &:hover:after {
        border-color: $fuchsia;
        height: 120%;
      }
      &:hover:before {
        border-color: $fuchsia;
        transform: scale(0.8);
      }
    }
  }

  #curved {
    padding-top: 60px;

    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 50%;
      width: 200vw;
      height: 200vw;
      margin-left: -60rem;
      margin-left: -100vw;
      z-index: -1;
      border-radius: 50%;
      background-color: $bg-black;
    }

    .legal-wrapper {
      a {
        color: $white;
        font-size: 1.1rem;
        padding: .5rem;
      }
    }
  }
}
</style>
