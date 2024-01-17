<script setup lang="ts">
type Variant = "outlined" | "filled" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled" | undefined

const props = withDefaults(
  defineProps<{
    width?: string
    variant?: Variant
    labelText?: string
    spanText?: string
    density?: "default" | "comfortable" | "compact"
    hideDetails?: boolean
  }>(),
  {
    variant: "outlined",
    hideDetails: false,
  }
)
</script>

<template>
  <div>
    <v-responsive :width="props.width">
      <span>{{ props.spanText }}</span>
      <v-text-field
      :variant="props.variant"
      :label="props.labelText"
      :density="props.density"
      :hide-details="props.hideDetails"
      ></v-text-field>
    </v-responsive>
  </div>
</template>
