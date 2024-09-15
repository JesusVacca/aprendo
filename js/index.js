document.querySelectorAll(".nav li").forEach((element,indice,arr)=>{
    element.addEventListener('click',function(e){
        arr.forEach(li=>{
            if(li.classList.contains('active')) li.classList.remove('active');
        })
        element.classList.add('active');
    })
})


document.getElementById('chatbot').addEventListener('click',function(e){
    const box = document.getElementById('box');
    box.classList.add('open');
    document.getElementById('cerrar').addEventListener('click',function(e){
        box.classList.remove('open');
    })

    document.getElementById('clean').addEventListener('click',function(e){
        document.getElementById('boxDisplay').innerHTML = "";
        chatbotSaludo('boxDisplay');
    })
})

function chatbotSaludo(id){
    const boxDisplay = document.getElementById(id);
    const div = document.createElement('div');
    div.innerHTML = "<p>&#128075; Hola, ¿En que te puedo ayudar?</p>";
    div.classList.add('box__contenido');
    boxDisplay.append(div);
}

document.getElementById('inputUser').addEventListener('keydown',function(e){
    if (e.key === "Enter" && e.target.value.trim() !== "") {
        const body = document.getElementById('boxDisplay');
        const div = document.createElement('div');
        div.innerHTML = `<p>${e.target.value}</p>`;
        div.classList.add('box__contenido');
        div.classList.add('usuario');
        body.append(div);
        e.target.value = "";
    }
    
})

document.getElementById('hamburguesa').addEventListener('click',function(e){
    this.classList.toggle('open');
    document.getElementById('nav').classList.toggle('open');
    document.querySelector('nav ul').classList.toggle('open');
})

// document.getElementById('contenedor').addEventListener('mousemove',function(e){
//     const x = e.clientX;
//     const y = e.clientY;
//     const mouse = document.getElementById('mouse');
//     mouse.style.left = `${x}px`;
//     mouse.style.top = `${y}px`;
// })