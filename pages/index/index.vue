<template>
  <v-container fluid grid-list-xl>
    <v-navigation-drawer fixed :clipped="isClipped" app class="side-nav">
      <v-toolbar flat class="transparent">
        <v-icon>filter_list</v-icon>
        <v-toolbar-title>Filtro</v-toolbar-title>
      </v-toolbar>
      <v-divider></v-divider>
      <v-container fluid>
        <v-layout wrap>
          <v-flex xs12>
            <v-text-field v-model="descriptionText" color="primary" label="Descrição" prepend-icon="description" hide-no-data clearable></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-autocomplete v-model="selectedCategory" :items="categoriesNames" color="primary" label="Categorias" prepend-icon="category" hide-no-data clearable></v-autocomplete>
          </v-flex>
          <v-flex xs12>
            <v-autocomplete v-model="selectedLocal" :items="localsNames" color="primary" label="Locais" prepend-icon="place" hide-no-data clearable></v-autocomplete>
          </v-flex>
          <v-flex xs12>
            <v-menu v-model="dateMenu" :close-on-content-click="false" :nudge-right="40" lazy transition="scale-transition" offset-y class="fill-width">
              <v-text-field slot="activator" v-model="selectedDate" label="Data de perda" prepend-icon="event" clearable readonly></v-text-field>
              <v-date-picker v-model="selectedDate" locale="pt-br" :max="(new Date()).toISOString().substr(0, 10)" min="2018-01-01"></v-date-picker>
            </v-menu>
          </v-flex>
        </v-layout>
      </v-container>
    </v-navigation-drawer>
    <v-layout wrap>
      <v-flex v-for="item in items" :key="item.id" xs12 sm6 md4 lg3 xl2>
        <v-card class="item-card">
          <v-card-media class="container-overlay" contain @click.native="$router.push(`retrieve/${item.id}`)">
            <img class="card-image" :src="item.thumbnail" alt="">
            <div class="overlay">
              <v-btn block flat color="white" class="text blur-button">Reivindicar</v-btn>
            </div>
          </v-card-media>
          <v-expansion-panel>
            <v-expansion-panel-content>
              <div slot="header" class="subheading">{{ item.description }}</div>
              <v-list>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon>category</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title>Categorias</v-list-tile-title>
                </v-list-tile>
                <v-container fluid>
                  <v-layout row wrap justify-center>
                    <v-chip
                      v-for="(category, i) in item.categories"
                      :key="i"
                      :color="(i % 2 == 0) ? 'primary' : 'secondary'"
                      text-color="white"
                    >{{ category.name }}</v-chip>
                  </v-layout>
                </v-container>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon>place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title>{{ item.local.name }}</v-list-tile-title>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon>event</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title>{{ item.foundDate.toISOString() }}</v-list-tile-title>
                </v-list-tile>
                <v-list-tile v-show="isMobile">
                  <v-list-tile-content class="text-xs-center">
                    <v-btn block outline color="secondary" @click.native="$router.push(`retrieve/${item.id}`)">Reivindicar</v-btn>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import { Action, State } from 'vuex-class'
import Category from '~/domain/Category'
import Item from '~/domain/Item'
import Local from '~/domain/Local'
import User, { Permission } from '~/domain/User'

@Component
export default class extends Vue {

  private items: Item[] = [
    new Item(
      'Ola',
      'Um estojo',
      'http://www.alfa81.com.br/wp-content/uploads/2017/04/estoj-liso-med-az.10080007.jpg',
      new User(
        "222",
        "gmochi56@outlook.com",
        "Gabriel Mochi Ribeiro",
        "https://avatars3.githubusercontent.com/u/20032634?s=460&v=4",
        Permission.TOTAL,
        '1'
      ),
      new Local('1', 'Sala 304'),
      '123',
      [
        new Category('0', 'estojo'),
        new Category('1', 'material escolar'),
        new Category('2', 'algodão 100% natural')
      ]
    ),
    new Item(
      'Ola',
      'Um estojo',
      'http://www.alfa81.com.br/wp-content/uploads/2017/04/estoj-liso-med-az.10080007.jpg',
      new User(
        "222",
        "gmochi56@outlook.com",
        "Gabriel Mochi Ribeiro",
        "https://avatars3.githubusercontent.com/u/20032634?s=460&v=4",
        Permission.TOTAL,
        '1'
      ),
      new Local('1', 'Sala 304'),
      '2',
      [
        new Category('0', 'estojo'),
        new Category('1', 'material escolar'),
        new Category('2', 'algodão 100% natural')
      ]
    ),
    new Item(
      'Ola',
      'Um estojo',
      'http://www.alfa81.com.br/wp-content/uploads/2017/04/estoj-liso-med-az.10080007.jpg',
      new User(
        "222",
        "gmochi56@outlook.com",
        "Gabriel Mochi Ribeiro",
        "https://avatars3.githubusercontent.com/u/20032634?s=460&v=4",
        Permission.TOTAL,
        '1'
      ),
      new Local('1', 'Sala 304'),
      '2',
      [
        new Category('0', 'estojo'),
        new Category('1', 'material escolar'),
        new Category('2', 'algodão 100% natural')
      ]
    ),new Item(
      'Ola',
      'Um estojo',
      'http://www.alfa81.com.br/wp-content/uploads/2017/04/estoj-liso-med-az.10080007.jpg',
      new User(
        "222",
        "gmochi56@outlook.com",
        "Gabriel Mochi Ribeiro",
        "https://avatars3.githubusercontent.com/u/20032634?s=460&v=4",
        Permission.TOTAL,
        '1'
      ),
      new Local('1', 'Sala 304'),
      '2',
      [
        new Category('0', 'estojo'),
        new Category('1', 'material escolar'),
        new Category('2', 'algodão 100% natural')
      ]
    ),
    new Item(
      'Ola',
      'Um estojo',
      'http://www.alfa81.com.br/wp-content/uploads/2017/04/estoj-liso-med-az.10080007.jpg',
      new User(
        "222",
        "gmochi56@outlook.com",
        "Gabriel Mochi Ribeiro",
        "https://avatars3.githubusercontent.com/u/20032634?s=460&v=4",
        Permission.TOTAL,
        '1'
      ),
      new Local('1', 'Sala 304'),
      '2',
      [
        new Category('0', 'estojo'),
        new Category('1', 'material escolar'),
        new Category('2', 'algodão 100% natural')
      ]
    ),
    new Item(
      'Ola',
      'Um estojo',
      'http://www.alfa81.com.br/wp-content/uploads/2017/04/estoj-liso-med-az.10080007.jpg',
      new User(
        "222",
        "gmochi56@outlook.com",
        "Gabriel Mochi Ribeiro",
        "https://avatars3.githubusercontent.com/u/20032634?s=460&v=4",
        Permission.TOTAL,
        '1'
      ),
      new Local('1', 'Sala 304'),
      '2',
      [
        new Category('0', 'estojo'),
        new Category('1', 'material escolar'),
        new Category('2', 'algodão 100% natural')
      ]
    ),
    new Item(
      'Ola',
      'Um estojo',
      'http://www.alfa81.com.br/wp-content/uploads/2017/04/estoj-liso-med-az.10080007.jpg',
      new User(
        "222",
        "gmochi56@outlook.com",
        "Gabriel Mochi Ribeiro",
        "https://avatars3.githubusercontent.com/u/20032634?s=460&v=4",
        Permission.TOTAL,
        '1'
      ),
      new Local('1', 'Sala 304'),
      '2',
      [
        new Category('0', 'estojo'),
        new Category('1', 'material escolar'),
        new Category('2', 'algodão 100% natural')
      ]
    ),
    new Item(
      'Ola',
      'Um estojo',
      'http://www.alfa81.com.br/wp-content/uploads/2017/04/estoj-liso-med-az.10080007.jpg',
      new User(
        "222",
        "gmochi56@outlook.com",
        "Gabriel Mochi Ribeiro",
        "https://avatars3.githubusercontent.com/u/20032634?s=460&v=4",
        Permission.TOTAL,
        '1'
      ),
      new Local('1', 'Sala 304'),
      '2',
      [
        new Category('0', 'estojo'),
        new Category('1', 'material escolar'),
        new Category('2', 'algodão 100% natural')
      ]
    ),
    new Item(
      'Ola',
      'Um estojo',
      'http://www.alfa81.com.br/wp-content/uploads/2017/04/estoj-liso-med-az.10080007.jpg',
      new User(
        "222",
        "gmochi56@outlook.com",
        "Gabriel Mochi Ribeiro",
        "https://avatars3.githubusercontent.com/u/20032634?s=460&v=4",
        Permission.TOTAL,
        '1'
      ),
      new Local('1', 'Sala 304'),
      '2',
      [
        new Category('0', 'estojo'),
        new Category('1', 'material escolar'),
        new Category('2', 'algodão 100% natural')
      ]
    )
  ]

  private descriptionText: string = null
  private selectedCategory: string = null
  private selectedLocal: string = null
  private selectedDate: string = null
  private dateMenu: any = null
  private windowWidth: Number = null
  private isMobile: boolean = false
  private isClipped: boolean = true

  @State('categories') private categories: Category[]
  @State('locals') private locals: Local[]

  private get categoriesNames(): string[] {
    return this.categories.map(category => category.name)
  }

  private get localsNames(): string[] {
    return this.locals.map(local => local.name)
  }

  @Watch('selectedCategory')
  private onSelectedCategoryChange(newVal: string) {
    alert(newVal)
  }

  @Watch('selectedLocal')
  private onSelectedLocalChange(newVal: string) {
    alert(newVal)
  }

  @Watch('selectedDate')
  private onSelectedDate(newVal: string) {
    alert(newVal)
  }

  responseItems(width: Number) {
    this.isMobile = width < 1025
    this.isClipped = width > 1263
  }

  private async created() {
    this.windowWidth = window.innerWidth
    this.responseItems(this.windowWidth)

    window.onresize = () => {
      this.windowWidth = window.innerWidth
      this.responseItems(this.windowWidth)
    }
  }

}
</script>

<style>
.blur-button .v-btn__content {
  color: white !important;
}
</style>

<style scoped>
.item-card {
  cursor: pointer;
}

.item-img {
  width: 256px;
  height: 192px;
}

.close-dialog-button {
  margin-top: -16px;
  margin-right: -16px;
}

.blurImage {
  filter: blur(5px);
}

.container-overlay {
  position: relative;
}

.card-image {
  height: 192px;
  width: 100%;
}

.overlay {
  display: none;
}

@media screen and (min-width: 1024px) {
  .overlay {
    display: block;
    position: absolute;
    transition: opacity 0.5s ease;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    opacity: 0;
    width: 100%;
    height: 100%;
  }

  .container-overlay:hover .card-image {
    filter: blur(5px);
  }

  .container-overlay:hover .overlay {
    opacity: 1;
    background: rgba(0, 0, 0, 1);
    background: -moz-radial-gradient(
      center,
      ellipse cover,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 7%,
      rgba(13, 10, 13, 0.5) 12%,
      rgba(31, 29, 31, 0.5) 25%,
      rgba(20, 16, 20, 0.5) 35%,
      rgba(23, 19, 23, 0.5) 39%,
      rgba(17, 17, 17, 0.5) 47%,
      rgba(44, 44, 44, 0.5) 64%,
      rgba(43, 43, 43, 0.5) 76%,
      rgba(28, 28, 28, 0.5) 85%,
      rgba(19, 19, 19, 0.5) 100%
    );
    background: -webkit-gradient(
      radial,
      center center,
      0px,
      center center,
      100%,
      color-stop(0%, rgba(0, 0, 0, 0.5)),
      color-stop(7%, rgba(0, 0, 0, 0.5)),
      color-stop(12%, rgba(13, 10, 13, 0.5)),
      color-stop(25%, rgba(31, 29, 31, 0.5)),
      color-stop(35%, rgba(20, 16, 20, 0.5)),
      color-stop(39%, rgba(23, 19, 23, 0.5)),
      color-stop(47%, rgba(17, 17, 17, 0.5)),
      color-stop(64%, rgba(44, 44, 44, 0.5)),
      color-stop(76%, rgba(43, 43, 43, 0.5)),
      color-stop(85%, rgba(28, 28, 28, 0.5)),
      color-stop(100%, rgba(19, 19, 19, 0.5))
    );
    background: -webkit-radial-gradient(
      center,
      ellipse cover,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 7%,
      rgba(13, 10, 13, 0.5) 12%,
      rgba(31, 29, 31, 0.5) 25%,
      rgba(20, 16, 20, 0.5) 35%,
      rgba(23, 19, 23, 0.5) 39%,
      rgba(17, 17, 17, 0.5) 47%,
      rgba(44, 44, 44, 0.5) 64%,
      rgba(43, 43, 43, 0.5) 76%,
      rgba(28, 28, 28, 0.5) 85%,
      rgba(19, 19, 19, 0.5) 100%
    );
    background: -o-radial-gradient(
      center,
      ellipse cover,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 7%,
      rgba(13, 10, 13, 0.5) 12%,
      rgba(31, 29, 31, 0.5) 25%,
      rgba(20, 16, 20, 0.5) 35%,
      rgba(23, 19, 23, 0.5) 39%,
      rgba(17, 17, 17, 0.5) 47%,
      rgba(44, 44, 44, 0.5) 64%,
      rgba(43, 43, 43, 0.5) 76%,
      rgba(28, 28, 28, 0.5) 85%,
      rgba(19, 19, 19, 0.5) 100%
    );
    background: -ms-radial-gradient(
      center,
      ellipse cover,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 7%,
      rgba(13, 10, 13, 0.5) 12%,
      rgba(31, 29, 31, 0.5) 25%,
      rgba(20, 16, 20, 0.5) 35%,
      rgba(23, 19, 23, 0.5) 39%,
      rgba(17, 17, 17, 0.5) 47%,
      rgba(44, 44, 44, 0.5) 64%,
      rgba(43, 43, 43, 0.5) 76%,
      rgba(28, 28, 28, 0.5) 85%,
      rgba(19, 19, 19, 0.5) 100%
    );
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 7%,
      rgba(13, 10, 13, 0.5) 12%,
      rgba(31, 29, 31, 0.5) 25%,
      rgba(20, 16, 20, 0.5) 35%,
      rgba(23, 19, 23, 0.5) 39%,
      rgba(17, 17, 17, 0.5) 47%,
      rgba(44, 44, 44, 0.5) 64%,
      rgba(43, 43, 43, 0.5) 76%,
      rgba(28, 28, 28, 0.5) 85%,
      rgba(19, 19, 19, 0.5) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#131313', GradientType=1 );
  }

  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 18px;
  }
}
</style>

