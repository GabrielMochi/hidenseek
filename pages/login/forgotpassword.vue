<template>
    <v-card width="400" color="backgroundLogin" class="border-radius-8px">
      <div class="position-relative">
        <div class="position-absolute logo-position">
          <img src="~/assets/img/ghost.png" alt="logo">
        </div>
      </div>
      <v-container class="container-size">
        <v-form class="text-xs-center">
        <v-flex mt-4 text-xs-center class="white-text headline">Recuperação de Senha</v-flex>
        <v-card-text class="title white-text font-weight-thin">Digite seu e-mail para recuperação de senha</v-card-text>
          <v-text-field class="white-label" label="E-mail" color="white" required></v-text-field>
          <v-card-actions class="no-padding">          
            <v-layout justify-end mt-3>
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
.white-text{
  color: white;
}

.container-size{
  height: 309px;
}

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