module.exports = {
  base: '/japanese-learning/',
  // 站点配置
  lang: 'zh-CN',
  title: 'Japanese Learning',
  description: '这是我的第一个 VuePress 站点',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    sidebar: [
      // SidebarItem
      {
        text: '词性',
        link: '/property/',
        children: [
          '/lesson/lesson-one.md',
        ],
      },
      {
        text: '标准日本语',
        link: '/lesson/',
        children: [
          // SidebarItem
          '/lesson/lesson-one.md',
        ],
      },
    ], // 侧边栏配置
    sidebarDepth: 4, // 侧边栏显示2级
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
  },
  
}