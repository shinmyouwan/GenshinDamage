const text = `
# VUE3学习笔记
### 1. 介绍
- 因为之前已经使用过 Vue2 进行开发, 所以不再写一些已经用烂了的东西, 只写 Vue3 新增的特性或者之前 Vue2 没注意的地方
### 2. 组合式 API
#### 说明
- 在 Vue 组件中，我们将放置各种组合式 API 的地方叫做 setup, 用于逻辑关注点分组
- 在我看来, 组合式 API 最大的用处其实是拆解过去 Vue2 的因为维护原因越来越臃肿的 .vue 文件, 不断的维护会将 .vue 文件扩大到1000行以上, 组合式 API 最重要的一点就是把 js 逻辑按模块分离, 形成各个独立的功能模块
- 但是提到一点, vue2 其实也能通过一定的方式让功能分块, 只不过 vue2 的this 指向太过强大, 让很多人包括我在内过于依赖 this 的各种功能. 我觉得在仔细看完 Vue3 的思路后, 其实可以想办法对 Vue2 的功能进行简单的分离
#### setup 函数
- 是一个接收 props 和 context(下有详细说明) 的函数
- 如果要在setup中使用 API , 需要从 vue 库中引入
- setup 函数执行的时间应该等同于 beforeCreate, 此时没有 this
##### context 对象
- 用于对组件暴露三个属性attrs, slots, emit
- attrs: 非响应式对象，等同于 $attrs, 不在 props 的 html 属性
- slots: 非响应式对象，等同于 $slots, 组件插槽的内容
- emit: 非响应式对象，等同于 $emit, 向父级调用函数发送数据
#### 引入方式
- 引入组合式 API 的方式: 
\` import { ref, watch, computed, toRefs, Ref, reactive, onMounted, ... } form 'vue' \`
#### API
- ref 函数, 用于给传入其中的参数包裹上 proxy, 用于 Vue3 的双向绑定, 得到的响应式参数用 ref.value 获取或修改值.


`;
export { text };
