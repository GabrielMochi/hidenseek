<template>
  <v-container text-xs-center>
    <h1 id="errorCode" class="my-5">{{ error.statusCode }} error</h1>
    <h2 class="error-message my-5" v-if="error.statusCode === 404">Oops! Parece que quem se perdeu agora foi você, não é mesmo?</h2>
    <h1 v-else class="error-message my-5">Um erro ocorreu</h1>
    <v-btn to="/" large outline color="purple lighten-3">Página inicial</v-btn>
  </v-container>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';

  @Component
  export default class extends Vue {

    @Prop()
    error: object

    created () {
      console.log(this.error)
    }

  }
</script>


<style>
  #errorCode {
    font-size: 128px;
    font-weight: 100;
  }

  .error-message {
    font-size: 32px;
    font-weight: 100;
  }

  @media screen and (max-width: 960px) {
    #errorCode {
      font-size: 64px;
    }

    .error-message {
      font-size: 32px;
    }
  }
</style>
