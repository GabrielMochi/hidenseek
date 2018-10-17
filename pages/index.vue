<template>
  <v-container fluid>
    <v-toolbar app fixed clipped-left>
      <v-layout align-center>
        <v-btn v-if="false" flat icon large @click="change()"><v-icon>menu</v-icon></v-btn>
        <v-flex offset-xs1 offset-sm4 xs5 sm4 class="text-xs-right text-sm-center">
          <router-link to="/">
            <img :style="`cursor: ${$route.path === '/' ? 'default' : 'pointer'}`" class="no-select mt-1" src="~/assets/img/ghost.png" alt="ghost" width="48px">
          </router-link>
        </v-flex>
        <v-flex xs6 sm4 class="text-xs-right">
          <v-btn icon>
            <v-icon>notifications</v-icon>
          </v-btn>
          <v-btn icon large to="/user">
            <v-avatar size="32px" tile>
              <img src="https://cdn1.iconfinder.com/data/icons/freeline/32/account_friend_human_man_member_person_profile_user_users-256.png" alt="User">
            </v-avatar>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-toolbar>
    <nuxt-child/>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class extends Vue {
}
</script>
