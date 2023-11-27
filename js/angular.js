fetch("/data/noticias.json")
.then(data =>data.json())
.then(json =>{
    console.log(json)
    let indice = "01"
    console.log(json["Noticia_"+indice])
    json["Noticia_"+indice].forEach(element => {
        document.getElementById("Novasmaterias").innerHTML+=element
    });
}) 

