import { Commodity } from "@/interface/Commodity";
import { text as studyTs_1 } from "@/views/study-ts-1/MarkdownText";
import { text as studyVue3_1 } from "@/views/study-vue3-1/MarkdownText";
const fetchUserRepositories = async (uid: string) => {
  console.log(uid);
  const data: Commodity[] = [
    {
      name: "水",
      id: "001",
      money: "2",
      number: "1000",
    },
  ];
  return data;
};
const fetchStudyNote = async (name: string, id: string) => {
  const o = {
    studyTs_1,
    studyVue3_1,
  };
  const t = `study${name}_${id}`;
  console.log(name, id, t, Object.prototype.hasOwnProperty.call(o, t));
  if (Object.prototype.hasOwnProperty.call(o, t)) {
    const data = o[t as keyof typeof o];
    return data;
  } else {
    return "";
  }
};
export { fetchUserRepositories, fetchStudyNote };
