// chrome://extensions/

const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-web")
let myLeads = [  ]

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    addListItem()
    // renderLeads()
})

function addListItem() {
    ulEl.innerHTML += `
        <li>
            <a href=${myLeads[myLeads.length - 1]} target='_blank'> 
                ${myLeads[myLeads.length - 1]}
            </a>
        </li>
    `
    inputEl.value = ""
}

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>"
    }
    // better to do all rendering at once because it is costy!
    ulEl.innerHTML = listItems
}




// for (let i = 0; i < myLeads.length; i++) {
    // one way
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    // second way
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
// }