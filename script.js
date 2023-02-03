function Sorsolas(){
    var sorsolt=[];
    for (let index = 0; index < 5; index++) {
        sorsolt[index]=Math.round(Math.random()*90+1)
    }
    sorsolt.sort();
    document.getElementById("sorsoltSzamok").innerHTML=`${sorsolt[0]};${sorsolt[1]};${sorsolt[2]};${sorsolt[3]};${sorsolt[4]}`
}

function Tarolas(){
    const option = document.createElement("option");
    option.text=`${document.getElementById("het").value}.Hét:`+document.getElementById("sorsoltSzamok").innerHTML
    const element = document.getElementById("taroltSzamok")
    element.appendChild(option)
}