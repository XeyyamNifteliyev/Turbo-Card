
const carArray = [
    { name: "Kia", model: "Sorento", year: 2015, distance: 141000, price: 20000, img: "0.jpg" },
    { name: "Tufan", model: "M50", year: 2020, distance: 4100, price: 16740, img: "1.jpg" },
    { name: "BMW", model: "E220", year: 2022, distance: 19700, price: 17500, img: "2.jpg" },
    { name: "Kia", model: "OPTIMA", year: 2014, distance: 133675, price: 19300, img: "3.jpg" },
    { name: "Mercedes", model: "C200", year: 2001, distance: 219000, price: 4500, img: "4.jpg" },
    { name: "Porsche Cayenne", model: "Turbo S", year: 2008, distance: 40000, price: 25500, img: "5.jpg" },
    { name: "Infiniti", model: "QX56", year: 2006, distance: 233270, price: 7500, img: "6.jpg" },
    { name: "Hyundai", model: "Elantra", year: 2009, distance: 530578, price: 175000, img: "7.jpg" },
    { name: "Suzuki", model: "Burgman", year: 2014, distance: 44000, price: 29500, img: "8.jpg" },
    { name: "Muravey", model: "TG200", year: 2000, distance: 10000, price: 43600, img: "9.jpg" }
]

let cont = document.querySelector(".container")
let cards = document.querySelector(".cards")



function yazdir(a) {
    let kod = ""
    a.map(item => {

        let { name, model, year, distance, price, img } = item

        kod += `
                 <div id="result">
                      <div class="card" style="width: 300px;">
                     <img src='${img}' class="card-img-top" alt="...">
                     <div class="card-body">
                         <h3>${name}</h3>
                         <h5>Year:${year}</h5>
                         <h5>Engine : 2.0 L</h5>
                         <h5>Distance: ${distance}</h5>
                         <h5>Price:${price}</h5>
                         <a href="#" class="btn btn-primary">Sifaris ver</a>
                     </div>
                     </div>
                </div> `

    })
    cards.innerHTML = kod

}


yazdir(carArray)


function filtering(b) {
    carArray.map(item => {
        if (b.textContent == "A-Z") {
            let srt = carArray.sort((a, b) => a.name.localeCompare(b.name))
            yazdir(srt)
        }
        else if (b.textContent == "Filter-year") {
            let yr = carArray.sort((a, b) => a.year - b.year)
            yazdir(yr)
        }
        else if (b.textContent == "Filter-price") {
            let prc = carArray.sort((a, b) => a.price - b.price)
            yazdir(prc)
        }
    })
}



document.getElementById("searchBar").addEventListener("keyup", function (e) {

    let val = e.target.value.trim().toLowerCase()

    let flt = carArray.filter(item => {
        console.log();
        return (
            item.name.toLowerCase().startsWith(`${val}`)
            // item.name.toLowerCase().includes(`${val}`)
        )
    })
    yazdir(flt)
})






