<template>
  <v-container fluid fill-height justify-center class="login-background">
    <v-card width="400" color="backgroundLogin" class="border-radius-8px">
      <v-container>
        <span class="absolute-position">
          <img src="~/assets/img/ghost.png" alt="">
        </span>
        <v-form class="text-xs-center">
          <v-text-field class="white-label" label="Usuário" color="white" required></v-text-field>
          <v-text-field type="password" class="white-label" label="Senha" color="white" required></v-text-field>
          <v-subheader class="forgot-password">Esqueceu a senha?</v-subheader>
          <v-checkbox class="white-label" label="Lembrar de mim" color="white" required></v-checkbox>
          <v-card-actions class="no-padding">          
            <v-layout justify-space-between>
              <v-btn flat color="white" light>Registrar</v-btn>
              <v-btn color="white" light>Login</v-btn>
            </v-layout>
          </v-card-actions>
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
    this.$vuetify.theme.backgroundLogin = "#919ea5";
  }
}
</script>

<style scoped>
.login-background {
  background: url("./../assets/img/doodles.png");
}

.absolute-position{
  position: absolute;
  top: -100px;
  left: 125px;
}
img{
  width: 148px;
  height: 148px;
}

.border-radius-8px{
  border-radius: 8px;
}
</style>


<style>
.theme--light .white-label .v-label {
  color: white !important;
}

.theme--light .white-label .v-icon {
  color: white !important;
}

.theme--light .v-text-field .v-input__slot:before {
  background-color: #c1cfd6 !important;
}

.theme--light .v-input:not(.v-input--is-disabled) input{
  color: white;
}
</style>
