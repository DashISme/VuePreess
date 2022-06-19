const headConf= require("./config/headConf");
const pluginConf=require("./config/pluginsConf")
const navConf=require("./config/navConf")
const sidebarConf=require("./config/sildebarConf")
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  head: headConf,
    themeConfig: {
      lastUpdated: '更新时间', 
      sidebar: 'auto',
      logo: '/assets/img/logo.png',
      nav: navConf,
      sidebar: sidebarConf,
     
    },
    plugins: pluginConf
  }