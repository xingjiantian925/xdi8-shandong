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
  - icon: 👌
    title: 更适合你的希顶方言
    details: 进行了更贴近北方人的发音改动
  - icon: 🦾
      # src: /cool-feature-icon.svg
    title: 更为理想的字母体系
    details: 修复了一部分原教旨希顶的字表随机映射问题
  - icon: 🧠
      # dark: /dark-feature-icon.svg
      # light: /light-feature-icon.svg
    title: 更易于记忆
    details: 消灭了原教旨希顶的「H 尾字」，字表大小几乎减小了一半，更便于记忆。
  - icon: ✍️
    title: 方言之道
    details: 有部分独立语法，非汉字编码

---


<script setup>
import { VPTeamMembers ,VPTeamPageSection,VPTeamPageTitle} from 'vitepress/theme'

const members = [
  {
    avatar: './xlui6-01.jpg',
    name: '_ajthreac_ 夏花语',
    title: '社区之主',
    links: [
      { icon: 'github' },
      { icon: 'twitter'},
      { icon:'qq'}
    ]
  },

  

  {
    avatar: './huang.jpg',
    name: '黄雀飞',
    title: '希顶教父',
    links: [
      { icon: 'github' },
      { icon: 'twitter' }
    ]
  },
  {
    avatar: './txj_logo.png',
    name: 'TXJ',
    title: 'WEB开发与社区维护',
    links: [
      { icon: 'github' },
      { icon: 'twitter' }
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







