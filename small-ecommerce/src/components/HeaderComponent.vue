<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

const RedirectToHome = () => {
  router.push({ path: '/' })
}

const RedirectToCart = () => {
  router.push({ path: '/cart' })
}

</script>

<template>
  <div>
    <v-toolbar>
    <template v-slot:title>
      <span
        class="
          cursor
        "
        @click="RedirectToHome()"
      >
        Acme.co
      </span>
    </template>
    <div
      class="
        b
        button-circle
        cursor
        mr-5
      "
      @click="RedirectToCart()"
    >
      <font-awesome-icon
        :icon="['fas', 'cart-shopping']"
      >
      </font-awesome-icon>
    </div>
    </v-toolbar>
  </div>
</template>

<style scoped>
.button-circle:hover {
  box-shadow: 0 1px 3px;
}
</style>