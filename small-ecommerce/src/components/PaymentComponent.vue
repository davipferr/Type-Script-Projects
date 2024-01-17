<script setup lang="ts">
type PaymentTypes = "PIX" | "BARCODE" | "CREDITCARD"

const paymentType = ref<PaymentTypes>("PIX");

const pixCode =""
</script>

<template>
  <div>
    <div>
        <v-sheet
        >
          <div v-if="paymentType === 'PIX'">
          <div class="d-flex justify-center">
            <h2>Copie o código para pagamento</h2>
          </div>
          <div class="mx-10 my-10 d-flex align-center justify-center gap-1">
            <p class="borderpix elevation-12">
              {{ pixCode }}
            </p>
            <v-btn color="gray" size="large" elevation="12">
              <font-awesome-icon
                :icon="['fas', 'copy']"
                size="lg"
                ></font-awesome-icon>
            </v-btn>
          </div>
        </div>
        <div v-else-if="paymentType === 'BARCODE'" class="h-100">
          <div class="d-flex justify-center align-center h-100">
            <v-btn>Gerar Boleto</v-btn>
          </div>
        </div>
        </v-sheet>
      </div>
  </div>
</template>