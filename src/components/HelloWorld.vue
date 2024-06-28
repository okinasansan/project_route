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

        <v-card-title>{{ item.spot }}</v-card-title>

        <v-checkbox v-model="selected" value="1" label="Hoge1">
        </v-checkbox>

        <v-card-text>
          <v-row
            align="center"
            class="mx-0"
          >
          </v-row>

          <div class="my-4 text-subtitle-1">
            {{ item.title }}
          </div>

        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>{{ item.address }}</v-card-title>
      </v-card-item>
      
    </v-card>
  </v-container>
  
</template>

<script>

export default {
  name: 'HelloWorld',

  data (){
      //selection: 1,      

      return {
        text: '',
        finish_text: '',
        selected:[],
        items:[
          {
            id: 1,
            spot: "東京電機大学",
            title: "でんだい",
            address: "足立区",
          },
          {
            id: 2,
            spot: "ラジ館",
            title: "シュタゲ",
            address: "アキバ",
          },
          {
            id: 3,
            spot: "神社",
            title: "シュタゲ",
            address: "神田",
          }
        ]
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
