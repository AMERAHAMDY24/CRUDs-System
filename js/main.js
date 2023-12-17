
var prodName=document.getElementById("prodName")
var prodCategName=document.getElementById("prodCategName")
var prodPriceName=document.getElementById("prodPriceName")
var prodDescName=document.getElementById("prodDescName")

var allProducts=[]

if(localStorage.getItem('products')!=null){

allProducts= JSON.parse(localStorage.getItem('products'))
displayProducts()}

function main(){
    getinput()
    displayProducts()
    clearInput()
}

function getinput(){

var products={
    name:prodName.value,
    category:prodCategName.value,
    price:prodPriceName.value,
    Description:prodDescName.value
}
allProducts.push(products)
localStorage.setItem('products',JSON.stringify(allProducts))


}

function displayProducts(){
    var cartona=``
for (var i=0;i<allProducts.length;i++)

{
    cartona+=`
    <tr>
    <td>
    ${i}
    </td>
    <td>
    ${allProducts[i].name}
    </td>
    <td>    ${allProducts[i].category}
    </td>
    <td>
    ${allProducts[i].price}
    </td>
    <td>    ${allProducts[i].Description}
    </td>
    <td>
    <button class="btn btn-success text-white"> Update</button>
    </td>
    <td >  <button onclick="deleteProduct(${i})" class="btn btn-danger text-white"> Delete</button>
    </td>

    </tr>
    
    `
}
document.getElementById('tbodyid').innerHTML=cartona
}
function clearInput(){

    prodName.value=""
    prodCategName.value=""
    prodPriceName.value=""
    prodDescName.value=""
}

function deleteProduct(index){
allProducts.splice(index,1)
localStorage.setItem('products',JSON.stringify(allProducts))
displayProducts()

}