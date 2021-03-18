<template>
  <div class="locale-changer">
    <div
      v-for="(lang, i) in langs"
      :key="`Lang${i}`"
      @click="changeLang(lang, i)"
    >
      <a :class="{ active: i === activeItem }"> {{ lang }} </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "locale-changer",
  data() {
    return {
      langs: ["de", "en"],
      activeItem: null,
    };
  },
  methods: {
    changeLang(localLang, i) {

      this.$i18n.locale = localLang;
      this.activeItem = i;
      localStorage.setItem("lang", localLang);
    },
  },
};
</script>

<style lang="scss" scoped>
.locale-changer {
  display: flex;
  justify-content: center;
  flex-flow: row;

  a {
    text-decoration: none;
    color: #252525;
    &:not(.active) {
      font-weight: 500;
    }
  }

  div:nth-child(1) {
    padding-right: 1rem;

    &::after {
      content: "/";
      font-size: 3rem;
      font-weight: 500;
    }
  }
}
</style>
