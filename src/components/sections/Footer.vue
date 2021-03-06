<template>
<section id="footer">
  <footer class="footer position-relative text-center">
    <div class="footer-wrapper position-absolute">
      <div class="container">
        <div
          id="curved"
          class="position-relative d-flex justify-content-center align-items-center flex-column"
        >
          <div class="contact">
            <a
              href="mailto:armin.beckmann@protonmail.com"
              title="Get in touch"
              rel="me"
              target="_blank"
              >armin.beckmann@protonmail.com</a
            >
          </div>
          <div class="socials d-flex justify-content-center flex-row">
            <a
              href="https://github.com/BeckmannArmin"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
            <a
              href="https://www.linkedin.com/in/armin-beckmann/"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'linkedin-in']" />
            </a>
          </div>
          <div class="info">
            <img
              class="img-fluid"
              style="height: 125px"
              alt="Thats me"
              src="../../assets/armin.png"
            />
          </div>
          <a href="#top">
            <div class="arrow"></div>
          </a>
        </div>
      </div>
    </div>
  </footer>
</section>
</template>

<script>
import LocaleSwitcher from "../LocaleSwitcher.vue";
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    LocaleSwitcher
  },
};
</script>

<style lang="scss" scoped>
$salmon: #ff647c;
$neutral-black: #111111;
$neutral-white: #fff;


/** reversed gradient of contact section */
#footer {
background-image: linear-gradient(135deg, #CDD2F6, #CDBAFA);
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
      margin: 2em 0;

      li {
        margin: 0 0.5em;
      }

      a {
        width: 1.6em;
        height: 1.6em;
        margin: 0.5em;
        font-size: 3rem;
        line-height: 1.5em;
        text-align: center;
        background-color: #dbe8d4;
        border-radius: 50%;
        box-shadow: #222733;

        svg {
          color: #222733;
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
        border-color: #fafafa;
        transition: 0.2s ease;
        display: block;
        transform-origin: 100% 0;
      }
      &:hover:after {
        border-color: $salmon;
        height: 120%;
      }
      &:hover:before {
        border-color: $salmon;
        transform: scale(0.8);
      }
    }
  }

  #curved {
    padding-top: 4rem;

    .contact {
      a {
        text-decoration: none;
        color: #fff;
        cursor: pointer;
        font-size: 1.4rem;
        padding-top: 2rem;
      }
    }

    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 50%;
      width: 120rem;
      width: 200vw;
      height: 120rem;
      height: 200vw;
      margin-left: -60rem;
      margin-left: -100vw;
      z-index: -1;
      border-radius: 50%;
      background-color: #111111;
    }
  }
}
</style>
