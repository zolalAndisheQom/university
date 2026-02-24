
let src = audio_safari
default_teacher = "Safari"
function informatino(dick) {
    const informatino_tag = document.getElementById("teacher")
    informatino_tag.innerHTML = ""


    for (const key in dick[default_teacher]) { 
    const div = document.createElement("div")
        div.id = key
        div.className = "information"
    const h5_tag = document.createElement("h5")
        h5_tag.innerText = key
        h5_tag.className = "titr"
    const h5_tag_vale = document.createElement("h5")
        h5_tag_vale.id = key
        h5_tag_vale.innerText = dick[default_teacher][key]
    
    div.appendChild(h5_tag)
    div.appendChild(h5_tag_vale)
    informatino_tag.appendChild(div)
        
    }
}
informatino(teachers)

function loadFile(id) {
    const loader = document.getElementById(id)
    loader.innerHTML = ""
    document.getElementById("load").style = "display: none"
    let i =2
    for (let index = 0; index < src.length; index++) {
        
        const div = document.createElement("div")
            div.className = "audioDiv"
        const h_4 = document.createElement("h4")
            h_4.innerText = "جلسه"+ i
            div.appendChild(h_4)
        const audi = document.createElement("audio")
            audi.src = src[index]
            audi.controls = true
            div.appendChild(audi)
        loader.appendChild(div)
        i++
    }

}

document.getElementById("Garyan").addEventListener("click",()=>{
    document.getElementById("select").className = "select"
    document.getElementById("Andishe").style = "color: grey"
    document.getElementById("Garyan").style = "color: black"
    document.getElementById("load").style = ""
    document.getElementById("sours").innerHTML =""
    default_teacher = "Taheri"
    src = audio_tahri
    informatino(teachers)
    
});

document.getElementById("Andishe").addEventListener("click",()=>{
    document.getElementById("select").className = ""
    document.getElementById("Garyan").style = "color: grey"
    document.getElementById("Andishe").style = "color: black"
    document.getElementById("load").style = ""
    document.getElementById("sours").innerHTML =""
    default_teacher = "Safari"
    informatino(teachers)
    src= audio_safari
    
});

document.getElementById("cfile").addEventListener("click", ()=>{
    document.getElementById("file").click()
})

document.getElementById("file").addEventListener("change", () =>{
    
    document.getElementById("name").innerText = document.getElementById("file").value
})