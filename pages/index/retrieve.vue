<template>
    <v-container>
        <h1>testando</h1>
        <img src="http://www.alfa81.com.br/wp-content/uploads/2017/04/estoj-liso-med-az.10080007.jpg" alt="">
    </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import selectedItem from "./index.vue";

@Component
export default class extends Vue {}
</script>

<style scoped>
    img{
        width: 192px;
        height: auto;
    }
</style>
