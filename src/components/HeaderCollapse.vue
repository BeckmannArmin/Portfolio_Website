<template>
  <div id="navbar-collapse" class="fixed--top">
    <div
      id="menu-icon-wrapper"
      class="menu-icon-wrapper"
      style="visibility: visible"
      :class="{ open: isOpen }"
    >
      <svg width="1000px" height="1000px">
        <path
          class="path1"
          d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"
        ></path>
        <path class="path2" d="M 300 500 L 700 500"></path>
        <path
          class="path3"
          d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"
        ></path>
      </svg>
      <button
        id="menu-icon-trigger"
        class="menu-icon-trigger"
        @click="toggleClass"
      ></button>
    </div>
    <Sidebar
      :class="{ open: isOpen }"
      @toggleClose="closeMenu"
      style="transform: translateX(-100vw)"
    />
    <Overlay :class="{ open: isOpen }" />
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Overlay from "./Overlay.vue";
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  components: {
    Sidebar,
    Overlay,
  },
  methods: {
    toggleClass() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      setTimeout(() => {
        this.isOpen = !this.isOpen;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.fixed--top {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1030;
}

.menu-icon-wrapper {
  width: 55px;
  height: 55px;
  padding: 2rem;
  pointer-events: none;
  transition: 0.1s;

  &.open {
    box-shadow: none;
    background: none;
  }
}

.menu-icon-wrapper svg {
  position: absolute;
  top: -22.5px;
  left: -22.5px;
  -webkit-transform: scale(0.1);
  transform: scale(0.1);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}

.menu-icon-wrapper svg path {
  stroke: $fuchsia-light;
  stroke-width: 40px;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: transparent;
  transition: stroke-dasharray 0.5s;
}

.menu-icon-wrapper svg path.path1 {
  stroke-dashoffset: 5803.15px;
  stroke-dasharray: 2901.57px, 2981.57px, 240px;
}

.menu-icon-wrapper svg path.path2 {
  stroke-dashoffset: 800px;
  stroke-dasharray: 400px, 480px, 240px;
}

.menu-icon-wrapper svg path.path3 {
  stroke-dashoffset: 6993.11px;
  stroke-dasharray: 3496.56px, 3576.56px, 240px;
}

.menu-icon-wrapper .menu-icon-trigger {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  pointer-events: auto;
  background: none;
  border: none;
  margin: 0;
  padding: 0;
}

.menu-icon-wrapper.open svg path.path1 {
  stroke-dasharray: 2901.57px, 5258.15px, 240px;
}

.menu-icon-wrapper.open svg path.path2 {
  stroke-dasharray: 400px, 600px, 0px;
}

.menu-icon-wrapper.open svg path.path3 {
  stroke-dasharray: 3496.56px, 6448.11px, 240px;
}

.menu-icon-wrapper.open {
  transform: translateX(0) !important;
  visibility: visible !important;
  opacity: 1;
}

@media (min-width: 650px) {
  #navbar-collapse {
      display: none;
  }
}
</style>
