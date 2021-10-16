function generateHomepage() {

    const contentBox = document.querySelector(".fullWidthHeight");
    const pizza = document.createElement("img");
    const para = document.createElement("p");

    while(contentBox.firstChild) {
        contentBox.firstChild.remove();
    }

    pizza.setAttribute("src", "../images/pizzaMargherita.png");
    pizza.setAttribute("alt", "Pizza Margherita");

    para.innerHTML = "Ristorante italiano specializzato nella produzione di buonissime pizze.<br>Il loro gusto e la lora fragranza vi manderanno al settimo cielo.<br>Aperto nei primi anni 80, il ristorante fin da subito ha riscosso grande successo sia tra i più piccoli che tra i più grandi.<br>Ad oggi rimane l'unico ristorante di Mirabilandia ad avere ottenuto il premio di 'migliore ristorante mai premiato'.</p>";

    contentBox.appendChild(pizza);
    contentBox.appendChild(para);
}

export default generateHomepage;