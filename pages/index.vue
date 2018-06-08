<template>
  <v-container grid-list-md justify-center->
    <v-select label="Procure um item pela categoria" :items="categorys" v-model="categorySelected" autocomplete></v-select>
    <v-layout class="my-2" row wrap>
      <v-flex v-for="item in items" :key="item.id" xl2 lg3 md4 sm6 xs12>
        <v-card flat tile>
          <v-card-media :src="item.imgSrc" height="192px" @click="onItemSelected"></v-card-media>
        </v-card>
      </v-flex>
      <!-- <v-flex v-for="item in items" :key="item.imgSrc" xl2 lg3 md4 sm6 xs12 class="text-xs-center">
        <img class="item-img elevation-1" :src="item.imgSrc" @click="onItemSelected">
      </v-flex> -->
    </v-layout>
    <v-dialog v-model="dialog" max-width="512" origin="top left">
      <v-card>
        <v-card-media height="384" :src="itemSelected.imgSrc">
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

  @Component
  export default class extends Vue {

    items: Item[] = [
      new Item(1, 'http://www.stationpresentes.com.br/loja/produtos/monoersa.jpg', 'Borracha', 'Uma borracha'),
      new Item(2, 'http://www.stationpresentes.com.br/loja/produtos/monoersa.jpg', 'Borracha', 'Uma borracha'),
      new Item(3, 'http://www.stationpresentes.com.br/loja/produtos/monoersa.jpg', 'Borracha', 'Uma borracha'),
      new Item(4, 'http://www.stationpresentes.com.br/loja/produtos/monoersa.jpg', 'Borracha', 'Uma borracha'),
      new Item(5, 'http://www.stationpresentes.com.br/loja/produtos/monoersa.jpg', 'Borracha', 'Uma borracha'),
      new Item(6, 'http://www.stationpresentes.com.br/loja/produtos/monoersa.jpg', 'Borracha', 'Uma borracha'),
      new Item(7, 'http://www.stationpresentes.com.br/loja/produtos/monoersa.jpg', 'Borracha', 'Uma borracha'),
      new Item(8, 'http://www.stationpresentes.com.br/loja/produtos/monoersa.jpg', 'Borracha', 'Uma borracha'),
      new Item(9, 'http://www.stationpresentes.com.br/loja/produtos/monoersa.jpg', 'Borracha', 'Uma borracha'),
      new Item(10, 'http://www.stationpresentes.com.br/loja/produtos/monoersa.jpg', 'Borracha', 'Uma borracha'),
      new Item(11, 'http://www.stationpresentes.com.br/loja/produtos/monoersa.jpg', 'Borracha', 'Uma borracha'),
      new Item(12, 'http://www.stationpresentes.com.br/loja/produtos/monoersa.jpg', 'Borracha', 'Uma borracha'),
      new Item(13, 'http://www.stationpresentes.com.br/loja/produtos/monoersa.jpg', 'Borracha', 'Uma borracha'),
      new Item(14, 'http://www.stationpresentes.com.br/loja/produtos/monoersa.jpg', 'Borracha', 'Uma borracha'),
      new Item(15, 'http://www.stationpresentes.com.br/loja/produtos/monoersa.jpg', 'Borracha', 'Uma borracha'),
      new Item(16, 'http://www.stationpresentes.com.br/loja/produtos/monoersa.jpg', 'Borracha', 'Uma borracha'),
      new Item(17, 'http://www.stationpresentes.com.br/loja/produtos/monoersa.jpg', 'Borracha', 'Uma borracha'),
      new Item(18, 'http://www.stationpresentes.com.br/loja/produtos/monoersa.jpg', 'Borracha', 'Uma borracha'),
      new Item(19, 'http://www.stationpresentes.com.br/loja/produtos/monoersa.jpg', 'Borracha', 'Uma borracha'),
      new Item(20, 'http://www.stationpresentes.com.br/loja/produtos/monoersa.jpg', 'Borracha', 'Uma borracha')
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

    itemSelected: Item | undefined = new Item(NaN, '', '', '')

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
