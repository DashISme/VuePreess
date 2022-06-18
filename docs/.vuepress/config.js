const moment = require('moment');

module.exports = {
  base:"/VuePreess/",
  title: 'Hello VuePress',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', content: '/favicon.ico' }],
    ['mate', { name: 'author', content: 'Dash' }],
    ['mate', { name: 'keywords', content: 'vuepress,Dash' }]
  ],
    themeConfig: {
      lastUpdated: '更新时间', 
      sidebar: 'auto',
      logo: '/assets/img/logo.png',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/about' },
        {
          text: 'Languages',
          items: [
            { text: 'Group1', items: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/about' }
          ] },
            { text: 'Group2', items: [
              { text: 'Home', link: '/' },
              { text: 'Guide', link: '/about' }
            ] }
          ]
        },
        { text: 'External', link: 'https://google.com' },
      ],
      sidebar: {
        "/css/": [
          'c-aaa',
            'c-bbb',
            'c-ccc'
        ],
        "/javascirpt/": [
          'j-aaa',
            'j-bbb',
            'j-ccc'
        ],
        "/":[
          ""
        ]
      },
     
    },
    plugins: [
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp) => {
            moment.locale("zh-cn");
            return moment(timestamp).format('llll')
          }
        }
      ]
    ]
  }