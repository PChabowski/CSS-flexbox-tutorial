let conteiner = document.querySelector("#flex");

function switchClass(name) {
    let nameClass = name;
    let nameChange = "flex-conteiner " + nameClass;
    if (conteiner.className == "flex-conteiner") {
        conteiner.className += " " + nameClass;
        write(" " + nameClass+";");
    } else if(conteiner.className != "flex-conteiner") {
        resetClass();
        conteiner.className += " " + nameClass;
        write(" " + nameClass+";");
    }
}

function resetClass() {
    conteiner.className = "flex-conteiner";
    write("");
}

function write(text) {
    let write = document.querySelector("#write");
    write.innerHTML = text;
}