<template>
<v-container fluid grid-list-xl>
    <v-layout justify-center>
        <v-card width="700" class="text-xs-center">
            <v-layout row wrap>
                <v-flex xs12 text-xs-center>
                    <div class="mt-5 headline">Editar Perfil</div>
                </v-flex>
                <v-flex class="mb-5" xs12 text-xs-center style="position: relative;">
                    <v-layout row wrap justify-center>
                        <v-avatar size="256" class="mx-3">
                            <img :src="user.thumbnail" :alt="user.name">
                            <v-btn color="primary" small absolute bottom icon right fab><v-icon>edit</v-icon></v-btn>
                        </v-avatar>
                    </v-layout>
                </v-flex>
            </v-layout>
            <v-layout row wrap justify-center>
                <v-flex xs11 md5>
                    <v-text-field v-model="user.name" color="primary" label="Nome" clearable hide-no-data></v-text-field>
                </v-flex>

                <v-flex xs11 md5>
                    <v-text-field v-model="user.email" color="primary" label="Email" clearable hide-no-data></v-text-field>
                </v-flex>

                <v-flex xs11 md5>
                    <v-text-field v-model="user.distinctId" color="primary" label="Identificador" disabled hide-no-data></v-text-field>
                </v-flex>

                <v-flex xs11 md5>
                    <v-text-field v-model="oldPassword" type="password" color="primary" label="Senha Antiga" clearable hide-no-data></v-text-field>
                </v-flex>

                <v-flex xs11 md5>
                    <v-text-field v-model="newPassword" type="password" color="primary" label="Nova Senha" clearable hide-no-data></v-text-field>
                </v-flex>

                <v-flex xs11 md5>
                    <v-text-field v-model="confirmPassword" type="password" color="primary" label="Confirmar Senha" clearable hide-no-data></v-text-field>
                </v-flex>

                <v-flex xs12 text-xs-center>
                    <v-btn color="primary">Salvar Alterações</v-btn>
                </v-flex>
            </v-layout>
        </v-card>
    </v-layout>
</v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import User, { Permission } from "~/domain/User";

@Component
export default class extends Vue {
  user: User = new User(
    '1',
    "222",
    "gmochi56@outlook.com",
    "Gabriel Mochi Ribeiro",
    "https://avatars3.githubusercontent.com/u/20032634?s=460&v=4",
    Permission.TOTAL
  );

  private oldPassword : string = "";
  private newPassword : string = "";
  private confirmPassword : string = "";

}
</script>
