import { setupManifest } from '@start9labs/start-sdk'

export const manifest = setupManifest({
  id: 'adarkroom',
  title: 'A Dark Room',
  license: 'mozilla',
  wrapperRepo: 'https://github.com/elvece/adarkroom',
  upstreamRepo: 'https://github.com/doublespeakgames/adarkroom',
  supportSite: 'https://github.com/doublespeakgames/adarkroom/issues',
  marketingSite: 'https://adarkroom.doublespeakgames.com/',
  donationUrl: null,
  description: {
    short: 'A minimalist text adventure game for your browser',
    long: 'A Dark Room is a minimalist text adventure game for your browser',
  },
  assets: [],
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
