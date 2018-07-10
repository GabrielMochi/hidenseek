<template>
  <v-container fluid grid-list-lg>
    <v-navigation-drawer fixed clipped app class="z-index-1">
      <v-toolbar flat class="transparent">
        <v-icon>filter_list</v-icon>
        <v-toolbar-title>Filtro</v-toolbar-title>
      </v-toolbar>
      <v-container>
        <v-autocomplete v-model="selectedCategory" :items="categorysNames" color="primary" label="Categorias" prepend-icon="category" hide-no-data clearable></v-autocomplete>
        <v-autocomplete v-model="selectedLocal" :items="localsNames" color="primary" label="Locais" prepend-icon="map" hide-no-data clearable></v-autocomplete>
        <v-menu v-model="dateMenu" :close-on-content-click="false" :nudge-right="40" lazy transition="scale-transition" offset-y class="fill-width">
          <v-text-field slot="activator" v-model="selectedDate" label="Data de perda" prepend-icon="event" clearable readonly></v-text-field>
          <v-date-picker v-model="selectedDate" locale="pt-br" :max="new Date().toISOString().substr(0, 10)" min="2018-01-01"></v-date-picker>
        </v-menu>
      </v-container>
    </v-navigation-drawer>
    <v-layout wrap>
      <v-flex v-for="item in items" :key="item.id" xs12 sm6 md4 lg3 xl2>
        <v-card>
          <v-card-media contain :src="item.photoURL" height="192px" @click="onItemSelected"></v-card-media>
          <v-card-title>{{ item.description }}</v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog v-if="selectedItem" v-model="dialog" max-width="512" origin="top left">
      <v-card>
        <v-card-media height="384" :src="selectedItem.photoURL">
          <v-container fluid fill-height justify-end align-start>
            <v-btn small class="close-dialog-button" flat icon @click.stop="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-container>
        </v-card-media>
        <v-card-title>{{ selectedItem.description }}</v-card-title>
        <v-card-actions>
          <v-btn outline color="primary">Reivindicar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
  import { Component, Watch, Vue } from 'vue-property-decorator'
  import { Action, State } from 'vuex-class'
  import Item from '~/model/Item'
  import User, { UserPermission } from '~/model/User'
  import Category from '~/model/Category'
  import Local from '~/model/Local'

  @Component
  export default class extends Vue {

    // data
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

    selectedCategory: string = null
    selectedLocal: string = null
    selectedDate: string = null
    dialog: boolean = false
    selectedItem: Item = null
    dateMenu: any = null

    @State('categorys') categorys: Category[]
    @State('locals') locals: Local[]

    // computed
    get categorysNames (): string[] {
      return this.categorys.map(category => category.name)
    }

    get localsNames (): string[] {
      return this.locals.map(local => local.name)
    }

    // watch
    @Watch('selectedCategory')
    onSelectedCategoryChange (newVal: string) {
      alert(newVal)
    }

    @Watch('selectedLocal')
    onSelectedLocalChange (newVal: string) {
      alert(newVal)
    }

    @Watch('selectedDate')
    onSelectedDate (newVal: string) {
      alert(newVal)
    }

    // methods
    onItemSelected (event: any) {
      console.log(event)
    }

    @Action('loadCategorys') loadCategorys: Function

    // hooks
    async created () {
      await this.loadCategorys()
      this.$vuetify.theme.primary = '#ba68c8'
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
