<template>
  <v-container id="register-container" fluid fill-height align-center justify-center class="pa-0">
    <div id="progress" ref="progress"></div>
    <v-card width="40vw" v-if="(stepper >= 0 && stepper <= 5) || (stepper === 6 && isLoading)">
      <v-container fluid class="py-1">
        <v-layout wrap align-center>
          <v-flex xs12 lg1>
            <v-btn v-if="stepper <= 5" color="secondary" flat icon @click="stepper--">
              <v-icon large>navigate_before</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs12 lg10 text-xs-center>
              <v-text-field
                v-if="stepper === 0"
                v-model="descriptionModel"
                label="Título do item..."
                hint="Faça uma breve descrição do item. Seja objetivo e não descreva muitos detalhes."
                persistent-hint
                prepend-icon="text_fields"
                color="secondary"
                class="title"
                @keypress.enter="stepper++"
            ></v-text-field>
            <v-text-field
              v-if="stepper === 1"
              v-model="descriptionModel"
              label="Descrição do item..."
              hint="Faça uma descrição detalhada do item. Dê o máximo de detalhes possíveis."
              persistent-hint
              prepend-icon="text_fields"
              color="secondary"
              class="title"
              @keypress.enter="stepper++"
            ></v-text-field>
            <v-text-field
              v-else-if="stepper === 2"
              v-model="categoryModel"
              label="Qual a categoria do item?"
              hint="Quanto mais específica a categoria, mais fácil fica para identificar o item."
              persistent-hint
              prepend-icon="category"
              color="secondary"
              class="title"
              @keypress.enter="stepper++"
            ></v-text-field>
            <v-text-field
              v-else-if="stepper === 3"
              v-model="localModel"
              label="Onde o item foi encontrado?"
              hint="Recomendamos que você conheça bem o local em que trabalha para fazer uma boa escolha."
              persistent-hint
              prepend-icon="place"
              color="secondary"
              class="title"
              @keypress.enter="stepper++"
            ></v-text-field>
            <v-menu
              v-else-if="stepper === 4"
              ref="menuDateModel"
              :close-on-content-click="false"
              v-model="menuDateModel"
              :nudge-right="40"
              :return-value.sync="dateModel"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              min-width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="dateModel"
                label="Se o item não foi perdido hoje, escolha outro dia..."
                hint="Escolha a data exata em que o item foi perdido."
                persistent-hint
                prepend-icon="event"
                color="secondary"
                readonly
                class="title"
                @keypress.enter="stepper++"
              ></v-text-field>
              <v-date-picker v-model="dateModel" @input="$refs.menuDateModel.save(dateModel)"></v-date-picker>
            </v-menu>
            <v-text-field
              v-else-if="stepper === 5"
              label="Escolha uma foto do item"
              hint="É recomendável que a foto tenha um fundo branco para destacar o item."
              persistent-hint
              color="secondary"
              class="title"
              @keypress.enter="stepper++"
            ></v-text-field>
            <v-container v-if="isLoading">
              <v-progress-circular indeterminate color="secondary" size="150" width="2"></v-progress-circular>
            </v-container>
          </v-flex>
          <v-flex xs12 lg1 text-xs-center>
            <v-btn v-if="stepper <= 5" color="secondary" flat icon @click="stepper++">
              <v-icon large>navigate_next</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <div v-else class="text-xs-center z-index-2">
      <v-icon color="white" class="mb-2 xg-icon-size">check</v-icon>
      <div class="title white--text">Item adicionado com sucesso</div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'

@Component
export default class extends Vue {

  private stepper = 0
  private descriptionModel: string = null
  private categoryModel: string = null
  private localModel: string = null
  private menuDateModel = false
  private dateModel: string = null
  private isLoading = false

  $refs: { progress: HTMLDivElement }

  @Watch('stepper')
  private onStepperChange (newValue: number, oldValue: number) {
    if (newValue >= 0 && newValue <= 6) {
      this.$refs.progress.style.width = `${newValue * 20}vw`

      if (newValue === 6) {
        this.isLoading = true
        setTimeout(() => { this.isLoading = false }, 2000)
      }
    } else if (newValue === -1) {
      this.$router.push('/')
    }
  }

}
</script>

<style scoped>
  #register-container {
    background-color: #90caf9;
  }

  #progress {
    position: absolute;
    height: 100vh;
    width: 0;
    left: 0;
    background-color: #5d99c6;
    transition: width 0.2s ease-in-out;
  }
</style>
