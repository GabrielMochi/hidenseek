<template>
  <v-container grid-list-xl>
    <v-layout justify-center align-center class="mt-5">
      <v-flex xs12 md9 text-xs-center>
        <h1 class="display-2">{ <code>v.{{ version }}</code> }</h1>
      </v-flex>
    </v-layout>
    <p id="pi" @click.ctrl.alt.shift="pi">&#960;</p>
  </v-container>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  @Component
  export default class extends Vue {

    version: string

    pi () {
      window.location.replace('https://neave.tv')
    }

    beforeCreate () {
      this.version = process.env.version
    }

  }
</script>

<style scoped>
 #pi {
   position: fixed;
   bottom: 3.14159265359px;
   right: 3.14159265359px;
   margin: 0;
 }
</style>


