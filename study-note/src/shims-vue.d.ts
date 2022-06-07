/* eslint-disable */
/**
shims-vue.d.ts是为了 typescript 做的适配定义⽂件，因为.vue ⽂件不是⼀个常规的⽂件类型，ts 是不能理解 vue ⽂件是⼲嘛的，
加这⼀段是是告诉 ts，vue ⽂件是这种类型的。
这⼀段删除，会发现 import 的所有 vue 类型的⽂件都会报错。
 */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "@kangc/v-md-editor";
declare module "@kangc/v-md-editor/lib/preview";
declare module "@kangc/v-md-editor/lib/theme/github.js";
