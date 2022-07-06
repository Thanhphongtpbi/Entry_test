let formlength =document.getElementById("array")
console.log(formlength);
var  array =[];
let res = document.getElementById("result");
console.log(result)




function calculator() {
    val=Number(formlength.value)
    for (let i = 0; i < val; i++) {
        let dem = Math.floor(Math.random() * val+1);
        array.push(dem)
    }
    res.innerHTML= `<p>Result: [${array}]</p>`
    console.log(array)
}

function change() {
    console.log(formlength.value)
}

