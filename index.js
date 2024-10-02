const main = document.getElementById("main");
main.remove();
const newHeader = document.createElement("h1");
newHeader.textContent = "Jojo is the champion";
newHeader.id = "victory";
document.body.append(newHeader);