/* your JS code here */

function newElement() {
    resetErrorMessage()
      var li = document.createElement("li");
      var v1 = document.getElementById("todoT").value.trim();
    if (v1  == "") {
        errorMessage("please enter a non empty title");
        return;
    }
    var v2 = document.getElementById("todoD").value.trim();
    if (v2  == "") {
        errorMessage("please enter a non empty description");
        return;
    }
    var inputValue = v1;
    inputValue += " - " + v2;
    var t = document.createTextNode(inputValue);




      li.appendChild(t);
        if (inputValue  == "") {
            errorMessage("please enter a non empty todo");
        }
        else if (priorityCheck()) {


        document.getElementById("myUL").appendChild(li);
            var ul=document.getElementById("clist")
            ul.hidden = false
            var deleteButton=document.createElement("button");
            deleteButton.innerText="Delete";
            li.appendChild(deleteButton);
            deleteButton.onclick=deleteTask;

        }
        else{
            var ul=document.getElementById("clist1")
            ul.hidden = false
            document.getElementById("myUL1").appendChild(li);
            var deleteButton=document.createElement("button");
            deleteButton.innerText="Delete";
            li.appendChild(deleteButton);
            deleteButton.onclick=deleteTask;

        }
    document.getElementById("todoT").value = "";
    document.getElementById("todoD").value = "";
    document.getElementById("myCheck").checked = false;

    var span = document.createElement("SPAN");
    //var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    //tasklist.push(li);



}

//let tasklist[ ];



/*
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    if (priorityCheck())
        color();
        txt.classList.add(style="bg-danger text-white")
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
    if (priorityCheck())
        color();


}
*/


function priorityCheck() {
    var checkBox = document.getElementById("myCheck");
    return (checkBox.checked );

}

//run the warning message
function runWarning()
{
    const warning = document.getElementById('warning_box')
    warning.hidden = false
}

function resetErrorMessage() {
    const warning = document.getElementById("errormsg")
    warning.hidden = false
    document.getElementById("errormsg").innerHTML = "";
    document.getElementById("errormsg").style.display = "none";
}
function errorMessage(msg) {

    document.getElementById("errormsg").innerHTML = msg;
    document.getElementById("errormsg").style.display = "block";
}

var deleteTask=function(){
    console.log("Delete Task...");
    var listItem=this.parentNode;
    var ul=listItem.parentNode;
    ul.removeChild(listItem);
    const warning = document.getElementById("clist")
    warning.hidden = true
    }

var Priortytask=function(){
    //var listItem=this.parentNode;
   // var ul=listItem.parentNode;
    const warning = document.getElementById("clist1")
    warning.hidden = true;

}