'use strict'
import HelloWorld from "./components/HelloWorld.js"

window.addEventListener('load', e => {
    document.getElementById('hellobtn').addEventListener('click', e => {
        const newtxt = document.getElementById('hellotxt').value
        document.querySelector('hello-world').setAttribute('data-name',newtxt)
    })
})