// タブのスタック状態の取得
function get_tab_state () {
  let tab_state = browser.storage.local.get()
  tab_state.then(console.log(tab_state))
}
// タブのスタック状態の保存
function save_tab_state() {
  browser.storage.local.set({
    // タブのスタック状態のオブジェクト
  }).then(console.log("Tab State Saved"))
}

// ブラウザ起動時の処理
browser.runtime.onStartup.addListener(() => {
  get_tab_state()
})
// ブラウザ終了時の処理
browser.sessions.onChanged.addListener((/*object*/) => {
  save_tab_state(/*object*/)
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
