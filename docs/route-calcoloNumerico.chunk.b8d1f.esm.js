(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+AyP":function(e){e.exports={latex:"latex__3Esv7"}},"1nLj":function(e){e.exports={panel:"panel__1ubJw"}},"68UE":function(e){e.exports={example:"example__P0_NL"}},"6GOG":function(e,i,n){"use strict";n.r(i),function(e){n.d(i,"default",(function(){return _}));var l=n("hosL"),t=n("ddBW"),a=n("ZsnK"),o=n("9yVG"),r=n("PEwj"),s=(n("7bXG"),n("810C"));let u,p,d,c,m,h,f,g=e=>e;const v=String.raw;class _ extends l.Component{render(){return e("div",null,e("h1",null,"Calcolo Numerico"),e(t.a,{title:"Materiale"},e(o.a,{title:"Slides"},e("p",null,"Ultimo aggiornamento: ",e("time",null,"2020-03-11")),e("ul",null,e("li",null,e("a",{href:"https://t.me/unimorefiles/13"},"Richiami di Algebra Lineare")),e("li",null,e("a",{href:"https://t.me/unimorefiles/14"},"Slides")),e("li",null,e("a",{href:"https://t.me/unimorefiles/15"},"Laboratorio")),e("li",null,e("a",{href:"https://t.me/unimorefiles/16"},"Matlab"))),e("p",null,e("i",null,"Per slides più aggiornate, visitate ",e("a",{href:"https://dolly.fim.unimore.it/2019/course/view.php?id=25"},"Dolly"),"!"))),e(o.a,{title:"Videolezioni"},e("ol",null,e("li",null,e("a",{href:"https://t.me/unimorefiles/34"},"Introduzione al corso")),e("li",null,e("a",{href:"https://t.me/unimorefiles/35"},"Introduzione alla materia")),e("li",null,e("a",{href:"https://t.me/unimorefiles/36"},"Rappresentazione dei numeri")),e("li",null,e("a",{href:"https://t.me/unimorefiles/37"},"Rappresentazione fixed point degli interi")),e("li",null,e("a",{href:"https://t.me/unimorefiles/38"},"Rappresentazione floating point dei reali")),e("li",null,e("a",{href:"https://t.me/unimorefiles/39"},"Operazioni di macchina")),e("li",null,"Analisi degli errori: condizionamento e stabilità"),e("li",null,"Richiami di Algebra lineare"))),e(o.a,{title:"Team-based Learning"},e("blockquote",null,e("p",null,"Le lezioni in modalità TBL, previste per il corso di Laurea in Informatica, saranno erogate solo quando sarà possibile tornare alla modalità didattica in presenza, per la natura stessa di questa metodologia che non prevede uno svolgimento a distanza."),e("p",null,"Per il momento, vista l'incertezza della situazione in continua evoluzione, è inutile dare ulteriori indicazioni sulle date o altri aspetti pratici legati al progetto."),e("p",null,"Appena sarà possibile, gli interessati verranno informati tramite email.")),e("p",null,"Partecipare al Team-based Learning può portare all'ottenimento di fino a 3 punti bonus all'esame e esenzione dalla domanda di Matlab."))),e(t.a,{title:"Contatti"},e(o.a,{title:"Email della prof.ssa"},e("p",null,e("a",{href:"mailto:silvia.bonettini@unimore.it"},"silvia.bonettini@unimore.it"))),e(o.a,{title:"Ricevimento"},e("p",null,"Su appuntamento."))),e(t.a,{title:"Esame"},e(o.a,{title:"Orale"},e("p",null,"E' composto da:"),e("ul",null,e("li",null,"2 domande sugli argomenti teorici"),e("li",null,"1 domanda di implementazione algoritmo in MATLAB ",e("small",null,"(facoltativa per i punteggi migliori del TBL)"))),e("p",null,"Prossimo appello:",e(s.a,null)))),e(t.a,{title:"Algoritmi"},e(o.a,{title:"Algoritmi numerici"},e("p",null,"Algoritmi che hanno:"),e("ul",null,e("li",null,"numeri reali in input e output"),e("li",null,"successioni delle quattro operazioni aritmetiche fondamentali come passi")))),e(t.a,{title:"Errore di rappresentazione"},e(o.a,{title:"Errore di rappresentazione"},e("p",null,"Con i numeri floating point può capitare che un certo numero ",e(a.a,null,v(u||(u=g`\alpha`)))," non sia rappresentato correttamente."),e("p",null,"In tal caso, il numero si indica con ",e(a.a,null,v(p||(p=g`\alpha^*`))),".")),e(o.a,{title:"Errore assoluto"},e("p",null,"È la differenza tra il numero desiderato e il numero rappresentato:"),e("p",null,e(a.a,null,v(d||(d=g`E_a = \left | \alpha - \alpha^* \right |`)))),e(r.a,null,"Vale sempre 0, tranne in caso di underflow o overflow.")),e(o.a,{title:"Errore relativo"},e("p",null,"Indica quanto il numero rappresentato differisce dal numero desiderato:"),e("p",null,e(a.a,null,v(c||(c=g`\forall \alpha \neq 0, E_r = \frac{E_a}{\left | \alpha \right |}`)))))),e(t.a,{title:"Floating point"},e(o.a,{title:"Precisione di macchina"},e("p",null,"L'errore relativo di un numero reale rappresentato in virgola mobile è minore o uguale alla ",e("i",null,"precisione di macchina"),":"),e("p",null,e(a.a,null,v(m||(m=g`E_r \leq k \cdot \beta^{1-t}`)))),e("ul",null,e("li",null,e(a.a,null,"\\beta")," è uguale alla base utilizzata (solitamente 2)."),e("li",null,e(a.a,null,"t")," è uguale al numero di cifre della mantissa."),e("li",null,e(a.a,null,"k")," è uguale a ",e(a.a,null,"1")," se il numero viene rappresentato per troncamento oppure a ",e(a.a,null,v(h||(h=g`\frac{1}{2}`)))," se viene rappresentato per arrotondamento.")))),e(t.a,{title:"Operazioni di macchina"},e(o.a,{title:"Un nuovo insieme"},e("p",null,"L'insieme ",e(a.a,null,"F")," è il sottoinsieme dei numeri reali rappresentabili in floating point dalla macchina che stiamo usando."),e("p",null,"Operazioni tra elementi di ",e(a.a,null,"F")," producono risultati in ",e(a.a,null,v(f||(f=g`\mathbb{R}`))),", che però decaderanno nuovamente a elementi di ",e(a.a,null,"F"),", perdendo informazioni."),e("p",null,"Il teorema della precisione di macchina si applica quindi anche ai risultati delle operazioni.")),e(o.a,{title:"Caratteristiche delle operazioni di macchina"},e("ul",null,e("li",null,"Hanno più di un elemento neutro."),e("li",null,"Un numero ha più opposti."),e("li",null,"Non sono associative."),e("li",null,"Non sono distributive."),e("li",null,"Non vale la legge di annullamento del prodotto.")))))}}}.call(this,n("hosL").h)},"7bXG":function(e,i,n){"use strict";(function(e){n.d(i,"a",(function(){return o}));var l=n("kpQM"),t=n.n(l),a=n("hosL");class o extends a.Component{render(){return e("span",{class:t.a.todo},this.props.children)}}}).call(this,n("hosL").h)},"810C":function(e,i,n){"use strict";(function(e){n.d(i,"a",(function(){return o}));var l=n("hosL"),t=n("Q3JM"),a=n.n(t);class o extends l.Component{constructor(){super(),this.state={now:Date.now()},this.timer=null}componentDidMount(){this.timer=setInterval(()=>{this.setState({now:Date.now()})},1e3)}componentWillUnmount(){null!==this.timer&&clearInterval(this.timer)}render(){let i="Unknown date",n=a.a.timer,l={milliseconds:"?",seconds:"?",minutes:"?",hours:"?",days:"?"};if(this.props.to){i=new Date(this.props.to);let e=i-this.state.now;e>0?l={milliseconds:e%1e3,seconds:Math.floor(e/1e3)%60,minutes:Math.floor(e/6e4)%60,hours:Math.floor(e/36e5)%24,days:Math.floor(e/864e5)}:(l={milliseconds:0,seconds:0,minutes:0,hours:0,days:0},n+=" "+a.a.expired)}else n+=" "+a.a.unknown;return e("div",{class:n,title:i},e("div",{class:a.a.days+" "+a.a.count},l.days),e("div",{className:a.a.days+" "+a.a.text},"giorni"),e("div",{class:a.a.hours+" "+a.a.count},l.hours),e("div",{className:a.a.hours+" "+a.a.text},"ore"),e("div",{class:a.a.minutes+" "+a.a.count},l.minutes),e("div",{className:a.a.minutes+" "+a.a.text},"minuti"),e("div",{class:a.a.seconds+" "+a.a.count},l.seconds),e("div",{class:a.a.seconds+" "+a.a.text},"secondi"),e("div",{class:a.a.remaining},"rimasti"))}}}).call(this,n("hosL").h)},"9yVG":function(e,i,n){"use strict";(function(e){n.d(i,"a",(function(){return o}));var l=n("1nLj"),t=n.n(l),a=n("hosL");class o extends a.Component{getStyle(){return t.a.panel}render(){let i=null;return void 0!==this.props.title&&(i=e("h3",null,this.props.title)),e("div",{class:this.getStyle(),id:this.props.id},i,this.props.children)}}}).call(this,n("hosL").h)},PEwj:function(e,i,n){"use strict";(function(e){n.d(i,"a",(function(){return o}));var l=n("68UE"),t=n.n(l),a=n("hosL");class o extends a.Component{render(){return e("blockquote",{class:t.a.example},this.props.children)}}}).call(this,n("hosL").h)},Q3JM:function(e){e.exports={timer:"timer__23gHK",days:"days__3ZzFX",hours:"hours__3LtGw",minutes:"minutes__1_j61",seconds:"seconds__gE-gj",count:"count__28Md8",text:"text__2kIQZ",remaining:"remaining__1HVwa",unknown:"unknown__teMQN",expired:"expired__3wewI"}},ZsnK:function(e,i,n){"use strict";(function(e){n.d(i,"a",(function(){return o}));var l=n("+AyP"),t=n.n(l),a=n("hosL");class o extends a.Component{render(){return e("img",{src:`https://latex.codecogs.com/svg.latex?${`{\\color{White} ${this.props.children} }`}`,alt:this.props.children,title:this.props.children,class:t.a.latex})}}}).call(this,n("hosL").h)},ddBW:function(e,i,n){"use strict";(function(e){n.d(i,"a",(function(){return o}));var l=n("rMrT"),t=n.n(l),a=n("hosL");class o extends a.Component{render(){let i,n=null;return void 0!==this.props.title&&(n=e("h2",null,this.props.title)),i=Array.isArray(this.props.children)?this.props.children.map(i=>e("div",{class:t.a.splitchild},i)):e("div",{class:t.a.splitchild},this.props.children),e("div",{class:t.a.split},n,e("div",{class:t.a.splitparent},i))}}}).call(this,n("hosL").h)},kpQM:function(e){e.exports={todo:"todo__1pOoN"}},rMrT:function(e){e.exports={split:"split__3qCWp",splitparent:"splitparent__2xagg",splitchild:"splitchild__3cEoc"}}}]);
//# sourceMappingURL=route-calcoloNumerico.chunk.b8d1f.esm.js.map