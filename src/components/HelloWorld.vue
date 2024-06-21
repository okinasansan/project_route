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



  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="800"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>


    <v-card-actions>
      <v-btn>
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: 'HelloWorld',

  data: () => ({
      loading: false,
      selection: 1,
      text: '',
      finish_text: '',
    }),
  
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
