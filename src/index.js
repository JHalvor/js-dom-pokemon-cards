
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const cardList = document.querySelector(".cards")

function renderCard(cardData) {
    const li = document.createElement("li")
    //li.setAttribute("class", "card")
    li.className = "card"

    const h2 = document.createElement("h2")
    //h2.setAttribute("class", "card--title")
    h2.className = "card--title"
    h2.textContent = cardData.name.charAt(0).toUpperCase() + cardData.name.slice(1)

    const img = document.createElement("img");
    img.width = "256"
    img.className = "card--img"
    img.src = cardData.sprites.other["official-artwork"].front_default
    img.alt = cardData.name

    const ul = document.createElement("ul")
    ul.className = "card--text"
    const liHp = document.createElement("li")
    const statFound = cardData.stats.find((item) => item.stat.name === "hp")
    liHp.textContent = statFound.stat.name + ': ' + statFound.base_stat

    ul.appendChild(liHp)

    li.appendChild(h2)
    li.appendChild(img)
    li.appendChild(ul)

    return li
}

cardList.appendChild(renderCard(data[0]))
