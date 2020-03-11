// 类型注解
let foo = 'xx'  // 类型推论
let bar: String;  // 类型注解

// bar = 1;   // error
bar = 'bar';

// 数组类型约束
let names: String[];
names = ['Tom', 'wang'];

// 任意类型
let bas: any;
bas = 123;
bas = 'abc';

// any应用于数组
let list: any[] = [1, true, 'free'];
list[0] = 'abc';

// 函数中使用类型
function fun(person: string): string {
  return 'Hello ' + person;
}
fun('wangxing');

function user(): void {
  alert('hhh');
}


// 函数
// 必填参数：形参只要申明必须传值
function sayHello(name: string, age: number) {
  console.log(name, age);
}
// sayHello('wx');   // error：必须要两个参数
sayHello('wx', 18);

// = 25: 设置一个默认参数后可以不传值
function sayHello1(name: string, age: number = 25) {
  console.log(name, age);
}
sayHello1('wx');
sayHello1('wx', 18);

// ?: 设置为可选参数，可选参数要住必选参数后面
function sayHello2(name: string, age?: number) {
  console.log(name, age);
}
sayHello2('wx');
sayHello2('wx', 18);

// 函数重载：以参数数量或类型区分多个同名函数
// 先申明再实现
function info(a: object): string;
function info(a: string): object;
// 实现
function info(a: any): any {
  if (typeof a === 'object') {
    return a.name;
  } else {
    return { name: a };
  }
}
info('wx');
info({ name: 'wd' });


// class
class MyComp {
  private _foo: string;   // 私有属性，不能在类的外部访问
  protected bar: string;  // 保护属性，还可以在派生类中访问
  readonly hh = 'hey';    // 只读属性必须在申明时或构造函数里初始化
  static ts = 'ts';   // 静态属性：只能通过MyComp.name访问

  // 构造函数：初始化成员变量
  // 参数加上修饰符，能够定义并初始化一个成员属性
  constructor(private wx = 'wangxing') {
    this._foo = 'foo';
    this.bar = 'bar';
  }

  // 方法也有修饰符
  private someMethod() {
    this.wx = 'wd';
  }

  // 存取器：存取数据时可添加额外逻辑；在vue里可以用作计算属性
  get foo() { return this._foo };
  set foo(val) { this._foo = val };
}
const mycomp = new MyComp();
mycomp.hh;
mycomp.foo = 'ttt';

