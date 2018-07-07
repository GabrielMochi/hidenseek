<template>
  <v-container fluid grid-list-lg>
    <v-navigation-drawer fixed clipped app class="z-index-1">
      <v-toolbar flat class="transparent">
        <v-icon>filter_list</v-icon>
        <v-toolbar-title>Filtro</v-toolbar-title>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list>
        <v-list-tile>
          <v-list-tile-content>
            <v-select></v-select>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-layout wrap>
      <v-flex v-for="item in items" :key="item.id" xs12 sm6 md4 lg3 xl2>
        <v-card>
          <v-card-media contain :src="item.photoURL" height="192px" @click="onItemSelected"></v-card-media>
          <v-card-title>{{ item.description }}</v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" max-width="512" origin="top left">
      <v-card>
        <v-card-media height="384" :src="itemSelected.photoURL">
          <v-container fluid fill-height justify-end align-start>
            <v-btn small class="close-dialog-button" flat icon @click.stop="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-container>
        </v-card-media>
        <v-card-title>{{ itemSelected.description }}</v-card-title>
        <v-card-actions>
          <v-btn outline color="primary">Reivindicar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
  import { Component, Watch, Vue } from 'vue-property-decorator'
  import Item from '~/model/Item'
  import User, { UserPermission } from '~/model/User'
  import Category from '~/model/Category'
  import Local from '~/model/Local'

  @Component
  export default class extends Vue {

    items: Item[] = [
      new Item(
        0,
        'Um estojo que foi perdido',
        'http://www.alfa81.com.br/wp-content/uploads/2017/04/estoj-liso-med-az.10080007.jpg',
        new User(
          1,
          '222',
          'Gabriel Mochi Ribeiro',
          'gmochi56@outlook.com',
          'https://avatars3.githubusercontent.com/u/20032634?s=460&v=4',
          UserPermission.TOTAL
        ),
        new Category(0, 'Borracha'),
        new Local(0, 'Sala 304')
      ),
      new Item(
        1,
        'Um estojo que foi perdido aaaa a a  a d da sd a sd a d a sd as d asd asd ad',
        'http://www.alfa81.com.br/wp-content/uploads/2017/04/estoj-liso-med-az.10080007.jpg',
        new User(
          1,
          '222',
          'Gabriel Mochi Ribeiro',
          'gmochi56@outlook.com',
          'https://avatars3.githubusercontent.com/u/20032634?s=460&v=4',
          UserPermission.TOTAL
        ),
        new Category(0, 'Borracha'),
        new Local(0, 'Sala 304')
      ),
      new Item(
        2,
        'Um estojo que foi perdido',
        'http://www.alfa81.com.br/wp-content/uploads/2017/04/estoj-liso-med-az.10080007.jpg',
        new User(
          1,
          '222',
          'Gabriel Mochi Ribeiro',
          'gmochi56@outlook.com',
          'https://avatars3.githubusercontent.com/u/20032634?s=460&v=4',
          UserPermission.TOTAL
        ),
        new Category(0, 'Borracha'),
        new Local(0, 'Sala 304')
      ),
      new Item(
        3,
        'Um estojo que foi perdido',
        'http://www.alfa81.com.br/wp-content/uploads/2017/04/estoj-liso-med-az.10080007.jpg',
        new User(
          1,
          '222',
          'Gabriel Mochi Ribeiro',
          'gmochi56@outlook.com',
          'https://avatars3.githubusercontent.com/u/20032634?s=460&v=4',
          UserPermission.TOTAL
        ),
        new Category(0, 'Borracha'),
        new Local(0, 'Sala 304')
      ),
      new Item(
        4,
        'Um estojo que foi perdido',
        'http://www.alfa81.com.br/wp-content/uploads/2017/04/estoj-liso-med-az.10080007.jpg',
        new User(
          1,
          '222',
          'Gabriel Mochi Ribeiro',
          'gmochi56@outlook.com',
          'https://avatars3.githubusercontent.com/u/20032634?s=460&v=4',
          UserPermission.TOTAL
        ),
        new Category(0, 'Borracha'),
        new Local(0, 'Sala 304')
      ),
      new Item(
        5,
        'Um estojo que foi perdido',
        'http://www.alfa81.com.br/wp-content/uploads/2017/04/estoj-liso-med-az.10080007.jpg',
        new User(
          1,
          '222',
          'Gabriel Mochi Ribeiro',
          'gmochi56@outlook.com',
          'https://avatars3.githubusercontent.com/u/20032634?s=460&v=4',
          UserPermission.TOTAL
        ),
        new Category(0, 'Borracha'),
        new Local(0, 'Sala 304')
      ),
      new Item(
        6,
        'Um estojo que foi perdido',
        'http://www.alfa81.com.br/wp-content/uploads/2017/04/estoj-liso-med-az.10080007.jpg',
        new User(
          1,
          '222',
          'Gabriel Mochi Ribeiro',
          'gmochi56@outlook.com',
          'https://avatars3.githubusercontent.com/u/20032634?s=460&v=4',
          UserPermission.TOTAL
        ),
        new Category(0, 'Borracha'),
        new Local(0, 'Sala 304')
      ),
      new Item(
        7,
        'Um estojo que foi perdido',
        'http://www.alfa81.com.br/wp-content/uploads/2017/04/estoj-liso-med-az.10080007.jpg',
        new User(
          1,
          '222',
          'Gabriel Mochi Ribeiro',
          'gmochi56@outlook.com',
          'https://avatars3.githubusercontent.com/u/20032634?s=460&v=4',
          UserPermission.TOTAL
        ),
        new Category(0, 'Borracha'),
        new Local(0, 'Sala 304')
      )
    ]

    categorySelected: string | null = null

    categorys: string[] = [
      'Celular',
      'Guarda-chuva',
      'Caneta',
      'Régua',
      'Relógio'
    ]

    dialog: boolean = false

    itemSelected: Item | undefined = new Item(null, null, null, null, null, null)

    @Watch('categorySelected')
    onCategorySelectedChanged(newVal: string) {
      this.categorySelected = newVal
    }

    onItemSelected (event: any) {
      console.log(event)
    }

  }
</script>

<style scoped>
  .item-img {
    width: 256px;
    height: 192px;
    cursor: pointer;
  }

  .close-dialog-button {
    margin-top: -8px;
    margin-right: -8px;
  }
</style>
