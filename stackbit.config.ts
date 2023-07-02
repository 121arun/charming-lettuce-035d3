import { defineStackbitConfig } from '@stackbit/types'
import { GitContentSource } from '@stackbit/cms-git'
import { button } from './.stackbit/models/button'
import { hero } from './.stackbit/models/hero'
import { page } from './.stackbit/models/page'
import { stats } from './.stackbit/models/stats'
import { GlobalStyles } from './.stackbit/models/ThemeStyle'

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'nextjs',
  nodeVersion: '16',
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['content'],
      models: [button, hero, page, stats],
      assetsConfig: {
        referenceType: 'static',
        staticDir: 'public',
        uploadDir: 'images',
        publicPath: '/'
      }
    }),
  ],
  sidebarButtons: [
    {
      type: 'model',
      label: 'Global styles',
      icon: 'tools',
      modelName: 'GlobalStylesConfig',
    },
    {
      type: 'model',
      label: 'Global styles',
      icon: 'tools',
      modelName: 'GlobalStylesConfig',
    },

  ],


})
