let logTabs = (tabs) => {
  console.log(tabs)
  console.log(tabs.length)
}

// browser.queryで現在開いているタブを全取得する事ができる
// 引数にobjectを渡すことでそのプロパティに一致するタブのみを取得できる
let querying = browser.tabs.query({
  // 引数に渡せるプロパティ一覧(https://developer.mozilla.org/ja/Add-ons/WebExtensions/API/tabs/query)
})
querying.then(logTabs)
