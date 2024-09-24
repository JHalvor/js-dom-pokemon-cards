
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

    const ulList = document.createElement("ul")
    ulList.className = "horizontal-list"

    const liStats = document.createElement("li")
    liStats.className = "card--text"

    cardData.stats.forEach((element) => {
        const liStat = document.createElement("li")
        liStat.textContent = element.stat.name.toUpperCase() + ': ' + element.base_stat
        liStats.appendChild(liStat)
    });

    const appearedGames = document.createElement("li")
    for (const version in cardData.sprites.versions) {
        for (const game in cardData.sprites.versions[version]) {
            if (game !== "icons") {
                const ulGame = document.createElement("ul")
                ulGame.textContent = game.toUpperCase()
                appearedGames.appendChild(ulGame)
            }
        }
    }



    ul.appendChild(h2)
    ul.appendChild(img)
    ulList.appendChild(liStats)
    ulList.appendChild(appearedGames)
    ul.appendChild(ulList)
    //ul.appendChild(ulStats)

    return ul
}

data.forEach((element) => {
    cardList.appendChild(renderCard(element))
})
