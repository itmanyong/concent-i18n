## <a href="https://github.com/itmanyong/concent-i18n/issues">建议反馈</a>

## 食用方式

### 安装

```javaScript
npm install concent//已安装无视
npm install concent-i18n
// 或
yarn add cocnent//已安装无视
yarn add concent-i18n
```

### 初始化

```javaScript
// 注册
import { run } from 'concent';
run()//已run则跳过
import { runI18n,setMessage,setLang } from 'concent-i18n';
runI18n();
// 设置locales
setMessage({
  zhCN: { text: '文本 {msg}' }
})
// 设置采用的locale name;例如：zhCN
setLang('zhCN')
```

### 使用

```javaScript
import { $t, $tt, Rt } from 'concent-i18n'
// 组件方式
<Rt path="text" msg={{ msg: '张三' }} />// 文本 张三
// 函数组件方式
<>{$t( 'text', { msg: '李四' })}</>// 文本 李四
// 取值方式
$tt('text',{ msg: '王五'})// 文本 王五
```

## APIS(括号对应简写,名称不同而已)

### `runI18n`

    初始化concent-i18n;在调用所有API之前调用,推荐在main入口处执行。

### `RenderI18nKeyToText(Rt)`

tip：组件方式转换文本

```javaScript
<RenderI18nKeyToText path="" msg={} />
```

### `renderI18nKeyToText(rt | $t)`

tip：函数方式转换文本，输出的是组件

```javaScript
renderI18nKeyToText(path,msg)
```

### `getLocaleText(gt | $tt)`

tip：静态转换文本,输出纯文本

```javaScript
getLocaleText(path,msg)
```

### `setLang(sl)`

tip：设置当前使用的 locale key

```javaScript
setLang(localeKey)
```

### `setMessage(sm)`

tip：直接覆盖整个 locale

```javaScript
setMessage(message)
```

### `editMessage(em)`

tip：合并 locale，深度合并

```javaScript
editMessage(message)
```

### `delMessage(dm)`

tip：删除指定 locale

```javaScript
delMessage(localeKey)
```

### `getState(gs)`

tip：静态获取指定状态,不指定获取全部。这里只可是：lang | message

```javaScript
getState(stateKey)
```

### `getComputed(gc)`

tip：静态获取指定计算状态,不指定获取全部。这里只可是：i18nLangKeys | i18nMessage

```javaScript
getState(computedKey)
```

### `useI18nState`

tip：动态获取指定状态 hook,不指定获取全部。这里只可是：lang | message

```javaScript
useI18nState(stateKey)
```

### `useI18nText`

tip：动态转译 locale 文本的 hook

```javaScript
useI18nText(path,msg)
```

### `useI18nComputed`

tip：动态获取指定计算状态 hook,不指定获取全部。这里只可是：lang | message

```javaScript
useI18nState(computedKey)
```
