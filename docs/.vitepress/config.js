//import mathjax3 from 'markdown-it-mathjax3';
//const customElements = ['mjx-container'];
//import katex from 'markdown-it-katex';
const customElements = ['mjx-container']; // for inline mathjax3

export default {
    base: '/xdi8-shandong/',

    markdown: {
        lineNumbers: false,
        // toc: { level: [1, 2] },
        // config: (md) => {
        //     md.use(mathjax3);
        // },
        config: (md) => {
            md.use(require("markdown-it-mathjax3")); // using mathjax3 is much easier than KateX
        },

    },


    title: '希歷语',
    description: '基于黄雀飞所创希顶字母新华语创造的一门语言',



    themeConfig: {
        logo: '/img/xlui6.svg',
        sidebar: [{
            text: '希歷语',
            items: [
                { text: '字母表', link: '/Alphabet.md' },
                { text: '部首', link: '/Bushou.md' },
                { text: '语法', link: '/Grammar.md' },
                { text: '拼写及语法示例', link: '/Example.md' },

            ]

        }],

        nav: [{
                text: '文档',
                items: [{
                        text: '字母表',
                        link: '/Alphabet.md'
                    },
                    { text: '部首', link: '/Bushou.md' },
                    { text: '语法', link: '/Grammar.md' },
                    { text: '拼写及语法示例', link: '/Example.md' },
                ]


            },
            {
                text: '希歷社区',
                items: [
                    { text: '看看咱是谁', link: '/Team.md' },
                    { text: '希歷物语', link: 'Blog.md' },
                    { text: '谁是黄雀飞', link: 'GodofXdi8.md' }
                ]
            },
            {
                text: '社区仓库',
                items: [
                    { text: 'Github Repo ', link: 'https://baidu.com' },
                    { text: '🐧 社区 QQ: 807852134' }
                ]
            }
        ],
        footer: {
            message: '一切解释权归希歷社区所有',
            copyright: 'Copyright © 2023-present 希歷社区 '
        }
    },

    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => customElements.includes(tag),
            },
        },
    },
}