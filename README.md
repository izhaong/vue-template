# vue-element-tpl

## Project setup
```
npm install --registry=https://registry.npmmirror.com
```
**如果安装出现错误，先试着npm run dev 跑一下**



### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```
内有dist打包好了的 可以直接预览 


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

改错误不用理会 已经使用了sass代替 经过测试 不会影响生产