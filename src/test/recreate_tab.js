let gettingClosedSessions = browser.sessions.getRecentlyClosed({
  // 取得するsessionの最大数を指定する
  // 設定しない場合はbrowser.sessions.MAX_SESSION_RESULTSに定義されている上限まで返却される(firefox DeveloperEditionでは25)
  maxResults: 10 // 最新10件のsessionsを取得
})

// console.log(browser.sessions.MAX_SESSION_RESULTS) // 25

// 最も最近閉じたsessionを1つ取得する
// sessionにはtabの情報とwindowの両方の情報が含まれる
// つまりタブを閉じたあとにwindowを閉じると閉じたwindowの情報が返される
gettingClosedSessions.then((sessions) => {
  // この段階でのsessionsには最近閉じたtabの情報とwindowの情報が最近のものから格納されている
  // tabについてのオブジェクトにはwindowプロパティは含まれておらずtabプロパティが含まれている
  // windowについてのオブジェクトにはtabプロパティが含まれておらずwindowプロパティが含まれている
  console.log(sessions)
  console.log(sessions.length)
  return sessions
}).then((sessions) => {
  // tabプロパティを持つ要素のみをフィルタリング
  return sessions.filter((element) => {
    return (element.hasOwnProperty('tab'))
  })
}).then((tabs) => {
  // フィルタリングされた配列の先頭の要素を取得
  console.log(tabs[0].tab.sessionId)
  return tabs[0].tab.sessionId
}).then((id) => {
  // sessionの復元
  browser.sessions.restore(id)
}).then(() => {
  console.log('recreate')
})
