# vue-element-tpl

## Project setup
```
npm install --registry=https://registry.npmmirror.com
```
**如果安装出现错误，先试着npm run dev 跑一下**
可参考我使用的环境：
- node 14
- npm 6



### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



可能遇到的错误 
···
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! node-sass@4.14.1 postinstall: `node scripts/build.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the node-sass@4.14.1 postinstall script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
···
解决方案： 因为node版本，网络，编译环境各种原因  

改错误不用理会 已经使用了sass代替
可手动操作
npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/