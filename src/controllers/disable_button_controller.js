import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["button", "link"];
  connect() {
    // se fizemos um console log aqui nesse controller, aonde
    // essa msg vai aparecer? Agora sabemos que nosso controller
    // está conectado.
    console.log("Hello from our first Stimulus controller");
  }

  disable() {
    // this se refere ao elemento onde nosso data
    // controller se encontra. o this se refere ao controller
    // o this.element se refere ao elemento em que o controller
    // está, no nosso caso o <button>
    // this.element.setAttribute('disabled', "");
    // this.element.removeAttribute('disabled');
    // this.element.innerHTML = 'HELLO!';
    this.buttonTarget.innerText = "Bingo!"
    this.buttonTarget.setAttribute("disabled", "")
    this.linkTarget.classList.remove("d-none")

  }

  reset() {
  //   // - Quando carregamos a página pela primeira vez, o link de redefinição deve estar oculto
  //   // - Quando desabilitamos o botão, o link de redefinição deve aparecer
  //   // - Quando clicamos nele, ele deve redefinir o botão e desaparecer
    this.buttonTarget.innerText = "Click me!"
    this.buttonTarget.removeAttribute("disabled")
    this.linkTarget.classList.add("d-none")
  }
}
