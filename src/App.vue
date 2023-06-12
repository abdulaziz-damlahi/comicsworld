<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header class="header-background">
    <div class="logo"></div>
    <routerlink to="/">
      <p><img src="public/logo.png" alt="Italian Trulli" class="homepagelogo"></p>
      <h1>  <span>COMICS </span> <strog>WORLD</strog> </h1>
    </routerlink>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>

</style>
