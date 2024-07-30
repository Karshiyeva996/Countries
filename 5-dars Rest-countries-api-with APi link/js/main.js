// Rest API  
// HTTP/HTTPS  protokoli orqali chirqarilgan API

// Async await


// function hello () {
//     console.log('Success')
// }
// hello()

// const url = "https://jsonplaceholder.typicode.com/photos";

// async function fetchAsync () {
//     try {
//         let response = await fetch(url)
//         // console.log(response)
//         let data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("Xatolik",error)
//     }
    
// }

// fetchAsync()

// map() 

// const arr = [1,2,3,4,5,6,7,8]

// arr.map((item,i,arr) => {
//     console.log(item,i,arr)
// })


// Destructuring 

// const arr = ['Fruits','Cars','Animals']

// // const animal = arr[2]
// // const car = arr[1]
// // const fruit = arr[0]
// // console.log(animal)

// const [meva, car, animal] = arr
// console.log(animal)


// const vehicleOne = {
//     brand: 'Ford',
//     model: 'Mustang',
//     type: 'car',
//     year: 2021, 
//     color: 'red'
// }

// const { brand,model,type,year,color } = vehicleOne
// console.log(brand)



// function myVehicle({type, color, brand, model}) {
//   const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
// }

// myVehicle(vehicleOne);





const countries = document.querySelector('.country')
const formSearch = document.querySelector('.form-control')
const formSelect = document.querySelector('.form-select')

const url = "https://restcountries.com/v3.1/all"

async  function fetchCountryData() {
    try {
         const response = await fetch(url)
         const data = await response.json()
        //  console.log(data)


         const countrySort = data.sort((a,b) => {
            return a.name.common.localeCompare(b.name.common)
         })

         countryData = countrySort
         renderCountry(countryData)
         

    } catch (error) {
        console.log("Xatolik",error)
    }
}


function renderCountry(data) {
    // console.log(data)
    countries.innerHTML = null
    data.forEach(country => {
        // console.log(country)

        // const { name: { common } } = country
        // console.log(common)

        const col = document.createElement('div')
        col.classList.add('col-12','col-md-6','col-lg-3', 'my-4')
        const card = document.createElement('a')
        card.classList.add('card')
        card.setAttribute('href',`./country-inner.html?name=${country.name.common}`)
        
        card.innerHTML = `
            <img src="${country.flags.png}" class="card-img-top" alt="">
            <div class="card-body">
            <h5 class="card-title">${country.name.common}</h5>
            <p class="card-text"><span class="card-text__span">Population:</span> ${country.population}</p>
            <p class="card-text"><span class="card-text__span">Region: </span>${country.region}</p>
            <p class="card-text"><span class="card-text__span">Capital: </span>${country.capital}</p>
            </div>
        `
        col.append(card)
        countries.append(col)
    });
}

    // InputSearch

 formSearch.addEventListener('input',() => {
     // console.log(formSearch.value.toLowerCase().trim())
     let inputVal = formSearch.value.toLowerCase().trim()
     let filterCountry = countryData.filter(function (country) {
         return country.name.common.toLowerCase().includes(inputVal)
     })
     console.log(filterCountry)
     renderCountry(filterCountry)
   
 }) 

 //Select search 

 //https://restcountries.com/v3.1/region/europe

 formSelect.addEventListener('change', () => {
  const selectRegion = formSelect.value

  if (selectRegion == "All") {
    renderCountry(countryData)
    
  }else{
    const filterCountry = countryData.filter(country => country.region == selectRegion)
    renderCountry(filterCountry)
  }
 })

 fetchCountryData()



















