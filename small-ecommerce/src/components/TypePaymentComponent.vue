<script setup lang="ts">
import { watch } from "vue";
import { ref } from "vue";

type PaymentTypes = "PIX" | "BARCODE" | "CREDITCARD"

type PaymentObj = Record<PaymentTypes, boolean>

const paymentType = ref<PaymentTypes>("PIX");

const pixCode =""

watch(
  () => paymentType.value,
  (nv, ov) => console.log(`nv: ${nv}, ov: ${ov}`)
);

</script>

<template>
  <div>
    <div class="d-flex flex-column justify-center align-center mb-10">
      <div>
        <h1>
          Tipo de pagamento: 
          {{  
            paymentType === 'PIX' ? 
            'Pix' : paymentType === 'BARCODE' ? 
            'Boleto' : 'Cartão de crédito'
          }}
        </h1>
      </div>
      <div class="d-flex gap-5 mt-5">
        <v-btn
          @click="paymentType = 'PIX'"
          :class="{ 'pix-selected': paymentType === 'PIX'}"
        >
          <font-awesome-icon :icon="['fab', 'pix']" color="green"></font-awesome-icon>
        </v-btn>
        <v-btn
        @click="paymentType = 'BARCODE'"
        :class="{ 'billet-selected': paymentType === 'BARCODE'}"
        >
          <font-awesome-icon :icon="['fas', 'barcode']"></font-awesome-icon>
        </v-btn>
        <v-btn
        @click="paymentType = 'CREDITCARD'"
        :class="{ 'credit-card-selected': paymentType === 'CREDITCARD'}"
        >
          <font-awesome-icon :icon="['fas', 'credit-card']" color="orange"></font-awesome-icon>
        </v-btn>
      </div>
    </div>

    <div class="mb-10">
      <v-expand-x-transition>
        <v-sheet
          v-show="paymentType === 'CREDITCARD'"
          width="800"
          min-height="200"
          elevation="16"
          rounded="lg"
          class="transition"
        >
          <div class="py-10">
            <div class="d-flex flex-column align-center">
              <div class="d-flex w-75">
                <text-field-component
                  width="300"
                  span-text="Nome do completo"
                  density="compact"
                  ></text-field-component>
              </div>
              <div class="d-flex gap-1 w-75">
                <text-field-component
                  width="300"
                  span-text="Número do cartão"
                  density="compact"
                  ></text-field-component>
                <text-field-component
                  width="130"
                  span-text="Data de expiração"
                  density="compact"></text-field-component>
                <text-field-component
                  width="90"
                  span-text="CVV"
                  density="compact"></text-field-component>
              </div>
            </div>
          </div>
        </v-sheet>
      </v-expand-x-transition>
    </div>
  </div>
</template>

<style>
.borderpix {
  border-radius: 10px;
  background-color: gray;
  padding: 10px;
  width: 700px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.pix-selected {
  border: 1px solid green
}

.billet-selected {
  border: 1px solid white
}

.credit-card-selected  {
  border: 1px solid orange
}

</style>
