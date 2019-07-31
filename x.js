const opt = {
  mode: 'same-origin',
  cache: 'only-if-cached',
}

onmessage = function(e) {
  const url = e.data
  console.log('url:', url)

  fetch(url, opt).then(res => {
    sendMsg('result', {url, hit: true, status: res.status})
  }).catch(err => {
    sendMsg('result', {url, hit: false})
  })
}

function sendMsg(msg, val) {
  parent.postMessage([msg, val], '*')
}

sendMsg('ready')
