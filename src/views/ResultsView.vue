<template>
  <SearchResults />
  <div>
    <h1>別のコンポーネント</h1>
    <div v-for="(value, index) in deserializedValues" :key="index">
      <p>{{ value }}</p>
    </div>
  </div>

</template>

<script>
import { defineComponent } from 'vue';

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
  },
});
</script>
