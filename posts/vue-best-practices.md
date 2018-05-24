---
title: Vue最佳实践
tags: [Vue, 技巧]
date: 2018-03-20 20:18:51
description: Vue最佳实践
---

> 记录我在使用 Vue 中发现的一些好的代码实践，希望能够保持更新。🤠

<!-- more -->

## this 引用

在组件作用域内使用箭头函数可以保证 `this` 永远指向组件本身。

```js
// bad
export default {
  data() {
    return {
      msg: 'hello'
    }
  },
  methods: {
    hello() {
      setTimeout(function() {
        console.log(this.msg) // this 指向 window
      })
    }
  }
}
```

```js
// good
export default {
  data() {
    return {
      msg: 'hello'
    }
  },
  methods: {
    hello() {
      setTimeout(() => {
        console.log(this.msg) // this 指向组件
      })
    }
  }
}
```

## 属性绑定

绑定字符串不需要加冒号。

```html
<!-- bad -->
<component :str="'hello'"></component>

<!-- good -->
<component str="hello"></component>
```

布尔属性省略值时默认为 `true`。

```html
<my-modal visible></my-modal>
<!--等价于-->
<!--<my-modal :visible="true"></my-modal>-->
```

绑定无参函数不需要加括号。

```html
<!-- bad，括号多余 -->
<button @click="onClick()"></button>

<!-- good，隐式传递了 event 对象 -->
<button @click="onClick"></button>
```

只有一行代码的事件函数，可以直接写标签上。

```html
<button @click="visible = true"></button>
```

## 双向绑定

表单组件一般都支持双向绑定，实际场景中表单组件值发生变化往往要在 `POST or PUT` 请求之后。如果直接在 `v-model` 绑定原始值往往会打破单向数据流。

使用计算属性的 `get/set` 方式可以解决这个问题。（也适用 `.sync`）

```js
export default {
  template: `
        <div>
            <input type="radio" v-model="nameVal" value="1">
            <input type="radio" v-model="nameVal" value="2">
        </div>`,
  data() {
    return {
      name: ''
    }
  },
  computed: {
    nameVal: {
      get() {
        return this.name
      },
      set(val) {
        this.edit(val)
      }
    }
  },
  methods: {
    edit(name) {
      this.$http.put('/name', { name }).then(data => {
        this.name = name
      })
    }
  },
  created() {
    this.$http.get('/name').then(data => {
      this.name = data.name
    })
  }
}
```

## 释放资源

善用 `destory` 释放原生事件、第三方组件、全局事件总线等。

```js
import bus from 'event-bus'
import plugin from 'plugin'

export default {
  // ...
  created() {
    bus.$on('hello', this.hello) // 注册全局事件
    window.addEventListener('resize', this.onResize) // DOM 事件
    plugin.init() // 第三方组件初始化
  },
  destoryed() {
    bus.$off('hello', this.hello)
    window.removeEventListener('resize', this.onResize)
    plugin.destory()
  }
}
```

## 修饰符

Vue 内置了许多常用修饰符可以让你少写几行代码，提高开发效率。

```html
<!-- 输入字符串转数字 -->
<input type="text" v-model.number="value">

<!-- 输入字符串去前后空格 -->
<input type="text" v-model.trim="value">

<!-- 监听鼠标按键，支持 left, right, middle -->
<button @click.left="onLeftClick">点击鼠标左键</button>
<button @click.right="onRightClick">点击鼠标右键</button>

<!-- 停止冒泡，阻止默认行为 -->
<button @click.stop.prevent="doThis"></button>

<!-- 键盘按下确认键，支持 keycode 和键别名 -->
<input @keyup.13="onEnter">

<!-- 只执行一次事件 -->
<button @click.once="doThis"></button>

<!-- 监听原生事件 -->
<el-button @click.native="doThis"></el-button>
```

以上是一些常用的修饰符，更多用法可以去文档上找找。

## 数据请求

切换路由请求数据时，一般都需要兼容两种视图打开方式：路由跳转和直接 URL 输入。

```js
export default {
    watch: {
        $route() {
            this.fetchData()
        },
    },
    methods() {
        fetchData() {
            // 避免重复请求
            if(this.isLoading) return
            this.isLoading = true
            // 请求数据
            // ajax...
        }
    },
    created() {
        this.fetchData()
    }
}
```

路由跳转会触发 `watch -> $route`，如果是未创建的组件还会触发 `create`，直接 URL 只会触发 `created` 钩子。一般在两个位置都执行数据请求，再通过判断避免重复请求，还可以利用 `isLoading` 标记做加载动画。如果使用了 `keep-alive` 组件，还需要考虑 `activated` 钩子。

## 减少嵌套层级

组件即使未在 `props` 声明，也可以传递一些原生 DOM 属性。

```html
<!-- bad -->
<div class="content-view">
    <router-view></router-view>
</div>

<!-- good -->
<router-view class="content-view"></router-view>
```

命名插槽中需要放置多个块时，可以利用 `template` 组件。

```html
<!-- bad -->
<my-component>
    <div slot="hello">
        <div class="block1"></div>
        <div class="block2"></div>
    </div>
</my-component>

<!-- good -->
<my-component>
    <template slot="hello">
        <div class="block1"></div>
        <div class="block2"></div>
    </template>
</my-component>
```

不管是内置组件还是自己的组件，有时候不需要多一层包裹去添加样式，反而因此增加了嵌套层级。

## 过滤器

过滤器的最佳应用场景应该是值的转换，比如：`Date` 类型日期转字符串、货币、字符截断、markdown 等等。

```js
// 按长度截断文字，补...，中文 = 2
const cnReg = /[\u4e00-\u9fa5]/
Vue.filter('ellipsis', (str, len = 10) => {
  let i = 0
  let j = 0
  let ret = ''
  const text = String(str).trim()
  const max = text.length
  while (j < max && i < len) {
    const c = text.charAt(j)
    ret += c
    j += 1
    i = cnReg.test(c) ? i + 2 : i + 1
  }
  return ret === text ? text : `${ret}...`
})

// 日期转相对时间
Vue.filter('calendar', value => moment(value).calendar())
```

也可以作一些业务数据区别展示。

```js
Vue.filter('userRole', value => ['创建者', '管理员', '成员'][value])
```

## Props

* 布尔属性默认值为 `false` 可以省略
* 数组最好声明默认值 `[]`，保证数据请求成功前模版里的 `v-for` 不会出错
* 对象也需要注意是否声明了默认值 `{}`，避免模版中使用 `obj.xx` 报错

```js
{
    props: {
        visible: Boolen, // 默认即为 false
        data: Array,     // 需要进行非空判断
        data2: {         // 可安全使用 v-for
            type: Array,
            default: []
        },
        obj: Object,     // 需要进行非空判断
        obj2: {          // 可安全使用 obj.xx
            type: Object,
            default() {
                return {}
            }
        }
    }
}
```

## v-if

如果模版中绑定了 `obj.xx` 时，需要注意 `obj` 是否是异步数据，默认值是否为 `null`。安全起见，可在组件最外层加 `v-if` 判断。

```html
<template>
    <div v-if="!!obj">
        <p>{{obj.name}}</p>
        <p>{{obj.age}}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            obj: null
        }
    }
}
</script>
```

## 路由

对于经常发生变化的一级、二级菜单导航，可以和路由数据结合起来，按模块划分，视图直接引用对应模块的路由数据来生成导航，减少维护成本。

```js
// routes.js
export const settingRoutes = []
export const userRoutes = []

export default [...settingRoutes, ...userRoutes]
```

菜单组件中：

```html
<template>
    <ul>
        <li v-for="item in menus" :key="item.name">
            <router-link :to="item">{{item.text}}</router-link>
        </li>
    </ul>
</template>
<script>
import { settingRoutes } from '../routes'

export default {
    data() {
        menus: settingRoutes
    }
}
</script>
```

## 继承和混合

用过`ElementUI`的同学，都知道其 [Dialog 组件](http://element-cn.eleme.io/#/zh-CN/component/dialog) 是不支持垂直居中，只提供了一个`top`属性用于设置组件内容节点到顶部的距离。早期 [1.x](http://element-cn.eleme.io/1.4/#/zh-CN/component/dialog) 版本时 Dialog 组件也不支持`append-to-body`。我们可以通过继承和混合来扩展这些需要的特性。

```js
// dialogEx.js
import { Dialog } from 'element-ui'

export default {
  name: 'ElDialogEx',
  extends: Dialog,
  props: {
    appendToBody: {
      // 把组件插入 body 下
      type: Boolean,
      default: true
    },
    center: Boolean // 设置垂直居中
  },
  computed: {
    sizeClass() {
      // 这个 sizeClass 计算属性是组件源码里就有的，这里是利用了类名支持字符串拼接的特性，在这个函数里增加了垂直居中的自定义类拼接
      return `el-dialog--${this.size}` + this.center ? ' dialog-center ' : ''
    }
  },
  mounted() {
    if (this.appendToBody) document.body.appendChild(this.$el)
  },
  beforeDestroy() {
    if (this.appendToBody) this.$el.parentNode.remove(this.$el)
  }
}
```

之后你又发现，在其他的一些组件中也需要`appendToBody`这个特性，那么就可以把相关的代码写成`mixins`。

```js
// appendToBody.js
export default {
  props: {
    appendToBody: {
      // 把组件插入 body 下
      type: Boolean,
      default: true
    }
  },
  mounted() {
    if (this.appendToBody) document.body.appendChild(this.$el)
  },
  beforeDestroy() {
    if (this.appendToBody) this.$el.parentNode.remove(this.$el)
  }
}
```

现在`dialogEx`组件可以写的更简单。

```js
// dialogEx.js
import { Dialog } from 'element-ui'
import appendToBody from 'mixins/appendToBody'

export default {
  name: 'ElDialogEx',
  extends: Dialog,
  mixins: [appendToBody],
  props: {
    center: Boolean // 设置垂直居中
  },
  computed: {
    sizeClass() {
      // 这个 sizeClass 计算属性是组件源码里就有的，这里是利用了类名支持字符串拼接的特性，在这个函数里增加了垂直居中的自定义类拼接
      return `el-dialog--${this.size}` + this.center ? ' dialog-center ' : ''
    }
  }
}
```

## 第三方库的集成

第三方库一般是传统的基于 DOM 和原生 js。它们虽然写起来没有使用任何的代码模版，但出于作者的编程经验其实都符合了大众使用预期。

任何一个库一般都会提供以下的接口：

* 使用自定义配置初始化
* 可访问的属性
* 可调用的功能函数
* 事件绑定
* 良好的生命周期钩子

> 如果没有足够的编程经验用原生 js 去写一个插件可能最后就是一团乱麻。这也是 Vue 等众多前端框架的作用，它们约束了一个模块的代码模版，提供了事件管理、生命周期运行、属性和函数的定义，使即使经验不足的人也能写出一个看得过去的模块。

把第三方库转换为一个 Vue 组件，其实就是把这个库的接口挂到 Vue 组件对应的组件选项上去。

```js
import Lib from 'lib'

export default {
  props: {
    options: Object
  },
  data() {
    return {
      instance: null
    }
  },
  methods: {
    doSomething(xxx) {
      // lib 的操作函数
      // 外部使用 $refs 调用
      this.instance.doSomething(xxx)
    }
  },
  computed: {
    libProp() {
      // lib 的可访问属性使用计算属性访问
      // 外部使用 $refs 调用
      return this.instance.prop
    }
  },
  watch: {
    options(val) {
      // 监听配置更新，调用 lib 接口更新配置
      if (val) this.instance.updateOptions(val)
    }
  },
  mounted() {
    // mounted 或者 created 对应 lib 实例化并传入自定义配置
    this.instance = new Lib(this.$el, this.options)
    // lib 内的事件 $emit 出去，外部监听
    this.instance.on('update', (...args) => {
      this.$emit('update', ...args)
    })
  },
  destroyed() {
    // lib 如果提供了 destroy 等销毁资源的函数一般都会对其内部的 DOM 事件解绑
    this.instance.destroy()
  }
}
```

也可能你想把一个库变为一个 Vue 指令。

```js
import Lib from 'lib'

export default {
  install(Vue, option = {}) {
    // 存放全局配置
    const defaults = option

    Vue.directive('my-directive', {
      bind(el, { value }) {
        // 当前配置混合全局配置
        const options = Object.assign({}, defaults, value)
        const lib = new Lib(el, options)
        el._libInstace = lib // 缓存 lib 实例
      },
      update(el, { value }, vnode) {
        // 更新 lib 配置
        el._libInstace.setOptions(value)
      },
      unbind(el) {
        // 销毁 lib
        el._libInstace.destroy()
        delete el._libInstace
      }
    })
  }
}
```

指令有着完善的生命周期钩子，但在数据管理上偏弱。一般用于单一功能的集成，或者只需要一次初始化的插件。

> 指令中可通过 `el` 或 `el.dataset` 进行生命周期间的数据共享。
