<template>
  <v-md-preview :text="text"></v-md-preview>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    text: {
      required: true,
      type: String,
    },
  },
});
</script>
<style lang="scss" scoped></style>
