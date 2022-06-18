const moment = require('moment');

module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', content: '/favicon.ico' }],
    ['mate', { name: 'author', content: 'Dash' }],
    ['mate', { name: 'keywords', content: 'vuepress,Dash' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
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
      ],
      [
        '@vuepress/pwa',
         {
                serviceWorker: true,
                updatePopup: {
                  message: "发现新内容可用",
                  buttonText: "刷新"
                }
              }
      ]
    ]
  }