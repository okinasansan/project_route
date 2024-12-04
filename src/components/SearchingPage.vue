<template>
  <v-form @submit.prevent="submit">
    <v-text-field
      outlined
      label="作品名で検索！"
      v-model="searchKeyword"
      append-inner-icon="mdi-magnify"
      @click:append-inner="submit"
    ></v-text-field>
  </v-form>

  <v-container>
    
    <v-card
    class="mx-auto my-12"
    max-width="800"
    >
    <!--
      <v-card-item v-for="item in filteredItems" v-bind:key="item.id">
        <v-img
          height="250"
          :src="item.image"
          lazy-src="/no_image_yoko.jpg"
          :alt="item.spot"
        ></v-img>

        <v-card-title>{{ item.spot }} ／ {{ item.title }}</v-card-title>

        <v-checkbox v-model="selected" :value="item.address" label="ここへ行く">
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
      -->

      <v-card-item v-for="holyplace in filteredItems2" v-bind:key="holyplace.id">
        <v-img
          height="250"
          :src="holyplace.image"
          lazy-src="/no_image_yoko.jpg"
          :alt="holyplace.spot"
        ></v-img>

        <v-card-title>{{ holyplace.spot }} ／ {{ holyplace.title }}</v-card-title>

        <v-checkbox v-model="selected" :value="holyplace.address" label="ここへ行く">
        </v-checkbox>

        <v-card-text>
          <v-row
            align="center"
            class="mx-0"
          >
          </v-row>
          {{ holyplace.address }}

        </v-card-text>

        <v-divider class="mx-4"></v-divider>
      </v-card-item>
      
    </v-card>

    <div>{{ selected }}へ</div><v-btn @click="goToNextPage">
      巡礼開始！
    </v-btn>
  </v-container>
  
</template>

<script>

import items from '../assets/data.json'
import { AllSeichi } from '@/services/dynamodbService'

export default {
  name: 'SearchingPage',

  data (){
      //selection: 1,      

      return {
        searchKeyword: '',
        finish_text: '',
        selected:[],
        items: items,
        holyplaces: [],
      }
    },

    async created() {
      try {
        this.holyplaces = await AllSeichi();
      } catch (error) {
        console.error("Error loading spots:", error);
      }
    },
  
  methods: {

    submit(){
      this.finish_text = this.searchKeyword;
    },

    goToNextPage(){
      const selectSpot = this.selected;
      const SelectedSpot = JSON.stringify(selectSpot);
      console.log('gotonextpage')
      this.$router.push({ name: 'Results', query: { data: SelectedSpot } })
    },
  },

  computed: {
    /*
    filteredItems() {
      return this.items.filter(item => {
        // 検索クエリが空の場合、全ての項目を表示する
        if (this.searchKeyword.trim() === '') {
          return true;
        }
        // 名前に検索クエリが含まれている場合にtrueを返す
        return item.title.toLowerCase().includes(this.searchKeyword.toLowerCase());
      });
    },
    */

    filteredItems2() {
      return this.holyplaces.filter(holyplace => {
        // 検索クエリが空の場合、全ての項目を表示する
        if (this.searchKeyword.trim() === '') {
          return true;
        }
        // 名前に検索クエリが含まれている場合にtrueを返す
        return holyplace.title.toLowerCase().includes(this.searchKeyword.toLowerCase());
      });
    }
  }
}
</script>
