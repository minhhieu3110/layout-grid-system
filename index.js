let arr = [
    {
        name: 'A',
        price: 100
    },
    {
        name: 'B',
        price: 200
    },
    {
        name: 'C',
        price: 300
    },
    {
        name: 'A',
        price: 100
    },
    {
        name: 'B',
        price: 200
    },
    {
        name: 'C',
        price: 300
    },
    {
        name: 'A',
        price: 100
    },
    {
        name: 'B',
        price: 200
    },
    {
        name: 'C',
        price: 300
    }
]
let str = ``

for (let i = 0; i < arr.length; i++) {
    str += `
        <div class="col-xl-3 col-lg-4 col-md-6 mt-3"> <!-- Grid SYSTEM: xl, lg, md-->
                    <div class="card" >
                        <img src="data:image/jpeg;base64,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" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${arr[i].name}</h5>
                            <h5 class="card-title">${arr[i].price}</h5>
                            <a href="#" class="btn btn-primary">Buy</a>
                        </div>
                    </div>
                </div>
    `
}
document.getElementById("show").innerHTML = str