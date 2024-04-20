function drag(event){
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event){
    event.preventDefault();
}

function drop(event){
    event.preventDefault();

    // Obtener la imagen de origen y su contenedor
    let originImageId = event.dataTransfer.getData("text");
    let originImage = document.getElementById(originImageId);
    let originContainer = originImage.closest('.ctn-box');

    // Obtener el contenedor de destino
    let targetContainer = event.target.closest('.ctn-box');

    // Verificar si se encontraron ambos contenedores
    if (originContainer && targetContainer) {
        // Almacenar temporalmente el contenido HTML de los contenedores
        let originHtml = originContainer.innerHTML;
        let targetHtml = targetContainer.innerHTML;

        // Intercambiar el contenido HTML de los contenedores
        originContainer.innerHTML = targetHtml;
        targetContainer.innerHTML = originHtml;
    }
}



onload = function(){
    let parent = document.getElementById('item-image');
    let frag = document.createDocumentFragment();

    while(parent.children.length){
        frag.appendChild(parent.children[Math.floor
        (Math.random() * parent.children.length)]);
    }
    parent.appendChild(frag);
}