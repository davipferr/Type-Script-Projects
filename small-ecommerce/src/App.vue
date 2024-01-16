<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template>
  <div>
    <div>
      <HeaderComponent />
    </div>
    <div>
      <body>
       <router-view></router-view>
      </body>
    </div>
    <div>
    </div>
  </div>
</template>
