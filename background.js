/* eslint-disable no-use-before-define */
const chromeAPI = chrome

chromeAPI.runtime.onInstalled.addListener(() => {
  chromeAPI.storage.sync.set(
    { color: '#000000' },
    () => {
      console.log('The color is black!')
    }
  )
})
