<template>
  <v-container grid-list-xl>
    <h1 class="mb-4">Concluir reivindicação</h1>
    <v-stepper v-model="stepperModel" vertical>
      <v-stepper-step step="1" :complete="stepperModel > 1">
        {{ (stepperModel > 1) ? 'Item confirmado' : 'Confirmação' }}
        <small>Confirme o item antes de se justificar.</small>
      </v-stepper-step>
      <v-stepper-content step="1">
        <v-card flat>
          <v-card-media contain :src="selectedItem.photoURL" height="300px">
            <v-container fluid fill-height>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="title">{{ selectedItem.description }}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-text>
            <v-list>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>category</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>{{ selectedItem.category.name }}</v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>place</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>{{ selectedItem.local.name }}</v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>event</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>{{ selectedItem.datetime.toISOString() }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-card-text>
          <v-card-actions class="px-4">
            <v-btn color="secondary" @click="stepperModel = 2">Prosseguir</v-btn>
            <v-btn flat>Cancelar</v-btn>
          </v-card-actions>
        </v-card>
      </v-stepper-content>
      <v-stepper-step step="2">
        Justificativa
        <small>Elabore uma justificativa evidenciando os fatos que comprovam que esse item lhe pertence.</small>
      </v-stepper-step>
      <v-stepper-content step="2">
        <v-text-field label="Justificativa" textarea class="mb-3"></v-text-field>
        <v-btn color="secondary">Finalizar</v-btn>
        <v-btn flat @click="stepperModel = 1">Voltar</v-btn>
      </v-stepper-content>
    </v-stepper>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Route } from "vue-router";
import Category from "~/domain/Category";
import Item from "~/domain/Item";
import Local from "~/domain/Local";
import User, { Permission } from "~/domain/User";

@Component
export default class extends Vue {
  private items: Item[] = []

  private selectedItem = new Item(null, null, null, null, null, null, null, null)
  private stepperModel = 1

  private created () {
    this.selectedItem = this.items.find(
      (item: Item) => item._id === this.$route.params.id
    )
  }
}
</script>

<style scoped>
#item-img {
  width: 384px;
  height: auto;
}
</style>
