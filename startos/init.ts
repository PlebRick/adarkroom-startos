import { sdk } from './sdk'
import { exposedStore } from './store'
import { setDependencies } from './dependencies'
import { setInterfaces } from './interfaces'
import { versions } from './versions'
import { actions } from './actions'

// **** Install ****
const install = sdk.setupInstall(async ({ effects }) => {
  console.info('Running installation steps...')
  // No explicit file system operations needed here
})

// **** Uninstall ****
const uninstall = sdk.setupUninstall(async ({ effects }) => {
  console.info('Running uninstallation steps...')
  // No explicit file system operations needed here
})

/**
 * Plumbing. DO NOT EDIT.
 */
export const { packageInit, packageUninit, containerInit } = sdk.setupInit(
  versions,
  install,
  uninstall,
  setInterfaces,
  setDependencies,
  actions,
  exposedStore,
)
