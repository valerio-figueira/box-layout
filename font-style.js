const main = document.querySelector("main");

const newArticle = document.createElement("article");
main.append(newArticle);

const article = document.querySelectorAll("article");

const btn = document.createElement("button");
const clearBtn = document.createElement("button");
btn.setAttribute("type", "button");
btn.textContent = "Add";
clearBtn.setAttribute("type", "button");
clearBtn.textContent = "Clear";
clearBtn.style.marginLeft = "5px";

article[0].appendChild(btn);
article[0].appendChild(clearBtn);
article[1].textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quis harum aspernatur corporis nihil et maxime exercitationem quasi facilis, sint dicta dolores officia dolore quaerat optio repellat, fuga vel quo.";


btn.addEventListener("click", add);
clearBtn.addEventListener("click", clearArticle);

function add(){
    const newArticle = document.createElement("article");
    main.appendChild(newArticle);
    newArticle.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quis harum aspernatur corporis nihil et maxime exercitationem quasi facilis, sint dicta dolores officia dolore quaerat optio repellat, fuga vel quo.";
    addStyle();
}

function clearArticle(){
    for(let i = 1; i < main.childNodes.length; i++){
        article[i].textContent = null;
    }
}

for(let art of article){
    art.style.padding = "15px";
    art.style.margin = "5px";
    art.style.border = "1px solid gray"
}

function addStyle(){
    for(let art of article){
        art.style.padding = "15px";
        art.style.margin = "10px";
        art.style.border = "1px solid gray"
    }
}


const allBtn = document.querySelectorAll("button");
for(let btn of allBtn){
    btn.style.padding = "10px";
}