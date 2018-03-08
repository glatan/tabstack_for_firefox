// tabstackに関するメソッド
'use strict'
// タブスタックを保存する変数
let tabstack = [
  //テストデータ
  {
    index: 0,
    tabs: [],
    activeTab: 'hogehoge'
  }
]

// 新規タブスタックの作成
let createTabstack = (tabId) => {
  browser.tabs.remve(tabId).then(() => {
    browser.sessions.getRecentlyClosed({
      maxResults: 1
    }).then((tabs) => {
      // 新規タブスタックの作成
      tabstack.push({
        index: tabstack.length,
        tabs[tabs[0]],
        activeTab: tabs[0].title
      })
    })
  })
}

// タブスタックにタブを追加
let addTabstack = (tabId, tabstackIndex) => {
  browser.tabs.remove(tabId).then(() => {
    browser.sessions.getRecentlyClosed({
      maxResults: 1
    }).then((tabs) => {
      // タブスタック変数に追加
      tabstack[tabstackIndex].tabs.push(tabs[0].tab)
    }).then(() => {
      console.log(tabstack)
    })
  })
}

