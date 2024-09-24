
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const cardList = document.querySelector(".cards")

function renderCard(cardData) {
    const ul = document.createElement("ul")
    ul.className = "card"

    const h2 = document.createElement("h2")
    h2.className = "card--title"
    h2.textContent = cardData.name.charAt(0).toUpperCase() + cardData.name.slice(1)

    const img = document.createElement("img");
    img.width = "256"
    img.className = "card--img"
    img.src = cardData.sprites.other["official-artwork"].front_default
    img.alt = cardData.name

    const ulText = document.createElement("ul")
    ulText.className = "card--text"

    cardData.stats.forEach((element) => {
        const ulStat = document.createElement("ul")
        ulStat.textContent = element.stat.name.toUpperCase() + ': ' + element.base_stat
        ulText.appendChild(ulStat)
    });

    ul.appendChild(h2)
    ul.appendChild(img)
    ul.appendChild(ulText)

    return ul
}

data.forEach((element) => {
    cardList.appendChild(renderCard(element))
})
