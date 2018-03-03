// create menu
browser.menus.create({
  id: "tab-test-create",
  title: "create",
  contexts: ["tab"],
}, () => {
  // logging
  if(browser.runtime.lastError){
    console.log(browser.runtime.lastError)
  } else{
    console.log("menu created!")
  }
})

browser.menus.create({
  id: "tab-test-remove",
  title: "remove",
  contexts: ["tab"],
}, () => {
  // logging
  if(browser.runtime.lastError){
    console.log(browser.runtime.lastError)
  } else{
    console.log("menu created!")
  }
})

browser.menus.onClicked.addListener(function(info) {
  switch (info.menuItemId){
    // 新しいタブの作成
    case "tab-test-create":
      let creating = browser.tabs.create({
        url: "http://www.google.com"
      })
      creating.then(() => {
        console.log("created")
      })
      break
    // アクティブなタブを閉じる
    case "tab-test-remove":
      // アクティブなタブの情報を取得
      let querying = browser.tabs.query({
        active: true
      })
      querying.then((tabs) => {
        // 取得したタブのidをもとにタブを閉じる
        browser.tabs.remove(tabs[0].id).then(() => {
          console.log('removed')
        })
      })
      break
    default: {
      console.log("error")
    }
  }
})
