Stop：阻止事件冒泡（阻止内层事件向外层传递），事件的冒泡机制，内层发生了会向外层传递。
Capture：使用事件捕获（捕获内层发生的事件）
Prevent：阻止默认事件的发生

v-cloak：解决插值表达式的闪烁问题
vue.config.keyCodes.f2=113  （自定义按键修饰符）

beforeCreate的时候，data和methods还没有初始化，所以不能调用，它们两个最早也只能在create中调用。

Mounted是实例创建完成的最后一个生命周期函数

Transition的name属性对应script中的动画前缀，用于识别不同的transition
Transition-Group用于v-for循环，要加key属性；移动的时候，使用v-move和v-leave-to
Transition-Group的tag属性指定其要渲染成什么元素；不指定则默认为span

组件中的data必须是函数，然后返回一个对象；实例中的data可以是对象
Vue提供了component，使用is属性来确定组件名称（多个组件的切换）。
动态切换的时候，直接包在transition中，然后使用mode属性来确定方式；


route-link-active  当前激活的路由所拥有的class名称，也可以自传一个属性linkactive…
router-view使用命名视图的时候，在路由下的component中放一个对象（名称是字符串，加引号），按照名称：组件的名称来和router-view的name对应起来

computed(需要return一个值)：计算属性，只要计算属性function内部所用到的任何数据发生变化，就会立即重新计算这个值；属性结果会被缓存，方便下次使用，即多次引用时，只计算一次；

watch：callback中有两个值，newValue和oldValue
