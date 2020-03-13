// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsParent = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response.data.articles)
    const myVar = Object.entries(response.data.articles)

    myVar.forEach(i => {
        i[1].forEach(a => {
            cardsParent.append(cardMaker(a))
        })
    })
})

.catch(error => {
    console.log("Data could not be returned", error)
})

function cardMaker (object) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    card.append(headline);
    card.append(author);
    author.append(imgContainer);
    imgContainer.append(img);
    author.append(authorName);

    headline.textContent = object.headline;
    authorName.textContent = object.authorName;

    img.src = object.authorPhoto

    return card
}