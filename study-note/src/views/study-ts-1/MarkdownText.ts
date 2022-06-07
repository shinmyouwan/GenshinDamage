const text = `
# TypeScript学习笔记
### 1. 介绍, 基础类型及变量声明
#### 介绍
- ts 在定义声明变量时, 需要在变量名后加上": 类型"来定义变量的类型
- ts 在定义声明常量时, 不需要添加类型
- 可以在函数名后加上": 类型"来限制函数返回值的类型
- 可以在函数参数名后加上": 类型"来限制函数传入值的类型
- 和 js 一样, 推荐使用 let 代替 var, 因为 let 的作用域更小更安全
#### 数据类型
- 数字 number (和js相同只有浮点数)
- 字符串 string
- 布尔值 boolean
- 数组 number[] (在任意元素类型后接上[])
- 元组 [string, number] (创建一个已知元素数量和类型的数组, 在越界时, 会使用联合类型替代)
- 枚举 enum Color {Red, Green, Blue} (使用特殊的 enum 定义, 可以由枚举元素指向枚举值, 也可以反向指向)
- 任意 Any (指定任意类型)
- 空 void (仅可以赋值 undefined 和 null, 这两个类型又可以独立定义, 但是用处不大, 不再列举)
- 不存在 never (用于定义永不存在的值, 任何其他的类型都不能赋值给 never, 可用于抛错)
- 对象 object (如果用到了对象, 更建议使用从接口 interface 创建的对象)
#### 类型断言
- 有时, 我们会将 any 赋值给其他的数据类型, 这时候可能需要类型断言
- (<string>anyType).length
- (anyType as string).length
`;
export { text };
