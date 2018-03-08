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

browser.menus.create({
  parentId: "tab_stack",
  id: "createNewTabstack",
  title: "create new tabstack",
  contexts: ["tab"]
})
