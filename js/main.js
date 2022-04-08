document.querySelector('button').addEventListener('click', function getFetch(){
  const url = 'https://api.nasa.gov/planetary/apod?count=1&api_key=A9ahsEHwrHfKjzzeRs1Lk4cmubv8nMsRPiWMADY0'
  fetch(url)
    .then(res => res.json())
    .then(data => {
      document.getElementById('h2').innerText = data[0].title
      document.body.background = data[0].url
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
})
