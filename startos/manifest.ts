import { setupManifest } from '@start9labs/start-sdk'

/**
 * Here we define static properties of the package to be displayed in the Marketplace and used by StartOS.
 */
export const manifest = setupManifest({
  id: 'adarkroom',
  title: 'A Dark Room',
  license: 'mozilla 2.0',
  wrapperRepo: 'https://github.com/PlebRick/adarkroom-startos.git',
  upstreamRepo: 'https://github.com/doublespeakgames/adarkroom.git',
  supportSite: 'https://github.com/doublespeakgames/adarkroom/issues',
  marketingSite: 'https://adarkroom.doublespeakgames.com/',
  donationUrl: null,
  description: {
    short: 'A minimalist text adventure game for your browser',
    long: 'A Dark Room is a minimalist text adventure game for your browser',
  },
  assets: [], // directories of static files you want to mount to your container
  volumes: ['main'],
  images: {
    main: {
      source: {
        dockerBuild: {
          dockerfile: '../Dockerfile',
          workdir: '.',
        },
      },
      arch: ['x86_64', 'aarch64'],
      emulateMissingAs: 'aarch64',
    },
  },
  hardwareRequirements: {},
  alerts: {},
  dependencies: {},
})