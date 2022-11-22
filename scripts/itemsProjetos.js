//const item = document.querySelectorAll('.projetos_items');

function focoItemProjeto (item) {
    let itemProjeto = document.getElementById(item);
    console.log("item: " + itemProjeto);
    item.classList.remove("projetos_items");
    item.classList.add("projetos_items_foco");

}