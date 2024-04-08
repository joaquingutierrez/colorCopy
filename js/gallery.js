window.addEventListener('resize', () => {
    adjustImagePositions();
});

document.addEventListener('DOMContentLoaded', () => {
    adjustImagePositions();
});


document.getElementById("prevImgButton").addEventListener("click", () => prevImage(currentImageIndex))
document.getElementById("nextImgButton").addEventListener("click", () => nextImage(currentImageIndex))
document.getElementById("closeImgButton").addEventListener("click", () => closeGallery())

let imageArray = []
let currentImageIndex = 0

const arrayMinElementPosition = (array) => {
    let min = array[0]
    let index = 0
    array.forEach((el, i) => {
        if (el < min) {
            min = el
            index = i
        }
    })
    return index
}

const arrayMaxElementPosition = (array) => {
    let max = array[0]
    let index = 0
    array.forEach((el, i) => {
        if (el > max) {
            max = el
            index = i
        }
    })
    return index
}

function adjustImagePositions() {
    const gallery = document.querySelector('#gallery');
    const images = gallery.querySelectorAll('.imageContainer');
    const gap = 5
    
    const windowWidth = gallery.offsetWidth
    const width = 280 //Todas las columnas son iguales y las imagenes tienen el ancho de la columna
    const columns = Math.floor(windowWidth / width) || 1
    const whiteSpace = windowWidth - columns * width  //espacio desperdiciado
    
    const topColumn = Array.from({ length: columns }, () => 30) //Inicializo las columnas en 30px, para luego ir sumando por columna
    const leftColumn = Array.from({ length: columns }, (_, column) => ((column * width) + (whiteSpace / 2) + column * gap)) //Calculo el inicio de cada columna
    
    let column = 0 //desde 0 hasta columns - 1
    
    images.forEach((img, index) => {
        img.style.width = `${width}px`
        img.style.height = `${img.children[0].offsetHeight}px`
        const left = leftColumn[column]
        const top = topColumn[column]
        img.style.visibility = "visible"
        
        topColumn[column] += img.children[0].offsetHeight + gap
        
        //Ahora tengo que elegir cúal va a ser la siguiente columna donde se ponga la img
        column = arrayMinElementPosition(topColumn)

        img.style.left = `${left}px`;
        img.style.top = `${top}px`;
        img.addEventListener("click", () => openCarrousel(index))
        imageArray.push(img)
    });
    const maxCol = arrayMaxElementPosition(topColumn)
    gallery.style.height = `${topColumn[maxCol]}px`
    window.onclick = function(event) {
        const modal = document.getElementById('galleryModal');
        if (event.target === modal) {
            closeGallery();
        }
    };
}

const openCarrousel = (index) => {
    const carrousel = document.getElementById("galleryModal")
    const currentImage = document.getElementById("modalImage")
    currentImageIndex = index
    carrousel.style.display = "block"
    currentImage.src = imageArray[index].children[0].src
    document.body.style.overflow = "hidden" //Bloqueo el scroll
}
const closeGallery = () => {
    document.getElementById('galleryModal').style.display = 'none';
    document.body.style.overflow = "visible" //desbloqueo el scroll
}

const prevImage = (index) => {
    currentImageIndex = index - 1
    if (currentImageIndex === 0) currentImageIndex = imageArray.length - 1
    document.getElementById('modalImage').src = imageArray[currentImageIndex].children[0].src;
}

const nextImage = (index) => {
    currentImageIndex = index + 1
    if (currentImageIndex === imageArray.length) currentImageIndex = 0
    document.getElementById('modalImage').src = imageArray[currentImageIndex].children[0].src;
}