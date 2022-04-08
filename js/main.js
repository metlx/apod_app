document.querySelector('button').addEventListener('click', function getFetch(){
  const url = 'https://api.nasa.gov/planetary/apod?count=30&api_key=A9ahsEHwrHfKjzzeRs1Lk4cmubv8nMsRPiWMADY0'
  fetch(url)
    .then(res => res.json())
    .then(data => {
      let priv = []
      for (let i = 0; i < data.length; i++) {
        if (data[i].media_type == 'video')
          priv.push(data[i])
      }
      document.body.background = ""
      document.getElementById('h2').innerText = priv[0].title
      document.getElementById('vid').src = priv[0].url
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
})

document.getElementById('button2').addEventListener('click', function getFetch2(){
  const url = 'https://api.nasa.gov/planetary/apod?&count=1&api_key=A9ahsEHwrHfKjzzeRs1Lk4cmubv8nMsRPiWMADY0'
  fetch(url)
    .then(res => res.json())
    .then(data => {
      document.getElementById('vid').src = ""
      document.getElementById('h2').innerText = data[0].title
      document.body.background = data[0].url
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
})
