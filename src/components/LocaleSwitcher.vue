<template>
  <div class="locale-changer">
    <select v-model="localLang">
      <option value="choose-one" class="choose-lang" disabled="true">
        {{ $t("footer.chooselang") }}
      </option>
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "locale-changer",
  data() {
    return {
      langs: ["de", "en"],
      localLang: this.$i18n.locale,
    };
  },
  watch: {
    localLang(localLang) {
      localStorage.setItem("lang", localLang);
      this.$i18n.locale = localLang;
    },
  },
};
</script>

<style lang="scss" scoped>
.locale-changer {
  margin: 1rem auto 2rem;
  select {
    background: #fff;
    border-radius: 6px;
    height: 35px;
    width: 150px;
    font-size: 1.6rem;

    .choose-lang {
      width: 150px;
    }
  }
}
</style>
