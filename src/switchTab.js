import generateHomepage from "./homepage";
import generateStaff from "./staff";
import generateMenu from "./menu";

function changeTab(event) {

    const prevSelec = document.querySelector(".selected");
    let nowSelec = event.target;

    prevSelec.classList.remove("selected");
    prevSelec.addEventListener("click", changeTab, {once: true});

    nowSelec.classList.add("selected");
    nowSelec = nowSelec.getAttribute("data-switch");

    if (nowSelec == "home") {
        generateHomepage();
    } else if (nowSelec == "menu") {
        generateMenu();
    } else if (nowSelec == "staff") {
        generateStaff();
    }
}

function addEventsToTabs() {

    document.querySelectorAll("nav img")
        .forEach(x => {
            if (x.getAttribute("class") != "selected") {
                x.addEventListener("click", changeTab, {once: true});
            }
        })
    ;
}

export default addEventsToTabs;