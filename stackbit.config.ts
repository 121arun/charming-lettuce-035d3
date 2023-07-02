import { defineStackbitConfig } from '@stackbit/types'
import { GitContentSource } from '@stackbit/cms-git'
import { button } from './.stackbit/models/button'
import { hero } from './.stackbit/models/hero'
import { page } from './.stackbit/models/page'
import { stats } from './.stackbit/models/stats'

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
})

    2
    3
    4
    5
    6
    7
    8
    9
    10

export default {
  sidebarButtons: [
    {
      label: 'Site management',
      type: 'model',
      icon: 'tools',
      modelName: 'SiteConfig',
    },
  ],
}