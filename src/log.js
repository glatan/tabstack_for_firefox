// タブのスタック状態の取得
function get_tab_state () {
  // let tab_state = browser.storage.local.get()
  // tab_state.then(console.log(tab_state))
  browser.storage.local.get('tabstack').then((log) => {
    tabstack = log.tabstack
  }).then(() => {
    initMenu()
  })
}
// タブのスタック状態の保存
function save_tab_state(tab_state) {
  browser.storage.local.set({
    tab_state
  }).then(console.log(tab_state,"Tab State Saved"))
}

// ブラウザ起動時の処理
browser.runtime.onStartup.addListener(() => {
  get_tab_state()
  // スタック状態の復元処理はここに書く?
})
// ウィンドウを開閉した時の処理(MDNにはタブの開閉時にも発火するとか書いてあったけど発火しなかった)
browser.sessions.onChanged.addListener((tab_state) => {
  save_tab_state(tab_state)
})
