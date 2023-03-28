const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");
const maxPaletteBoxes =32;

const generatePalette=()=>{

    container.innerHTML ="";
    for(let i=0; i<maxPaletteBoxes; i++){
        let randomHex = Math.floor(Math.random()*0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6,"0")}`;
        randomHex = randomHex.toUpperCase();
        console.log(randomHex);

        const colorBox =document.createElement("li");
        colorBox.classList.add("color_box");
        colorBox.innerHTML =` <div class="color" style="background:${randomHex}"></div>
        <h5 class="hex_value">${randomHex}</h5>`;

        colorBox.addEventListener("click",()=>{copyColor(colorBox,randomHex)});

        container.appendChild(colorBox)
    }


}


const copyColor = (elem,hexVal)=>{
    const colorElement = elem.querySelector(".hex_value");
    navigator.clipboard.writeText(hexVal).then(()=>{
        colorElement.innerText="Copied";

        setTimeout(() => {
            colorElement.innerText=hexVal
        }, 2000);
    }).catch(()=>{alert("Failed to copy the color code")})
}

generatePalette();
refreshBtn.addEventListener("click",generatePalette);



console.log(navigator.clipboard.writeText());