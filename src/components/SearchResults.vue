<template>
  <div v-for="(value, index) in deserializedValues" :key="index">
      <p>{{ value }}</p>
  </div>

  <GoogleMap api-key=key
    :center="{ lat: 35.6762, lng: 139.6503 }"
    :zoom="12"
    style="width: 100%; height: 500px"
  >   
  </GoogleMap>
</template>

<script>

import { defineComponent } from 'vue';
import { GoogleMap } from 'vue3-google-map';

export default defineComponent({
  name: 'SearchResults',

  props: {
    searchResults: {
      type: Array,
      required: true,
    },
  },

  components: {
    GoogleMap,
  },

  data (){
      return {
        apikey: import.meta.env.VITE_APP_GOOGLEMAP_API
      }
  },

  mounted() {
    console.log(import.meta.env.VITE_APP_GOOGLEMAP_API);  // コンソールでも確認
  },
  
  methods: {
    reserve () {
      
    },

    submit(){
      
    },
  },
});
</script>