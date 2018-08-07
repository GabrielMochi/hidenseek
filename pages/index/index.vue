<template>
  <v-container fluid grid-list-xl>
    <v-navigation-drawer fixed :clipped="isClipped" app class="z-index-10">
      <v-toolbar flat class="transparent">
        <v-icon>filter_list</v-icon>
        <v-toolbar-title>Filtro</v-toolbar-title>
      </v-toolbar>
      <v-divider></v-divider>
      <v-container fluid>
        <v-layout wrap>
          <v-flex xs12>
        <v-autocomplete v-model="selectedCategory" :items="categorysNames" color="primary" label="Categorias" prepend-icon="category" hide-no-data clearable></v-autocomplete>
          </v-flex>
          <v-flex xs12>
        <v-autocomplete v-model="selectedLocal" :items="localsNames" color="primary" label="Locais" prepend-icon="place" hide-no-data clearable></v-autocomplete>
          </v-flex>
          <v-flex xs12>
        <v-menu v-model="dateMenu" :close-on-content-click="false" :nudge-right="40" lazy transition="scale-transition" offset-y class="fill-width">
          <v-text-field slot="activator" v-model="selectedDate" label="Data de perda" prepend-icon="event" clearable readonly></v-text-field>
          <v-date-picker v-model="selectedDate" locale="pt-br" :max="new Date().toISOString().substr(0, 10)" min="2018-01-01"></v-date-picker>
        </v-menu>
          </v-flex>
        </v-layout>
      </v-container>
    </v-navigation-drawer>
    <v-layout wrap>
      <v-flex v-for="item in items" :key="item.id" xs12 sm6 md4 lg3 xl2>
        <!-- Card -->
        <v-card class="item-card">
            <v-card-media class="container-overlay" contain @click.native="onItemSelected(item.id)" @>
              <img class="card-image" :src="item.photoURL" alt="">
              <div class="overlay">
                <v-btn flat block class="text" to="retrieve" color="primary ">Reivindicar</v-btn>
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
                  <v-list-tile-title>{{ item.category.name }}</v-list-tile-title>
                </v-list-tile>
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
                  <v-list-tile-title>{{ item.datetime.toISOString() }}</v-list-tile-title>
                </v-list-tile>
                <v-list-tile v-show="isMobile">
                  <v-list-tile-content class="text-xs-center">
                    <v-btn block outline color="secondary" @click.native="onItemSelected(item.id)">Reivindicar</v-btn>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- <v-dialog v-model="dialog" max-width="512" origin="top left">
      <v-card>
        <v-card-media height="384" contain :src="selectedItem.photoURL">
          <v-container fluid fill-height justify-end align-start>
            <v-btn small class="close-dialog-button" flat icon @click.stop="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-container>
        </v-card-media>
        <v-card-title primary-title class="subheading">{{ selectedItem.description }}</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat>Reivindicar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import { Action, State } from "vuex-class";
import Category from "~/model/Category";
import Item from "~/model/Item";
import Local from "~/model/Local";
import User, { UserPermission } from "~/model/User";

@Component
export default class extends Vue {
  private items: Item[] = [
    new Item(
      0,
      "Um estojo azul de zíper prata.",
      "http://www.alfa81.com.br/wp-content/uploads/2017/04/estoj-liso-med-az.10080007.jpg",
      new User(
        1,
        "222",
        "Gabriel Mochi Ribeiro",
        "gmochi56@outlook.com",
        "https://avatars3.githubusercontent.com/u/20032634?s=460&v=4",
        UserPermission.TOTAL
      ),
      new Category(0, "Borracha"),
      new Local(0, "Sala 304")
    ),
    new Item(
      1,
      "Um estojo azul de zíper prata.",
      "http://www.alfa81.com.br/wp-content/uploads/2017/04/estoj-liso-med-az.10080007.jpg",
      new User(
        1,
        "222",
        "Gabriel Mochi Ribeiro",
        "gmochi56@outlook.com",
        "https://avatars3.githubusercontent.com/u/20032634?s=460&v=4",
        UserPermission.TOTAL
      ),
      new Category(0, "Borracha"),
      new Local(0, "Sala 304")
    ),
    new Item(
      2,
      "Um estojo azul de zíper prata.",
      "http://www.alfa81.com.br/wp-content/uploads/2017/04/estoj-liso-med-az.10080007.jpg",
      new User(
        1,
        "222",
        "Gabriel Mochi Ribeiro",
        "gmochi56@outlook.com",
        "https://avatars3.githubusercontent.com/u/20032634?s=460&v=4",
        UserPermission.TOTAL
      ),
      new Category(0, "Borracha"),
      new Local(0, "Sala 304")
    ),
    new Item(
      3,
      "Um estojo azul de zíper prata.",
      "http://www.alfa81.com.br/wp-content/uploads/2017/04/estoj-liso-med-az.10080007.jpg",
      new User(
        1,
        "222",
        "Gabriel Mochi Ribeiro",
        "gmochi56@outlook.com",
        "https://avatars3.githubusercontent.com/u/20032634?s=460&v=4",
        UserPermission.TOTAL
      ),
      new Category(0, "Borracha"),
      new Local(0, "Sala 304")
    ),
    new Item(
      4,
      "Um estojo azul de zíper prata.",
      "http://www.alfa81.com.br/wp-content/uploads/2017/04/estoj-liso-med-az.10080007.jpg",
      new User(
        1,
        "222",
        "Gabriel Mochi Ribeiro",
        "gmochi56@outlook.com",
        "https://avatars3.githubusercontent.com/u/20032634?s=460&v=4",
        UserPermission.TOTAL
      ),
      new Category(0, "Borracha"),
      new Local(0, "Sala 304")
    ),
    new Item(
      5,
      "Um estojo azul de zíper prata.",
      "http://www.alfa81.com.br/wp-content/uploads/2017/04/estoj-liso-med-az.10080007.jpg",
      new User(
        1,
        "222",
        "Gabriel Mochi Ribeiro",
        "gmochi56@outlook.com",
        "https://avatars3.githubusercontent.com/u/20032634?s=460&v=4",
        UserPermission.TOTAL
      ),
      new Category(0, "Borracha"),
      new Local(0, "Sala 304")
    ),
    new Item(
      6,
      "Um estojo azul de zíper prata.",
      "http://www.alfa81.com.br/wp-content/uploads/2017/04/estoj-liso-med-az.10080007.jpg",
      new User(
        1,
        "222",
        "Gabriel Mochi Ribeiro",
        "gmochi56@outlook.com",
        "https://avatars3.githubusercontent.com/u/20032634?s=460&v=4",
        UserPermission.TOTAL
      ),
      new Category(0, "Borracha"),
      new Local(0, "Sala 304")
    ),
    new Item(
      7,
      "Um estojo azul de zíper prata.",
      "http://www.alfa81.com.br/wp-content/uploads/2017/04/estoj-liso-med-az.10080007.jpg",
      new User(
        1,
        "222",
        "Gabriel Mochi Ribeiro",
        "gmochi56@outlook.com",
        "https://avatars3.githubusercontent.com/u/20032634?s=460&v=4",
        UserPermission.TOTAL
      ),
      new Category(0, "Borracha"),
      new Local(0, "Sala 304")
    )
  ];

  private selectedCategory: string = null;
  private selectedLocal: string = null;
  private selectedDate: string = null;
  private dialog = false;
  private selectedItem: Item = new Item(null, null, null, null, null, null);
  private dateMenu: any = null;
  private windowWidth: Number = null;

  @State("categorys") private categorys: Category[];
  @State("locals") private locals: Local[];

  @Action("loadCategorys") private loadCategorys: () => void;

  private get categorysNames(): string[] {
    return this.categorys.map(category => category.name);
  }

  private get localsNames(): string[] {
    return this.locals.map(local => local.name);
  }

  private get isClipped(): boolean {
    return this.windowWidth > 1366;
  }

  private get isMobile(): boolean{
    return this.windowWidth <= 1366;
  }

  @Watch("selectedCategory")
  private onSelectedCategoryChange(newVal: string) {
    alert(newVal);
  }

  @Watch("selectedLocal")
  private onSelectedLocalChange(newVal: string) {
    alert(newVal);
  }

  @Watch("selectedDate")
  private onSelectedDate(newVal: string) {
    alert(newVal);
  }

  private onItemSelected(id: number) {
    this.selectedItem = this.items.find((item: Item) => item.id === id);
    this.dialog = true;
  }

  private async created() {
    console.log(this.$vuetify);
    await this.loadCategorys();
    this.$vuetify.theme.primary = "#90caf9";
    this.$vuetify.theme.secondary = "#5d99c6";
    this.$vuetify.theme.accent = "#c3fdff";
    this.$vuetify.theme.borderInputColor = "#ffffff";
    this.windowWidth = window.innerWidth;
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    }; 
  }
}
</script>

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
}

@media screen and (min-width: 1367px) {
  .overlay {
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
