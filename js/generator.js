// Selecionando elementos
const section = document.getElementById("section")
const button = document.getElementById("button")

// Adicionando evento
button.addEventListener("click", generateColors)

// Criando elementos de forma dinâmica
for(let i = 0; i < 7; i++) {
    const box = document.createElement("div")
    
    box.classList.add("box")
    section.appendChild(box)
}

// Selecionando todos elementos criados
const box = document.querySelectorAll(".box")

// Função para gerar cores
function generateColors() {
    box.forEach(color => {
        const newColor = hexaColor()
        color.style.backgroundColor = newColor
        color.textContent = newColor
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