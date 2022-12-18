<template>
  <a href="#" @click="view('home')">Home</a>
  <a href="#" @click="view('counter')">Counter</a>

  <NuxtPage />

  <LazyHomeWelcome v-if="page === 'home'" />
  <LazyCounter v-if="page === 'counter'" />
  <div v-if="false">
    {{route.params.name}}
  </div>
</template>

<script setup>
const page = ref("home");
const route = useRoute();

function view(name) {
  page.value = name;
}
</script>
