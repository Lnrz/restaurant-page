function firstLoadPage() {

    const header = document.createElement("header");
    const headerDiv = document.createElement("div");
    const headerImg = document.createElement("img");

    headerDiv.innerText = "Se'mangia";
    headerImg.setAttribute("src", "../images/forkLogo.png");
    headerImg.setAttribute("alt", "Restaurant Logo");
    header.setAttribute("class", "flexItemDefault flexbox flexboxCenterMainAxis");
    
    header.appendChild(headerDiv);
    header.appendChild(headerImg);

    const footer = document.createElement("footer");
    const footerFirstDiv = document.createElement("div");
    const footerSecondDiv = document.createElement("div");
    const footerThirdDiv = document.createElement("div");

    footerFirstDiv.innerHTML = "N.Tel: +abc0abc0abcabv<br>Fax: 11aa11aa11aa11aa";
    footerSecondDiv.innerText = "Premiato come miglior ristorante mai premiato!";
    footerThirdDiv.innerHTML = "Mirabilandia<br>Via del Coniglio Magico 91/A/B^(2)";
    footer.setAttribute("class", "flexItemDefault flexboxCenterCrossAxis flexbox flexboxSpacedBetweenMainAxis");
    
    footer.appendChild(footerFirstDiv);
    footer.appendChild(footerSecondDiv);
    footer.appendChild(footerThirdDiv);

    const baseDiv = document.createElement("div");
    const navDiv = document.createElement("div");
    const nav = document.createElement("nav");
    const navFirstImg = document.createElement("img");
    const navFirstBlackline = document.createElement("div");
    const navSecondImg = document.createElement("img");
    const navSecondBlackline = document.createElement("div");
    const navThirdImg = document.createElement("img");
    const dynamicDiv = document.createElement("div");

    navFirstImg.setAttribute("src", "../images/homeIcon.png");
    navFirstImg.setAttribute("alt", "Home Icon");
    navFirstImg.setAttribute("class", "selected");
    navFirstBlackline.setAttribute("class", "blackline");
    navSecondImg.setAttribute("src", "../images/menuIcon.png");
    navSecondImg.setAttribute("alt", "Menu Icon");
    navSecondBlackline.setAttribute("class", "blackline");
    navThirdImg.setAttribute("src", "../images/staffIcon.png");
    navThirdImg.setAttribute("alt", "Staff Icon");
    nav.setAttribute("class", "flexbox flexboxSpaceEvenlyMainAxis flexColumn");
    dynamicDiv.setAttribute("class", "fullWidthHeight flexbox flexboxCenterCrossAxis flexboxCenterMainAxis");
    navDiv.setAttribute("class", "flexItemDefault relative");
    baseDiv.setAttribute("class", "flexItemLarger flexbox flexboxCenterCrossAxis");

    nav.appendChild(navFirstImg);
    nav.appendChild(navFirstBlackline);
    nav.appendChild(navSecondImg);
    nav.appendChild(navSecondBlackline);
    nav.appendChild(navThirdImg);
    navDiv.appendChild(nav);
    navDiv.appendChild(dynamicDiv);
    baseDiv.appendChild(navDiv);

    const content = document.querySelector("#content");

    content.appendChild(header);
    content.appendChild(baseDiv);
    content.appendChild(footer);

    //chiama la funzione che crea la homepage
}

export default firstLoadPage;