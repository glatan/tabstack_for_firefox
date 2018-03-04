// ブラウザ起動時に保存されていたタブの状態を取得
browser.runtime.onStartup.addListener(() => {
  let tab_state = browser.storage.local.get()
})

// タブをスタックするMenuを生成
browser.menus.create({
  id: "tab_stack",
  title: "Stack Tab",
  contexts: ["tab"]
}, () => {
  if(browser.runtime.lastError) {
    console.log(browser.runtime.lastError)
  } else {
    console.log("Menu Created!")
  }
})

// タブを入れ替えるMenuを生成
browser.menus.create({
  id: "tab_change",
  title: "Change Active Tab",
  contexts: ["tab"]
}), () => {
  if(browser.runtime.lastError) {
    console.log(browser.runtime.lastError)
  } else {
    console.log("Menu Created!")
  }
}

browser.sessions.onChanged.addListener(() => {
  browser.storage.local.set({
    // タブのスタック状態のオブジェクト
  })
})
