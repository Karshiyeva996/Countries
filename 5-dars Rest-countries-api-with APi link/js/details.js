const countries = document.querySelector('.country-detail')
let countryName = new URLSearchParams(window.location.search)
countryName = countryName.get('name')
async function fetchData () {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        const data = await response.json()
        data.forEach(country => {
            const {flags:{png,alt}, name: {common}} = country
            console.log(png)

            countries.innerHTML = `
            <img src="${png}" alt="Country item image" class="country-detail__img">

            <div class="country-detail__desc">
                <h3 class="country-detail__title">Belgium</h3>

                <div class="country-detail__information">
                    <div class="country-detail__population">
                        <p class="country-detail__text"><b>Native Name:</b> België </p>
                        <p class="country-detail__text"><b>Population:</b> 11,319,511 </p>
                        <p class="country-detail__text"><b>Region:</b> Europe  </p>
                        <p class="country-detail__text"><b>Sub Region:</b> Western Europe </p>
                        <p class="country-detail__text"><b>Capital:</b> Brussels </p>
                    </div>
                    <div class="country-detail__lang">
                        <p class="country-detail__text"><b>op Level Domain:</b> .be </p>
                        <p class="country-detail__text"><b>Currencies:</b> Euro  </p>
                        <p class="country-detail__text"><b>Languages:</b> Dutch, French, German </p>
                    </div>
                </div>

                <div class="country-border">
                    <h4 class="country-border__title">Border Countries: </h4>
                    <ul class="country-border__list">
                        <li class="country-border__item"><a href="#!" class="country-border__link">France</a></li>
                        <li class="country-border__item"><a href="#!" class="country-border__link">Germany</a></li>
                        <li class="country-border__item"><a href="#!" class="country-border__link">Netherlands</a></li>
                    </ul>
                </div>

            </div>
            
            `
            
        });
    } catch (error) {
        
    }
}