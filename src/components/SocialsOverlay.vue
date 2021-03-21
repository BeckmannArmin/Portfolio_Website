<template>
  <div id="socials-overlay">
    <div class="socials-wrapper">
      <a href="https://github.com/BeckmannArmin" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
      <a href="https://www.linkedin.com/in/armin-beckmann/" target="_blank">
        <font-awesome-icon :icon="['fab', 'linkedin-in']" />
      </a>
      <a href="https://codepen.io/Preefix99" target="_blank">
        <font-awesome-icon :icon="['fab', 'codepen']" />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#socials-overlay {
  position: absolute;
   right: 0;
   z-index: 999;
  .socials-wrapper {
    display: inline-flex;
    flex-flow: column;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    padding: 0.25rem;
    list-style: none;
    transition: opacity 0.35s ease 0.75s;
    z-index: 900;

    a {
      padding: 2rem;
      font-size: 5rem;
      svg {
        color: #222733;

        &:hover {
          color: $fuchsia;
        }
      }
    }
  }
}

@media (max-width: 800px) {
  #socials-overlay {
    display: none;
    .socials-wrapper {
      position: fixed;
      z-index: 980;
      transform: none;
      transition: all 0.35s ease-in-out;
      flex-flow: row !important;
      background: $white;
      top: 0;
      display: flex;
      align-items: center;
      right: 0;
      border-bottom-left-radius: 6px;
      box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.4);
      height: 55px;

      a {
        padding: 1.4rem;
        svg {
          color: $fuchsia !important;
        }
      }
    }
  }
}

@media (max-width: 75em) {
  #socials-overlay {
    a {
      font-size: 4rem !important;
    }
  }
}
</style>
