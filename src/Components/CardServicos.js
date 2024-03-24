
class CardServicos extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card border-0 rounded-4 shadow");

    const cardHeader = document.createElement("div");
    cardHeader.setAttribute("class", "card-header bg-verde-principal-2 text-white");

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body p-4");

    const cardBodyTitle = document.createElement("div");
    cardBodyTitle.setAttribute("class", "text-center");

    const icon = document.createElement("i");
    icon.setAttribute("class", `${this.getAttribute("icon-class")} fa-4x texto-verde-principal-1 p-3 bg-cinza-azul-50 rounded-4`);

    const title = document.createElement("h4");
    title.setAttribute("class", `card-title fonte-primaria fw-bold mb-0`);
    title.textContent = this.getAttribute("title");

    const description = document.createElement("p");
    description.setAttribute("class", `card-text texto-justificado fonte-secundaria texto-cinza py-4 mb-0`);
    description.textContent = this.getAttribute("description");

    const divButton = document.createElement("div");
    divButton.setAttribute("class", "d-flex justify-content-center pt-2");

    const button = document.createElement("button");
    button.setAttribute("class", "btn btn-lg border-verde-principal-2 texto-verde-principal-2 fw-semibold rounded-4");
    button.role = "button";
    button.href = "#!";
    button.textContent = "Ver Detalhes";
    
    cardBodyTitle.appendChild(icon);
    cardHeader.appendChild(title);
    cardBody.appendChild(cardBodyTitle);
    cardBody.appendChild(description);
    divButton.appendChild(button);
    cardBody.appendChild(divButton);

    const cardFooter = document.createElement("div");
    cardFooter.setAttribute("class", "card-footer bg-verde-principal-2");

    componentRoot.appendChild(cardHeader);
    componentRoot.appendChild(cardBody);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
      @import url('bootstrap/css/bootstrap.min.css');
      @import url('font-awesome/css/all.min.css');
      @import url('font-awesome/css/fontawesome.min.css');
      @import url('css/componentes/cores-e-fontes.css');

      .card {
        max-width: 350px;
      }
      
      .card .card-header {
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
      }

      .card button:hover {
        background-color: var(--verde-principal-2);
        color: white;
      }
      
      .card .card-footer {
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
      }
    `;

    return style;
  }
}

customElements.define("card-servicos", CardServicos);
