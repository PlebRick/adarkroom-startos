import { sdk } from './sdk'
import { uiPort } from './utils'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  // Bind the web interface to the correct port
  const uiMulti = sdk.host.multi(effects, 'ui-multi')
  const uiMultiOrigin = await uiMulti.bindPort(uiPort, {
    protocol: 'http', // Application uses HTTP
  })

  // Define the Web UI interface
  const ui = sdk.createInterface(effects, {
    name: 'Web UI',
    id: 'ui',
    description: 'The primary web interface for A Dark Room',
    type: 'ui',
    hasPrimary: true, // Set to true if this is the service's main interface
    masked: false,
    schemeOverride: null,
    username: null,
    path: '', // Root path
    search: {},
  })

  // Register and export the interface
  const uiReceipt = await uiMultiOrigin.export([ui])

  return [uiReceipt]
})
