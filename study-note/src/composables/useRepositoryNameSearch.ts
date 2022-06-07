import { Ref, ref, computed } from "vue";
import { Commodity } from "@/interface/Commodity";

export default function useRepositoryNameSearch(
  repositories: Ref<Commodity[]>,
) {
  const searchQuery = ref("");
  const repositoriesMatchingSearchQuery = computed(() => {
    return repositories.value.filter((repository) =>
      repository.name.includes(searchQuery.value),
    );
  });

  return {
    searchQuery,
    repositoriesMatchingSearchQuery,
  };
}
