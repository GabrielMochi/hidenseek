<template>
  <v-container>
    <v-navigation-drawer fixed clipped="false" app class="z-index-1">
      <v-list>
        <v-list-tile v-for="item in menuItems"
        :key="item.title" :to="item.location">
          <v-list-tile-action>
          <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
            <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <nuxt-child />
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Action } from 'vuex-class'


@Component
export default class extends Vue {

  private menuItems : any = [{
    title: 'Formulário',
    icon: 'assignment',
    location: '/admin/form'
  },

  {
    title:'Configuração',
    icon: 'settings',
    location: '/admin/settings'
  },
  {
    title:'Usuários',
    icon: 'face',
    location: '/admin/users'
  },
  {
    title:'Funcionários',
    icon:'group',
    location: '/admin/employees'
  }]


}

</script>
