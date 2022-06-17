'use strict'
import MainConponents from "./components/MainComponents.js"
import HelloWorld from "./components/HelloWorld.js"
import Input from "./components/InputArea.js"
import Container from "./components/container.js"


window.addEventListener('load', e => {
    document.getElementById('hellobtn').addEventListener('click', e => {
        const newtxt = document.getElementById('hellotxt').value
        document.querySelector('hello-world').setAttribute('data-name',newtxt)
    })
})