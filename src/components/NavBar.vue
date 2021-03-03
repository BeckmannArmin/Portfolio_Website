<template>
  <header id="header" class="header">
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <a class="navbar-brand">
        dsads
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Right Side Of Navbar -->
          <ul class="navbar-nav ml-auto">
            <!-- Dark Mode toggle -->
            <Toggle :mode="mode" @toggle="$emit('toggle')" />
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import Toggle from "../components/Toggler.vue";
export default {
  props: ["mode"],
  components: {
    Toggle,
  },
};
</script>

<style lang="scss" scoped>

.header-github-link {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.dark {
  .navbar {
    background: #20232a;
    .navbar-brand {
      color: #fff;
    }
  }
  .navbar.active {
    background: #20232a;
  }
  .nav-link {
    color: #fff !important;
  }
  .img-light {
    display: none;
  }
  .img-dark {
    display: block !important;
  }

  .dropdown-item {
    .nav-link {
      color: #20232a !important;
    }
  }
}

.navbar.active {
  background: #fff;
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.navbar {
  padding: 0.5rem 1rem;
}

.navbar {
  transition: all 0.3s;
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
  height: 100px;
}

.navbar-collapse a {
  text-align: center;
}

.nav-link {
  color: #1c1e21 !important;
}
.nav-link-login {
  font-weight: 600 !important;
}

.nav-link-register {
  border: 1px solid #5c55ba;
  border-radius: 5px;
  background: #5c55ba;
  color: #fff !important;
}

.btn-logout {
  background-color: #5c55ba;
  color: #fff;
}

@media (min-width: 768px) {
  .navbar-nav .nav-link {
    padding-right: 1rem;
    padding-left: 1rem;
  }
}

@media (min-width: 992px) {
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }
}
</style>
