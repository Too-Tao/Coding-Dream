1. 一起资源皆可打包 webpack 是 bundle
    import logo from './logo.svg' 图片也可引入到js 中，参与js的运算
    在react里引入css img

    组件封装了或组合了一些html 完成了一个特定的功能，并以一个自定义标签的形式向外提供

    antd 是 UI 风格
    
2. 路由接管一切，配置在最前面
   <Router>
    <Route path="" component="">
   </Router>

   又两种路由 BrowserRouter  HashRouter(兼容性好)

   history.pushState(state,title,url)