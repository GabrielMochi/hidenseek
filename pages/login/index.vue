<template>
    <v-card width="400" color="backgroundLogin" class="border-radius-8px">
      <div class="position-relative">
        <div class="position-absolute logo-position">
          <img src="~/assets/img/ghost.png" alt="logo">
        </div>
      </div>
      <v-container>
        <v-form class="text-xs-center">
          <v-text-field class="white-label" label="Usuário" color="white" required></v-text-field>
          <v-text-field type="password" class="white-label" label="Senha" color="white" required></v-text-field>
          <router-link to="login/forgotpassword">         
            <v-subheader class="forgot-password">Esqueceu a senha?</v-subheader>
          </router-link>
          <v-checkbox class="white-label" label="Lembrar de mim" color="white" required></v-checkbox>
          <v-card-actions class="no-padding">          
            <v-layout justify-space-between>
              <v-btn flat color="white" light to="/login/register">Registrar</v-btn>
              <v-btn color="white" light>Login</v-btn>
            </v-layout>
          </v-card-actions>
        </v-form>
      </v-container>
    </v-card>
</template>

<style scoped>
img {
  width: 148px;
  height: 148px;
}

.border-radius-8px {
  border-radius: 8px;
}

.logo-position {
  top: -100px;
  left: 50%;
  transform: translate(-50%);
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

.theme--light .v-input:not(.v-input--is-disabled) input {
  color: white;
}
</style>