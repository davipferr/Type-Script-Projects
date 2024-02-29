<script setup lang="ts">

import { ref } from "vue"
import TextFieldComponent from "@c/TextFieldComponent.vue"

const cep = ref<number>()
const street = ref<string>()
const streetNum = ref<number>()
const city = ref<string>()
const state = ref<string>()

</script>

<template>
  <div>
    <div class="d-flex gap-5">
      <div>
        <TextFieldComponent v-model="cep" width="400" span-text="CEP" density="compact" />
      </div>
      <div class="d-flex gap-1">
        <div>
          <TextFieldComponent v-model="street" width="300" span-text="Rua" density="compact" />
        </div>
        <div>
          <TextFieldComponent
            v-model="streetNum"
            width="100"
            span-text="Número" 
            density="compact"
            />
        </div>
      </div>
    </div>
    <div class="d-flex gap-5">
      <div>
        <TextFieldComponent v-model="city" width="400" span-text="Cidade" density="compact" />
      </div>
      <div>
        <TextFieldComponent v-model="state" width="400" span-text="Estado" density="compact" />
      </div>
    </div>
  </div>
</template>
