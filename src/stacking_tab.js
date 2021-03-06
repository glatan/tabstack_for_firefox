// tabstackに関するメソッド
'use strict'
// タブスタックを保存する変数
let tabstack = []

// 新規タブスタックの作成
let createTabstack = (tabId) => {
  browser.tabs.remove(tabId).then(() => {
    browser.sessions.getRecentlyClosed({
      maxResults: 1
    }).then((tabs) => {
      // 新規タブスタックの作成
      tabstack.push({
        tabs: [tabs[0].tab],
        activeTab: 0
      })
      return tabs[0].tab.sessionId
    }).then((sessionId)=> {
      browser.sessions.restore(sessionId).then(() => { console.log( 'restored' ) })
    }).then(() => {
      let index = tabstack.length - 1
      // メニューの更新
      browser.menus.create({
        parentId: "tabstack",
        id: 'tabstack' + index,
        title: tabstack[index].tabs[tabstack[index].activeTab].title,
        contexts: ['tab'],
        onclick: (info, tab) => {
          addTabstack(tab.id, tabstack.length - 1)
        }
      })
    }).then(()=> {
      browser.storage.local.set({tabstack})
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
    }).then(()=> {
      browser.storage.local.set({tabstack})
    })
  })
}

// タブスタック一覧の表示
// 別ファイルからtabstack変数を参照できなかったため
let initMenu = () => {
  for (let index in tabstack) {
    browser.menus.create({
      parentId: "tabstack",
      id: 'tabstack' + index,
      title: tabstack[index].tabs[tabstack[index].activeTab].title,
      contexts: ['tab'],
      onclick: (info, tab) => {
        addTabstack(tab.id, index)
      }
    })
  }
}

// menuのイベントリスナー
browser.menus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "createNewTabstack":
      createTabstack(tab.id)
      break
  }
})

// ブラウザ起動時の処理
browser.runtime.onStartup.addListener(() => {
  browser.storage.local.get('tabstack').then((log) => {
    tabstack = log.tabstack
  }).then(() => {
    initMenu()
  })
})

// let UpdateMenu = (index) => {
//   let stack = tabstack[index]
//   let activeTabTitle = stack.tabs[stack.activeTab].title
//   browser.menus.update(`tabstack${index}`, {
//     title: activeTabTitle
//   })
// }
