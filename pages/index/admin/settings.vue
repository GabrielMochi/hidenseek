<template>
    <v-container fluid fill-height justify-center>
        <v-card width="600">
            <v-container>
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
                            <v-layout mt-4 row wrap justify-center>
                                <v-flex xs8>
                                        <div class="v-toolbar__content-no-padding">
                                        <v-toolbar flat color="white">
                                            <v-toolbar-title>Locais</v-toolbar-title>
                                            <v-spacer></v-spacer>
                                            <v-dialog v-model="dialog" max-width="500px">
                                            <v-btn slot="activator" color="secondary" dark class="mb-2">Novo Item</v-btn>
                                            <v-card>
                                                <v-card-title>
                                                <span class="headline">{{ formTitle }}</span>
                                                </v-card-title>
                                    
                                                <v-card-text>
                                                <v-container grid-list-md>
                                                    <v-layout wrap>
                                                    <v-flex xs12 sm6 md4>
                                                        <v-text-field v-model="editedItem.localName" label="Local"></v-text-field>
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
                                        </v-toolbar>
                                        <v-data-table :headers="headers" :items="locals" hide-actions class="elevation-1">
                                            <template slot="items" slot-scope="props">
                                            <td>{{ props.item.localName }}</td>
                                            <td class="text-xs-right"></td>
                                            <td class="justify-center layout px-0">
                                                <v-icon
                                                small
                                                class="mr-2"
                                                @click="editItem(props.item)"
                                                >
                                                edit
                                                </v-icon>
                                                <v-icon
                                                small
                                                @click="deleteItem(props.item)"
                                                >
                                                delete
                                                </v-icon>
                                            </td>
                                            </template>
                                            <template slot="no-data">
                                            <v-btn color="primary" @click="initialize">Reset</v-btn>
                                            </template>
                                        </v-data-table>
                                        </div>
                                </v-flex>
                                <v-flex xs8 pr-5>
                                    <v-layout row wrap justify-center>
                                    </v-layout>
                                </v-flex>
                            </v-layout>   
                    </v-layout>                    
                </v-card-actions>
            </v-container>
        </v-card>    
    </v-container>
</template>


<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { setTimeout } from "timers";

@Component
export default class extends Vue {

    private dialog: boolean = false
    private headers: any[] = [
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
    private locals: any[] = []
    private editedIndex: number = -1
    private editedItem: any = {
        localName: ''
    }
    private defaultItem: any = {
        localName: ''
    }

    private get formTitle () {
      return this.editedIndex === -1 ? 'Novo Item' : 'Editar Item'
    }

    @Watch("dialog")
    private onDialogChange (val : any){
        val || this.close()
    }

    private created(){
        this.initialize()
        console.log('Bom Dia');
        
    }

    private initialize() {
        this.locals = [
            {
                localName: 'Bloca A'
            },
            {
                localName: 'Bloco C'
            },
            {
                localName: 'Sala 321'
            }
        ]
    }

    private editItem(item : any){
        this.editedIndex = this.locals.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
    }

    private deleteItem(item : any) {
        const index : any = this.locals.indexOf(item)
        confirm('Você tem certeza que deseja deletar este item?') && this.locals.splice(index, 1)
    }

    private close() {
        this.dialog = false
        setTimeout(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
        }, 300)
    }

    private save() {
    if (this.editedIndex > -1) {
        Object.assign(this.locals[this.editedIndex], this.editedItem)
      } else {
        this.locals.push(this.editedItem)
      }
      this.close()
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
