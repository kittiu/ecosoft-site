<template>
  <v-card elevation="1">
    <v-card-text>
      <p class="text-h6 text-primary">{{ title }}</p>
      <div class="mt-3">
        <slot />
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
const props = defineProps(["title"]);
</script>
