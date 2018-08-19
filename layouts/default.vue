<template>
  <v-app>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<style>
  .text-decoration-none a{
    text-decoration: none;
  }

  .position-absolute{
    position: absolute;
  }

  .position-relative{
    position: relative;
  }

  .no-select {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .no-decoration {
    text-decoration: none;
  }

  .text-shadow {
    text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
  }

  .forgot-password{
    color: #c1cfd6!important;
    padding: 0 !important;
    height: auto !important;
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

  .no-padding{
    padding: 0;
  }

    .side-nav {
      z-index: 6;
    }

  @media screen and (min-width: 1264px) {
    .side-nav {
      z-index: 1;
    }
  }
</style>
