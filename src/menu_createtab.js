// タブをスタックするMenuを生成
browser.menus.create({
  id: "tab_stack",
  title: "Stack Tab",
  contexts: ["tab"]
}, () => {
  if(browser.runtime.lastError) {
    console.log(browser.runtime.lastError)
  } else {
    console.log("Stack_Tab_Menu Created!")
  }
})

// 新規タブスタック作成ボタン
browser.menus.create({
  parentId: "tab_stack",
  id: "createNewTabstack",
  title: "create new tabstack",
  contexts: ["tab"]
})

//タブスタック作成ボタンとタブスタック一覧のセパレート
browser.menus.create({
  parentId: "tab_stack",
  contexts: ["tab"],
  type: "separator"
})

// menuのイベントリスナー
browser.menus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "createNewTabstack":
      for (let stack of tabstack) {
        console.log(stack)
      }
      break;
  }
})
