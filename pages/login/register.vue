<template>
    <v-card width="850" color="backgroundLogin" class="border-radius-8px">
        <v-container grid-list-md>
            <v-layout row wrap>
                <v-flex order-sm1 order-xs2 sm6 xs12 pa-4>
                    <v-form class="text-xs-center">
                        <v-text-field class="white-label" label="Nome" color="white" required></v-text-field>
                        <v-text-field class="white-label" label="Identificador" color="white" required></v-text-field>
                        <v-text-field class="white-label" label="Email" type="email" color="white" required></v-text-field>   
                        <v-text-field type="password" class="white-label" label="Senha" color="white" required></v-text-field>
                        <v-text-field type="password" class="white-label" label="Confirmar Senha" color="white" required></v-text-field>
                        <v-checkbox class="white-label" label="Eu concordo com os termos de uso" color="white" required></v-checkbox>
                        <v-card-actions class="no-padding">          
                            <v-layout justify-space-between>
                                <v-btn flat color="white" light to="/login">Logar</v-btn>
                                <v-btn color="white" light>Confirmar</v-btn>
                            </v-layout>
                        </v-card-actions>
                    </v-form>
                </v-flex>
                <v-flex sm6 xs12 order-sm2 order-xs1 text-xs-center pa-2 style="align-self: space-around">
                    <div class="align-message">
                        <img src="~/assets/img/ghost.png" alt="logo">
                        <h1 class="display-2 white-text-color text-shadow pb-2">Perdeu Algo?</h1>
                        <span class="subheading white-text-color">Veio ao lugar certo.</span>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<style scoped>
.text-shadow {
  text-shadow: 2px 2px #444141;
}

.align-message {
  padding-top: 50px;
}

img {
  width: 148px;
  height: 148px;
}

.white-text-color {
  color: white;
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

