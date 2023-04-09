import * as data from "./data.js"

var clothingGrid = document.getElementById("clothing-grid")
var accessoryGrid = document.getElementById("accessory-grid")

function productCards(data) {
  let card = document.createElement("div")
  card.className = "card"

  let image = document.createElement("img")
  image.className = "img"
  image.src = data.preview
  image.alt = data.name
  card.appendChild(image)

  var details = document.createElement("div")
  details.className = "details"

  var name = document.createElement("h3")
  name.className = "product-name"
  name.innerText = data.name
  details.appendChild(name)

  var brandName = document.createElement("h4")
  brandName.className = "product-brand"
  brandName.innerText = data.brand
  details.appendChild(brandName)

  var productPrice = document.createElement("h5")
  productPrice.className = "product-price"
  productPrice.innerText = "Rs " + data.price
  details.appendChild(productPrice)

  card.appendChild(details)

  if (data.isAccessory == true) {
    accessoryGrid.appendChild(card)
  } else {
    clothingGrid.appendChild(card)
  }
}

for (var i = 0; i < data.productList.length; i++) {
  productCards(data.productList[i])
}
