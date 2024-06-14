<template>
  <SearchResults />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import SearchResults from '../components/SearchResults.vue';

export default defineComponent({
  name: 'ResultsView',

  components: {
    SearchResults,
  },
});
</script>
