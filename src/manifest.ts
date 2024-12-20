import { defineManifest } from '@crxjs/vite-plugin'
import packageData from '../package.json'

//@ts-ignore
const isDev = process.env.NODE_ENV == 'development'

export default defineManifest({
    name: `${packageData.displayName || packageData.name}${isDev ? ` ➡️ Dev` : ''}`,
    description: packageData.description,
    version: packageData.version,
    manifest_version: 3,
    icons: {
        16: 'img/logo-16.png',
        32: 'img/logo-34.png',
        48: 'img/logo-48.png',
        128: 'img/logo-128.png'
    },
    content_scripts: [
        {
            matches: ['*://*.ivelt.com/*', '*://*.yiddishworld.com/*'],
            js: ['src/index.ts'],
            css: ['src/style.css'],
            run_at: 'document_end'
        }
    ],
    web_accessible_resources: [
        {
            resources: ['img/logo-16.png', 'img/logo-34.png', 'img/logo-48.png', 'img/logo-128.png', 'src/style.css'],
            matches: []
        }
    ]
})
