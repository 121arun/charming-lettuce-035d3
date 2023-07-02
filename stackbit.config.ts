import { defineStackbitConfig } from '@stackbit/types'
import { GitContentSource } from '@stackbit/cms-git'
import { allModels } from './.stackbit/models';

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

  ],
})

