function switchClass(name, example) {
    let code = example.querySelector(".code");
    let conteiner = code.querySelector(".flex-conteiner") ;
    let nameChange = "flex-conteiner " + name;
    if (conteiner.className == "flex-conteiner") {
        conteiner.className = nameChange;
        write(" " + name+";", example);
    } else if(conteiner.className != "flex-conteiner") {
        resetClass(example);
        conteiner.className += " " + name;
        write(" " + name+";", example);
    }
}

function resetClass(example) {
    let code = example.querySelector(".code");
    let conteiner = code.querySelector(".flex-conteiner") ;
    conteiner.className = "flex-conteiner";
    write(" ;", example);
}

function write(text, where) {
    let write = where.querySelector(".write");
    write.innerHTML = text;
}
