<template>
    <v-container fluid fill-height justify-center pa-0>
        <v-card width="600">
            <v-container pa-0>
                <v-card-title>
                    <div class="display-1 fill-width text-xs-center">Configurações</div>
                </v-card-title>
                <v-card-actions>
                    <v-layout row wrap justify-center>
                        <v-flex xs8>
                            <v-form text-xs-center>
                                <v-text-field label="Nome da Instuição"></v-text-field>
                                <v-text-field label="Identificador"></v-text-field>
                            </v-form>
                        </v-flex>
                        <v-flex xs8>
                            <v-layout row align-center>
                                <v-flex>
                                    <div class="title">Visitante:</div>
                                </v-flex>
                                <v-flex class="v-input-padding-top-0">
                                    <v-switch color="secondary" hide-details v-model="value"></v-switch>
                                </v-flex>
                            </v-layout>
                        </v-flex>

                            <!-- Locais -->

                            <v-layout mt-4 row wrap justify-center>
                                <v-flex xs8>
                                        <div class="v-toolbar__content-no-padding">
                                        <v-toolbar-title class="hidden-sm-and-up">Locais</v-toolbar-title>
                                        <v-toolbar flat color="white">
                                            <v-toolbar-title class="hidden-xs-only">Locais</v-toolbar-title>
                                            <v-spacer></v-spacer>
                                            <v-text-field
                                                v-model="searchLocal"
                                                append-icon="search"
                                                label="Pesquisar"
                                                single-line
                                                hide-details
                                            ></v-text-field>
                                        </v-toolbar>
                                        <v-data-table :search="searchLocal" :headers="headersLocals" :items="locals" hide-actions class="elevation-1">
                                            <template slot="items" slot-scope="props">
                                            <td>{{ props.item.localName }}</td>
                                            <td class="text-xs-right"></td>
                                            <td class="justify-center layout px-0">
                                                <v-icon
                                                small
                                                class="mr-2"
                                                @click="editItemLocals(props.item)"
                                                >
                                                edit
                                                </v-icon>
                                                <v-icon
                                                small
                                                @click="deleteItemLocals(props.item)"
                                                >
                                                delete
                                                </v-icon>
                                            </td>
                                            </template>
                                            <template slot="no-data">
                                                <div class="title">Não há locais registrados</div>
                                            </template>
                                        </v-data-table>
                                            <v-layout pt-2 justify-end>
                                                <v-dialog v-model="dialogLocals" max-width="500px">
                                                    <v-btn slot="activator" color="secondary" dark class="mb-2">Novo Local</v-btn>
                                                    <v-card>
                                                        <v-card-title>
                                                        <span class="headline">{{ formTitleLocals }}</span>
                                                        </v-card-title>

                                                        <v-card-text>
                                                        <v-container grid-list-md>
                                                            <v-layout wrap>
                                                            <v-flex xs12 sm6 md4>
                                                                <v-text-field v-model="editedItemLocals.localName" label="Local"></v-text-field>
                                                            </v-flex>
                                                            </v-layout>
                                                        </v-container>
                                                        </v-card-text>

                                                        <v-card-actions>
                                                        <v-spacer></v-spacer>
                                                        <v-btn color="blue darken-1" flat @click.native="closeLocals">Cancelar</v-btn>
                                                        <v-btn color="blue darken-1" flat @click.native="saveLocals">Salvar</v-btn>
                                                        </v-card-actions>
                                                    </v-card>
                                                </v-dialog>
                                            </v-layout>
                                        </div>
                                </v-flex>

                            <!-- Categorias -->
                                <v-flex xs8>
                                        <div class="v-toolbar__content-no-padding">
                                        <v-toolbar-title class="hidden-sm-and-up">Categorias</v-toolbar-title>
                                        <v-toolbar flat color="white">
                                            <v-toolbar-title class="hidden-xs-only">Categorias</v-toolbar-title>
                                            <v-spacer></v-spacer>
                                            <v-text-field
                                                    v-model="searchCategory"
                                                    append-icon="search"
                                                    label="Pesquisar"
                                                    single-line
                                                    hide-details
                                            ></v-text-field>
                                        </v-toolbar>
                                        <v-data-table :search="searchCategory" :headers="headersCategorys" :items="categories" hide-actions class="elevation-1">
                                            <template slot="items" slot-scope="props">
                                            <td>{{ props.item.name}}</td>
                                            <td class="text-xs-right"></td>
                                            <td class="justify-center layout px-0">
                                                <v-icon
                                                small
                                                class="mr-2"
                                                @click="editItemCategorys(props.item)"
                                                >
                                                edit
                                                </v-icon>
                                                <v-icon
                                                small
                                                @click="deleteItemCategorys(props.item)"
                                                >
                                                delete
                                                </v-icon>
                                            </td>
                                            </template>
                                            <template slot="no-data">
                                                <div class="title">Não há categorias registradas</div>
                                            </template>
                                        </v-data-table>
                                        <v-layout pt-2 justify-end>
                                            <v-dialog v-model="dialogCategorys" max-width="500px">
                                                <v-btn slot="activator" color="secondary" dark class="mb-2">Nova Categoria</v-btn>
                                                <v-card>
                                                    <v-card-title>
                                                    <span class="headline">{{ formTitleCategorys }}</span>
                                                    </v-card-title>

                                                    <v-card-text>
                                                    <v-container grid-list-md>
                                                        <v-layout wrap>
                                                        <v-flex xs12 sm6 md4>
                                                            <v-text-field v-model="editedItemCategorys.name" label="Categoria"></v-text-field>
                                                        </v-flex>
                                                        </v-layout>
                                                    </v-container>
                                                    </v-card-text>

                                                    <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn color="blue darken-1" flat @click.native="closeCategorys">Cancelar</v-btn>
                                                    <v-btn color="blue darken-1" flat @click.native="saveCategorys">Salvar</v-btn>
                                                    </v-card-actions>
                                                </v-card>
                                            </v-dialog>
                                        </v-layout>
                                        </div>
                                </v-flex>
                            </v-layout>
                    </v-layout>
                </v-card-actions>
            </v-container>
        </v-card>
    </v-container>
</template>


<script lang="ts">
import Category from '~/domain/Category'
import Local from '~/domain/Local'
import { Vue, Component, Watch } from "vue-property-decorator";
import { Action, State } from 'vuex-class'
import { setTimeout } from "timers";

@Component
export default class extends Vue {

    private searchLocal: string = ''
    private searchCategory: string = ''
    private dialogLocals: boolean = false
    private dialogCategorys: boolean = false
    private headersLocals: any[] = [
        {
            text: 'Locais',
            align: 'left',
            value: 'localName'
        },
        {
            text: '',
            sortable: false
        },
        {
            text: 'Ações',
            value: 'localName',
            align: 'center',
            sortable: false
        }
    ]
    private headersCategorys: any[] = [
        {
            text: 'Categorias',
            align: 'left',
            value: 'name'
        },
        {
            text: '',
            sortable: false
        },
        {
            text: 'Ações',
            value: 'name',
            align: 'center',
            sortable: false
        }
    ]

    @State('categories') private categories: Category[]
    @State('locals') private locals: Local[]
    @Action('insertCategory') private insertCategory: (category: Category) => Category
    @Action('updateCategory') private updateCategory: (category: Category) => Category
    @Action('deleteCategory') private deleteCategory: (index: string) => void



    private testeCategoria: Category = null
    private editedIndexLocals: number = -1
    private editedIndexCategorys: number = -1
    private editedItemLocals: any = {
        localName: ''
    }
    private defaultItemLocals: any = {
        localName: ''
    }
        private editedItemCategorys: any = {
        name: ''
    }
    private defaultItemCategorys: any = {
        name: ''
    }

    private get formTitleLocals () {
      return this.editedIndexLocals === -1 ? 'Novo Local' : 'Editar Local'
    }

    private get formTitleCategorys () {
      return this.editedIndexCategorys === -1 ? 'Nova Categoria' : 'Editar Categoria'
    }

    @Watch("dialogLocals")
    private onDialogLocalsChange (val : any){
        val || this.closeLocals()
    }

    @Watch("dialogCategorys")
    private onDialogCategoryChange (val : any){
        val || this.closeCategorys()
    }

    private created() {}

    private editItemLocals(item : any){
        this.editedIndexLocals = this.locals.indexOf(item)
        this.editedItemLocals = Object.assign({}, item)
        this.dialogLocals = true
    }

    private editItemCategorys(item : any){
        this.editedIndexCategorys = this.categories.indexOf(item)
        this.editedItemCategorys = Object.assign({}, item)
        this.dialogCategorys = true
    }

    private deleteItemLocals(item : any) {
        const index : any = this.locals.indexOf(item)
        confirm('Você tem certeza que deseja deletar este item?') && this.locals.splice(index, 1)
    }

    private deleteItemCategorys(item : any) {
        confirm('Você tem certeza que deseja deletar este item?') && this.deleteCategory(item.id)
    }

    private closeLocals() {
        this.dialogLocals = false
        setTimeout(() => {
            this.editedItemLocals = Object.assign({}, this.defaultItemLocals)
            this.editedIndexLocals = -1
        }, 300)
    }

    private closeCategorys() {
        this.dialogCategorys = false
        setTimeout(() => {
            this.editedItemCategorys = Object.assign({}, this.defaultItemCategorys)
            this.editedIndexCategorys = -1
        }, 300)
    }

    private saveLocals() {
    if (this.editedIndexLocals > -1) {
        Object.assign(this.locals[this.editedIndexLocals], this.editedItemLocals)
      } else {
        this.locals.push(this.editedItemLocals)
      }
      this.closeLocals()
    }

    private saveCategorys() {
     if (this.editedIndexCategorys > -1) {
        this.updateCategory(this.editedItemCategorys)
    } else {
        this.testeCategoria = this.insertCategory(new Category(this.editedItemCategorys.name))
    }
      this.closeCategorys()
    }

}
</script>

<style>
.v-toolbar__content-no-padding .v-toolbar__content{
    padding: 0 !important
}
</style>


<style scoped>

.v-input-padding-top-0 .v-input{
    margin-top: 4px !important
}

.v-input--selection-controls{
  padding-top: 0 !important;
}
</style>
