// aqui eu consigo importar esse arquivo porque fizemos
// o yarn install do sortable.js
import Sortable from "sortablejs";

const list = document.querySelector("#results");

const initSortable = () => {
  Sortable.create(list, {
    ghostClass: "ghost",
    animation: 150,
    onEnd: (event) => {
      alert(`${event.oldIndex} moved to ${event.newIndex}`);
    }
  });
};

// esse codigo pode ser acessado da forma que ele está aqui?
// Não - precisamos chamar nosso codigo que está no INDEX.JS
export { initSortable };
