<template>
    <v-container fill-height fluid>
        <v-layout row wrap justify-center>
            <v-flex>
                <v-card>
                    <v-flex pb-3>
                        <v-card-title primary-title>
                            <v-flex text-xs-center xs12>
                                <div style="color: #5d99c6;" class="title">Utilize os operadores {{"\{\{ \}\}"}} para definir um campo automático</div>
                            </v-flex>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-layout pt-3 row wrap v-for="field in fields" :key="field.operator">
                            <v-flex xs4 text-xs-right>
                                <div>{{ field.operator }}</div>
                            </v-flex>
                            <v-flex xs4 text-xs-center>
                                <div>&#8212;</div>
                            </v-flex>
                            <v-flex xs4>
                                <div>{{ field.description }}</div>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-btn color="primary" light fab absolute right bottom><v-icon>add</v-icon></v-btn>  
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class extends Vue {

  private fields : any = [
      {
          operator: "{{ DateTime }}",
          description: "Insere a data e hora"
      }, 
      {
          operator: "{{ Item }}",
          description: "Título do item"
      },
      {
          operator: "{{ Instituicao }}",
          description: "Nome da instituição"
      },
      {
          operator: "{{ Documento }}",
          description: "Identificador"
      }
  ]
}
</script>

