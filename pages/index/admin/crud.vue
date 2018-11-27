<template>
  <v-container grid-list-xl>
    <v-text-field v-model="categoryName"></v-text-field>
    <v-btn color="success" @click="saveCategory">salvar</v-btn>
    <div v-for="category in categories" :key="category.id">
      {{ category.id }}
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import { Action, State } from 'vuex-class'
import Category from '~/domain/Category'

@Component
export default class extends Vue {

  @State('categories') private categories: Category[]
  @Action('insertCategory') private insertCategory: (category: Category) => Category

  private categoryName: string = ''

  private saveCategory () {
    this.insertCategory(new Category(this.categoryName))
  }

  private async created () {
  }

}
</script>
<style>

</style>
