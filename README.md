# uniapp模板

> 一大段的uniapp描述：uniapp模板，用户快速构建一个uniapp

### 项目资料
 - [设计稿](https://share.lanhuapp.com/#/invite?sid=lx0aaOw5)
 - [接口文档](http://uat.51qiyice.com/manufacture/doc.html)
 - [后台地址]() --- 账号：admin，密码：admin123

### 参考文档
 - [uni开发文档](https://uniapp.dcloud.io/README)

## 编辑器
> HBuilder



## uniapp规范
> uniapp架构说明：使用原生开发，UI方面选择使用uview,，样式使用less进行书写，在开发期间请遵守该文档规范

## 文件命名规范
 - 图片命名：[type]_[name]_[number] 例如：icon_arrow_01.png, banner_01.png
 - 组件命名：首字母大写，驼峰
 - 视图命名：小驼峰，首字母不大写
 - 其他命名：小驼峰，首字母不大写
 - 新增每一个文件都要在对应的目录里面的README.md记录

## HTML规范
 - 1、最外层必须包含一个view
 - 2、空标签必须只闭合 例：\<image />
 - 3、类名必须根据wxss的规范进行命名或者使用BEM，例如：xxx-xxx_xxx
 - 4、组件命名必须驼峰试，且必须首字母大写
 - 5、所有的组件必须等写在最外一层
 - 6、图片标签需要包含mode属性，列表的mode为aspectFill, 详情为aspectFit
 - 7、纯文本内容使用text, 不要全都使用view
 - 8、事件方法写在标签的最后，if和for写到事件的最后 例：\<view wx:for="" wx:if="true" bindtap="getUserProfile">xxxxx\</view>

## Css规范
### Css书写顺序
 - 1.位置属性(position, top, right, z-index, display, float等)　
 - 2.大小(width, height, padding, margin)
 - 3.文字系列(font, line-height, letter-spacing, color- text-align等)　
 - 4.背景(background, border等)
 - 5.其他(animation, transition等)

### Css语法：
 - 1.每条声明语句的 : 后应该插入一个空格。
 - 2.所有声明语句都应当以分号结尾。最后一条声明语句后面的分号是可选的，但是，如果省略这个分号，你的代码可能更易出错。
 - 3.十六进制值应该全部小写，例如，#fff。
 - 4.尽量使用简写形式的十六进制值，例如，用 #fff 代替 #ffffff。
 - 5.避免为 0 值指定单位，例如，用 margin: 0; 代替 margin: 0px;。
#### 以上是部分要，具体参考stylelint中的[参考文档](https://blog.csdn.net/he_Jasonzhi/article/details/80167067)

## JS规范
 - 全面拥抱 es6
 - 没有结束后面带分号
 - 使用全等符号
 - 声明的变量一定要使用
 - 每个逗号后面必须有空格 let { xxx, xxx, xxx } = xxx;
 - 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格
 - 强制回调函数最大嵌套深度 5层
 - 构造函数首字母大写
 - 要求 return 语句之前有一空行
 - 不允许多个空行
 - 禁用行尾空格
 - 其他规则请参考其他模板的eslint配置

### 项目主要结构
```
├── components  // 组件
├── pages  // 页面
├── static  // 静态文件
├── store  // vuex
├── .editorconfig  // 编辑器规范
├── .eslintrc.js  // eslint 规范
├── .gitignore  // git忽略文件
├── .stylelintrc.js  // css 规范
├── App.vue
├── main.js // 入口文件
├── manifest.json // uni配置文件
├── pages.json // 页面配置文件
└── package.json
```


