let echolog = (onGot, onError) => {
  console.log(onGot, onError)
}

let savelog = browser.storage.local.set({
  GNU:  {name:"GNU", meu:"GNU"},
  is: {name:"is", meu:"is"},
  not: {name:"not", meu:"not"},
  UNIX: {name:"UNIX", meu:"UNIX"}
})

let getlog = browser.storage.local.get()

savelog.then(getlog)
getlog.then(echolog)
