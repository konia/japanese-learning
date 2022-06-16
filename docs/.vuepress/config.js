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
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 6, // 侧边栏显示2级
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    navbar: [
      {
        text: '教程笔记',
        children: [
          {
            text: '标准日本语',
            children: ['/lessons/japanese.md', '/lessons/lesson-one.md', '/lessons/lesson-two.md', '/lessons/lesson-three.md', '/lessons/lesson-four.md', '/lessons/lesson-five.md', '/lessons/lesson-six.md', '/lessons/lesson-seven.md', '/lessons/lesson-eight.md', '/lessons/lesson-nine.md', '/lessons/nimasann.md'],
          },
          {
            text: '大家的日本语',
            children: ['/lessons/nimasann.md'],
          },
        ],
      },
      {
        text: '补充',
        children: [
          {
            text: '词性',
            children: ['/property/adjective.md', '/property/auxiliary.md', '/property/noun.md', '/property/quantifier.md', '/property/verb.md'],
          },
        ],
      },
    ],
  },
};
