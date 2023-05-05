// Function to render your items
function renderItems(collection) {
    // out put to html page and make data look NICE 
    console.log("data records in your JSON:", collection);
    let initialType

    collection.forEach(
        function getItemProperty(item) {
            const collectionList = document.getElementById('collection')

            let conversationBox

            const listItem = document.createElement('div')
            const itemDetails =
                `
               <div class="bigBox">
                <div class="container">
                    <div class="column-1">
                        <h1 class="name" style="font-weight: 600;">${item.Forename}</h1>
                    </div>
			        <div class="column-2">
                        <p class="response">${item.Response}</p>
                    </div> 
                </div>
               </div>
			    `
            listItem.insertAdjacentHTML('beforeend', itemDetails)
            collectionList.appendChild(listItem)

            if (initialType == item.Conversation) {
                document.querySelector(`.conversation-container--${item.Conversation}`).appendChild(listItem)
            } else {
                initialType = item.Conversation
                conversationBox = document.createElement('div')
                conversationBox.classList.add(`conversation-container--${item.Conversation}`)
                collectionList.appendChild(conversationBox)
                conversationBox.appendChild(listItem)
            }


            // get const convA
            if (item.Conversation) {
                listItem.classList.add("convo")
            }

            if (item.Conversation == "A") {
                // If this is `true`
                listItem.classList.add("convoStatusA");
            }
            if (item.Conversation == "B") {
                // If this is `true`
                listItem.classList.add("convoStatusB");
            }
            if (item.Conversation == "Individual") {
                // If this is `true`
                listItem.classList.add("convoStatusInd");
            }
        });


}

// Fetch gets your JSON file.
fetch("./assets/data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (collection) {
        renderItems(collection);
        // renderItems(collection.reverse());
    });

// JAVASCRIPT ELEMENTS:
//      1. the footer changes based on the current month/year
//      2. when the ids in the nav are clicked, descriptions appear
//      3. stickers (circle, star)
//      4. color change

//CURRENT DATE
const date = new Date();

let day = date.getDate();
let month = date.toLocaleString('default', { month: 'short' });
let year = date.getFullYear();

let currentDate = `${month} ${year}`;
console.log(currentDate);
document.getElementById("times").innerHTML =
    "Interviews conducted between Jan 2023 and " + currentDate;

// CLICK TO REVEAL AND HIDE
$("#one").click(function () {
    $("#why").toggle();
});
$("#why").click(function () {
    $("#why").toggle();
});
$("#eat").click(function () {
    $("#more").toggle();
});
$("#more").click(function () {
    $("#more").toggle();
});
$("#thx").click(function () {
    $("#thanks").toggle();
});
$("#head").click(function () {
    $("#ask").toggle();
});
$("#ask").click(function () {
    $("#ask").toggle();
});

// DRAGGABLE DIVS
// CIRCLE STICKER
var e;
var elmnt;
var eventHold;
var holdTargetId;
var holdTarget;

const els = document.querySelectorAll(".circle");
els.forEach((name) => {
    console.log("els.forEach = " + name);
    dragElement(name);
});

function dragElement(elmnt) {
    console.log("function dragElement() = " + elmnt);
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        //console.log("function elementDrag(e)") ;

        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        console.log("function closeDragElement()")
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// STAR STICKER
const burs = document.querySelectorAll("#burst-12");
burs.forEach((name) => {
    console.log("burs.forEach = " + name);
    dragElement(name);
});

function dragElement(elmnt) {
    console.log("function dragElement() = " + elmnt);
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        console.log("function closeDragElement()")
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// COLOR RANDOMIZER BUTTON
let myColors = ['red', 'deeppink', 'orangered', 'orange', 'green', 'olivedrab', 'blue', 'darkviolet', 'mediumslateblue', 'rgb(33, 33, 33)'];

$('button').click(function () {
    let randomColor = myColors[Math.trunc(Math.random() * myColors.length)];
    $('p').css('color', randomColor);
});