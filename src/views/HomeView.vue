<template>
  <SearchingPage />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import SearchingPage from '../components/SearchingPage.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    SearchingPage,
  },
});
</script>
