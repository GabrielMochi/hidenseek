<template>
  <v-container grid-list-xl>
    <v-navigation-drawer fixed clipped="false" app class="side-nav">
      <v-container fluid>
        <v-layout wrap>
          <v-flex xs12 text-xs-center>
            <v-avatar size="128" class="mx-3">
              <img :src="user.thumbnail" :alt="user.name">
            </v-avatar>
          </v-flex>
          <v-flex xs12 text-xs-center>
            <div class="headline font-weight-medium ellipsis">{{user.name}}</div>
          </v-flex>
          <v-flex xs6>
            <div class="subheading font-weight-medium">Identificador: </div>
          </v-flex>
          <v-flex xs6 text-xs-right>
            <div  class="subheading ellipsis">{{user.distinctId}}</div>
          </v-flex>
          <v-flex xs3 block>
            <div class="subheading font-weight-medium">Email: </div>
          </v-flex>
          <v-flex xs9 fluid text-xs-right>
            <div class="subheading ellipsis">{{user.email}}</div>
          </v-flex>
          <v-flex xs12 text-xs-center>
            <v-btn color="primary" to="/user/edit">Editar Perfil</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-navigation-drawer>

        <v-container pa-0>
          <v-layout row wrap>
            <v-flex xs12 row>
              <v-card>
                <v-layout align-center>
                  <v-flex>
                    <v-card-text class="title">Filtrar por:</v-card-text>
                  </v-flex>
                  <v-flex>
                    <v-radio-group hide-details v-model="radios" row :mandatory="false">
                      <v-layout pa-3 justify-space-around :column="isMobile" align-content-center>
                        <v-radio label="Aprovado" color="success" value="radio-1"></v-radio>
                        <v-radio label="Reprovado" color="error" value="radio-2"></v-radio>
                        <v-radio label="Andamento" color="warning" value="radio-3"></v-radio>
                      </v-layout>
                    </v-radio-group>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
          <v-flex xs12>
            <v-card>
              <v-card-title><span class="headline">Histórico Pessoal</span>
              <v-spacer></v-spacer>
              <v-text-field v-model="search" append-icon="search" label="Buscar"
              single-line hide-details></v-text-field>
              </v-card-title>
              <v-data-table :headers="headers"
              :items="tableItems" :search="search" rows-per-page-text="Linhas por página">
                <template slot="items" slot-scope="props">
                  <td class="text-xs-center">{{props.item.date}}</td>
                  <td class="text-xs-center">{{props.item.idItem}}</td>
                  <td class="text-xs-center">{{props.item.title}}</td>
                  <td class="text-xs-center">{{props.item.category}}</td>
                  <td class="text-xs-center">{{props.item.local}}</td>
                  <td class="text-xs-center"><v-icon :color="changeIconColor(props.item.status)">{{props.item.status}}</v-icon></td>
                </template>
                <v-alert slot="no-results" :value="true" color="error" icon="warning">
                  Sua busca por "{{search}}" não encontrou resultados.
                </v-alert>
                <template slot="pageText" slot-scope="props">
                  Linha {{ props.pageStart }} - {{ props.pageStop }} de {{ props.itemsLength }}
                </template>
              </v-data-table>
            </v-card>
          </v-flex>
          </v-layout>
        </v-container>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import User, { Permission } from "~/domain/User";

@Component
export default class extends Vue {

  private isMobile: boolean = false;
  private windowWidth: Number = null;

  user = new User(
    "222",
    "gmochi56@outlook.com",
    "Gabriel Mochi Ribeiro",
    "https://avatars3.githubusercontent.com/u/20032634?s=460&v=4",
    Permission.TOTAL,
    '1'
  );

  private search: string = "";
  private headers: any[] = [
    {
      text: "Data",
      align: "left",
      value: "date"
    },
    {
      text: "Código do Item",
      align: "center",
      value: "idItem"
    },
    {
      text: "Título",
      align: "center",
      value: "title"
    },
    {
      text: "Categoria",
      align: "center",
      value: "category"
    },
    {
      text: "Local",
      align: "center",
      value: "local"
    },
    {
      text: "Status",
      align: "center",
      value: "status"
    }
  ];
  private tableItems: any[] = [
    {
      value: false,
      date: "23/06/2018",
      idItem: "01",
      title: "Celular Rosa",
      category: "Eletrônico",
      local: "Sala 2",
      status: "hourglass_empty"
    },
    {
      value: false,
      date: "24/06/2018",
      idItem: "02",
      title: "Mochila Azul",
      category: "Escolares",
      local: "Bloco A",
      status: "clear"
    },
    {
      value: false,
      date: "24/06/2018",
      idItem: "03",
      title: "Teclado Verde",
      category: "Eletrônico, Computador",
      local: "Bloco C",
      status: "check"
    },
    {
      value: false,
      date: "23/06/2018",
      idItem: "01",
      title: "Celular Rosa",
      category: "Eletrônico",
      local: "Sala 2",
      status: "hourglass_empty"
    },
    {
      value: false,
      date: "24/06/2018",
      idItem: "02",
      title: "Mochila Azul",
      category: "Escolares",
      local: "Bloco A",
      status: "clear"
    },
    {
      value: false,
      date: "24/06/2018",
      idItem: "03",
      title: "Teclado Verde",
      category: "Eletrônico, Computador",
      local: "Bloco C",
      status: "check"
    }
  ];

  private changeIconColor(status: any): string {
    if (status === "check") return "green";
    else if (status === "clear") return "red";
    return "yellow accent-4";
  }

  responseItems(width: Number) {
    this.isMobile = width < 550;
  }

  private async created() {
    this.windowWidth = window.innerWidth;
    this.responseItems(this.windowWidth);
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
      this.responseItems(this.windowWidth);
    };
  }
}
</script>

<style scoped>

.v-input--selection-controls{
  padding-top: 0 !important;
}

.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
