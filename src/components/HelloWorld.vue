<template>
  <v-form @submit.prevent="submit">
    <v-text-field
      outlined
      label="聖地を検索！"
      v-model="text"
      append-inner-icon="mdi-magnify"
      @click:append-inner="submit"
    ></v-text-field>
  </v-form>

  <div> text: {{ finish_text }} </div>

  <v-container>
    <v-card
    class="mx-auto my-12"
    max-width="800"
    >
      <v-card-item v-for="item in items" v-bind:key="item.id">
        <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>

        <v-card-title>{{ item.spot }} ／ {{ item.title }}</v-card-title>

        <v-checkbox v-model="selected" :value="item.id" label="ここへ行く">
        </v-checkbox>

        <v-card-text>
          <v-row
            align="center"
            class="mx-0"
          >
          </v-row>
          {{ item.address }}

        </v-card-text>

        <v-divider class="mx-4"></v-divider>
      </v-card-item>
      
    </v-card>

    <div>{{ selected }}へ{{ selected.length }}</div><v-btn>
      巡礼開始！
    </v-btn>
  </v-container>
  
</template>

<script>
import items from '../assets/data.json'

export default {
  name: 'HelloWorld',

  data (){
      //selection: 1,      

      return {
        text: '',
        finish_text: '',
        selected:[],
        items: items
      }
    },
  
  methods: {
    reserve () {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },

    submit(){
      this.finish_text = this.text;
    }
  },
}
</script>
