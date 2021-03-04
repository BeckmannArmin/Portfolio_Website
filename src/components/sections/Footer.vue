<template>
  <footer class="footer navbar-static-bottom">
    <div class="container d-flex align-items-center justify-content-center flex-column">
      <a href="#top" class="m-4">
      <div class="arrow"></div>
      </a>
       <!-- Dark Mode toggle -->
      <Toggle :mode="mode" @toggle="$emit('toggle')" />
      <!-- brand icons -->
      <div class="socials d-flex justify-content-center flex-row">
        <a href="https://github.com/BeckmannArmin" target="_blank">
         <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a href="https://www.linkedin.com/in/armin-beckmann/" target="_blank">
         <font-awesome-icon :icon="['fab', 'linkedin-in']" />
        </a>
      </div>
       <!-- Locale toggle -->
      <LocaleSwitcher />
      <!-- Divider -->
      <hr class="mt-2 mb-2 w-25">
      <img class="img-fluid" style="height: 125px" alt="Thats me" src="../../assets/armin.png">
    </div>
  </footer>
</template>

<script>
import Toggle from "../Toggler.vue";
import LocaleSwitcher from "../LocaleSwitcher.vue";
export default {
  props: ["mode"],
  components: {
    LocaleSwitcher,
    Toggle
  },
};
</script>

<style lang="scss" scoped>
$salmon: #FF647C;
$neutral-black: #111111;
$neutral-white: #fff;

.footer {
  background-color: $neutral-black;
  color: $neutral-white;
  padding: 4.8rem 0;

  .socials {
    a {
      flex-direction: column;
    color: $neutral-white;
    font-size: 3rem;
    width: 5rem;
    height: 5rem;
    margin: 1.6rem;
    }

    a svg:hover {
        transition: all 0.2 ease-in-out;
        color: $salmon;
    }
  }

  .footer-text {
    color: grey;
    font-size: 0.8rem;
  }

  hr {
    border: 0;
    border-top: 2px solid rgba($color: gray, $alpha: 0.25);
  }

  div.arrow {
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
</style>
