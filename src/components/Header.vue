<template>
  <header class="navbar fixed-top justify-content-center">
    <nav>
      <ul>
        <li>
          <a href="#about">{{ $t('about.me') }}</a>
        </li>
        <li><a href="#experience">{{ $t('about.experience') }}</a></li>
        <li><a href="#projects">{{ $t('projects.projects') }}</a></li>
        <li><a href="#contact">{{ $t('contact.contact') }}</a></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>

/** animated header - start */
.bg-nav {
  background: #fff;
  border-bottom: 1px solid #f3f3f3;

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
        letter-spacing: 2px;
        color: #272341;
        font-size: 11px;
        font-weight: bold;
      }
    }
  }
}
</style>
