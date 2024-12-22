let rubber = document.querySelector(".rubber")
let main = document.querySelector(".main")
let inputColor = document.querySelector(".input-color")
let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let size = 100
let allRubber = document.querySelector(".all-rubber")
let gradient = document.querySelector(".gradient")
let pixels = JSON.parse(localStorage.getItem('pixels')) || []
let count = 0
let countEl = document.querySelector(".count")

let isGradient = false




function genaratePx () {
    for ( let i = 0; i<5000; i++) {
        let px = document.createElement("div")
        px.classList.add("px")
        main.append(px)
        px.addEventListener ("click", function () {
            const color = getComputedStyle(px).backgroundColor
            console.log("|" + color + "|")
            const white = "rgba(255, 255, 255, 0.79)"

            if( isGradient == true) {
                px.style.background = "linear-gradient(90deg, red, blue)"
                // count += 1
                count++
                countEl.textContent = count
                pixels.push({
                    id: i,
                    color:  "linear-gradient(90deg, red, blue)"
                })
    
                localStorage.setItem("pixels", JSON.stringify(pixels))
                return
            }

            if (    color == white ) {
                px.style.background = inputColor.value
                // count += 1
                count++
                countEl.textContent = count
                pixels.push({
                    id: i,
                    color: inputColor.value
                })
    
                localStorage.setItem("pixels", JSON.stringify(pixels))
            }
           

        } )
    }
}

genaratePx ()
















let school = {
    name: "Shevchenko",
    number: 3,
}








let grades = [10, 11]


grades.push(12)




grades[0]
console.log(grades)
















for (let i = 0; i<pixels.length; i++) {
    let px = document.querySelectorAll(".px")
    px[pixels[i].id].style.background =  pixels[i].color
}




rubber.addEventListener ("click", function () {
    inputColor.value = "#FFFFFF"
} )
gradient.addEventListener ("click", function () {
    if (isGradient == true){
        isGradient = false
    }
    else if (isGradient == false) {
        isGradient = true
    }
} )



plus.addEventListener ("click", function () {
    size += 5
    main.style.transform = 'scale(' + size + '%)'
} )

minus.addEventListener ("click", function () {
    size -= 5
    main.style.transform = 'scale(' + size + '%)'
} )


allRubber.addEventListener ("click", function () {
   
    for (let i=0; i<5000; i++) {
        let px = document.querySelectorAll('.px')[i]
        px.style.background = "white"
    }
    count = 0
    countEl.textContent = count
    localStorage.clear()
    location.reload()
} )






