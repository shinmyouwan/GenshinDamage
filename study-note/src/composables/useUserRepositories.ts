// src/composables/useUserRepositories.js

import { fetchUserRepositories } from "@/api/Repositories";
import { Ref, ref, onMounted, watch } from "vue";
import { Commodity } from "@/interface/Commodity";

export default function useUserRepositories(user: Ref<string>) {
  const repositories: Ref<Commodity[]> = ref([]);
  const getUserRepositories = async () => {
    repositories.value = await fetchUserRepositories(user.value);
  };

  onMounted(getUserRepositories);
  watch(user, getUserRepositories);

  return {
    repositories,
    getUserRepositories,
  };
}
