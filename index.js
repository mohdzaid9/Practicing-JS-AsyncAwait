const btn = document.querySelector('#btn')

async function fetchData() {
    try {
      let res = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries');
      let result = await res.json(); // Await the resolution of .json()
      console.log(result)
      const countries = result.data
      countries.forEach(user => {
        let h1 = document.createElement('h1')
        h1.innerText = user.id

        let country = document.createElement('p')
        country.innerText = user.country

        let rank = document.createElement('p')
        rank.innerText = user.Rank

        let population = document.createElement('p')
        population.innerText = `population - ${user.population}`

        document.body.append(h1 , country,rank,population)
    }); // Log the parsed JSON data
    } catch (err) {
      console.log(err); // Handle errors
    }
  }

btn.addEventListener('click',()=>{

    fetchData()
})

