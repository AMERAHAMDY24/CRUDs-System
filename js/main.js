
var prodName=document.getElementById("prodName");
var prodCategName=document.getElementById("prodCategName");
var prodPriceName=document.getElementById("prodPriceName");
var prodDescName=document.getElementById("prodDescName");
var addButton=document.getElementById("addButton");
var updateButton=document.getElementById("UpdateButton");
var indexUpdate=0;
var allProducts=[]

if(localStorage.getItem('products')!=null){

allProducts= JSON.parse(localStorage.getItem('products'))
displayProducts(allProducts)}


function main(){
    getinput()
    displayProducts(allProducts)
    updateFormValues()
}
function setInLocalStorage(){
    localStorage.setItem('products',JSON.stringify(allProducts))

}


function getinput(){
if((validateProductName()==true)& (validateDescription()==true) &(validatePrice()==true) &(validateCategory()==true))
{

var products={
    name:prodName.value,
    category:prodCategName.value,
    price:prodPriceName.value,
    Description:prodDescName.value
}
allProducts.push(products)
setInLocalStorage()
}

}



function displayProducts(arr){
    var cartona=``
for (var i=0;i<arr.length;i++)

{
    cartona+=`
    <tr>
    <td>
    ${i}
    </td>
    <td>
    ${arr[i].name}
    </td>
    <td>    ${arr[i].category}
    </td>
    <td>
    ${arr[i].price}
    </td>
    <td>    ${arr[i].Description}
    </td>
    <td>
    <button class="btn  text-white" onclick="setFormForUpdate(${i})"> Update</button>
    </td>
    <td >  <button onclick="deleteProduct(${i})" class="btn  text-white"> Delete</button>
    </td>

    </tr>
    
    `
}
document.getElementById('tbodyid').innerHTML=cartona
}


function updateFormValues(flag){

    prodName.value=flag? flag.name:""; 
    prodCategName.value= flag ? flag.category:"";
    prodPriceName.value=flag? flag.price:"";
    prodDescName.value=flag?flag.Description:"";
}



function deleteProduct(index){
allProducts.splice(index,1)
setInLocalStorage()

displayProducts(allProducts)

}



function searchByName(value)
{ 
    var matchedProducts=[]
for(var i=0;i<allProducts.length;i++){
if(allProducts[i].name.toLowerCase().includes(value.toLowerCase())=== true)
{
    matchedProducts.push(allProducts[i])

}
}
console.log(matchedProducts)
displayProducts(matchedProducts);
}

function setFormForUpdate(index)
{ indexUpdate=index;
addButton.classList.replace("d-block","d-none");
updateButton.classList.replace("d-none","d-block");
 
updateFormValues(allProducts[index])
}
function updateProduct(){
    addButton.classList.replace("d-none","d--block");
    updateButton.classList.replace("d-block","d-none");
   var products={
        name:prodName.value,
        category:prodCategName.value,
        price:prodPriceName.value,
        Description:prodDescName.value
    }
allProducts.splice(indexUpdate,1,products)
setInLocalStorage()
displayProducts(allProducts)
}

function validateProductName(){
    var regex=/^[A-Z][a-zA-Z0-9]{1,}$/
    if(regex.test(prodName.value)==true){
        prodName.style.border="1px solid white"
        document.getElementById("wrongName").classList.add("d-none")


        return true;
    }else{
        prodName.style.border= "3px solid black"
        document.getElementById("wrongName").classList.remove("d-none")
        return false;
    }
}
function validatePrice()
{var regex=/^[1-9][0-9]{0,}$/
if(regex.test(prodPriceName.value)==true){
    prodPriceName.style.border="1px solid white";
    document.getElementById("wrongPrice").classList.add("d-none");

    return true;
}
else{
    prodPriceName.style.border="3px solid black";
    document.getElementById("wrongPrice").classList.remove("d-none");

    return false;
}
}
function validateCategory(){
    var regex=/^(TV|Labtop|Mobile)[a-zA-Z0-9]{0,}/
    if(regex.test(prodCategName.value)==true){
        prodPriceName.style.border="1px solid white";
        document.getElementById("wrongCategory").classList.add("d-none");

        return true;
    }
    
else{
    prodPriceName.style.border="3px solid black";

    document.getElementById("wrongCategory").classList.remove("d-none");

    return false;
}
}
function validateDescription()
{
    var regex=/^[A-Za-z]{120,}$/
    if(regex.test(prodDescName.value)==true){

        prodDescName.style.border="1px solid white"
        document.getElementById("wrongDescription").classList.add("d-none")
return true;

    }
    else{
        prodDescName.style.border= "3px solid black"
        document.getElementById("wrongDescription").classList.remove("d-none")
return false;
    }
}