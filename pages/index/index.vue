<template>
 <!-- <no-ssr>-->
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
          <v-card class="item-card">
            <v-card-media class="container-overlay" contain @click.native="$router.push(`retrieve/${item.id}`)">
              <img class="card-image" :src="item.photoURL" alt="">
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
  <!--</no-ssr>-->
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
      "data:image/jpeg;base64,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",
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
      "data:image/jpeg;base64,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",
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

  private descriptionText: string = null;
  private selectedCategory: string = null;
  private selectedLocal: string = null;
  private selectedDate: string = null;
  private dateMenu: any = null;
  private windowWidth: Number = null;
  private isMobile: boolean = false;
  private isClipped: boolean = true;

  @State("categorys") private categorys: Category[];

  @State("locals") private locals: Local[];

  @Action("loadCategorys") private loadCategorys: () => void;

  private get categorysNames(): string[] {
    return this.categorys.map(category => category.name);
  }

  private get localsNames(): string[] {
    return this.locals.map(local => local.name);
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

  responseItems(width: Number) {
    this.isMobile = width < 1025;
    this.isClipped = width > 1263;
  }

  private async created() {
    await this.loadCategorys();
    this.windowWidth = window.innerWidth;
    this.responseItems(this.windowWidth);
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
      this.responseItems(this.windowWidth);
    };
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

