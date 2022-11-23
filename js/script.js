var allProducts = document.querySelectorAll(".items .item")
var content = document.querySelector("#content")
var btn = document.querySelector("#AddToCart")
var totalPrice = 0 ;
var output = document.querySelector(".consleout")

allProducts.forEach( function (item){
     item.onclick = function (){
         totalPrice += parseInt (item.getAttribute("price")) 
         content.innerHTML += item.textContent + " & ";
         if (content.innerHTML != "" ){
             btn.style.display = "block";
            //  btn.style.backgroundColor = "bl"
             btn.style.color = "white"
         }
     }
 })
btn.onclick = function (){
    output.innerHTML = "price =" + totalPrice ;
 }