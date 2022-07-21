/*Mettre une couleur sur les onglets actifs*/

let currentLink = document.location.pathname.replaceAll(/\//g,'')

if(document.querySelector('.main-menu a[href="'+currentLink+'"]'))
document.querySelector('.main-menu a[href="'+currentLink+'"]').style.color="#1e73be"





/*Contact form avec validation*/

function checkform(){
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let email = document.getElementById('email');
    let gender = document.querySelector('input[name=gender]:checked')
    let codePostal = document.getElementById('codePostal');
    let address = document.getElementById('address');
    let country = document.getElementById('country');
    let newsletter = document.getElementById('termes');
    let question = document.getElementById('question');

    if(!firstName.value){
        firstName.style.borderColor = "red"
    }
    
    if(!lastName.value){
        lastName.style.borderColor = "red" 
    }

    if(!email.value){
        email.style.borderColor = "red" 
    }

    if(!gender || gender.length==0){
        document.querySelector('.sexe').style.color = "red" 
    }

    if(!codePostal.value){
        codePostal.style.borderColor = "red" 
    }

    if(!address.value){
        address.style.borderColor = "red" 
    }

    if(!country.value){
        country.style.borderColor = "red" 
    }

    if(!termes.getAttribute('checked')){
        termes.style.borderColor = "red" 
    }

    if(!question.value){
        question.style.borderColor = "red" 
    }

    if(isNaN(codePostal.value)){
        alert('Format "code Postal" non valide')
    }

    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if(!regex.test(String(email.value).toLowerCase())){
        alert('Format "Email" non valide')
    }
}


/*le panier!!!!!!!!!!!!!!!!!!*/
let btnPlusAll = document.querySelectorAll('.btn-act-plus');
let btnMoinsAll = document.querySelectorAll('.btn-act-moins');

btnPlusAll.forEach((btn) => {btn.addEventListener('click', increaseQuantity)});
btnMoinsAll.forEach((btn) => {btn.addEventListener('click', decreaseQuantity)});

totaux()

function increaseQuantity(){
    this.previousElementSibling.value = parseInt(this.previousElementSibling.value) +1;
    totaux();
}

function decreaseQuantity(){
    if(this.nextElementSibling.value >0){
    this.nextElementSibling.value = parseInt(this.nextElementSibling.value) -1;
    totaux();
    }
}



/*Supprimer un produit*/ 
let suppr = document.querySelectorAll('.remove');

for(let i=0; i <suppr.length; i++){
    suppr[i].addEventListener('click', function(){
        suppr[i].parentNode.remove()
        totaux()
    })
}


/*faire le total du panier*/

function totaux(){
    console.log('calcul des totaux')
    let item = document.querySelectorAll('.Cart-Item');
    let sum = 0

    for (let i = 0; i < item.length; i++){
        
        const price = item[i].querySelector('.price').innerHTML
        const qty = item[i].querySelector('.qty').value

        sum += price * qty
        
    }
    if (document.querySelector('.totalamount')){
    document.querySelector('.totalamount').innerHTML = sum + ' €'
    }
}


/*Ouvir l'image coeur en cliquant */

function changeImage(){
    let image = document.getElementById('heart-ic-size');
    //if l'image est un coeur vide alors au click mettre un coeur plein
    if (image.src.match('Coeur-vide')){
        image.src = "images/Coeur-plein.png";
        
    }

    else {
        image.src = "images/Coeur-vide.png";
}
}


/*Le carousel*/

$(document).ready(function(){
    nbr=3;
    p=0;
    container=document.getElementById("container");
    g=document.getElementById("g");
    d=document.getElementById("d");
    container.style.width=(900*nbr)+"px";
    for(i=1;i<=nbr;i++){
        div=document.createElement("div");
        div.className="photo";
        div.style.backgroundImage="url('Carousel/im"+i+".jpg')";
        container.appendChild(div);
    }
    afficherMasquer();
})

g.onclick=function(){
    if(p<0)
        p++;
        container.style.transform="translate("+p*900+"px)";
        container.style.transition="all 0.5s ease";
    afficherMasquer();
}

d.onclick=function(){
    if(p>-nbr+1)
        p--;
        container.style.transform="translate("+p*900+"px)";
        container.style.transition="all 0.5s ease";
    afficherMasquer();
}

/*Cacher le bouto droit quand on arrive au bout du slide et idem pour le gauche */
function afficherMasquer(){
    if(p==-nbr+1)
        d.style.visibility="hidden";
    else
        d.style.visibility="visible";

    if(p==0)
        g.style.visibility="hidden";
    else
        g.style.visibility="visible";
}



/*Le carousel responsive*/

$(document).ready(function(){
    nbrr=3;
    pr=0;
    containerResp=document.getElementById("container-resp");
    gr=document.getElementById("gr");
    dr=document.getElementById("dr");
    containerResp.style.width=(230*nbrr)+"px";
    for(i=1;i<=nbrr;i++){
        divResp=document.createElement("div");
        divResp.className="photo-resp";
        divResp.style.backgroundImage="url('Carousel/im"+i+".jpg')";
        containerResp.appendChild(divResp);
    }
    afficherMasquerr();
})

gr.onclick=function(){
    if(pr<0)
        pr++;
        containerResp.style.transform="translate("+pr*230+"px)";
        containerResp.style.transition="all 0.5s ease";
    afficherMasquerr();
}

dr.onclick=function(){
    if(pr>-nbrr+1)
        pr--;
        containerResp.style.transform="translate("+pr*230+"px)";
        containerResp.style.transition="all 0.5s ease";
    afficherMasquerr();
}

/*Cacher le bouto droit quand on arrive au bout du slide et idem pour le gauche */
function afficherMasquerr(){
    if(pr==-nbrr+1)
        dr.style.visibility="hidden";
    else
        dr.style.visibility="visible";

    if(pr==0)
        gr.style.visibility="hidden";
    else
        gr.style.visibility="visible";
}




