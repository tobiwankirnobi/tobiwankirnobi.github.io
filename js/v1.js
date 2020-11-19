document.body.onload =  addDivs;
var counter = 0;
function addDivs()
{
    for (let index = 1; index <= 16; index++) {
        var divn = document.createElement("div");
        var divncontent = document.createTextNode(index);
        divn.appendChild(divncontent);
        divn.addEventListener("click",colorchange);
        divn.classList.add("card")
        var container = document.getElementById("card-deck");
        container.appendChild(divn);
    }
}
function colorchange()
{
    this.classList.add("flipped");
    counter += 1;
    if (counter >= 3)
    {
        var flipped = document.querySelectorAll('.flipped');
        flipped.forEach(element => {element.classList.remove('flipped')});
        counter = 0;
    }
}