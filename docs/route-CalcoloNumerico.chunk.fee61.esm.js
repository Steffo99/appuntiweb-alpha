(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3duz":function(e){e.exports={example:"example__9acWs"}},"8uYk":function(e){e.exports={box:"box__3cKyY",default:"default__v-emJ",red:"red__339Cz",orange:"orange__24_8v",yellow:"yellow__1Jo9W",lime:"lime__34yV5",cyan:"cyan__3RqLr",blue:"blue__13Wnj",magenta:"magenta__2tkzq"}},JESo:function(e){e.exports={inline:"inline__1yl8V",block:"block__fPiiB"}},KN5E:function(e){e.exports={todo:"todo__2IWIS"}},OPqz:function(e,i,n){"use strict";(function(e){var l=n("TWV3"),t=n("hosL");i.a=function(i){return e(t.Fragment,null,e("h2",null,i.title),e(l.a,null,i.children))}}).call(this,n("hosL").h)},OmdA:function(e){e.exports={title:"title__3ZVpg",contents:"contents__20_NI"}},PGF6:function(e,i,n){"use strict";var l=n("hosL");i.a=Object(l.createContext)(null)},Q7TX:function(e,i,n){"use strict";(function(e){n.d(i,"a",(function(){return s}));var l=n("JESo"),t=n.n(l),o=n("QRet"),a=n("8CDw"),r=n("wQ73"),u=n("PGF6");const s=Object.freeze({INLINE:t.a.inline,BLOCK:t.a.block});i.b=function(i){let n,l,c=Object(o.b)(a.a),d=Object(o.b)(r.a),p=Object(o.b)(u.a);return n=void 0===i.inline?d:i.inline,l=void 0===i.display?null===p?s.INLINE:p:i.display,e("img",n?{src:`https://latex.codecogs.com/svg.latex?\\inline {\\color{${c}} ${i.children} }`,alt:i.children,title:i.children,class:t.a.latex+" "+l}:{src:`https://latex.codecogs.com/svg.latex?{\\color{${c}} ${i.children} }`,alt:i.children,title:i.children,class:t.a.latex+" "+l})}}).call(this,n("hosL").h)},QNda:function(e,i,n){"use strict";(function(e){n.d(i,"a",(function(){return a}));var l=n("hosL"),t=n("e8JA"),o=n.n(t);class a extends l.Component{constructor(){super(),this.state={now:Date.now()},this.timer=null}componentDidMount(){this.timer=setInterval(()=>{this.setState({now:Date.now()})},1e3)}componentWillUnmount(){null!==this.timer&&clearInterval(this.timer)}render(){let i="Unknown date",n=o.a.timer,l={milliseconds:"?",seconds:"?",minutes:"?",hours:"?",days:"?"};if(this.props.to){i=new Date(this.props.to);let e=i-this.state.now;e>0?l={milliseconds:e%1e3,seconds:Math.floor(e/1e3)%60,minutes:Math.floor(e/6e4)%60,hours:Math.floor(e/36e5)%24,days:Math.floor(e/864e5)}:(l={milliseconds:0,seconds:0,minutes:0,hours:0,days:0},n+=" "+o.a.expired)}else n+=" "+o.a.unknown;return e("div",{class:n,title:i},e("div",{class:o.a.days+" "+o.a.count},l.days),e("div",{className:o.a.days+" "+o.a.text},"giorni"),e("div",{class:o.a.hours+" "+o.a.count},l.hours),e("div",{className:o.a.hours+" "+o.a.text},"ore"),e("div",{class:o.a.minutes+" "+o.a.count},l.minutes),e("div",{className:o.a.minutes+" "+o.a.text},"minuti"),e("div",{class:o.a.seconds+" "+o.a.count},l.seconds),e("div",{class:o.a.seconds+" "+o.a.text},"secondi"))}}}).call(this,n("hosL").h)},QRet:function(e,i,n){"use strict";function l(e,i){E.options.__h&&E.options.__h(x,e,L||i),L=0;var n=x.__H||(x.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function t(e){return L=1,o(b,e)}function o(e,i,n){var t=l(g++,2);return t.t=e,t.__c||(t.__c=x,t.__=[n?n(i):b(void 0,i),function(e){var i=t.t(t.__[0],e);t.__[0]!==i&&(t.__[0]=i,t.__c.setState({}))}]),t.__}function a(e,i){var n=l(g++,3);!E.options.__s&&v(n.__H,i)&&(n.__=e,n.__H=i,x.__H.__h.push(n))}function r(e,i){var n=l(g++,4);!E.options.__s&&v(n.__H,i)&&(n.__=e,n.__H=i,x.__h.push(n))}function u(e){return L=5,c((function(){return{current:e}}),[])}function s(e,i,n){L=6,r((function(){"function"==typeof e?e(i()):e&&(e.current=i())}),null==n?n:n.concat(e))}function c(e,i){var n=l(g++,7);return v(n.__H,i)?(n.__H=i,n.__h=e,n.__=e()):n.__}function d(e,i){return L=8,c((function(){return e}),i)}function p(e){var i=x.context[e.__c],n=l(g++,9);return n.__c=e,i?(null==n.__&&(n.__=!0,i.sub(x)),i.props.value):e.__}function _(e,i){E.options.useDebugValue&&E.options.useDebugValue(i?i(e):e)}function m(){y.some((function(e){if(e.__P)try{e.__H.__h.forEach(f),e.__H.__h.forEach(h),e.__H.__h=[]}catch(i){return e.__H.__h=[],E.options.__e(i,e.__v),!0}})),y=[]}function f(e){"function"==typeof e.u&&e.u()}function h(e){e.u=e.__()}function v(e,i){return!e||i.some((function(i,n){return i!==e[n]}))}function b(e,i){return"function"==typeof i?i(e):i}n.d(i,"j",(function(){return t})),n.d(i,"h",(function(){return o})),n.d(i,"d",(function(){return a})),n.d(i,"f",(function(){return r})),n.d(i,"i",(function(){return u})),n.d(i,"e",(function(){return s})),n.d(i,"g",(function(){return c})),n.d(i,"a",(function(){return d})),n.d(i,"b",(function(){return p})),n.d(i,"c",(function(){return _}));var g,x,z,E=n("hosL"),L=0,y=[],V=E.options.__r,w=E.options.diffed,A=E.options.__c,N=E.options.unmount;E.options.__r=function(e){V&&V(e),g=0;var i=(x=e.__c).__H;i&&(i.__h.forEach(f),i.__h.forEach(h),i.__h=[])},E.options.diffed=function(e){w&&w(e);var i=e.__c;i&&i.__H&&i.__H.__h.length&&(1!==y.push(i)&&z===E.options.requestAnimationFrame||((z=E.options.requestAnimationFrame)||function(e){var i,n=function(){clearTimeout(l),cancelAnimationFrame(i),setTimeout(e)},l=setTimeout(n,100);"undefined"!=typeof window&&(i=requestAnimationFrame(n))})(m))},E.options.__c=function(e,i){i.some((function(e){try{e.__h.forEach(f),e.__h=e.__h.filter((function(e){return!e.__||h(e)}))}catch(n){i.some((function(e){e.__h&&(e.__h=[])})),i=[],E.options.__e(n,e.__v)}})),A&&A(e,i)},E.options.unmount=function(e){N&&N(e);var i=e.__c;if(i&&i.__H)try{i.__H.__.forEach(f)}catch(e){E.options.__e(e,i.__v)}}},RMzO:function(e,i,n){"use strict";n("KN5E"),i.a=function(){return null}},TWV3:function(e,i,n){"use strict";(function(e){var l=n("htlC"),t=n.n(l);i.a=function(i){let n;return n=Array.isArray(i.children)?i.children.map(i=>e("div",{class:t.a.splitchild},i)):e("div",{class:t.a.splitchild},i.children),e("div",{class:t.a.split},e("div",{class:t.a.splitparent},n))}}).call(this,n("hosL").h)},Wxxq:function(e,i,n){"use strict";(function(e){var l=n("3duz"),t=n.n(l);n("hosL"),i.a=function(i){return e("div",{class:t.a.example},i.children)}}).call(this,n("hosL").h)},Y9Ml:function(e,i,n){"use strict";(function(e){var l=n("8uYk"),t=n.n(l);const o=Object.freeze({RED:t.a.red,ORANGE:t.a.orange,YELLOW:t.a.yellow,LIME:t.a.lime,CYAN:t.a.cyan,BLUE:t.a.blue,MAGENTA:t.a.magenta,DEFAULT:t.a.default});i.a=function(i){let n=o.DEFAULT;return i.color&&(n=i.color),e("div",{class:t.a.box+" "+n},i.children)}}).call(this,n("hosL").h)},e8JA:function(e){e.exports={timer:"timer__3Z2pL",days:"days__myhe2",hours:"hours__3JUDn",minutes:"minutes__24lD7",seconds:"seconds__2vZ4f",count:"count__chi9X",text:"text__34ldC",unknown:"unknown__3sT2P",expired:"expired__zNiuP"}},htlC:function(e){e.exports={splitparent:"splitparent__3-wBs",splitchild:"splitchild__begkX"}},imVn:function(e,i,n){"use strict";(function(e){var l=n("OmdA"),t=n.n(l),o=n("Y9Ml");i.a=function(i){return e(o.a,{color:i.color},e("h3",{class:t.a.title},i.title),e("div",{class:t.a.contents},i.children))}}).call(this,n("hosL").h)},wQ73:function(e,i,n){"use strict";var l=n("hosL");i.a=Object(l.createContext)(!0)},yWBn:function(e,i,n){"use strict";n.r(i),function(e){n("hosL");var l=n("OPqz"),t=n("Q7TX"),o=n("imVn"),a=n("Wxxq"),r=n("RMzO"),u=n("QNda"),s=n("wQ73");let c,d,p,_,m,f,h,v,b,g,x,z,E,L,y,V,w,A,N,q,O,H,k,C=e=>e;const M=String.raw;i.default=function(){return e(s.a.Provider,{value:!0},e("div",null,e("h1",null,"Calcolo Numerico"),e(l.a,{title:"Unimore"},e(o.a,{title:"Email della prof.ssa"},e("p",null,e("a",{href:"mailto:silvia.bonettini@unimore.it"},"silvia.bonettini@unimore.it"))),e(o.a,{title:"Orale"},e("p",null,"E' composto da:"),e("ul",null,e("li",null,"2 domande sugli argomenti teorici"),e("li",null,"1 domanda di implementazione algoritmo in MATLAB ",e("small",null,"(facoltativa per i punteggi migliori del TBL)")))),e(o.a,{title:"Prossimi appelli"},e("ol",null,e("li",null,e(u.a,{to:"2020-06-15"})),e("li",null,e(u.a,{to:"2020-06-22"})),e("li",null,e(u.a,{to:"2020-07-06"})),e("li",null,e(u.a,{to:"2020-07-13"})),e("li",null,e(u.a,{to:"2020-07-20"})),e("li",null,e(u.a,{to:"2020-07-27"}))))),e(l.a,{title:"Algoritmi"},e(o.a,{title:"Algoritmi numerici"},e("p",null,"Algoritmi che hanno:"),e("ul",null,e("li",null,"numeri reali in input e output"),e("li",null,"successioni delle quattro operazioni aritmetiche fondamentali come passi")))),e(l.a,{title:"Errore di rappresentazione"},e(o.a,{title:"Errore di rappresentazione"},e("p",null,"Con i numeri floating point può capitare che un certo numero ",e(t.b,null,M(c||(c=C`\alpha`)))," non sia rappresentato correttamente."),e("p",null,"In tal caso, il numero si indica con ",e(t.b,null,M(d||(d=C`\alpha^*`))),".")),e(o.a,{title:"Errore assoluto"},e("p",null,"È la differenza tra il numero desiderato e il numero rappresentato:"),e("p",null,e(t.b,null,M(p||(p=C`E_a = \left | \alpha - \alpha^* \right |`)))),e(a.a,null,"Vale sempre 0, tranne in caso di underflow o overflow.")),e(o.a,{title:"Errore relativo"},e("p",null,"Indica quanto il numero rappresentato differisce dal numero desiderato:"),e("p",null,e(t.b,null,M(_||(_=C`\forall \alpha \neq 0, E_r = \frac{E_a}{\left | \alpha \right |}`)))))),e(l.a,{title:"Floating point"},e(o.a,{title:"Precisione di macchina"},e("p",null,"L'errore relativo di un numero reale rappresentato in virgola mobile è minore o uguale alla ",e("i",null,"precisione di macchina"),":"),e("p",null,e(t.b,null,M(m||(m=C`E_r \leq k \cdot \beta^{1-t}`)))),e("ul",null,e("li",null,e(t.b,null,"\\beta")," è uguale alla base utilizzata (solitamente 2)."),e("li",null,e(t.b,null,"t")," è uguale al numero di cifre della mantissa."),e("li",null,e(t.b,null,"k")," è uguale a ",e(t.b,null,"1")," se il numero viene rappresentato per troncamento oppure a ",e(t.b,null,M(f||(f=C`\frac{1}{2}`)))," se viene rappresentato per arrotondamento.")))),e(l.a,{title:"Operazioni di macchina"},e(o.a,{title:"Un nuovo insieme"},e("p",null,"L'insieme ",e(t.b,null,"F")," è il sottoinsieme dei numeri reali rappresentabili in floating point dalla macchina che stiamo usando."),e("p",null,"Operazioni tra elementi di ",e(t.b,null,"F")," producono risultati in ",e(t.b,null,M(h||(h=C`\mathbb{R}`))),", che però decaderanno nuovamente a elementi di ",e(t.b,null,"F"),", perdendo informazioni."),e("p",null,"Il teorema della precisione di macchina si applica quindi anche ai risultati delle operazioni.")),e(o.a,{title:"Caratteristiche delle operazioni di macchina"},e("ul",null,e("li",null,"Hanno più di un elemento neutro."),e("li",null,"Un numero ha più opposti."),e("li",null,"Non sono associative."),e("li",null,"Non sono distributive."),e("li",null,"Non vale la legge di annullamento del prodotto."))),e(o.a,{title:"La funzione fl"},e("p",null,"Indica che un valore è soggetto alla precisione di macchina:"),e("p",null,e(t.b,null,M(v||(v=C`fl(x) = (x)(1 + \epsilon_x)`)))))),e(l.a,{title:"Errori nelle operazioni di macchina"},e(o.a,{title:"Errore inerente"},e("p",null,"Errore dipendente ",e("b",null,"solo dai dati"),"."),e("p",null,e(r.a,null,"TODO: qual è la formula?")),e("p",null,"È l'errore che si presenterebbe se ",e(t.b,null,M(b||(b=C`\epsilon_1 = \epsilon_2 = \dots = 0`))),".")),e(o.a,{title:"Errore algoritmico"},e("p",null,"Errore dipendente ",e("b",null,"solo dalle operazioni effettuate"),"."),e("p",null,e(r.a,null,"TODO: qual è la formula?")),e("p",null,"È l'errore che si presenterebbe se ",e(t.b,null,M(g||(g=C`\epsilon_x = \epsilon_y = \dots = 0`))),"."))),e(l.a,null,e(o.a,{title:"Problema ben condizionato"},e("p",null,"Un problema poco sensibile all'",e("b",null,"errore inerente"),"."),e(a.a,null,e(t.b,null,M(x||(x=C`y = \frac{1}{x}`)))," è mal condizionato intorno allo 0 e ben condizionato lontano dallo 0.")),e(o.a,{title:"Algoritmo stabile"},e("p",null,"Un algoritmo poco sensibile all'",e("b",null,"errore algoritmico"),"."),e(a.a,null,e("p",null,"Cerchiamo un algoritmo che risolva ",e(t.b,null,M(z||(z=C`2x = 4`))),"."),e("p",null,"Calcolare prima ",e(t.b,null,M(E||(E=C`t = fl \left( \frac{1}{4} \right)`)))," e poi ",e(t.b,null,M(L||(L=C`x^* = fl ( 2 \cdot t )`)))," porta a una perdita di precisione."),e("p",null,"Calcolare direttamente ",e(t.b,null,M(y||(y=C`x^* = fl \left( \frac{2}{4} \right)`)))," non ha alcuna perdita di precisione e rende l'algoritmo ",e("b",null,"più stabile")," del precedente.")))),e(l.a,null,e(o.a,{title:"Indice di condizionamento"},e("p",null,"È il coefficiente di proporzionalità tra i dati e l'",e("b",null,"errore inerente"),"."),e("p",null,"Essendo sempre maggiore di uno, si può dire che sia un coefficiente di amplificazione."),e("p",null,"Minore è l'indice di condizionamento, meglio condizionato è un problema.")),e(o.a,{title:"Indice algoritmico"},e("p",null,"È il coefficiente di proporzionalità tra i dati e l'",e("b",null,"errore algoritmico"),"."),e("p",null,"Essendo sempre maggiore di uno, si può dire che sia un coefficiente di amplificazione."))),e(l.a,{title:"Le cose più difficili di Algebra Lineare"},e(o.a,{title:"Matrice singolare"},e("p",null,"Matrice con determinante 0."),e("p",null,"Le matrici singolari ",e("b",null,"non sono invertibili"),"."))),e(l.a,{title:"Norme"},e(o.a,{title:"Norma vettoriale"},e("p",null,"Funzione che associa un valore positivo a ogni vettore diverso da 0, e 0 al vettore zero."),e(a.a,null,e("a",{href:"https://it.wikipedia.org/wiki/Norma_(matematica)#/media/File:Vector_norms.svg"},"Esempi su Wikipedia"))),e(o.a,{title:"Norma a infinito"},e("p",null,"Massimo dei valori assoluti di tutti gli elementi del vettore."),e("p",null,e(t.b,null,M(V||(V=C`\Vert x \Vert_\infty = max_{i = 1..n} | x_i |`))))),e(o.a,{title:"Norma a 1"},e("p",null,"Somma dei valori assoluti di tutti gli elementi del vettore."),e("p",null,e(t.b,null,M(w||(w=C`\Vert x \Vert_1 = \sum_{i = 1}^n | x_i |`))))),e(o.a,{title:"Norma a 2"},e("p",null,"Radice quadrata della somma dei quadrati di tutti gli elementi del vettore."),e("p",null,e(t.b,null,M(A||(A=C`\Vert x \Vert_2 = \sqrt{\sum_{i = 1}^n x_i^2}`)))))),e(l.a,null,e(o.a,{title:"Norma matriciale indotta"},e("p",null,"Funzione che associa un valore positivo a ogni matrice diversa da 0, e 0 alla matrice zero."),e("p",null,"Si ricavano dalle norme vettoriali:"),e("p",null,e(t.b,null,M(N||(N=C`\Vert A \Vert = sup_{x \in \mathbb{R}, x \neq 0} \frac{\Vert A \cdot x \Vert}{\Vert x \Vert}`)))),e(a.a,null,e(t.b,null,"sup")," è l'estremo superiore di un insieme. E' molto simile al massimo: ricordi le prime lezioni di Analisi?")),e(o.a,{title:"Norma a infinito"},e("p",null,"Massimo delle somme dei valori assoluti di tutti gli elementi di ogni riga di una matrice."),e("p",null,e(t.b,null,M(q||(q=C`\Vert A \Vert_\infty = max_{i = 1..n} \sum_{j = 1}^n | a_{ij} |`))))),e(o.a,{title:"Norma a 1"},e("p",null,"Massimo delle somme dei valori assoluti di tutti gli elementi di ogni colonna di una matrice."),e("p",null,e(t.b,null,M(O||(O=C`\Vert A \Vert_1 = max_{j = 1..n} \sum_{i = 1}^n | a_{ij} |`))))),e(o.a,{title:"Norma a 2"},e("p",null,"Radice quadrata del rango del prodotto tra una matrice e la sua trasposta."),e("p",null,e(t.b,null,M(H||(H=C`\Vert A \Vert_2 = \sqrt{\rho ( A^T \times A ) }`)))))),e(l.a,null,e(o.a,{title:"Errore relativo tra vettori e matrici"},e("p",null,"Le norme sono usate per calcolare l'errore relativo tra due vettori o matrici:"),e("p",null,e(t.b,null,M(k||(k=C`\frac{\Vert x - y \Vert}{\Vert x \Vert}`)))))),e(l.a,{title:"Fattorizzazione"},e(o.a,{title:"Cos'è?"},e("p",null,"La fattorizzazione è il processo che permette di risolvere sistemi di equazioni lineari rappresentati in forma di matrice."),e("p",null,"Esistono molteplici algoritmi in grado di realizzarla: mentre tutti portano alla stessa soluzione, possono avere ",e("b",null,"velocità")," e ",e("b",null,"indici algoritmici")," diversi."),e("p",null,"Il sistema lineare da risolvere viene diviso in due parti: la ",e("i",null,"matrice dei coefficienti")," e il ",e("i",null,"vettore termine noto"),".")),e(o.a,{title:"Teorema di Rouché-Capélli"},e("p",null)))))}}.call(this,n("hosL").h)}}]);
//# sourceMappingURL=route-CalcoloNumerico.chunk.fee61.esm.js.map