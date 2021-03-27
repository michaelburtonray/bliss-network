export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'bliss-network-studio',
                  apiId: '8e792c84-4002-4ee6-bcb0-cf721fd81ac8'
                },
                {
                  buildHookId: '605f3d852a3799c8566d0eac',
                  title: 'Events Website',
                  name: 'bliss-network',
                  apiId: '88cb3d4a-77fd-490f-ac16-e59d29888a71'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/michaelburtonray/bliss-network',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://bliss-network.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
