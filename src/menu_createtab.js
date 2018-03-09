// タブをスタックするMenuを生成
browser.menus.create({
  id: "tabstack",
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
  parentId: "tabstack",
  id: "createNewTabstack",
  title: "create new tabstack",
  contexts: ["tab"]
})

//タブスタック作成ボタンとタブスタック一覧のセパレート
browser.menus.create({
  parentId: "tabstack",
  contexts: ["tab"],
  type: "separator"
})
