// タブを入れ替えるMenuを生成
browser.menus.create({
  id: "tab_change",
  title: "Change Active Tab",
  contexts: ["tab"]
}), () => {
  if(browser.runtime.lastError) {
    console.log(browser.runtime.lastError)
  } else {
    console.log("Change_Active_Tab_Menu Created!")
  }
}
