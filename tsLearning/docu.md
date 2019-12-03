let isString:string='asdf'
let decLiteral: number = 6;
let isDone: boolean = false;
let list0: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3];//数组泛型
let x: [string, number];//元组
enum Color {Red, Green, Blue}//枚举，默认情况下，从0开始为元素编号
let c: Color = Color.Green;
// 或者，全部都采用手动赋值：
enum Colors {Red = 1, Green = 2, Blue = 4}
let c1: Colors = Colors.Green;
let notSure: any = 4;
// void:
// void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void
// never:
// 类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。 never类型是任何类型的子类型，也可以赋值给任何类型
// object:
// 表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型
// 类型断言：
let someValue: any = "this is a string";
// 类型断言有两种形式。 其一是“尖括号”语法： let strLength: number = (<string>someValue).length;
// 另一个为as语法：
let strLength: number = (someValue as string).length;
// 两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
