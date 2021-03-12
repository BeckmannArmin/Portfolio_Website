<template>
  <header class="navbar fixed-top justify-content-center">
    <nav>
      <ul>
        <li>
          <a href="#master">{{ $t('about.me') }}</a>
        </li>
        <li><a href="#experience">{{ $t('experience.resume') }}</a></li>
        <li><a href="#projects">{{ $t('projects.projects') }}</a></li>
        <li><a href="#contact">{{ $t('contact.contact') }}</a></li>
      </ul>
      <div id="toggle">
         <Toggle :mode="mode" @toggle="$emit('toggle')" />
      </div>
    </nav>
  </header>
</template>

<script>
import Toggle from "../components/Toggler.vue";

export default {
      props: ["mode"],
      components: {
          Toggle
      }

}
</script>

<style lang="scss" scoped>

#toggle {
    position: fixed;
    top: -5px;
    right: 50px;
    transform: scale(0.75);

}

/** animated header - start */

.dark {
    .bg-nav {
        background: $bg-dark;
        border-bottom: 1px solid black;
        a {
            color: $text-color-dark;
        }
    }
}
.bg-nav {
  background: #fff;
  border-bottom: 1px solid #f3f3f3;
  opacity: 1;
 a {
     color: #272341;
 }
  ul {
    padding: 0px;
  }
}
/** animated header - end */

header {
  text-align: center;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  height: 65px;
  opacity: 0;

  nav {
    ul {
      display: inline-block;
      padding-left: 0;
      padding: 10px;
      list-style: none;
      margin-bottom: 0;
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
    }
    li {
      display: inline-block;
      margin: 10px;

      a {
        text-transform: uppercase;
        letter-spacing: .2rem;
        color: $white;
        font-size: 1.4rem;
        font-weight: bold;
      }
    }
  }
}

@media (max-width: 800px) {
    header {
        display: none;
    }
}
</style>
