<template>
  <div>
    <h1>別のコンポーネント</h1>
    <div v-for="(value, index) in deserializedValues" :key="index">
      <p>{{ value }}</p>
    </div>
  </div>

  <GoogleMap api-key=import.meta.env.VITE_APP_GOOGLEMAP_API
    :center="{ lat: 35.6762, lng: 139.6503 }"
    :zoom="12"
    style="width: 100%; height: 500px"
  >   
  </GoogleMap>

</template>


<script>
import { defineComponent } from 'vue';
import { GoogleMap } from 'vue3-google-map';

// Components
import SearchResults from '../components/SearchResults.vue';

export default defineComponent({
  name: 'ResultsView',

  computed: {
    deserializedValues() {
      return JSON.parse(this.$route.query.data || '[]');
    }
  },
  created() {
    console.log('受け取った配列:', this.deserializedValues);
  },

  components: {
    SearchResults,
    GoogleMap,
  },
});

</script>
