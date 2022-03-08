module.exports = {
  base: '/Japanese-Learning/',
  // 站点配置
  lang: 'zh-CN',
  title: 'Japanese Learning',
  description: '这是我的第一个 VuePress 站点',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    nav:[ // 导航栏配置
      {text: '前端基础', link: '/accumulate/' },
      {text: '算法题库', link: '/algorithm/'},
      {text: '微博', link: 'https://baidu.com'}      
    ],
    sidebar: [
      // SidebarItem
      {
        text: '词性',
        link: '/property/',
        children: [
          // SidebarItem
          {
            text: 'github',
            link: 'https://github.com',
            children: [],
          },
          // 字符串 - 页面文件路径
          '/foo/bar.md',
        ],
      },
      // 字符串 - 页面文件路径
      '/README.md',
    ], // 侧边栏配置
    sidebarDepth: 4, // 侧边栏显示2级
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
  },
  
}