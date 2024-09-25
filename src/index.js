
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

function renderCards() {
    const parent = document.getElementsByClassName("cards")[0];

    data.forEach((e) => {
        const card = createCard(e);
        parent.appendChild(card);
    });

}

function createCard(data){
    const card = document.createElement("li");

    const { name, sprites: { other: {'official-artwork': { front_default }}, versions }, stats } = data;

    console.log(versions)
    card.classList.add("card");
    card.appendChild(renderName(name))
    card.appendChild(renderImage(front_default))

    const ulList = document.createElement("ul")
    ulList.className = "horizontal-list"

    ulList.appendChild(renderStats(stats));
    ulList.appendChild(renderGames(versions))

    card.appendChild(ulList)
    return card;
}

function renderGames(versions) {
    const ul = document.createElement("ul")
    ul.classList.add("card--games")
    for (const version in versions) {
        for (const gameName in versions[version]) {
            if (gameName !== "icons") {
                ul.appendChild(createGameElement(gameName)) 
            }
        }
    }

    return ul
}

function createGameElement(gameName) {
    const element = document.createElement("li")

    element.innerHTML = gameName.toUpperCase()
    return element
}

function createStatElement(title, content) {
    const element =  document.createElement('li')

    element.innerHTML = `${title.toUpperCase()}: ${content}`
    return element;
}


function renderName(name) {
    const captalize = name.charAt(0).toUpperCase().concat(name.slice(1))
    const title = document.createElement("h2");
    title.classList.add("card--title");
    title.textContent = captalize;
    return title;
}


function renderImage(url) {
    const image = document.createElement("img");
    image.classList.add("card--img");
    image.setAttribute("src", url)
    image.setAttribute("width", 256)
    return image
}

function renderStats(stats){
    const ul = document.createElement("ul");
    ul.classList.add("card--text")
    stats.forEach(e => {
        ul.appendChild(createStatElement(e.stat.name, e.base_stat))
    })

    return ul
}


renderCards()
