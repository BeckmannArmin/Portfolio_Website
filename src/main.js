import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import VueI18n from 'vue-i18n';
import en from './locales/en.json';
import de from './locales/de.json';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedinIn, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import animejs from "animejs";

library.add(faGithub,faLinkedinIn, faCodepen)

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


Vue.component('font-awesome-icon', FontAwesomeIcon)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(animejs);


var lang = localStorage.getItem('lang');
lang = lang ? lang : 'de';

const i18n = new VueI18n({
  locale: lang, // set locale
  messages: {
      en,
      de
  }
})

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
