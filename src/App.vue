<template>
  <v-app>
    <v-app-bar 
      color="primary lighten-1"dark app height="90">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>聖地巡礼ルートガイド</v-app-bar-title>

      <v-btn variant="text" @click="$router.push('/')">トップ</v-btn>
      <v-btn variant="text" @click="$router.push('/about')">このサイトについて</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer
    color="primary lighten-1"
    padless
    >
      <v-row
        justify="center"
       no-gutters
      >
        <v-btn
          v-for="link in links"
          :key="link"
          color="primary lighten-1"
          text
          rounded
          class="my-2"
       >
         {{ link }}
        </v-btn>
        <v-col
          class="primary lighten-2 py-4 text-center white--text"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>情報通信プロジェクト (アプリを極める) C班</strong>
        </v-col>
      </v-row>
  </v-footer>
  </v-app>
</template>

<script>
import { RouterLink } from 'vue-router';


export default {
  name: 'App',

  data: () => ({
      links: [
        'トップ',
        'このサイトについて',
      ],
    }),
}
</script>
