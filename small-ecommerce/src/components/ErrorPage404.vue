<script setup lang="ts">
import {useRouter} from 'vue-router'
const router = useRouter()

const goToHome = () => {
  router.push({path: '/'})
}
</script>

<template>
  <div
    class="
      FCJAC
      text-h2
      gap-5
      mt
    "
  >
    <span>
      Oops! Esse caminho não existe...
    </span>
    <v-btn
      class="home-button-shadow"
      width="200"
      height="80"
      rounded="pill"
      @click="goToHome()"
    > 
      <span class="text-h4"> Home </span>
    </v-btn>
  </div>
</template>

<style scoped>
.home-button-shadow {
  box-shadow: 0px 0px 15px cyan;
}

.home-button-shadow:hover {
  box-shadow: 0 0 15px cyan,
  0 0 25px cyan, 0 0 50px cyan;
}

.mt {
  margin-top: 150px;
}
</style>