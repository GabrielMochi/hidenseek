<template>
  <v-container fluid fill-height justify-center class="login-background">
    <v-card width="400" color="backgroundLogin">
      <v-container>
        <v-form class="text-xs-center">
          <v-text-field class="white-label" label="Usuário" color="white" required></v-text-field>
          <v-text-field class="white-label" label="Senha" color="white" required></v-text-field>
          <v-checkbox class="white-label" label="Lembrar de mim" color="white" required></v-checkbox>
          <v-btn color="white" light block>Login</v-btn>
        </v-form>
      </v-container>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";

@Component
export default class extends Vue {
  private async created() {
    console.log(this.$vuetify);
    this.$vuetify.theme.borderInputColor = "#ffffff";
    this.$vuetify.theme.backgroundLogin = "#919ea5";
  }
}
</script>

<style scoped>
.login-background {
  background: url("./../assets/img/doodles.png");
}
</style>


<style scoped>
.theme--light .white-label .v-label {
  color: white !important;
}

.theme--light .white-label .v-icon {
  color: white !important;
}

.theme--light .v-text-field .v-input__slot:before{
  background-color: white !important;
}
</style>
