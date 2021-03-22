<template>
  <nav class="main-nav">
    <div class="container nav-content">
      <a href="/" class="ab-logo">
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
          <symbol id="logo" viewBox="0 0 848.48 722.27">
            <path
              d="M296 86.74a4.42 4.42 0 006.14 1c95.45-69.14 181.53-44.61 221.56 8.09 40.81 53.72 41.38 145-52.59 219.71a4.42 4.42 0 00-.74 6.17l22.27 28.83a4.13 4.13 0 005.83.73c51.78-41 84.12-90.87 93.63-144.44 8.84-49.85-2.73-98.94-32.57-138.22C530 29.67 486.4 5.63 436.86.87 383.74-4.24 328 13.27 275.31 51.54a4.45 4.45 0 00-1 6.26zM847.74 448.1c-6.32-74-52.48-139.72-120.47-171.43-36.46-17-77.78-23.38-119.47-18.44a4.21 4.21 0 00-3.44 2.7A218.27 218.27 0 01584 301.24a4.2 4.2 0 004.54 6.36c42-10.25 83.22-7.16 119.73 9.86 53.42 24.91 89.73 76.44 94.63 134.47 5.86 68.63-31 134.23-103.75 184.75-2.22 1.47-72.82 47.13-182.89 16.86a4.21 4.21 0 00-5.14 2.89L501 691.59a4.2 4.2 0 002.9 5.21 323.65 323.65 0 0086.52 12.11c81.38 0 131.4-33.19 134.14-35l.17-.12c44.6-30.94 77.86-67.26 98.86-108 19.17-37.28 27.54-77.97 24.15-117.69z"
            />
            <path
              d="M380.91 385.18a4 4 0 00-5.53-.75L101.27 592.78a4 4 0 01-6.1-4.5l152.92-418.54a3.94 3.94 0 016.83-1.05l356.17 462.78a4 4 0 005.53.72L646 609.56a4 4 0 00.72-5.54l-406-527.58a3.94 3.94 0 00-6.83 1.06L.26 717a3.94 3.94 0 006.09 4.49l396.26-301.24a4 4 0 00.76-5.53z"
            />
          </symbol>
        </svg>
        <svg class="logo-small">
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="#logo"
          ></use>
        </svg>
      </a>
      <ul class="nav-links">
        <li>
          <a href="#experience">
            {{ $t("experience.resume") }}
          </a>
        </li>
        <li>
          <a href="#projects">{{ $t("projects.projects") }}</a>
        </li>
        <li>
          <a @click="toggleContactModal">{{ $t("contact.contact") }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleContactModal() {
      const contactModal = document.querySelector(".about-contact");
      contactModal.classList.add("isopen");
      const html = document.querySelector("html");
      html.style.overflow = "hidden";
    },
  },
};
</script>

<style lang="scss" scoped>
.dark {
  .main-nav {
    .ab-logo {
      svg.logo-small {
        fill: $white;
      }
    }
    .nav-links {
      li {
        a {
          color: $white;
        }
      }
    }
  }
}

.main-nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  will-change: transform;
  transition: background 0.3s,
    -webkit-transform 0.5s cubic-bezier(0.694, 0.048, 0.335, 1);
  transition: transform 0.5s cubic-bezier(0.694, 0.048, 0.335, 1),
    background 0.3s;
  transition: transform 0.5s cubic-bezier(0.694, 0.048, 0.335, 1),
    background 0.3s, -webkit-transform 0.5s cubic-bezier(0.694, 0.048, 0.335, 1);
  z-index: 25;

  &.hidden {
    -webkit-transform: translateY(-120%) !important;
    transform: translateY(-120%) !important;
  }

  .nav-links {
    float: right;
    position: relative;
    margin: 0;
    padding: 0;
    top: 20px;
    transition: opacity 0.35s ease 0.75s;

    li {
      display: inline-block;
      margin-left: 40px;

      a {
        display: block;
        padding: 10px 0;
        position: relative;
        font-size: 1.8rem;
        color: #222733;
        font-weight: bold;
        transition: color 0.35s ease;
        background-color: transparent;

        &:hover {
          text-decoration: none;

          &::before,
          &::after {
            width: 100%;
            left: 0;
          }
        }
        &::before,
        &::after {
          content: "";
          position: absolute;
          bottom: 11px;
          right: 0;
          width: 0;
          left: auto;
          height: 3px;
          z-index: 35;
        }

        &::before {
          background-color: #235aa6;
          transition: all 0.25s cubic-bezier(0.694, 0.048, 0.335, 1) 0.15s;
        }

        &::after {
          background-color: #f25757;
          transition: all 0.25s cubic-bezier(0.694, 0.048, 0.335, 1);
        }
      }
    }
  }
  .ab-logo {
    float: left;
    padding: 10px 0;
    transition: opacity 0.35s ease 0.65s;

    svg.logo-small {
      width: 60px;
      height: 60px;
      position: relative;
      fill: #222733;
      top: 2px;
      opacity: 1;
      transition: opacity 0.25s ease;
    }
  }
}

@media only screen and (min-width: 64em) {
  .main-nav {
    &.loaded {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }

    -webkit-transform: translateY(-120%);
    transform: translateY(-120%);
  }
}

@media (max-width: 56.25em) {
  .main-nav {
    .nav-links {
      li {
        margin-left: 25px;
      }
    }
  }
}

@media only screen and (max-width: 64em) {
  .main-nav {
    .container {
      width: 95% !important;
      max-width: none;
    }
  }
}

@media only screen and (max-width: 650px) {
  .main-nav {
    .nav-links {
      display: none;
    }
  }
}
</style>
