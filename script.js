//your code here
const button = document.getElementById("add")
const total = document.getElementById("total")
let sum = 0;
button.addEventListener("click", (e)=>{

const item = document.getElementById("item-name-input").value
const price = document.getElementById("item-price-input").value


if (item === "" && price==="") {
    alert("Please enter a task!");
    return;
}

if (item && price) {
    const table = document.getElementById("todoTable").getElementsByTagName('tbody')[0];

    table.innerHTML+=`
    <td ">${item}</td>
    <td >${price}</td>
    `
    sum+=parseInt(price)
    total.innerHTML=sum;
    document.getElementById("item-name-input").value = "";
    document.getElementById("item-price-input").value = "";
}
})
