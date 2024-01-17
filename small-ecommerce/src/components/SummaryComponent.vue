<script setup lang="ts">
import { ref } from 'vue'

const paymentType = ref("PIX");
</script>

<template>
  <div class="d-flex flex-column gap-1">
    <div class="d-flex justify-center align-center gap-5">
      <div>
        <h1> Entrega </h1>
      </div>
      <div>
        <p>
          CEP Info
        </p>
      </div>
    </div>
    <div>
      <div class="d-flex justify-center">
        <h1>
          Tipo de pagamento - {{ paymentType }}
        </h1>
      </div>
    </div>
  </div>
</template>