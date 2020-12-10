SSR(服务端渲染):serve side rendering.SEO(搜索引擎优化)好
特性：
1、每次访问必须新建一个vue实例；
2、只会触发组建的beforeCreated和created，需要客户端Js.
核心库：
vue
vue-serve-renderer->createRenderer()
打包的时候，需要分为服务端和客户端。