<template>
  <v-app>
    <v-toolbar app fixed clipped-left class="purple-shadow">
      <v-layout align-center>
        <v-flex offset-xs1 offset-sm4 xs5 sm4 class="text-xs-left text-sm-center">
          <img class="no-select mt-1" src="~/assets/img/ghost.png" alt="ghost" width="48px">
        </v-flex>
        <v-flex xs6 sm4 class="text-xs-right mr-3">
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
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  @Component
  export default class extends Vue {
  }
</script>

<style>
  .no-select {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .purple-shadow {
    box-shadow: 0 2px 4px -1px rgba(103,58,183,.2),0 4px 5px 0 rgba(103,58,183,.14),0 1px 10px 0 rgba(103,58,183,.12);
  }

  .no-decoration {
    text-decoration: none;
  }

  .text-shadow {
    text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
  }

  .z-index-1 { z-index: 1; }
  .z-index-2 { z-index: 2; }
  .z-index-3 { z-index: 3; }
  .z-index-4 { z-index: 4; }
  .z-index-5 { z-index: 5; }
  .z-index-6 { z-index: 6; }
  .z-index-7 { z-index: 7; }
  .z-index-8 { z-index: 8; }
  .z-index-9 { z-index: 9; }
  .z-index-10 { z-index: 10; }

  .fill-width {
    width: 100% !important;
  }

  .full-width {
    width: 100vh !important;
  }
</style>


<style scoped>
  .main-title {
    margin: 64px;
    font-size: 72px;
  }

  #bottom-navigation {
    border-top: 1px solid #9E9E9E;
  }
</style>
