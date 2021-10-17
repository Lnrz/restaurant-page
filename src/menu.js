function generateMenu() {
    
    const contentBox = document.querySelector(".fullWidthHeight");
    const menuBackground = document.createElement("div");
    const firstPage = document.createElement("div");
    const verticalLine = document.createElement("div");
    const secondPage = document.createElement("div");
    const firstPageFirstColumn = document.createElement("div");
    const firstPageSecondColumn = document.createElement("div");
    const firstPageFirstColumnPara = document.createElement("p");
    const firstPageSecondColumnPara = document.createElement("p");
    const secondPageFirstRow = document.createElement("div");
    const horizontalLine = document.createElement("div");
    const secondPageSecondRow = document.createElement("div");
    const secondPageFirstRowFirstColumn = document.createElement("div");
    const secondPageFirstRowSecondColumn = document.createElement("div");
    const secondPageFirstRowFirstColumnPara = document.createElement("p");
    const secondPageFirstRowSecondColumnPara = document.createElement("p");
    const secondPageSecondRowFirstColumn = document.createElement("div");
    const secondPageSecondRowSecondColumn = document.createElement("div");
    const secondPageSecondRowFirstColumnPara = document.createElement("p");
    const secondPageSecondRowSecondColumnPara = document.createElement("p");

    while(contentBox.firstChild) {
        contentBox.firstChild.remove();
    }

    firstPageFirstColumnPara.innerHTML = "Margherita 5€<br>Marinara 4€<br>Diavola 6€<br>4 Formaggi 5,50€<br>Prosciutto e Funghi 5€<br>Calzone 5€<br>Quattro Stagioni 5,50€<br>Ortolana 5€";
    firstPageFirstColumnPara.setAttribute("class", "orderPara");
    firstPageSecondColumnPara.innerHTML = "Diavola 5,50€<br>Napoletana 5,50€<br>Boscaiola 5,50€<br>Bufala 5,50€<br>Primavera 5€<br>Capricciosa 5,50€<br>Sicilana 5€<br>Romana 5€";
    firstPageSecondColumnPara.setAttribute("class", "orderPara");
    firstPageFirstColumn.setAttribute("class", "flexItemDefault");
    firstPageSecondColumn.setAttribute("class", "flexItemDefault");
    firstPage.setAttribute("class", "flexbox flexItemDefault");

    firstPageFirstColumn.appendChild(firstPageFirstColumnPara);
    firstPageSecondColumn.appendChild(firstPageSecondColumnPara);
    firstPage.appendChild(firstPageFirstColumn);
    firstPage.appendChild(firstPageSecondColumn);

    horizontalLine.setAttribute("class", "blackline");

    secondPageFirstRowFirstColumnPara.innerHTML = "Acqua Naturale 1€<br>Acqua Frizzante 1€<br>Coca Cola 3€<br>Tè al limone 2,50€";
    secondPageFirstRowFirstColumnPara.setAttribute("class", "orderPara");
    secondPageFirstRowSecondColumnPara.innerHTML = "Tè alla pesca 2,50€<br> Aranciata 2,50€<br>Birra 3€<br>Vino 3€";
    secondPageFirstRowSecondColumnPara.setAttribute("class", "orderPara");
    secondPageFirstRowFirstColumn.setAttribute("class", "flexItemDefault");
    secondPageFirstRowSecondColumn.setAttribute("class", "flexItemDefault");
    secondPageFirstRow.setAttribute("class", "flexItemDefault flexbox");

    secondPageFirstRowFirstColumn.appendChild(secondPageFirstRowFirstColumnPara);
    secondPageFirstRowSecondColumn.appendChild(secondPageFirstRowSecondColumnPara);
    secondPageFirstRow.appendChild(secondPageFirstRowFirstColumn);
    secondPageFirstRow.appendChild(secondPageFirstRowSecondColumn);

    verticalLine.setAttribute("class", "blacklineVertical");

    secondPageSecondRowFirstColumnPara.innerHTML = "Gelato 3€<br>Crepes 3€<br>Budino 2,50€";
    secondPageSecondRowFirstColumnPara.setAttribute("class", "orderPara");
    secondPageSecondRowSecondColumnPara.innerHTML = "Banana al Cioccolato 4€<br>Tiramisù 3€<br>Fetta di Cheesecake 3€";
    secondPageSecondRowSecondColumnPara.setAttribute("class", "orderPara");
    secondPageSecondRowFirstColumn.setAttribute("class", "flexItemDefault");
    secondPageSecondRowSecondColumn.setAttribute("class", "flexItemDefault");
    secondPageSecondRow.setAttribute("class", "flexItemDefault flexbox");

    secondPageSecondRowFirstColumn.appendChild(secondPageSecondRowFirstColumnPara);
    secondPageSecondRowSecondColumn.appendChild(secondPageSecondRowSecondColumnPara);
    secondPageSecondRow.appendChild(secondPageSecondRowFirstColumn);
    secondPageSecondRow.appendChild(secondPageSecondRowSecondColumn);

    secondPage.setAttribute("class", "flexItemDefault flexbox flexColumn");
    
    secondPage.appendChild(secondPageFirstRow);
    secondPage.appendChild(horizontalLine);
    secondPage.appendChild(secondPageSecondRow);

    menuBackground.setAttribute("class", "flexbox flexItemDefault menuBackground");

    menuBackground.appendChild(firstPage);
    menuBackground.appendChild(verticalLine);
    menuBackground.appendChild(secondPage);

    contentBox.appendChild(menuBackground);
}

export default generateMenu;