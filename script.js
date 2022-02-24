const background = document.querySelector(".background");

document.addEventListener("mousemove", (e) => {
  background.style.backgroundPositionX = e.clientX/10- window.innerWidth*.1 + "px";
  background.style.backgroundPositionY = e.clientY/10- window.innerHeight*.1 + "px";
});

function openTab(e, tab, cl, target){
    //make all content inactive
    let tabs = Array.from(document.getElementsByClassName(target));
    tabs.forEach(element => {
        element.style.display = "none";
    });

    let buttons = Array.from(document.getElementsByClassName(cl));
    buttons.forEach(element => {
      element.classList.remove('active')
    });

    e.classList.add('active');
    //make selected content active
    document.getElementById(tab).style.display = "flex";
}

let firstTab = Array.from(document.getElementsByClassName('tabselectmain'))[0];
openTab(firstTab, 'theme', 'tabselectmain', 'main');