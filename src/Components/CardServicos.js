
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

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body p-4");

    const divIcon = document.createElement("div");
    divIcon.setAttribute("class", "text-center bg-verde-principal-2 icon-container");

    const icon = document.createElement("i");
    icon.setAttribute("class", `${this.getAttribute("icon-class")} fa-3x text-white py-2 rounded-4`);

    const title = document.createElement("h5");
    title.setAttribute("class", `card-title fonte-primaria fw-bold pt-2 mb-0`);
    title.textContent = this.getAttribute("title");

    const description = document.createElement("p");
    description.setAttribute("class", `card-text texto-justificado fonte-secundaria texto-cinza pt-1 pb-4 mb-0`);
    description.textContent = this.getAttribute("description");

    const divButton = document.createElement("div");
    divButton.setAttribute("class", "d-flex justify-content-center");

    const button = document.createElement("button");
    button.setAttribute("class", "btn border-verde-principal-2 texto-verde-principal-2 fw-semibold rounded-4");
    button.role = "button";
    button.href = "#!";
    button.textContent = "Ver Detalhes";
    
    divIcon.appendChild(icon);
    cardBody.appendChild(title);
    cardBody.appendChild(description);
    divButton.appendChild(button);
    cardBody.appendChild(divButton);

    componentRoot.appendChild(divIcon);
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

      .card .icon-container {
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
