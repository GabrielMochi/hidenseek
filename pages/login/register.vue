<template>
    <v-card width="700" color="backgroundLogin" class="border-radius-8px">
        <v-container grid-list-md>
            <v-layout row wrap>
                <v-flex xs6>
                    <v-form class="text-xs-center">
                        <v-text-field class="white-label" label="Nome" color="white" required></v-text-field>
                        <v-text-field class="white-label" label="Identificador" color="white" required></v-text-field>
                        <v-text-field class="white-label" label="Email" type="email" color="white" required></v-text-field>   
                        <v-text-field type="password" class="white-label" label="Senha" color="white" required></v-text-field>
                        <v-text-field type="password" class="white-label" label="Confirmar Senha" color="white" required></v-text-field>
                        <v-checkbox class="white-label" label="Eu concordo com os termos de uso" color="white" required></v-checkbox>
                        <v-card-actions class="no-padding">          
                            <v-layout justify-space-between>
                                <v-btn flat color="white" light to="/login">Já sou registrado</v-btn>
                                <v-btn color="white" light>Confirmar</v-btn>
                            </v-layout>
                        </v-card-actions>
                    </v-form>
                </v-flex>
                <v-spacer width="150"></v-spacer>
                <v-flex xs6 text-xs-center style="align-self: space-around">
                    <div class="align-message">
                        <img src="~/assets/img/ghost.png" alt="logo">
                        <h1 class="display-2 white-text-color text-shadow">Perdeu Algo?</h1>
                        <span class="subheading white-text-color">Veio ao lugar certo.</span>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default class extends Vue {
    private windowWidth: Number = null;
    private isMobile: boolean = false;

    responseItems(width: Number) {
        this.isMobile = width < 1025;
    }

    private async created() {
        this.windowWidth = window.innerWidth;
        this.responseItems(this.windowWidth);
        window.onresize = () => {
            this.windowWidth = window.innerWidth;
            this.responseItems(this.windowWidth);
        };
  }
}
</script>

<style scoped>
.text-shadow {
  text-shadow: 2px 2px #444141;
}

.align-message {
  padding-top: 70px;
  padding-left: 16px;
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

