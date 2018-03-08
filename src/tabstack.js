// tabstackに関するメソッド
'use strict'
// タブスタックを保存する変数
let tabstack = []

// タブスタックにタブを追加
let addTabstack = (tabId, tabstackIndex) => {
  browser.tabs.remove(tabId).then(() => {
    browser.sessions.getRecentlyClosed({
      maxResults: 1
    }).then((tabs) => {
      // タブスタック変数に追加
      tabstack.push(tabs[0].tab)
    }).then(() => {
      console.log(tabstack)
    })
  })
}

