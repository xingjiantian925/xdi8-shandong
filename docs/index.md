---
layout: home


hero:
  name: 希歷语 
  text: 希歷希歷,淅淅沥沥；顾望三尺，犹未断绝
  tagline: 这是一种希顶方言-欢迎加入社区...
  image: 
    src: /img/xlui6.svg
    alt: 我永远喜欢美工(一种文艺工作者)
  actions:
    - theme: brand
      text: 现在开始了解希歷
      link: /Alphabet
      # link: https://github.com/xingjiantian925
    - theme: alt
      text: 查看希歷社区仓库
      link: https://baidu.com


features:
  - icon: 😡
    title: 山东大汉的语言
    details: 说着说着就吵起来
  - icon: 😮
      # src: /cool-feature-icon.svg
    title: 更适合你的希顶方言
    details: 对于大葱爱好者们做出了一些改进
  - icon: 😷
      # dark: /dark-feature-icon.svg
      # light: /light-feature-icon.svg
    title: 别忘了戴口罩
    details: 新冠并不可怕，但也要带好口罩
---


<script setup>
import { VPTeamMembers ,VPTeamPageSection,VPTeamPageTitle} from 'vitepress/theme'

const members = [
  {
    avatar: '/img/xlui6-01.jpg',
    name: '_ajthreac_ 夏花语',
    title: '社区之主',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },

  

  {
    avatar: '/img/huang.jpg',
    name: '黄雀飞',
    title: '希顶教父',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: '/img/txj_logo.png',
    name: 'TXJ',
    title: 'WEB开发与社区维护',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  }
  
]
</script>










<VPTeamPageTitle>
    <template #title>
      社区卓越贡献者
    </template>
    <template #lead>
      加入希歷社区！ 您的名字也可以登上首页！
    </template>
  </VPTeamPageTitle>


<VPTeamMembers size="small" :members="members" />







