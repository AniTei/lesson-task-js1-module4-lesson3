// making a fork

//- When a user selects a number from the select box, 
// build a number of anchor tags (`a` elements) that matches the selected number


/* const listDiv = document.querySelector(".list");

const dropdownContainer = document.querySelector (".container");

let selectedValue = dropdownContainer.target. ???

function createNumberBox() {
    for (let i = 1; 1 <= selectedValue; i++) {
        listDiv.innerHTML = `<a href="details.htmlid=${selectedValue}" class="item"> number variable from dropdown menu</a>`
    }
}
createNumberBox();
 */
// make the number a variable that can be passed into a loop
// its called option value, in the inspector, what does that mean

////////////////////////////FASIT
const select = document.querySelector("select");
//DID NOT HAVE THIS, HAD SELECTED THE CONTAINER ELEMENT
const listContainer = document.querySelector(".list");
// HAD THIS ONE

select.addEventListener("change", buildList);
// WHAT IS THIS, EVENTTLISTENER, AND THE EVENT IS CHANGE, 
//AND THE FUNCTION TO RUN ON THAT EVENT IS BUILDLIST

function buildList(event) {
    // I HAD A FUNC CONTAINING A LOOP

    console.log(event.target.value);
    // I KNEW I HAD TO DO A TARGET THING, BUT NOT HOW TO FIND THE PROPERTIES OF TARGET

    const amount = event.target.value;
    //I KNOW I HAD TO MAKE THE MENU VALUE A VARIABLE, BUT NOT HOW

    listContainer.innerHTML = "";
    // FORGOT TO EMPTY CONTAINER BEFORE LOOP

    for (let i = 1; i <= amount; i++) {
        // PASS VALUE OF MENU INTO TIMES TO LOOP
        listContainer.innerHTML += `<a class="item" href="details.html?id=${i}">${i}</a>`;
        // DID SOMETHING LIKE THIS, BUT BLANKED ON PASSING IN THE i
        
    }
}

