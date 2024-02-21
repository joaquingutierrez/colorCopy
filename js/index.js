const tableGraficaButton = document.getElementById("table-grafica-button")
const tableDiseñoWebButton = document.getElementById("table-diseñoWeb-button")
const tableDiseñoGraficoButton = document.getElementById("table-diseñoGrafico-button")

const verMasButton = (column) => {
    const table = document.querySelector(".servicios-table")
    const tableGraficaExtraContent = document.getElementById("table-grafica-extraContent")
    const tableDiseñoWebExtraContent = document.getElementById("table-diseñoWeb-extraContent")
    const tableDiseñoGraficoExtraContent = document.getElementById("table-diseñoGrafico-extraContent")
    const tableArrow = document.querySelectorAll(".table-arrow")
    switch (column) {
        case 0:
            if (tableGraficaExtraContent.classList.contains("table-shownContent")) {
                tableGraficaExtraContent.classList.remove("table-shownContent")
                tableGraficaButton.parentElement.style.borderBottom = "1px solid #ffffff1a"
                tableArrow[0].classList.add("table-arrow-down")
                tableArrow[0].classList.remove("table-arrow-up")
            } else {
                tableGraficaButton.parentElement.style.borderBottom = "none"
                tableDiseñoWebButton.parentElement.style.borderBottom = "1px solid #ffffff1a"
                tableDiseñoGraficoButton.parentElement.style.borderBottom = "1px solid #ffffff1a"
                tableGraficaExtraContent.classList.add("table-shownContent")
                tableDiseñoWebExtraContent.classList.remove("table-shownContent")
                tableDiseñoGraficoExtraContent.classList.remove("table-shownContent")
                tableArrow[0].classList.add("table-arrow-up")
                tableArrow[0].classList.remove("table-arrow-down")
            }
            break
        case 1:
            if (tableDiseñoWebExtraContent.classList.contains("table-shownContent")) {
                tableDiseñoWebExtraContent.classList.remove("table-shownContent")
                tableDiseñoWebButton.parentElement.style.borderBottom = "1px solid #ffffff1a"
                tableArrow[1].classList.remove("table-arrow-up")
            } else {
                tableGraficaButton.parentElement.style.borderBottom = "1px solid #ffffff1a"
                tableDiseñoWebButton.parentElement.style.borderBottom = "none"
                tableDiseñoGraficoButton.parentElement.style.borderBottom = "1px solid #ffffff1a"
                tableGraficaExtraContent.classList.remove("table-shownContent")
                tableDiseñoWebExtraContent.classList.add("table-shownContent")
                tableDiseñoGraficoExtraContent.classList.remove("table-shownContent")
                tableArrow[1].classList.add("table-arrow-up")
                tableArrow[1].classList.remove("table-arrow-down")
            }
            break
        case 2:
            if (tableDiseñoGraficoExtraContent.classList.contains("table-shownContent")) {
                tableDiseñoGraficoExtraContent.classList.remove("table-shownContent")
                tableDiseñoGraficoButton.parentElement.style.borderBottom = "1px solid #ffffff1a"
                tableArrow[2].classList.remove("table-arrow-up")
            } else {
                tableGraficaButton.parentElement.style.borderBottom = "1px solid #ffffff1a"
                tableDiseñoWebButton.parentElement.style.borderBottom = "1px solid #ffffff1a"
                tableDiseñoGraficoButton.parentElement.style.borderBottom = "none"
                tableGraficaExtraContent.classList.remove("table-shownContent")
                tableDiseñoWebExtraContent.classList.remove("table-shownContent")
                tableDiseñoGraficoExtraContent.classList.add("table-shownContent")
                tableArrow[2].classList.add("table-arrow-up")
                tableArrow[2].classList.remove("table-arrow-down")
            }
            break
    }
}

tableGraficaButton.addEventListener("click", () => { verMasButton(0) })
tableDiseñoWebButton.addEventListener("click", () => { verMasButton(1) })
tableDiseñoGraficoButton.addEventListener("click", () => { verMasButton(2) })