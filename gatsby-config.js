module.exports = {
  siteMetadata: {
    siteTitle: 'Charly Wargnier - SEO and BI Consultant',
    siteDescription: 'Charly Wargnier - SEO and BI Consultant',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://chronoblog-profile.now.sh/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Charly Wargnier', // for example - 'Ivan Ganev'
    authorDescription: 'Lorem Ipsum is simply dummy text', // short text about the author
    avatar: '/avatar.jpg',
    twitterSite: '' , // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `envelope`,
        url: `mailto:cwar05@gmail.com`
      },
      {
        icon: `twitter`,
        url: `https://twitter.com/datachaz`
      },
      {
        icon: `github`,
        url: `https://github.com/CharlyWargnier`
      },
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: false,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 '
            }
          }
        },
        feedSearch: {
          symbol: '🔍'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X'
      }
    }
  ]
};
