# ReactComponentsDocSite

是基于 facebook [docusaurus 2](https://docusaurus.io/)，详细的用法可以查看官方文档。

结合业务组件和 Utils 类库开发的流程，提供一套可直接使用的 React 组件库和 Utils 类库开发解决方案。

目前组件和 Uitls 使用 `vite` 进行打包，只需要简单的配置即可实现打包，细节可查看 `vite.config.ts` 文件。

## 注意事项

其中 `packages/components` 和 `packages/utils` 是固定的命名，如果有需要自定义的需要，
可以先看下下面这些文件：

```
./website/loader/codeShow.js // 此 loader 支持 md 文件使用 <CodeShow /> 组件
./website/loader/propsTable.js // 此 loader 支持 md 文件使用 <PropsTable /> 组件
./website/plugins/alias.js // 配置业务组件的 alias 无需打包就可以在文档上调试
./website/plugins/less.js // 配置 less-loader
./website/plugins/mdx.js // 配置 propsTable 和 codeShow loader
./website/plugins/tsdoc.js // 配置 ts-doc-webpack-loader，支持 md 文件使用 <TsDoc /> 组件
./website/utils/getJsxCodeAst.js // 获取 JSX 代码的 AST 结构
```

## 本地开发
`yarn install` 

`npm start` 后就可以通过 [http://localhost:3000/](http://localhost:3000/) 访问文档。

然后代码开发直接在 package/components 和 packages/utils 文件下添加相应文件即可。

**注意**：
由于 components 分包使用到 utils 分包，所以需要先构建 utils 分包，ts import 路径才不会爆红（不影响开发，单最好先构建）。

```
$ cd packages/utils
$ npm run build
```

## 构建

```shell
$ cd ./website # 确保进入 website 文件夹
$ npm run build
```

此命令将静态内容生成 `build` 目录，并可以使用任何静态内容托管服务提供服务。

## 发布到 npm

```shell
$ npm run build:publish
```

此命令先运行 `npm run build` 打包 components 和 utils，然后运行 `lerna publish` 进行多包发布。

## Github pages 快捷部署

使用 SSH:

```shell
$ cd ./website # 确保进入 website 文件夹
$ npm run deploy
```

不使用 SSH:

```shell
$ cd ./website # 确保进入 website 文件夹
$ GIT_USER=<你的 GitHub 用户名> npm run deploy
```

如果您使用的是 github 页面进行托管，则此命令是构建网站并将其推向 `GH-pages` 分支的便捷方法。

## md 可用组件 API

这里涉及 md 文件可使用的特殊组件

### CodeShow 用法

用于在 md 文件渲染指定文件的组件内容，并附带组件源码。
支持 file 和 fileList 属性（即文件路径），其中文件路径可以使用 alias。

```jsx
<CodeShow file="$demo/Image/Basic.tsx" />
```

或者

```jsx
<CodeShow fileList={['$demo/Image/Basic.tsx']} />
```

### PropsTable 用法

用于 md 文件中读取对应 ts 文件中 React 组件 Props interface 的注释，详细的用法可以查看[react-docgen](https://github.com/reactjs/react-docgen#example-1)

属性 `src` 支持 alias，用法和语法 import 的路径一致，`showDescriptionOnSummary=true` 会读取组件
头部注释到 md 文件开始处。

```jsx
<PropsTable src="$components/pro-content" showDescriptionOnSummary />
```

```ts
export interface ProContentProps {
  /**
   * 是否展示搜索提示语
   */
  showSearchTip?: boolean;
  /**
   * 搜索提示语
   */
  searchTip?: string;
  /**
   * 是否展示空数据提示语
   */
  showNoDataTip?: boolean;
  /**
   * 空数据提示语
   */
  noDataTip?: string;
  /**
   * 是否展示警告提示语
   */
  showWarnTip?: boolean;
  /**
   * 警告提示语
   */
  warnTip?: string;
  /**
   * 是否展示错误提示语
   */
  showErrorTip?: boolean;
  /**
   * 错误提示语
   */
  errorTip?: string;
  /**
   * 是否展示成功提示语
   */
  showSuccessTip?: boolean;
  /**
   * 成功提示语
   */
  successTip?: string;
  children: React.ReactNode;
}
/**
 * 内容组件，包含搜索提示、空数据提示、错误提示，如果这些其中一个设置了，子组件内容不会被渲染
 * 提示优先级
 * 错误提示 > 警告提示 > 成功提示 > 无数据提示 > 查询提示
 */
const ProContent: {
  (props: ProContentProps): JSX.Element | null;
  displayName: string;
  propList?: PropList;
  defaultProps?: Record<string, any>;
} = (props: ProContentProps) => {
  const {
    showSearchTip,
    searchTip,
    showNoDataTip,
    noDataTip,
    showWarnTip,
    warnTip,
    showErrorTip,
    errorTip,
    showSuccessTip,
    successTip,
  } = props;

  if (showErrorTip) {
    return <Alert type="error" message={errorTip} showIcon />;
  }

  if (showWarnTip) {
    return <Alert type="warning" message={warnTip} showIcon />;
  }

  if (showSuccessTip) {
    return <Alert type="success" message={successTip} showIcon />;
  }

  if (showNoDataTip) {
    // return <Alert type="info" message={noDataTip} showIcon />;
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={noDataTip} />;
  }

  if (showSearchTip) {
    return <Alert type="info" message={searchTip} showIcon />;
  }

  return <>{props.children}</>;
};

ProContent.displayName = 'ProContent';

ProContent.defaultProps = {
  searchTip: '请在上方输入然后点击查询',
  noDataTip: '暂无数据',
  successTip: '成功提示',
  warnTip: '警告提示',
  errorTip: '错误提示',
};

export default ProContent;
```

### TsDoc 用法

支持在 md 文件中读取指定文件中的函数注释（只支持第一个函数）, 并生成 md 文件内容。

`src` 级文件路径，用法和语法 `import` 一致。

一般下方的一行代码即可生成对应函数的文档，详细可看仓库例子。

```jsx
<TsDoc src="$utils/format/toCamelCase" />
```

基于 tsdoc，遵循 tsdoc 规范，同时新加了 @default，?（即非必填）两种用法，如下

```ts
/**
 * 数组（成员是可枚举对象）或可枚举对象 key 值下划线会转为驼峰式 key 值（可枚举的属性才会转换）
 * 同时保证 key 值第一个字母是小写。
 *
 * @remarks 这个函数的主要目的是为了统一规范后端接口返回的变量，前端变量规范采用驼峰式。
 * @param obj 需要格式化的变量，可以是任意值
 * @param options? 配置
 * @default { firstLetter: true }
 * @param options.firstLetter? 配置
 * @default true
 * @returns 如果不是可可枚举对象或者数组则直接返回传入参数，可枚举对象或者数组则返回处理后的对象或者数组
 * @example
 * toCamelCase("test")  // test
 * @example
 * toCamelCase({ test_a: 1 })  // { testA: 1 }
 * @example
 * toCamelCase({ _test_a: 1 })  // { testA: 1 }
 * @example
 * toCamelCase({ test_a_b: 1 })  // { testAB: 1 }
 * @example
 * toCamelCase([[{ test_a: 1 }]])  // [[{ testA: 1 }]]
 */
```

更多的用法可查看 [ts-doc-webpack-loader](https://github.com/GGGGrey/ts-doc-webpack-loader)。

## 其他新增的功能

### alias

可在 `./website/plugins/alias.js` 修改

- `react-antd-business-components` 相当于 npm 包名，对应 `packages/components` 文件夹
- `business-utils` 相当于 npm 包名，对应 `packages/utils` 文件夹
- `$components` 对应 `packages/components` 文件夹
- `$utils` 对应 `packages/components` 文件夹
- `$demo` 对应 `packages/components` 文件夹

### 一些自定义字段

#### demoSourceUrl Demo 的前缀链接

可修改 `docusaurus.config.js` 文件中 `customFields.demoSourceUrl` 字段

```json
{
  "customFields": {
    "demoSourceUrl": "https://github.com/GGGGrey/ReactComponentsDocSite/tree/master/website",
    "componentVersion": "0.01"
  }
}
```

#### CodeSandbox 配置依赖包

可根据实际情况修改 `docusaurus.config.js` 文件中 `customFields.codeSandboxPacakgeConfig` 字段。

```json
{
  "customFields": {
    "codeSandboxPacakgeConfig": {
      "dependencies": {
        "react": "^17.0.2",
        "react-dom": "^17.0.2",
        "antd": "4.21.3",
        "classnames": "2.3.1",
        "react-antd-business-components": "0.01"
      },
      "devDependencies": {
        "less": "^4.1.3",
        "less-loader": "^7.3.0"
      }
    }
  }
}
```

## 需要注意地方

1. less 样式的前缀同步
   `packages/components/vite.config.ts` 中设置的前缀需要和 `website/plugins/less.js` 的保持一致，这样 demo 中看到的 class 才是最终的 class。
2. 由于 vite 打包其实是使用 rollup 来打包，如果有新增的依赖包，UMD 打包的时候，可根据实际情况更新 `vite.lib.config.ts` 中 **EXTERNAL** 和 **GLOBALS**，否则新增的依赖包会一起打包进去。
