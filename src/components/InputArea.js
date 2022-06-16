export default class InputArea extends HTMLElement {
  /**
   * Web ComponentがDocument Object Modelに追加された時に呼び出され、必要なレンダリングをすべて実行します。
   */
  connectedCallback() {
    this.innerHTML = `<input type="text" name="" id="hellotxt">
                      <input type="button" value="change" id="hellobtn">`
  }
}

customElements.define('input-area',InputArea)