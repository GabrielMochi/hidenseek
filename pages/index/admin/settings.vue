<template>
    <v-container fluid fill-height justify-center>
        <v-card width="600">
            <v-container>
                <v-card-title>
                    <div class="display-1">Configurações</div>
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
                                    <div class="subheading" style="padding: 22px 16px 16px 0px;">Visitante:</div>
                                </v-flex>
                                <v-flex>
                                    <v-radio-group hide-details v-model="radios" row :mandatory="false">
                                        <v-layout justify-space-around align-content-center>
                                            <v-radio label="Ativado" value="value"></v-radio>
                                            <v-radio label="Desativado" value="value1"></v-radio>                                            
                                        </v-layout>
                                    </v-radio-group>  
                                </v-flex>                              
                            </v-layout>
                        </v-flex>
                        <v-container fluid>
                            <v-layout row wrap>
                                <v-flex xs5 pl-5>
                                    <v-layout row wrap justify-center>
                                        <div>Locais</div>
                                        <v-combobox :items="items"></v-combobox>
                                        <v-btn color="primary">Add</v-btn>
                                    </v-layout>
                                </v-flex>
                                <v-spacer></v-spacer>
                                <v-flex xs5 pr-5>
                                    <v-layout row wrap justify-center>
                                        <div>Categorias</div>
                                        <v-combobox :items="categorys"></v-combobox>
                                        <v-btn color="primary">Add</v-btn>
                                    </v-layout>
                                </v-flex>
                            </v-layout>   
                        </v-container>
                    </v-layout>                    
                </v-card-actions>
            </v-container>
        </v-card>    
    </v-container>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class extends Vue {
    private items: string[] = [
        'Bloco A',
        'Sala 321',
        'Bloco C'
    ]

    private categorys: string[] = [
        'Celular',
        'Caderno',
        'Identidade'
    ]
}
</script>


<style scoped>
.v-input--selection-controls{
  padding-top: 0 !important;
}
</style>
