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
  volumes: ['main'], // Only volume IDs are listed here
  store: {
    main: {
      path: '/app/data', // Define where the 'main' volume is mounted inside the container
    },
  },
  images: {
    main: {
      source: {
        dockerBuild: {
          dockerfile: './Dockerfile',
          workdir: '.',
        },
      },
      arch: ['x86_64', 'aarch64'],
      emulateMissingAs: 'aarch64',
    },
  },
  hardwareRequirements: {
    ram: 134217728, // 128Mi in bytes
    arch: ['x86_64', 'aarch64'], // Supported architectures
  },
  healthChecks: {
    'check-service': {
      description: 'Check if the service is running',
      interval: 60, // Check every 60 seconds
      script: ['curl', '-f', 'http://localhost:8081'],
    },
  },
  dependencies: {},
  exposedPorts: [8081],
})





/*
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
          dockerfile: './Dockerfile',
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
*/