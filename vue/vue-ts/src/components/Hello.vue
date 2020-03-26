<template>
  <div>
    {{ msg }}
    {{ name }}
    <p>
      <input type="text" placeholder="输入特性名称" @keyup.enter="addFeature" />
    </p>
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.name }}</li>
    </ul>
    <li>特性数量：{{ featureCount }}</li>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

// 类型注解
let title: string;
let name = "xx"; // 类型推断

// 数组类型
let names: string[];
// let names: Array<string>;
// names = ["wx", "wd", 1];//类型不对
let arr: (string | number)[];
arr = ["wx", "wd", 12];

// 任意类型
let list: any[] = [1, true, "free"];
list[0] = "wx";

// 函数中使用
function greeting(person: string): string {
  return "hello, " + person;
}
greeting("tom");

// void类型
function warn(): void {
  alert("warning!!!");
}

// 内置类型：string, number, boolean, void, any(都是小写)

// ts函数中如果声明，就是必选参数
// function sayHello(name: string, age: number): string {
//   return name + " " + age;
// }
// sayHello("wx", 30);

// function sayHello(name: string, age?: number): string {
//   return name + " " + age;
// }
// sayHello("wx");

function sayHello(name: string, age: number = 25): string {
  return name + " " + age;
}
sayHello("wx");

// 函数重载：如果有多个同名函数，通过参数数量或者类型不同或者返回值不同
function info(a: { name: string }): object;
function info(a: string): string;
function info(a: any): any {
  if (typeof a === "object") {
    return a.name;
  } else {
    return { name: a };
  }
}
info({ name: "wx" });
info("wangxing");

// 多肽
class Shape {
  // readonly: 只读属性必须在声明时或构造函数里被初始化
  readonly foo: string = "foo";
  area: number;
  // protected color: string;
  // 参数属性：给构造函数的参数加上修饰符，能够定义并初始化一个成员属性
  // constructor(color: string, width: number, height: number) {
  // 定义color属性并将构造函数参数赋值给他
  constructor(public color: string, width: number, height: number) {
    this.area = width * height;
    // this.color = color;
  }

  shoutout() {
    return (
      "I'm " + this.color + " width an area of " + this.area + " cm squared."
    );
  }
}

class Square extends Shape {
  constructor(color: string, side: number) {
    super(color, side, side);
    console.log(this.color);
  }

  shoutout() {
    return "我是" + this.color + " 面积是" + this.area + "平方厘米";
  }
}

const square: Square = new Square("blue", 2);
console.log(square.shoutout());

// 存取器：当获取和设置属性时有额外逻辑时可以使用存取器（又称getter、setter）
class Employee {
  private firstName: string = "wang";
  private lastName: string = "xing";

  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }
  set fullName(newName: string) {
    console.log("您修改了用户名");
    this.firstName = newName.split(" ")[0];
    this.lastName = newName.split(" ")[1];
  }
}
const employee = new Employee();
employee.fullName = "wen die";

// 接口约束结构
interface Person {
  firstName: string;
  lastName: string;
  sayHello(): string; // 要求实现方法
}
function Fun(person: Person) {
  return "Hello, " + person.firstName + person.lastName;
}
const user = { firstName: "wang", lastName: "xing", sayHello: () => "haha" };
console.log(user);
console.log(Fun(user));
// 类实现接口
class Greeter implements Person {
  constructor(public firstName = "", public lastName = "") {}
  sayHello() {
    return "Hello, " + this.firstName + this.lastName;
  }
}
const user2 = new Greeter("a", "b");
console.log(Fun(user2));

/** 泛型（Generics）：在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。 */
// 不用泛型
// interface Result {
//   ok: 0 | 1;
//   data: Feature;
// }

// 使用泛型
interface Result<T> {
  ok: 0 | 1;
  data: T[];
}
// 泛型函数1
// function getData<T>(): Result<T> {
//   const data: any[] = [
//     { id: 1, name: "类型注解", version: "2.0" },
//     { id: 2, name: "编译型语言", version: "1.0" }
//   ];
//   return { ok: 1, data };
// }

// 泛型函数2
function getData<T>(): Promise<Result<T>> {
  const data: any[] = [
    { id: 1, name: "类型注解", version: "2.0" },
    { id: 2, name: "编译型语言", version: "1.0" }
  ];
  return Promise.resolve({ ok: 1, data } as Result<T>);
}
/** */

/** */
class Feature {
  constructor(public id: number, public name: string, public version: string) {}
}
@Component
export default class Hello extends Vue {
  // private 仅当前类可用
  // protected 子类也可以用
  // public 都可以用

  @Prop() private msg!: string; // 属性msg是必填项且为字符串类型
  // @Prop() name?: string; // 属性msg是可项且为字符串类型
  @Prop({ default: "匿名" }) private name: string = "匿名"; // 属性msg是可项且为字符串类型
  // @Prop() obj: { foo: string }; // obj必须有foo属性

  // 普通属性相当于组件data
  // private list: Feature[] = [
  //   { id: 1, name: "静态类型", version: "1.0" },
  //   { id: 2, name: "编译", version: "2.0" }
  // ];

  // 使用泛型函数
  private list: Feature[] = [];

  // 生命周期
  // created() {
  //   // 使用泛型函数
  //   this.list = getData<Feature>().data;
  // }

  // 生命周期
  async created() {
    // 使用泛型函数2
    const result = await getData<Feature>();
    this.list = result.data;
  }

  // 计算属性
  get featureCount() {
    return this.list.length;
  }

  addFeature(event: any) {
    console.log(event);
    this.list.push({
      name: event.target.value,
      id: this.list.length + 1,
      version: "1.1"
    });
    event.target.value = "";
  }
}
</script>

<style>
ul {
  list-style: none;
}
</style>
