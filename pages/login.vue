<template>
  <v-container fluid fill-height justify-center class="login-background">
    <nuxt-child class="text-decoration-none"/>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";

@Component
export default class extends Vue {
  private async created() {
    console.log(this.$vuetify);
    this.$vuetify.theme.backgroundLogin = "#919ea5";
  }
}
</script>

<style scoped>
.login-background {
  background: url("./../assets/img/doodles.png");
}
</style>

