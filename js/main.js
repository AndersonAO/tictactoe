const jogador1 = 'x'
const jogador2 = 'o'
let jogadorAtual = jogador1
let final = 'false'
let pos = []
let vencedor = document.getElementById('vencedor')
vencedor.innerHTML = ` <h2>É A VEZ DE </h2> <img src="images/${jogadorAtual}.png" id='vencedorimg'></img> `


function escolha(a){
    if (jogadorAtual == jogador1 && final == 'false'){
            game(a)
            
        } else if(jogadorAtual == jogador2 && final == 'false'){
            game(a)
            
        }
    } 
    


function game(a){
    switch (a) {
        case 11:
            let a1 = document.getElementById('a1')
            if(typeof pos.a1 == 'undefined'){
                pos.a1 = jogadorAtual
                a1.innerHTML = `<img src="images/${jogadorAtual}.png"></img>`
                jogadorA(jogadorAtual)
            }
            break;
        case 12:
            let a2 = document.getElementById('a2')
            if (typeof pos.a2 =='undefined'){
                pos.a2 = jogadorAtual
                a2.innerHTML = `<img src="images/${jogadorAtual}.png"></img>`
                jogadorA(jogadorAtual)
            }
            break;
        case 13:
            let a3 = document.getElementById('a3')
            if (typeof pos.a3 =='undefined'){
                pos.a3 = jogadorAtual
                a3.innerHTML = `<img src="images/${jogadorAtual}.png"></img>`
                jogadorA(jogadorAtual)
            }
            break;
        case 21:
            let b1 = document.getElementById('b1')
            if (typeof pos.b1 =='undefined'){
                pos.b1 = jogadorAtual
                b1.innerHTML = `<img src="images/${jogadorAtual}.png"></img>`
                jogadorA(jogadorAtual)
            }
            break;
        case 22:
            let b2 = document.getElementById('b2')
            if (typeof pos.b2 =='undefined'){
                pos.b2 = jogadorAtual
                b2.innerHTML = `<img src="images/${jogadorAtual}.png"></img>`
                jogadorA(jogadorAtual)
            }
            break;
        case 23:
            let b23 = document.getElementById('b1')
            if (typeof pos.b3 =='undefined'){
                pos.b3 = jogadorAtual
                b3.innerHTML = `<img src="images/${jogadorAtual}.png"></img>`
                jogadorA(jogadorAtual)
            }
            break;
        case 31:
            let c1 = document.getElementById('c1')
            if (typeof pos.c1 =='undefined'){
                pos.c1 = jogadorAtual
                c1.innerHTML = `<img src="images/${jogadorAtual}.png"></img>`
                jogadorA(jogadorAtual)
            }
            break;     
        case 32:
            let c2 = document.getElementById('c2')
            if (typeof pos.c2 =='undefined'){
                pos.c2 = jogadorAtual
                c2.innerHTML = `<img src="images/${jogadorAtual}.png"></img>`
                jogadorA(jogadorAtual)
            }
            break;   
        case 33:
            let c3 = document.getElementById('c3')
            if (typeof pos.c3 =='undefined'){
                pos.c3 = jogadorAtual
                c3.innerHTML = `<img src="images/${jogadorAtual}.png"></img>`
                jogadorA(jogadorAtual)
            }
            break;      
}
   verificar(jogador1);
   verificar(jogador2);

}


function verificar(a){
    if ( 
    (pos.a1 == a && pos.a2 == a && pos.a3 == a)
    ||(pos.b1 == a && pos.b2 == a && pos.b3 == a)
    ||(pos.c1 == a && pos.c2 == a && pos.c3 == a)
     //coluna  
    ||(pos.a1 == a && pos.b1 == a && pos.c1 == a)
    ||(pos.a2 == a && pos.b2 == a && pos.c2 == a)
    ||(pos.a3 == a && pos.b3 == a && pos.c3 == a)
    // diagonal
    ||(pos.a1 == a && pos.b2 == a && pos.c3 == a)
    ||(pos.a3 == a && pos.b2 == a && pos.c1 == a)
    ){
        final = 'true'
        vencedor.innerHTML = ` <h2>O VENCEDOR FOI</h2> <img src="images/${a}.png" id='vencedorimg'></img> `
        } else if ( typeof pos.a1 != 'undefined' && 
                    typeof pos.a2 != 'undefined' &&
                    typeof pos.a3 != 'undefined' && 
                    typeof pos.b1 != 'undefined' && 
                    typeof pos.b2 != 'undefined' && 
                    typeof pos.b3 != 'undefined' && 
                    typeof pos.c1 != 'undefined' && 
                    typeof pos.c2 != 'undefined' && 
                    typeof pos.c3 != 'undefined' && final == 'false')
                {
                    final = "true";
                    vencedor.innerHTML = ` <h2>DEU VELHA!!</h2>`
                }
}

function jogadorA(jgAtual){
    if(jgAtual == jogador1 && final=="false"){
         
         jogadorAtual = jogador2
         vencedor.innerHTML = ` <h2>É A VEZ DE </h2> <img src="images/${jogadorAtual}.png" id='vencedorimg'></img> `
         
    } else if(jgAtual == jogador2 && final=="false") {
         jogadorAtual = jogador1
         vencedor.innerHTML = ` <h2>É A VEZ DE </h2> <img src="images/${jogadorAtual}.png" id='vencedorimg'></img> `
         
    }
}

function resetar(){
    a1.innerHTML = ''
    a2.innerHTML = ''
    a3.innerHTML = ''
    b1.innerHTML = ''
    b2.innerHTML = ''
    b3.innerHTML = ''
    c1.innerHTML = ''
    c2.innerHTML = ''
    c3.innerHTML = ''
    pos = [];
    final = 'false'
    jogadorAtual = jogador1
    vencedor.innerHTML = ` <h2>É A VEZ DE </h2> <img src="images/${jogadorAtual}.png" id='vencedorimg'></img> `
}