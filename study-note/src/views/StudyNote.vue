<template>
  <div>
    <MarkDown :text="markdownText"></MarkDown>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  // toRefs,
  ref,
  // Ref
  onMounted,
  watch,
  // computed,
} from "vue";
import { useRoute } from "vue-router";
import { fetchStudyNote } from "@/api/Repositories";
import MarkDown from "@/components/MarkDown.vue";
export default defineComponent({
  components: { MarkDown },
  props: {},
  setup() {
    const markdownText = ref("");
    const route = useRoute();
    const init = async () => {
      const name = (route.query.name as string) || "";
      const id = (route.query.id as string) || "";
      let text: string = await fetchStudyNote(name, id);
      markdownText.value = text;
    };
    watch(route, init);
    onMounted(init);
    return {
      markdownText,
    };
  },
  data() {
    return {
      filters: {}, // 3
    };
  },
  // watch: {
  //   user: "getUserRepositories", // 1
  // },
  methods: {
    // updateFilters() {}, // 3
  },
});
</script>
<style lang="scss" scoped></style>
