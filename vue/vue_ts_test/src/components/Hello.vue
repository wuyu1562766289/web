<template>
  <div>
    <h1>{{msg}}</h1>
    <div>
      <input type="text" @keydown.enter="addFeature" />
    </div>
    <!-- <div v-for="feature in features" :key="feature.id">{{ feature }}</div> -->
    <div v-for="feature in features" :key="feature.id">{{ feature.name }}</div>
    <div>特性总数：{{count}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";

// 类的约束
// class Feature {
//   constructor(public id: number, public name: string) {}
// }
// 接口约束
export interface Feature {
  id: number;
  name: string;
  // 可以对方法进行约束
  // abc: () => string;
}

// 泛型
// T为占位符，可以自己随便写
interface Result<T> {
  ok: 0 | 1;
  data: T[];
}
// function getData<T>(): Result<T> {
//   const data: any[] = [
//     { id: 1, name: "类型注解" },
//       { id: 2, name: "静态类型检测" }
//   ];
//   return {ok: 1, data};
// }
function getData<T>(): Promise<Result<T>> {
  const data: any[] = [
    { id: 1, name: "类型注解" },
    { id: 2, name: "静态类型检测" }
  ];
  // return Promise.resolve<Result<T>>({ok: 1, data});
  return new Promise(resolve => resolve({ ok: 1, data }));
}

@Component
export default class Hello extends Vue {
  // 括号里的是给vue的，下面的给ts
  @Prop({ type: String, default: "" })
  private msg!: string; // 加！是为了告诉编译器，这里一定会有参数对其进行赋值，不需要担心了

  // 1
  // 属性相当于data中的值
  // features: string[];
  // constructor() {
  //   super();
  //   this.features = ["类型注解", "静态类型检测"];
  // }

  // 2
  // private features = ["类型注解", "静态类型检测"];

  // 3
  private features: Feature[] = [];
  constructor() {
    super();
    // this.features = [
    //   { id: 1, name: "类型注解" },
    //   { id: 2, name: "静态类型检测" }
    // ];

    // this.features = getData<Feature>().data;
  }

  // 生命周期直接申明（名字相同即可）
  // private created() {
  //   console.log("created");
  // }

  private async created() {
    this.features = (await getData<Feature>()).data;
  }

  // 回调函数直接申明
  // private addFeature(event: any) {
  //   // this.features.push(event.target.value);
  //   this.features.push({ id: this.count + 1, name: event.target.value });
  //   event.target.value = "";
  // }

  // 不给Emit传参，表示事件名称是方法名
  @Emit()
  private addFeature(event: any) {
    // this.features.push(event.target.value);
    const feature = { id: this.count + 1, name: event.target.value };
    this.features.push(feature);
    event.target.value = "";
    // 如果没有返回值，形参是事件参数，否则返回值是
    return feature;
  }

  @Watch("features", { deep: true })
  private msgChange(newVal: any, oldVal: any) {
    console.log(newVal, oldVal);
  }

  // 计算属性可以使用getter、setter实现
  get count() {
    return this.features.length;
  }
}
</script>

<style scoped>
</style>