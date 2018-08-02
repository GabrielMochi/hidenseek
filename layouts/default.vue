<template>
  <v-app>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<style>
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
