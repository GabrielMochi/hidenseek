<template>
  <v-container fluid fill-height justify-center class="login-background">
    <v-card width="400" color="purple accent-4" dark>
      <v-container>
        <v-form class="text-xs-center">
          <v-text-field label="Usuário" color="white" required></v-text-field>
          <v-text-field label="Senha" color="white" required></v-text-field>
          <v-checkbox label="Lembrar de mim" color="white" required></v-checkbox>
          <v-btn color="white" light block>Login</v-btn>
        </v-form>
      </v-container>
    </v-card>
  </v-container>
</template>

<script lang="ts">
</script>

<style scoped>
  .login-background {
    background: url('./../assets/img/doodles.png')
  }
</style>
