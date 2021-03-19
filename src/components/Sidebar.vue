<template>
  <div id="sidebar" class="sidebar d-flex justify-content-center">
    <div
      class="sidebar-body d-flex justify-content-center align-items-start flex-column"
    >
      <a :class="{ active: isHome }" @click="toggleHome" href="#master">{{
        $t("about.me")
      }}</a>
      <a
        :class="{ active: isExperience }"
        @click="toggleExperience"
        href="#experience"
        >{{ $t("experience.resume") }}</a
      >
      <a
        :class="{ active: isProjects }"
        @click="toggleProjects"
        href="#projects"
        >{{ $t("projects.projects") }}</a
      >
      <a
        :class="{ active: isContact }"
        @click="toggleContacts"
        href="#contact"
        >{{ $t("contact.contact") }}</a
      >
    </div>
    <LocaleSwitcher />
  </div>
</template>

<script>
import LocaleSwitcher from "./LocaleSwitcher.vue";

export default {
  props: ["mode"],
  data() {
    return {
      isHome: false,
      isExperience: false,
      isProjects: false,
      isContact: false,
    };
  },
  components: {
    LocaleSwitcher,
  },
  methods: {
    toggleHome() {
      this.isHome = true;
      this.isExperience = false;
      this.isProjects = false;
      this.isContact = false;
      this.$emit("toggleClose");
    },
    toggleExperience() {
      this.isHome = false;
      this.isExperience = true;
      this.isProjects = false;
      this.isContact = false;
      this.$emit("toggleClose");
    },
    toggleProjects() {
      this.isHome = false;
      this.isExperience = false;
      this.isProjects = true;
      this.isContact = false;
      this.$emit("toggleClose");
    },
    toggleContacts() {
      this.isHome = false;
      this.isExperience = false;
      this.isProjects = false;
      this.isContact = true;
      this.$emit("toggleClose");
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 45%;
  height: 100%;
  overflow-x: hidden;
  visibility: hidden;
  transition: all 0.1s ease 0.5s;
  z-index: -1;

  div:last-of-type {
    position: absolute;
    bottom: 5%;
    left: 15%;
    margin-left: 12px;
    z-index: 100;
    transition: opacity 0.3s ease,
      -webkit-transform 0.4s cubic-bezier(0.694, 0.048, 0.335, 1);
    transition: opacity 0.3s ease,
      transform 0.4s cubic-bezier(0.694, 0.048, 0.335, 1);
    transition: opacity 0.3s ease,
      transform 0.4s cubic-bezier(0.694, 0.048, 0.335, 1),
      -webkit-transform 0.4s cubic-bezier(0.694, 0.048, 0.335, 1);
    transition-delay: 0s;
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
    opacity: 0;
  }

  &.open {
    display: none;
    visibility: visible;
    transition-delay: 0.1s;
    &::before {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      transition-delay: 0s;
    }

    &::after {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      transition-delay: 0.15s;
    }
  }

  &::before {
    transition-delay: 0.25s;
    background-color: $fuchsia-light;
    background: linear-gradient(270deg, $fuchsia-light, $fuchsia);
  }

  &::after {
    transition-delay: 0.15s !important;
    background-color: $black;
    background: linear-gradient(270deg, $light-blue, $blue);
  }

  &::after,
  &::before {
    content: "";
    position: absolute;
    will-change: transform;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    transition: -webkit-transform 0.45s cubic-bezier(0.694, 0.048, 0.335, 1);
    transition: transform 0.45s cubic-bezier(0.694, 0.048, 0.335, 1) 0.25s;
    transition: transform 0.45s cubic-bezier(0.694, 0.048, 0.335, 1),
      -webkit-transform 0.45s cubic-bezier(0.694, 0.048, 0.335, 1);
  }

  &.open {
    transform: translateX(0) !important;
    opacity: 1 !important;

    div:last-of-type {
      opacity: 1;
      transition-delay: 0.45s;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }

    .sidebar-body {
      opacity: 1;
      transition-delay: 0.4s;
      -webkit-transform: translateY(-60%);
      transform: translateY(-60%);
    }

    .action-btns {
      opacity: 1;
      transition-delay: 0.75s;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  .sidebar-body {
    position: absolute;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 15%;
    margin: 0;
    padding: 0;
    opacity: 0;
    transition: opacity 0.3s ease,
      -webkit-transform 0.4s cubic-bezier(0.694, 0.048, 0.335, 1);
    transition: opacity 0.3s ease,
      transform 0.4s cubic-bezier(0.694, 0.048, 0.335, 1);
    transition: opacity 0.3s ease,
      transform 0.4s cubic-bezier(0.694, 0.048, 0.335, 1),
      -webkit-transform 0.4s cubic-bezier(0.694, 0.048, 0.335, 1);
    transition-delay: 0s;
    z-index: 100;

    a {
      display: inline-flex;
      position: relative;
      text-transform: none;
      letter-spacing: 0;
      font-size: 3rem;
      font-weight: 700;
      color: #fff;
      margin: 12px;
      user-select: none;
      text-decoration: none;

      &.active {
        &:after {
          width: 100%;
          opacity: 1;
        }
      }

      &:after {
        content: "";
        transition: width 0.4s cubic-bezier(1, 0, 0, 1),
          opacity 0.4s cubic-bezier(1, 0, 0, 1);
        position: absolute;
        top: 50%;
        left: 0;
        bottom: 0;
        height: 8px;
        width: 0;
        background: $fuchsia-light;
        opacity: 0.75;
      }
    }
  }

  .action-btns {
    position: absolute;
    display: flex;
    flex-flow: row;
    align-items: center;
    bottom: 15px;
    left: 15%;
    margin: 0;
    padding: 0;
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
    opacity: 0;
    transition: opacity 0.3s ease,
      -webkit-transform 0.4s cubic-bezier(0.694, 0.048, 0.335, 1);
    transition: opacity 0.3s ease,
      transform 0.4s cubic-bezier(0.694, 0.048, 0.335, 1);
    transition: opacity 0.3s ease,
      transform 0.4s cubic-bezier(0.694, 0.048, 0.335, 1),
      -webkit-transform 0.4s cubic-bezier(0.694, 0.048, 0.335, 1);
    transition-delay: 0s;
    z-index: 100;

    div:first-of-type {
      margin-right: 20px;
    }
  }
}

@media (max-width: 800px) {
  #sidebar {
    width: 100% !important;
  }
}

@media (max-width: 37.5em) {
  #sidebar {
    .sidebar-body {
      a {
        font-size: 2.7rem;
      }
    }
  }
}
</style>
