(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2w3n":function(n){n.exports={red:"red__2y1B_",orange:"orange__dD2kx",yellow:"yellow__OEpwl",lime:"lime__CVe41",cyan:"cyan__26ZAg",blue:"blue__LO7Xm",magenta:"magenta__1Akee",example:"example__2PzAa"}},hkqw:function(n,e,t){"use strict";t.r(e),function(n){function l(){var n=h(["\n                        left 10\n                        right 10\n                    "]);return l=function(){return n},n}function r(){var n=h(["\n                        forward 10\n                        back 10\n                    "]);return r=function(){return n},n}function i(){var n=h(["\n                        to-report <nome> [var1 var2 var3]\n                            <blocco di codice>\n                            report <restituito>\n                        end\n                    "]);return i=function(){return n},n}function a(){var n=h(["\n                        to <nome> [var1 var2 var3]\n                            <blocco di codice>\n                        end\n                    "]);return a=function(){return n},n}function u(){var n=h(["\n                        to <nome>\n                            <blocco di codice>\n                        end\n                    "]);return u=function(){return n},n}function o(){var n=h(["\n                        ask <bersaglio> [\n                            <blocco di codice>\n                        ]\n                    "]);return o=function(){return n},n}function c(){var n=h(["set <nome> <valore>"]);return c=function(){return n},n}function s(){var n=h(["let <nome> <valore>"]);return s=function(){return n},n}function p(){var n=h(["links-own [var1 var2 var3]"]);return p=function(){return n},n}function g(){var n=h(["patches-own [var1 var2 var3]"]);return g=function(){return n},n}function f(){var n=h(["sprout"]);return f=function(){return n},n}function d(){var n=h(["hatch"]);return d=function(){return n},n}function v(){var n=h(["create"]);return v=function(){return n},n}function b(){var n=h(["<prefisso>-<breed> <quantità>"]);return b=function(){return n},n}function m(){var n=h(["breed [<plurale> <singolare>]"]);return m=function(){return n},n}function h(n,e){return e||(e=n.slice(0)),n.raw=e,n}var w=t("mbOI"),_=t("ke5e"),k=String.raw;e.default=function(){return n("div",null,n("h1",null,n("a",{href:"/apprendimento"},"Apprendimento"),": NetLogo"),n(w.s,{title:"Agenti di NetLogo"},n(w.r,{title:"Observer"},n("p",null,"L'",n("b",null,"utente")," di NetLogo, che vive nel contesto globale e dà ordini agli altri agenti.")),n(w.r,{title:"Turtle"},n("p",null,"Entità che possono ",n("b",null,"muoversi")," per il mondo."),n(_.a,null,"Sono più o meno come le ",n("a",{href:"https://www.computercraft.info/wiki/Turtle"},"Turtle di Computercraft"),"!"),n("p",null,"Possono essere di una ",n("i",null,"breed")," (razza) specifica, definite con:"),n(w.f,{language:"lisp"},k(m())),n(_.a,null,"Le breed sono praticamente sottoclassi di turtle.")),n(w.r,{title:"Patch"},n("p",null,"I ",n("b",null,"quadratini")," del mondo. Possono essere di vari colori e avere varie proprietà."),n(_.a,null,"...possiamo dire che questi siano i blocchi di Minecraft?")),n(w.r,{title:"Link"},n("p",null,n("b",null,"Collegamenti")," tra due turtle."))),n(w.s,{title:"Creazione di agenti"},n(w.r,{title:"Observer"},n("p",null,"L'observer viene creato automaticamente all'apertura della simulazione.")),n(w.r,{title:"Turtle"},n("p",null,"Nuove turtle possono essere create con il comando:"),n(w.f,{language:"lisp"},k(b())),n("p",null,"Dove prefisso varia in base al contesto attuale:"),n("table",null,n("thead",null,n("tr",null,n("th",null,"Contesto"),n("th",null,"Prefisso"))),n("tbody",null,n("tr",null,n("td",null,"Observer"),n("td",null,n(w.f,{language:"lisp"},k(v())))),n("tr",null,n("td",null,"Turtle"),n("td",null,n(w.f,{language:"lisp"},k(d())))),n("tr",null,n("td",null,"Patch"),n("td",null,n(w.f,{language:"lisp"},k(f())))))))),n(w.s,{title:"Variabili"},n(w.r,{title:"Observer"},n("p",null,"All'inizio del codice:"),n(w.f,{language:"lisp"},"globals [var1 var2 var3]"),n(_.a,null,"Sono a tutti gli effetti variabili globali.")),n(w.r,{title:"Turtle"},n("p",null,"Aggiungi proprietà a tutte le turtle:"),n(w.f,{language:"lisp"},"turtles-own [var1 var2 var3]"),n("p",null,"Aggiungi proprietà alle turtle di un breed:"),n(w.f,{language:"lisp"},"<breed>-own [var1 var2 var3]")),n(w.r,{title:"Patch"},n("p",null,"Aggiungi proprietà alle patch:"),n(w.f,{language:"lisp"},k(g()))),n(w.r,{title:"Link"},n("p",null,"Aggiungi proprietà ai link:"),n(w.f,{language:"lisp"},k(p())))),n(w.s,null,n(w.r,{title:"Locali"},n("p",null,"Si possono creare con:"),n(w.f,{language:"lisp"},k(s()))),n(w.r,{title:"Set"},n("p",null,"Si può impostare il valore di una variabile con:"),n(w.f,{language:"lisp"},k(c())))),n(w.s,{title:"Blocchi di codice"},n(w.r,{title:"Cambi di contesto"},n("p",null,"Per cambiare contesto:"),n(w.f,{language:"lisp"},k(o())),n("p",null,"Nel caso ci siano più bersagli, verranno eseguiti uno")),n(w.r,{title:"Commands"},n("p",null,"Funzioni che non restituiscono nulla:"),n(w.f,{language:"lisp"},k(u())),n("p",null,"Con argomenti:"),n(w.f,{language:"lisp"},k(a()))),n(w.r,{title:"Reporter"},n("p",null,"Funzioni che restituiscono un valore:"),n(w.f,{language:"lisp"},k(i())))),n(w.s,{title:"Comandi per turtle"},n(w.r,{title:"Avanti"},n("p",null,"Muoviti di 10 unità:"),n(w.f,{language:"lisp"},k(r()))),n(w.r,{title:"Ruota"},n("p",null,"Ruota di 10 gradi:"),n(w.f,{language:"lisp"},k(l())))))}}.call(this,t("hosL").h)},ke5e:function(n,e,t){"use strict";(function(n){var l=t("2w3n"),r=t.n(l);e.a=function(e){return n("div",{class:r.a.example},e.children)}}).call(this,t("hosL").h)}}]);
//# sourceMappingURL=route-NetLogo.chunk.98c52.js.map