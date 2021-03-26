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
    font-size: 2.4rem;
    text-decoration: none;
    color: $white;
    font-weight: 700;
    &:not(.active) {
      font-weight: 300;
    }
  }

  div:nth-child(1) {
    padding-right: .5rem;

    &::after {
      content: "/";
      font-size: 2rem;
      font-weight: 500;
      color: $white;
    }
  }
}
</style>
