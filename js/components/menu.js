const menuTemplate = document.createElement('template');

menuTemplate.innerHTML = `
  <link rel="stylesheet" href="../../css/style.css">
  <link rel="stylesheet" href="../../css/bootstrap.min.css">

            <nav class="row align-items-center">
                <ul>
                    <li class="col-12 col-md-1">
                        <a href="/index.html">
                            Inicio
                        </a>
                    </li>
                    <li class="col-12 col-md-1">
                        <a href="/mateiv.html">
                            Mate IV
                        </a>
                    </li>
                    <li class="col-12 col-md-1">
                        <a href="/matev.html">
                            Mate V
                        </a>
                    </li>
                    <li class="col-12 col-md-1">
                        <a href="/matevi-12.html">
                            Mate VI A1y2
                        </a>
                    </li>
                    <li class="col-12 col-md-1">
                        <a href="/matevi-3.html">
                            Mate VI A3
                        </a>
                    </li>
                    <li class="col-12 col-md-1">
                        <a href="/matevi-4.html">
                            Mate VI A4
                        </a>
                    </li>
                    <li class="col-12 col-md-1">
                        <a href="/optativas.html">
                           Optativas
                       </a>
                    </li>
                </ul>
            </nav>
`;

class Menu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(menuTemplate.content);
  }
}

customElements.define('menu-component', Menu);