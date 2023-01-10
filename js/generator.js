// Selecionando elementos
const section = document.getElementById("section")
const button = document.getElementById("button")

// Adicionando evento
button.addEventListener("click", generateColors)

// Criando elementos de forma dinâmica
for(let i = 0; i < 7; i++) {
    const box = document.createElement("div")
    const text = document.createElement("span")
    
    box.classList.add("box")
    section.appendChild(box)
    text.classList.add("text")
    box.appendChild(text)
}

// Selecionando todos elementos criados
const box = document.querySelectorAll(".box")
const text = document.querySelectorAll(".text")

// Função para gerar texto hexadecimal
function generateText() {
    text.forEach(span => {
        const hexaText = hexaColor()
        span.textContent = hexaText
    })
}

// Função para gerar cores
function generateColors() {
    box.forEach(color => {
        const newColor = hexaColor()
        color.style.backgroundColor = newColor
        generateText()
    })
}

// Função para gerar código hexadecimal
function hexaColor() {
    const characters = "123456789abcdef"
    const maxCharacters = 6
    let color = ""

    for(let i = 0; i < maxCharacters; i++) {
        let randomColor = Math.floor(Math.random() * characters.length)
        color += characters.substring(randomColor, randomColor + 1)
    }
    return "#" + color
}