<script setup lang="ts">

import AddressComponent from "@c/AddressRegister.vue";
import TypePaymentComponent from "@c/TypePaymentComponent.vue";
import SummaryComponent from "@c/SummaryComponent.vue";
import PaymentComponent from "@c/PaymentComponent.vue";

</script>

<template>
  <div class="d-flex flex-column align-center align-center fill-all-height">
    <v-stepper
      width="1000"
      :items="['Endereço', 'Tipo de Pagamento', 'Resumo', 'Pagamento']">
      <template v-slot:item.1>
        <v-stepper-windown class="d-flex flex-column align-center">
          <AddressComponent />
        </v-stepper-windown>
      </template>
      <template v-slot:item.2>
        <v-stepper-windown class="d-flex justify-center align-center">
          <TypePaymentComponent />
        </v-stepper-windown>
      </template>
      <template v-slot:item.3>
        <v-stepper-windown class="d-flex justify-center align-center">
          <SummaryComponent />
        </v-stepper-windown>
      </template>
      <template v-slot:item.4>
        <v-stepper-windown class="d-flex justify-center align-center">
          <PaymentComponent />
        </v-stepper-windown>
      </template>
    </v-stepper>
  </div>
</template>
