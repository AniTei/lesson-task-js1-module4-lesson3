// - on the details page retrieve the id from the query string
// - add the id to the URL below, 
// - make an API call using the final url 
// - and display the title and author of the selected book



const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const selectedId = params.get("id");

const idDisplayer = document.querySelector(".id");
idDisplayer.innerHTML = `${selectedId}`;

const bookDisplayer = document.querySelector(".details");
const url = "https://api.noroff.dev/api/v1/books/" + selectedId;

//const id = property of data
// first get the url right, then take from the query string, the id to get book?

async function callToBooks() {
    try {
        const respond = await fetch(url);
        const data = await respond.json();
        console.log(data);

        displayBook(data);

    }
    catch (error) {
        console.log(error, "OH NO, smthng wnt wroong :( ")
    }
}
callToBooks();

function displayBook(book) {
    bookDisplayer.innerHTML = "";
    bookDisplayer.innerHTML = `<h1>Title: ${book.title} </h1> 
                                <p>Author: ${book.author}</p>`;

}
///ops THIS FUNC IS ALREADY CALLED IN THE ASYNC FUNC!:)


// loop through array? no? I want 1-10 to ba available, the id need to correspond with the click on index page


////////////////////////FASIT
/*
// get the query string
const queryString = document.location.search;
// DIDNT REMEMBER HOW TO DO THIS
// BUT I KNEW TO DO IT, BUT ALSO PLACED IT VERY LONG DOWN

const params = new URLSearchParams(queryString);

// get the id from the query string
const newId = params.get("id");

// if the id is null (doesn't exist) redirect to the home page
if (newId === null) {
    location.href = "/";
}
// I DIDNT THINK TO DO THAT, BUT SMART

// create the url by addin the id to the end
const url = "https://api.noroff.dev/api/v1/books/" + newId;
// HAD THIS RIGHT, BUT COULDNT FIGURE OUT HOW TO MAKE THE ID VARIABLE

const idContainer = document.querySelector(".id");
//HAD THIS
const detailContainer = document.querySelector(".details");
// HAD THIS

// display the id in a different element to the rest of the properties
idContainer.innerHTML = newId;
// HAD THIS, BUT COUDNT FIGURE OUT HOE TO MAKE THE ID

async function fetchCharacter() {
    //YES
    try {
        //YES
        const response = await fetch(url);
        //YES
        const result = await response.json();
        //YES
        console.log(result);
        //YES

        // pass the json to a function that will create the html
        createHtml(result);
        //DIDNT HAVE THIS ONE!!!
        //THIS IS HOW YOU GET THE CONTENT OUT OF THE CALL-FUNCTION AND INTO ANOTHER FUNC
    } catch (error) {
        //YES
        console.log(error);
        //YES
        detailContainer.innerHTML = error;
        //NOPE

    }
}

fetchCharacter();
//YES I ACTUALLY REMEMBERED TO CALL THE FUNCTION THIS TIME

function createHtml(details) {
    //YES, I HAD A FUNCTION
    detailContainer.innerHTML = `<h1>${details.title}</h1>
                                 <div>Author: <b>${details.author}</b></div>`;
// HAD HTML
}

 */

//// NOW I WILL TRY TO DO THIS WITH MY START