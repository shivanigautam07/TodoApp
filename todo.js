let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
let li = document.querySelector("li");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("edit");
    item.appendChild(editBtn);
    ul.appendChild(item);
    inp.value = "";

});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let itemlist = event.target.parentElement;
        itemlist.remove();
        console.log("Item deleted");
    }


});
li.addEventListener("click", function (event) {
    if (event.target.classList== "edit") {
        let oldtask = event.target.parentElement.innerText.firstChild;
        console.log(oldtask);
        let edittask = prompt(`enter your task in place of${li.innerText}`);
        event.target.parentElement.innerText = edittask;
        let delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.classList.add("delete");
        this.appendChild(delBtn);
        let editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.classList.add("edit");
        this.appendChild(editBtn);

        console.log("Item edited");

    }

});