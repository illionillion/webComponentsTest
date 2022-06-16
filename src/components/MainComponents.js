
export default class MainComponents extends HTMLElement{

  connectedCallback() {
    this.innerHTML = `<hello-world data-name = 'JavaScript'></hello-world>
                      <input-area></input-area>`
  }

} 

customElements.define('main-components',MainComponents)