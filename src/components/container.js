export default class Container extends HTMLElement {
    constructor(){
        super()
        console.log(this.innerHTML); //ネストした中身が見れる
    }
    connectedCallback() {
        console.log(this.innerHTML);
        // return( // できない
        //     <>
        //     Hello
        //     </>
        // )
        this.innerHTML = `Hello` // できる
    }
}

customElements.define('container-area',Container)
