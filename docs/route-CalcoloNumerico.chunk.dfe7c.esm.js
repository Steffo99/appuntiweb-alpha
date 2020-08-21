(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2w3n":function(l){l.exports={red:"red__2y1B_",orange:"orange__dD2kx",yellow:"yellow__OEpwl",lime:"lime__CVe41",cyan:"cyan__26ZAg",blue:"blue__LO7Xm",magenta:"magenta__1Akee",example:"example__2PzAa"}},ke5e:function(l,i,e){"use strict";(function(l){var n=e("2w3n"),a=e.n(n);i.a=function(i){return l("div",{class:a.a.example},i.children)}}).call(this,e("hosL").h)},yWBn:function(l,i,e){"use strict";e.r(i),function(l){var n=e("mbOI"),a=e("ke5e");let o,t,r,u,s,d,p,c,m,h,f,g,b,v,q,z,_,A,x,E,w,C,V,I,L,S,N,k=l=>l;const y=String.raw;i.default=function(){return l("div",null,l("h1",null,"Calcolo Numerico"),l(n.r,{title:"Informazioni"},l(n.q,{title:"Contatti"},l("ul",null,l("li",null,l("a",{href:"mailto:silvia.bonettini@unimore.it"},"Prof.ssa Silvia Bonettini")))),l(n.q,{title:"Archivio"},l("p",null,"Se sei uno ",l("b",null,"studente dell'Unimore"),", puoi accedere all'",l("b",null,l("a",{href:"https://drive.google.com/drive/folders/1gqY-QIe4UeOSHpcho0R-Nvh2IRAlTFmf"},"archivio del corso su Google Drive"),"."),".")),l(n.q,{title:"Prerequisiti"},l("p",null,l("a",{href:"/ripassodialgebralineare"},"Prima di studiare Calcolo Numerico, guardati i prerequisiti di Algebra Lineare!")))),l(n.r,{title:"Esame"},l(n.q,{title:"Orale"},l("p",null,"E' composto da:"),l("ul",null,l("li",null,"2 domande sugli argomenti teorici"),l("li",null,"1 domanda di implementazione algoritmo in MATLAB"))),l(n.q,{title:"Appelli"},l("ol",null,l("li",null,l(n.t,{to:"2020-08-31 09:00"}))))),l(n.r,{title:"Algoritmi"},l(n.q,{title:"Algoritmi numerici"},l("p",null,"Algoritmi che hanno:"),l("ul",null,l("li",null,"numeri reali in input e output"),l("li",null,"successioni delle quattro operazioni aritmetiche fondamentali come passi")))),l(n.r,{title:"Errore di rappresentazione"},l(n.q,{title:"Cos'è?"},l("p",null,"Con i numeri floating point può capitare che un certo numero ",l(n.h,null,y(o||(o=k`\alpha`)))," non sia rappresentato correttamente."),l("p",null,"In tal caso, il numero si indica con ",l(n.h,null,y(t||(t=k`\alpha^*`))),"."))),l(n.r,null,l(n.q,{title:"Errore assoluto"},l("p",null,"È la differenza tra il numero desiderato e il numero rappresentato:"),l(n.p,null,y(r||(r=k`E_a = \left | \alpha - \alpha^* \right |`)))),l(n.q,{title:"Errore relativo"},l("p",null,"Indica quanto il numero rappresentato differisce dal numero desiderato:"),l(n.p,null,y(u||(u=k`\forall \alpha \neq 0, E_r = \frac{E_a}{\left | \alpha \right |}`))))),l(n.r,null,l(n.q,{title:"Troncamento"},l("p",null,"Metodo con cui gestire gli ",l("b",null,"underflow floating point"),": le cifre meno significative vengono ",l("b",null,"rimosse"),"."),l(a.a,null,l("pre",null,"1.00  →  1.0",l("br",null),"1.01  →  1.0",l("br",null),"1.10  →  1.1",l("br",null),"1.11  →  1.1"))),l(n.q,{title:"Arrotondamento"},l("p",null,"Metodo con cui gestire gli ",l("b",null,"underflow floating point"),": se la cifra più significativa di quelle che devono essere rimosse è 1, allora ",l("b",null,"aumenta di 1")," anche quella meno signficativa che viene tenuta."),l(a.a,null,l("pre",null,"1.00  →  1.0",l("br",null),"1.01  →  1.0",l("br",null),"1.10  →  1.1",l("br",null),"1.11  → 10.")))),l(n.r,null,l(n.q,{title:"Precisione di macchina"},l("p",null,"L'errore relativo di un numero reale rappresentato in virgola mobile è minore o uguale alla ",l("i",null,"precisione di macchina"),":"),l("p",null,l(n.h,null,y(s||(s=k`E_r \leq k \cdot \beta^{1-t}`)))),l("ul",null,l("li",null,l(n.h,null,"\\beta")," è uguale alla base utilizzata (solitamente 2)."),l("li",null,l(n.h,null,"t")," è uguale al numero di cifre della mantissa."),l("li",null,l(n.h,null,"k")," è uguale a ",l(n.h,null,"1")," se il numero viene rappresentato per troncamento oppure a ",l(n.h,null,y(d||(d=k`\frac{1}{2}`)))," se viene rappresentato per arrotondamento."))),l(n.q,{title:"La funzione fl"},l("p",null,"Associa un valore reale al suo ",l("b",null,"corrispondente valore floating point"),", utilizzando uno dei due metodi di gestione dell'undeflow."),l(n.p,null,y(p||(p=k`fl(x) = (x)(1 + \epsilon_x)`))),l(a.a,null,"Indica che un valore è soggetto alla precisione di macchina.",l(n.p,null,y(c||(c=k`fl(1.11) = 1.1`)))))),l(n.r,null,l(n.q,{title:"Un nuovo insieme"},l("p",null,"L'insieme ",l(n.h,null,y(m||(m=k`\mathbb{F}`)))," è il sottoinsieme dei numeri reali rappresentabili in floating point dalla macchina che stiamo usando."),l("p",null,"Operazioni tra elementi di ",l(n.h,null,y(h||(h=k`\mathbb{F}`)))," producono risultati in ",l(n.h,null,y(f||(f=k`\mathbb{R}`))),", che però decaderanno nuovamente a elementi di ",l(n.h,null,y(g||(g=k`\mathbb{F}`))),", perdendo informazioni."),l("p",null,"Il teorema della precisione di macchina si applica quindi anche ai risultati delle operazioni.")),l(n.q,{title:"Caratteristiche delle operazioni di macchina"},l("ul",null,l("li",null,"Hanno più di un elemento neutro."),l("li",null,"Un numero ha più opposti."),l("li",null,"Non sono associative."),l("li",null,"Non sono distributive."),l("li",null,"Non vale la legge di annullamento del prodotto.")))),l(n.r,{title:"Errori nelle operazioni di macchina"},l(n.q,{title:"Errore inerente"},l("p",null,"Errore derivato da underflow sui ",l("b",null,"dati"),"."),l("p",null,"Si indica con ",l(n.h,null,y(b||(b=k`\epsilon_{variabile}`))),"."),l(a.a,null,"L'errore sulla variabile ",l(n.h,null,"x")," si indica con ",l(n.h,null,y(v||(v=k`\epsilon_{x}`))),".")),l(n.q,{title:"Errore algoritmico"},l("p",null,"Errore derivato da underflow durante l'",l("b",null,"esecuzione dell'algoritmo"),"."),l("p",null,"Si indica con ",l(n.h,null,y(q||(q=k`\epsilon_{passo}`))),"."),l(a.a,null,"L'errore al primo passo dell'algoritmo si indica con ",l(n.h,null,y(z||(z=k`\epsilon_{1}`))),"."))),l(n.r,null,l(n.q,{title:"Condizionamento"},l("p",null,"Sensibilità di un problema all'",l("b",null,"errore inerente"),"."),l(a.a,null,l(n.h,null,y(_||(_=k`y = \frac{1}{x}`)))," è mal condizionato intorno allo 0 e ben condizionato lontano dallo 0.")),l(n.q,{title:"Stabilità"},l("p",null,"Sensibilità di un problema all'",l("b",null,"errore algoritmico"),"."),l(a.a,null,l("p",null,"Cerchiamo un algoritmo che risolva ",l(n.h,null,y(A||(A=k`2x^* = 4`))),"."),l("p",null,"Calcolare prima ",l(n.h,null,y(x||(x=k`t = fl \left( \frac{1}{4} \right)`)))," e poi ",l(n.h,null,y(E||(E=k`x = fl ( 2 \cdot t )`)))," porta a una perdita di precisione."),l("p",null,"Calcolare direttamente ",l(n.h,null,y(w||(w=k`x = fl \left( \frac{2}{4} \right)`)))," non ha alcuna perdita di precisione e rende l'algoritmo ",l("b",null,"più stabile")," del precedente.")))),l(n.r,null,l(n.q,{title:"Indice di condizionamento"},l("p",null,"È il coefficiente di proporzionalità tra i dati e l'",l("b",null,"errore inerente"),"."),l("p",null,"Essendo sempre maggiore di uno, si può dire che sia un coefficiente di amplificazione."),l("p",null,"Minore è l'indice di condizionamento, meglio condizionato è un problema.")),l(n.q,{title:"Indice algoritmico"},l("p",null,"È il coefficiente di proporzionalità tra i dati e l'",l("b",null,"errore algoritmico"),"."),l("p",null,"Essendo sempre maggiore di uno, si può dire che sia un coefficiente di amplificazione."))),l(n.r,null,l(n.q,{title:"Norma matriciale indotta"},l("p",null,"Funzione che associa un valore positivo a ogni matrice diversa da 0, e 0 alla matrice zero."),l("p",null,"Si ricavano dalle norme vettoriali:"),l("p",null,l(n.h,null,y(C||(C=k`\Vert A \Vert = sup_{x \in \mathbb{R}, x \neq 0} \frac{\Vert A \cdot x \Vert}{\Vert x \Vert}`)))),l(a.a,null,l(n.h,null,"sup")," è l'estremo superiore di un insieme. E' molto simile al massimo: ricordi le prime lezioni di Analisi?")),l(n.q,{title:"Norma a infinito"},l("p",null,"Massimo delle somme dei valori assoluti di tutti gli elementi di ogni riga di una matrice."),l("p",null,l(n.h,null,y(V||(V=k`\Vert A \Vert_\infty = max_{i = 1..n} \sum_{j = 1}^n | a_{ij} |`))))),l(n.q,{title:"Norma a 1"},l("p",null,"Massimo delle somme dei valori assoluti di tutti gli elementi di ogni colonna di una matrice."),l("p",null,l(n.h,null,y(I||(I=k`\Vert A \Vert_1 = max_{j = 1..n} \sum_{i = 1}^n | a_{ij} |`))))),l(n.q,{title:"Norma a 2"},l("p",null,"Radice quadrata del rango del prodotto tra una matrice e la sua trasposta."),l("p",null,l(n.h,null,y(L||(L=k`\Vert A \Vert_2 = \sqrt{\rho ( A^T \times A ) }`)))))),l(n.r,{title:"Sistemi lineari"},l(n.q,{title:"Condizionamento"},l(n.p,null,y(S||(S=k`\frac{{\color{yellow} \|A\| \cdot \|A^{-1}\|} \cdot \| \Delta b \|}{\| b \|}`))),l("p",null,"In particolare, le ",l("b",null,"numero di condizionamento"),":"),l(n.p,null,y(N||(N=k`k(A) = `))))),l(n.r,{title:"Fattorizzazione"},l(n.q,{title:"Cos'è?"},l("p",null,"La fattorizzazione è il processo che permette di risolvere sistemi di equazioni lineari rappresentati in forma di matrice."),l("p",null,"Esistono molteplici algoritmi in grado di realizzarla: mentre tutti portano alla stessa soluzione, possono avere ",l("b",null,"velocità")," e ",l("b",null,"indici algoritmici")," diversi."),l("p",null,"Il sistema lineare da risolvere viene diviso in due parti: la ",l("i",null,"matrice dei coefficienti")," e il ",l("i",null,"vettore termine noto"),".")),l(n.q,{title:"Teorema di Rouché-Capélli"},l("p",null))))}}.call(this,e("hosL").h)}}]);
//# sourceMappingURL=route-CalcoloNumerico.chunk.dfe7c.esm.js.map