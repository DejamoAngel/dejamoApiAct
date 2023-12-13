const container = document.getElementById("container");

fetch('https://api.mangadex.org/manga?limit=10&includes%5B%5D=cover_art')
.then((response) => response.json())
.then((data) => {
    const req = data.data[0];
    let title = req.attributes.title.en;
    let description = req.attributes.description.en;
    let mangaId = req.id;
    let coverArt = req.relationships[2].attributes.fileName;
    
    
console.log(coverArt)
 container.innerHTML = `<h1>${title}</h1>
                         <p>${description}</p>
                         <img src = "https://uploads.mangadex.org/covers/${mangaId}/${coverArt}">`
 

});