<template>
  <div>
    {{ 0xf00d }}
    <MarkDown :text="markdownText"></MarkDown>
  </div>
</template>

<script lang="js">
import {
  defineComponent,
  toRefs,
  ref,
  // Ref
  // onMounted,
  // watch,
  // computed,
} from "vue";
import useUserRepositories from "@/composables/useUserRepositories";
import useRepositoryNameSearch from "@/composables/useRepositoryNameSearch";
import MarkDown from "@/components/MarkDown.vue";
import {text} from "./MarkdownText";
export default defineComponent({
  components: { MarkDown },
  props: {
    user: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    const markdownText = ref(text);
    console.log(24, props, context, markdownText); // { user: '' }
    // 使用 `toRefs` 创建对 `props` 中的 `user` property 的响应式引用
    const { user } = toRefs(props);
    const { repositories, getUserRepositories } = useUserRepositories(user);
    const { searchQuery, repositoriesMatchingSearchQuery } =
      useRepositoryNameSearch(repositories);
    return {
      // 因为我们并不关心未经过滤的仓库
      // 我们可以在 `repositories` 名称下暴露过滤后的结果
      markdownText,
      repositories,
      getUserRepositories,
      searchQuery,
      repositoriesMatchingSearchQuery,
    }; // 这里返回的任何内容都可以用于组件的其余部分
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
