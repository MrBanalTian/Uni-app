/*
    * vue-cli 项目默认是不编译 node_modules 下的组件的,
    * 导致条件编译等功能失效,导致组件异常;需要在根目录创建 vue.config.js 文件,
    * 增加 @dcloudio/uni-ui 包的编译即可正常
*/
// vue.config.js
module.exports = {
    transpileDependencies:['@dcloudio/uni-ui']
}
