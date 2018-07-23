
// var body = document.getElementsByTagName('body');
// body.innerHTML += '<p>Hello World!</p>';
// // 



// console.log('hasdfi');


// console.log(document.getElementsByTagName('body'));
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './scss/styles.scss';
import App from './components/App.vue';


var vue = require('vue');
//as/asdf
var app = new Vue(  { 
	el: '#app',
	components: { App },
	template: '<App/>'
 });
//https://codesandbox.io/s/o29j95wx9


//next step:::::   https://github.com/anthillsolutions/api-skel

/*
## Webpack notes

- shit loads of errors are caused by it trying to bundle all the node modules
- use target:node and the NodeExternals plugin
- also this happens if you try to require the lib/boot inside /src/index.js

- entry point is not the server, you are expected to have a source folder which contains you code you will edit
- the server is a kind of set up file and you woulnd't change it on the fly

- package.json contains a 'main' attr which I have put server.js for  (check what is this )

 
 */