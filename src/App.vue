<template>

  <div id="app">
    <Header /> 
    <router-view path="$router.key" />
  </div>
</template>

<script>
import './css/global.css';
import "./css/bootstrap.min.css";
import "./css/bootstrap-social.css";
import "./assets/css/esystem.css";
import "./assets/css/chat.css";

import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>