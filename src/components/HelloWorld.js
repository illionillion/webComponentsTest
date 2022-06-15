export default class HelloWorld extends HTMLElement { // HTML継承

  /**
   * コンストラクター
   */
  constructor (){
    super() // スーパークラスのコンストラクタ呼び出し
    if(this.dataset.name === '') this.dataset.name = 'World'
  }
  
  /**
   * ブラウザが監視する属性名の配列を返す
   */
  static get observedAttributes(){
    return ['data-name']
  }
  
  /**
   * 属性が設定・変更されるたびに呼び出されます。HTMLで定義したものは即座に渡されますが、JavaScriptによりそれを修正することができます。
   * @param {*} property 
   * @param {*} oldValue 
   * @param {*} newValue 
   * @returns 
   */
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[ property ] = newValue;
    this.connectedCallback() //再レンダリング
  }
  
  /**
   * Web ComponentがDocument Object Modelに追加された時に呼び出され、必要なレンダリングをすべて実行します。
   */
  connectedCallback() {
    this.innerHTML = `<h1>Hello ${this.dataset.name}!</h1>`
  }
    
}

customElements.define('hello-world', HelloWorld) // 要素定義