<template>
  <div id="app">
    <router-view />
    <Footer v-if="$route.meta.ifShow_FootBar" />
  </div>
</template>
<script>
import Footer from './components/Footer'
import './common/css/commons.css'
export default {
  data() {
    return {}
  },
  components: {
    Footer
  }
}
</script>