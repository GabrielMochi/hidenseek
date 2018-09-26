<template>
  <v-card>
      <v-layout row wrap>
            <v-flex xs12 row>
              <v-card>
                <v-layout align-center>
                  <v-flex>
                    <v-card-text class="title">Filtar por:</v-card-text>
                  </v-flex>
                  <v-flex>
                    <v-radio-group hide-details v-model="radios" row :mandatory="false">
                      <v-layout pa-3 justify-space-around align-content-center :column="isMobile">
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
              <v-card-title><span class="headline">Reinvindicações</span>
              <v-spacer></v-spacer>
              <v-text-field v-model="search" append-icon="search" label="Buscar"
              single-line hide-details></v-text-field>
              </v-card-title>
              <v-data-table :headers="headers"
              :items="tableItems" :search="search" rows-per-page-text="Linhas por página">
                <template slot="items" slot-scope="props">
                    <tr @dblclick="editItem(props.item)" class="cursor-pointer">
                        <td class="text-xs-center">{{props.item.date}}</td>
                        <td class="text-xs-center">{{props.item.idSeeker}}</td>
                        <td class="text-xs-left">{{props.item.seeker}}</td>
                        <td class="text-xs-left">{{props.item.emailSeeker}}</td>
                        <td class="text-xs-center">{{props.item.idItem}}</td>
                        <td class="text-xs-center"><v-icon :color="changeIconColor(props.item.status)">{{props.item.status}}</v-icon></td>
                    </tr>
                    <v-dialog v-model="dialog" max-width="500px"> 
                        <v-card>
                            <v-card-title>
                                <span class="headline">Reinvindicação</span>
                            </v-card-title>
                                            
                            <v-card-text>
                                <v-container grid-list-md>
                                    <v-layout column wrap>
                                        <v-flex xs12 sm6 md4>
                                            <div class="headline">Justificativa</div>
                                            <v-text-field v-model="justifica" disabled textarea></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                            <div class="headline">Detalhes</div>
                                            <v-text-field v-model="detalhe" disabled textarea></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                            <v-radio-group v-model="value" column>
                                                <v-radio label="Aprovado" color="success" value="radio-1"></v-radio>
                                                <v-radio label="Reprovado" color="error" value="radio-2"></v-radio>
                                            </v-radio-group>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card-text>
                                            
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" flat @click.native="close">Cancelar</v-btn>
                                <v-btn color="blue darken-1" flat @click.native="save">Salvar</v-btn>
                            </v-card-actions>
                        </v-card>
                </v-dialog>                       
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
    </v-card>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import User, { UserPermission } from "~/model/User";

@Component
export default class extends Vue {
  
  private isMobile: boolean = false;
  private windowWidth: Number = null;
  
  user: User = new User(
    1,
    "222",
    "gmochi56@outlook.com",
    "Gabriel Mochi Ribeiro",
    "https://avatars3.githubusercontent.com/u/20032634?s=460&v=4",
    UserPermission.TOTAL
  );
  
  private search: string = "";
  private headers: any[] = [
    {
      text: "Data",
      align: "center",
      value: "date"
    },
    {
      text: "ID Seeker",
      align: "center",
      value: "idSeeker"
    },
    {
      text: "Seeker",
      align: "left",
      value: "seeker"
    },
    {
      text: "E-mail",
      align: "left",
      value: "emailSeeker"
    },
    ,
    {
      text: "ID Item",
      align: "center",
      value: "idItem"
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
      seeker: "Eduardo",
      emailSeeker: "eduardo@hotmail.com",
      idSeeker: "01",
      idItem: "02",
      status: "hourglass_empty"
    },
    {
      value: false,
      date: "21/07/2018",
      seeker: "Matheus",
      emailSeeker: "Matheus@hotmail.com",
      idSeeker: "02",
      idItem: "01",
      status: "check"
    },
    {
      value: false,
      date: "15/08/2018",
      seeker: "Gabriel",
      emailSeeker: "Gabriel@gmail.com",
      idSeeker: "03",
      idItem: "03",
      status: "clear"
    },
    {
      value: false,
      date: "15/08/2018",
      seeker: "Maia",
      emailSeeker: "v.g.b.maia@gmail.com",
      idSeeker: "04",
      idItem: "04",
      status: "hourglass_empty"
    },
    {
      value: false,
      date: "23/06/2018",
      seeker: "Domingos",
      emailSeeker: "LaTorre@gmail.com",
      idSeeker: "05",
      idItem: "05",
      status: "check"
    }
  ];
  private justifica: string = "O item possui um barbante na ponta.";
  private detalhe: string = "O item foi encontrado com um barbante preto na ponta, além de algumas etiquetas."
  private dialog: boolean = false;
  private editedIndex: number = -1;
  private editedItem: any = {
    value: false,
    date: "",
    seeker: "",
    emailSeeker: "",
    idSeeker: "",
    idItem: "",
    status: ""
  };
  private defaultItem: any = {
    value: false,
    date: "",
    seeker: "",
    emailSeeker: "",
    idSeeker: "",
    idItem: "",
    status: ""
  };

  private changeIconColor(status: any): string {
    if (status === "check") return "green";
    else if (status === "clear") return "red";
    return "yellow accent-4";
  }

  @Watch("dialog")
  private onDialogChange(val: any) {
    val || this.close();
  }

  private editItem(item: any){
      this.editedIndex = this.tableItems.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
  }

  private showDialog() {
    this.dialog = true;
  }

  private close() {
    this.dialog = false;
    setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
    }, 300);
  }

  private save(){
    Object.assign(this.tableItems[this.editedIndex], this.editedItem)
    this.close()
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
.v-input--selection-controls {
  padding-top: 0 !important;
}

.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
