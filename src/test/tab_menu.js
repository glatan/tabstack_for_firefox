// create menu
browser.menus.create({
  id: "tab-test",
  title: "tab test",
  contexts: ["tab"]
}, () => {
  // logging
  if(browser.runtime.lastError){
    console.log(browser.runtime.lastError)
  } else{
    console.log("created!")
  }
})

