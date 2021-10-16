function generateStaff() {
    
    const contentBox = document.querySelector(".fullWidthHeight");
    const littleDiv = document.createElement("div");
    const largerDiv1 = document.createElement("div");
    const largerDiv2 = document.createElement("div");
    const largerDiv3 = document.createElement("div");
    const ownerDiv = document.createElement("div");
    const chefDiv = document.createElement("div");
    const sousChefDiv = document.createElement("div");
    const ownerImg = document.createElement("img");
    const chefImg = document.createElement("img");
    const sousChefImg = document.createElement("img");
    const ownerPara1 = document.createElement("p");
    const ownerPara2 = document.createElement("p");
    const chefPara1 = document.createElement("p");
    const chefPara2 = document.createElement("p");
    const sousChefPara1 = document.createElement("p");
    const sousChefPara2 = document.createElement("p");

    while(contentBox.firstChild) {
        contentBox.firstChild.remove();
    }

    littleDiv.setAttribute("class", "flexItemDefault");

    ownerImg.setAttribute("src", "../images/restaurantOwner.jpg");+
    ownerImg.setAttribute("alt", "Restaurant Owner");
    ownerPara1.innerHTML = '<strong>Michele Sonafava</strong>, proprietario del ristorante.<br>Nato in una famiglia di camorristi, la tracotanza di suo padre gli ha permesso di aprire il locale.<br>Sopravvissuto a molte sparatorie contro la gang avversaria "Sonapippa", ha deciso di aprire il ristorante per vivere una vita più tranquilla e meno sanguinosa.';
    ownerPara1.setAttribute("class", "flexItemAuto");
    ownerPara2.innerHTML = '"Fin da piccolo aprire una pizzeria è stato il mio sogno. Da quando ero giovine assistevo a esecuzioni di membri della gang "Sonapippa" e mi affascinava vedere come ogni volta usciva dal loro corpo quella sostanza simile a pomodoro!"';
    ownerPara2.setAttribute("class", "flexboxItemAuto");
    ownerDiv.setAttribute("class", "card flexbox flexboxWrap");
    largerDiv1.setAttribute("class", "flexItemLittleLarger fullHeight flexbox flexboxCenterCrossAxis flexboxCenterMainAxis");
    ownerDiv.appendChild(ownerImg);
    ownerDiv.appendChild(ownerPara1);
    ownerDiv.appendChild(ownerPara2);
    largerDiv1.appendChild(ownerDiv);

    chefImg.setAttribute("src", "../images/restaurantChef.jpg");
    chefImg.setAttribute("alt", "Restaurant Chef");
    chefPara1.setAttribute("class", "flexItemAuto");
    chefPara1.innerHTML = "<strong>Margherito Monellino</strong>, chef capo del ristorante.<br>Amico inseparabile di Michele, lo ha aiutato in molte sparatorie a cavarsela.<br>Ha deciso di posare il suo fucile d'assalto per dedicarsi all'arte culinaria.";
    chefPara2.setAttribute("class", "flexItemAuto");
    chefPara2.innerHTML = `"Quando Michelino mi ha detto che aveva intenzione di aprire un ristorante non ho potuto non supportarlo nella sua impresa. Ho incominciato anche a studiare l'arte del pizzaiuolo per aiutarlo. Ed ora eccomi qui, sono il pizzaiuolo migliore del mondo!"`;
    chefDiv.setAttribute("class", "card flexbox flexboxWrap");
    largerDiv2.setAttribute("class", "flexItemLittleLarger fullHeight flexbox flexboxCenterCrossAxis flexboxCenterMainAxis");
    chefDiv.appendChild(chefImg);
    chefDiv.appendChild(chefPara1);
    chefDiv.appendChild(chefPara2);
    largerDiv2.appendChild(chefDiv);

    sousChefImg.setAttribute("src", "../images/restaurantSousChef.jpg");
    sousChefImg.setAttribute("alt", "Restaurant Sous Chef");
    sousChefPara1.setAttribute("class", "flexItemAuto");
    sousChefPara1.innerHTML = `<strong>Marione Pippasona</strong>, aiutocuoco del ristorante.<br>Non si conosce la sua vera identità dato che la sua carta d'identità è risultata falsa dopo essere stata sottoposta a vari test.<br>L'unica cosa che si sa è che è il migliore assistente di Margherito Monellino.`;
    sousChefPara2.setAttribute("class", "flexItemAuto");
    sousChefPara2.innerHTML = `"Ho intenzione di lasciare il lavoro una volta fatto quel che devo fare, ora scusate..."<br>*si allontana a passo svelto*`;
    sousChefDiv.setAttribute("class", "card flexbox flexboxWrap");
    largerDiv3.setAttribute("class", "flexItemLittleLarger fullHeight flexbox flexboxCenterCrossAxis flexboxCenterMainAxis");
    sousChefDiv.appendChild(sousChefImg);
    sousChefDiv.appendChild(sousChefPara1);
    sousChefDiv.appendChild(sousChefPara2);
    largerDiv3.appendChild(sousChefDiv);

    contentBox.appendChild(littleDiv);
    contentBox.appendChild(largerDiv1);
    contentBox.appendChild(largerDiv2);
    contentBox.appendChild(largerDiv3);
}

export default generateStaff;