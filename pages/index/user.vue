<template>
  <v-container grid-list-xl>
    <v-layout align-center class="my-3">
      <v-avatar size="64" class="mx-3">
        <img :src="user.thumbnail" :alt="user.name">
      </v-avatar>
      <h1>{{ user.name }}</h1>
    </v-layout>
    <v-container class="px-5">
      <h1>Bom dia!</h1>
    </v-container>
  </v-container>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import User, { UserPermission } from '~/model/User'

  @Component
  export default class extends Vue {

    user: User = new User(
      1,
      '222',
      'Gabriel Mochi Ribeiro',
      'gmochi56@outlook.com',
      'https://avatars3.githubusercontent.com/u/20032634?s=460&v=4',
      UserPermission.TOTAL
    )

  }
</script>

<style>
</style>
