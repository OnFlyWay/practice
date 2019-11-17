在ts的类中，在构造函数的参数上使用public等同于创建了同名的成员变量；
TypeScript中的数据类型有：
    Undefined （定义了一个变量，但没有给他赋予任何值）
    number:数值类型;
    string : 字符串类型;
    boolean: 布尔类型；
    enum：枚举类型；
    any : 任意类型，一个牛X的类型；
    void：空类型(当一个函数没有返回值)
    Array : 数组类型;两种定义方式：
        一、可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
            let list: number[] = [1, 2, 3];
        二、使用数组泛型，Array<元素类型>
            let list: Array<number> = [1, 2, 3];
    Tuple : 元祖类型；允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
    Null ：空类型
    类型断言：
        let someValue: any = "this is a string";
        let strLength: number = (someValue as string).length;
接口（interface）：
    TypeScript的核心原则之一是对值所具有的结构进行类型检查（类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以）；接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
    eg：interface SquareConfig {
        width: number;      //必须
        color?: string;     //可选属性
        readonly x: number; //只读属性
    }
    接口也可以描述函数类型：
        为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。
        interface SearchFunc {
            (source: string, subString: string): boolean;
        }
    可索引的类型：
        与函数类型差不多，我们也可以描述那些能够“通过索引得到”的类型，比如a[10]或ageMap["daniel"]。 可索引类型具有一个 索引签名，它描述了对象索引的类型，还有相应的索引返回值类型。
        interface StringArray {
            [index: number]: string;
        }
    实现接口：
        TypeScript也能够用它来明确的强制一个类去符合某种契约（使用implements）,也可以在接口中描述一个方法，在类里实现;
    接口继承：
        extends。接口也可以继承类，当接口继承了一个类类型时，它会 继承类的成员但不包括其实现。 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 接口同样会继承到类的private和protected成员。 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现；
泛型：
    我们需要一种方法使返回值的类型与传入参数的类型是相同。
    function identity<T>(arg: T): T {
        return arg;
    }
    T帮助我们捕获用户传入的类型，之后我们就可以使用这个类型；
    泛型函数、泛型类。