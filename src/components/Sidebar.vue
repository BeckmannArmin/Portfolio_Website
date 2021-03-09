<template>
  <div id="sidebar" class="sidebar d-flex justify-content-center">
    <div
      class="sidebar-body d-flex justify-content-center align-items-center flex-column"
    >
      <a :class="{active: isHome}" @click="toggleClass" href="#master">{{ $t('about.me') }}</a>
      <a :class="{active: isExperience}" @click="toggleClass" href="#experience">{{ $t('experience.resume') }}</a>
      <a :class="{active: isProjects}" @click="toggleClass" href="#projects">{{ $t('projects.projects') }}</a>
      <a :class="{active: isContact}" @click="toggleClass" href="#contact">{{ $t('contact.contact') }}</a>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isHome: false,
            isExperience: false,
            isProjects: false,
            isContact: false
        }
    },
    methods: {
        toggleClass() {

        }
    }
}
</script>

<style lang="scss" scoped>
.sidebar {
  background: $white;
  height: 100vh;
  width: 55%;
  position: fixed;
  margin: 0 auto;
  top: 0px;
  left: 0;
  opacity: .5;
  z-index: -1;
  transition: transform .75s ease, opacity .75s ease;

  &.open {
    transform: translateX(0) !important;
    opacity: 1 !important;
  }

  .sidebar-body {
    margin: auto;

    a {
      display: inline-block;
      position: relative;
      text-transform: none;
      letter-spacing: 0;
      font-size: 3.6rem;
      font-weight: 700;
      color: #252525;
      margin: 15px;

      &.active {
          &:after {
              width: 100%;
              opacity: 1;
          }
      }

      &:after {
              content: "";
    transition: width .4s cubic-bezier(1,0,0,1),opacity .4s cubic-bezier(1,0,0,1);
    position: absolute;
    top: 50%;
    left: 0;
    bottom: 0;
    height: 8px;
    width: 0;
    background: $salmon-light;
    opacity: .75;
      }
    }
  }
}

@media (max-width: 800px) {
  #sidebar {
    width: 70% !important;
  }
}

@media (max-width: 37.5em) {
    #sidebar {
        .sidebar-body {
            a {
                font-size: 3.2rem;
            }
        }
    }
}
</style>
