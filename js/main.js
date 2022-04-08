//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://api.nasa.gov/planetary/apod?count=1&api_key=A9ahsEHwrHfKjzzeRs1Lk4cmubv8nMsRPiWMADY0'
  // field1=value1&field2=value2&field3=value3...
  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      document.getElementById('h2').innerText = data[0].title
      document.body.background = data[0].url
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}
