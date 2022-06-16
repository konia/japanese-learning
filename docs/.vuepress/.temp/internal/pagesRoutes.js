import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页"},["/index.html","/README.md"]],
  ["v-b75eca12","/%E6%9D%8E%E3%81%95%E3%82%93%E3%81%AF%E7%94%B7(%E3%81%8A%E3%81%A8%E3%81%93)%E3%81%AE%E4%BA%BA%E3%81%A7%E3%81%99%E3%81%8B%E3%80%81%E5%A5%B3(%E3%81%8A%E3%82%93%E3%81%AA)%E3%81%AE%E4%BA%BA%E3%81%A7%E3%81%99%E3%81%8B.html",{"title":""},["/李さんは男(おとこ)の人ですか、女(おんな)の人ですか.html","/%E6%9D%8E%E3%81%95%E3%82%93%E3%81%AF%E7%94%B7(%E3%81%8A%E3%81%A8%E3%81%93)%E3%81%AE%E4%BA%BA%E3%81%A7%E3%81%99%E3%81%8B%E3%80%81%E5%A5%B3(%E3%81%8A%E3%82%93%E3%81%AA)%E3%81%AE%E4%BA%BA%E3%81%A7%E3%81%99%E3%81%8B","/李さんは男(おとこ)の人ですか、女(おんな)の人ですか.md","/%E6%9D%8E%E3%81%95%E3%82%93%E3%81%AF%E7%94%B7(%E3%81%8A%E3%81%A8%E3%81%93)%E3%81%AE%E4%BA%BA%E3%81%A7%E3%81%99%E3%81%8B%E3%80%81%E5%A5%B3(%E3%81%8A%E3%82%93%E3%81%AA)%E3%81%AE%E4%BA%BA%E3%81%A7%E3%81%99%E3%81%8B.md"]],
  ["v-6bd3f59b","/lessons/japanese.html",{"title":"日本語版"},["/lessons/japanese","/lessons/japanese.md"]],
  ["v-95a9ac9c","/lessons/lesson-eight.html",{"title":"第八課"},["/lessons/lesson-eight","/lessons/lesson-eight.md"]],
  ["v-68ab105f","/lessons/lesson-five.html",{"title":"第五課　森さんは7時に起きます"},["/lessons/lesson-five","/lessons/lesson-five.md"]],
  ["v-8d8a3b2a","/lessons/lesson-four.html",{"title":"第四課　部屋に机と椅子があります"},["/lessons/lesson-four","/lessons/lesson-four.md"]],
  ["v-639cae5f","/lessons/lesson-nine.html",{"title":"第九課"},["/lessons/lesson-nine","/lessons/lesson-nine.md"]],
  ["v-38047c3b","/lessons/lesson-one.html",{"title":"第一課　李さんは中国人です"},["/lessons/lesson-one","/lessons/lesson-one.md"]],
  ["v-2d5f78f4","/lessons/lesson-seven.html",{"title":"第七課　李さんは毎日コーヒーを飲みます"},["/lessons/lesson-seven","/lessons/lesson-seven.md"]],
  ["v-2113c982","/lessons/lesson-six.html",{"title":"第六課　吉田さんは来月中国へ行きます"},["/lessons/lesson-six","/lessons/lesson-six.md"]],
  ["v-2f95e603","/lessons/lesson-three.html",{"title":"第三課　ここはデパートです"},["/lessons/lesson-three","/lessons/lesson-three.md"]],
  ["v-2c92e815","/lessons/lesson-two.html",{"title":"第二課　これは本です"},["/lessons/lesson-two","/lessons/lesson-two.md"]],
  ["v-1d25e1a2","/lessons/nimasann.html",{"title":""},["/lessons/nimasann","/lessons/nimasann.md"]],
  ["v-9c3a641e","/property/adjective.html",{"title":"形容词"},["/property/adjective","/property/adjective.md"]],
  ["v-e1fa3f98","/property/auxiliary.html",{"title":"助词"},["/property/auxiliary","/property/auxiliary.md"]],
  ["v-5c1f33fe","/property/noun.html",{"title":"名词"},["/property/noun","/property/noun.md"]],
  ["v-47ac4dbc","/property/quantifier.html",{"title":"数量词"},["/property/quantifier","/property/quantifier.md"]],
  ["v-3c4a1219","/property/verb.html",{"title":"動詞"},["/property/verb","/property/verb.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
