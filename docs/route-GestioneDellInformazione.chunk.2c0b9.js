(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0vRf":function(e,l,i){"use strict";(function(e){function n(){var e=u(["\n                        IC(c) = - log left( P(c) \right)\n                    "],["\n                        IC(c) = - \\log \\left( P(c) \\right)\n                    "]);return n=function(){return e},e}function a(){var e=u(["c"]);return a=function(){return e},e}function t(){var e=u(["1"]);return t=function(){return e},e}function o(){var e=u(["P(c)"]);return o=function(){return e},e}function r(){var e=u(["c"]);return r=function(){return e},e}function u(e,l){return l||(l=e.slice(0)),e.raw=l,e}var s=i("hosL"),c=i("mbOI"),d=String.raw;l.a=function(){return e(s.Fragment,null,e(c.s,{title:"Un approccio probabilistico"},e(c.r,{title:"Probabilità dei token"},e("p",null,"Un supplemento al thesaurus specifico a un certo testo: aggiunge ad ogni token ",e(c.i,null,d(r()))," la ",e("b",null,"probabilità")," ",e(c.i,null,d(o()))," che un ",e("b",null,"termine selezionato a caso del testo appartenga al sottoalbero")," formato dal token e i suoi discendenti."),e("p",null,"La radice del thesaurus ha sempre probabilità ",e(c.i,null,d(t())),".")),e(c.r,{title:"Information content"},e("p",null,"Una misura ",e("b",null,"probabilistica")," di quanto un certo token ",e(c.i,null,d(a()))," sia ",e("b",null,"specifico")," in un certo contesto:"),e(c.q,null,d(n())),e("p",null,"È anche detta ",e("i",null,"sorpresa")," o ",e("i",null,"informazione di Shannon"),"."))))}}).call(this,i("hosL").h)},"1Gqa":function(e,l,i){"use strict";(function(e){var n=i("hosL"),a=i("mbOI"),t=i("ke5e"),o=i("YNhk");l.a=function(){return e(n.Fragment,null,e(a.s,{title:"Thesaurus"},e(a.r,{title:"Cos'è?"},e("p",null,"Un ",e("b",null,"albero di token")," organizzati in una gerarchia di significato."),e(t.a,null,'Il token "mela" avrà come genitore "frutto" e come figli ',e(o.a,{href:"https://it.wikipedia.org/wiki/Renetta"},'"Renetta"'),", ",e(o.a,{href:"https://it.wikipedia.org/wiki/Fuji_(mela)"},'"Fuji"')," e ",e(o.a,{href:"https://it.wikipedia.org/wiki/Granny_Smith"},'"Granny Smith"'),"."),e(t.a,null,e(o.a,{href:"https://wordnet.princeton.edu/"},"WordNet")," è un thesaurus generale per la lingua inglese, mentre ",e(o.a,{href:"https://thes.bncf.firenze.sbn.it/thes-dati.htm"},"Nuovo soggettario")," è un thesaurus generale per la lingua italiana."))))}}).call(this,i("hosL").h)},"2w3n":function(e){e.exports={red:"red__2y1B_",orange:"orange__dD2kx",yellow:"yellow__OEpwl",lime:"lime__CVe41",cyan:"cyan__26ZAg",blue:"blue__LO7Xm",magenta:"magenta__1Akee",example:"example__2PzAa"}},"3f/I":function(e,l,i){"use strict";i.r(l),function(e){var n=i("uilM"),a=i("hGQu"),t=i("KMEV"),o=i("roys"),r=i("9ooG"),u=i("1Gqa"),s=i("0vRf"),c=i("RaT1");l.default=function(){return e("div",null,e("h1",null,"Gestione dell'informazione"),e(n.a,null),e(a.a,null),e(o.a,null),e(r.a,null),e(u.a,null),e(s.a,null),e(t.a,null),e(c.a,null))}}.call(this,i("hosL").h)},"9ooG":function(e,l,i){"use strict";(function(e){var n=i("hosL"),a=i("mbOI");i("KwpI");l.a=function(){return e(n.Fragment,null,e(a.s,{title:"Document processing"},e(a.r,{title:"Cos'è?"},e("p",null,"Una ",e("b",null,"procedura")," che ottimizza un documento per la ricerca."))),e(a.s,null,e(a.r,{title:"1. Analisi lessicale"},e("p",null,"Passo che trasforma il documento in un ",e("b",null,"insieme di parole")," (",e("i",null,"token"),")."),e("p",null,"Deve decidere come considerare i ",e("b",null,"simboli tipografici"),", il ",e("b",null,"case")," delle lettere e le ",e("b",null,"cifre"),"."),e("p",null,"Inoltre, è possibile che disambigui tra i vari significati delle parole (",e("i",null,"word sense disambiguation"),").")),e(a.r,{title:"2. Eliminazione delle stopwords"},e("p",null,"Passo che ",e("b",null,"elimina")," dalla lista i ",e("b",null,"token inutili")," ai fini delle ricerche."),e("p",null,"Esse solitamente sono gli ",e("b",null,"articoli")," e le ",e("b",null,"preposizioni"),".")),e(a.r,{title:"3. Stemming dei token"},e("p",null,"Passo che ",e("b",null,"riduce alla radice")," tutti i token della lista."),e("p",null,"Converte i ",e("b",null,"plurali in singolari"),", ",e("b",null,"passati ai presenti"),", e così via.")),e(a.r,{title:"4. Selezione degli index term"},e("p",null,"Passo che ",e("b",null,"seleziona i termini più importanti")," della lista."),e("p",null,"Generalmente sfrutta dei ",e("i",null,"parser")," o dei ",e("i",null,"tagger"),"."),e("aside",null,e("u",null,"Parser"),": impreciso ma molto dettagliato, effettua l'analisi grammaticale, logica e del periodo."),e("aside",null,e("u",null,"Tagger"),": preciso ma poco dettagliato, effettua solo l'analisi logica.")),e(a.r,{title:"5. Categorizzazione"},e("p",null,"Passo che ",e("b",null,"classifica")," il documento in una o più ",e("b",null,"categorie")," del ",e("i",null,"thesaurus"),"."),e("aside",null,e("u",null,"Thesaurus"),": gerarchia di categorie, può essere creata ",e("b",null,"manualmente")," o generata ",e("b",null,"automaticamente"),"."))))}}).call(this,i("hosL").h)},KMEV:function(e,l,i){"use strict";(function(e){function n(){var e=c(["\n                        sim_rs(c_1, c_2) = - log P( mac(c_1, c_2) )\n                    "],["\n                        sim\\_rs(c_1, c_2) = - \\log P( mac(c_1, c_2) )\n                    "]);return n=function(){return e},e}function a(){var e=c(["mac"]);return a=function(){return e},e}function t(){var e=c(["\n                        sim_wp(c_1, c_2) = \frac{2 cdot depth(mac(c_1, c_2))}{depth(c_1) + depth(c_2)}\n                    "],["\n                        sim\\_wp(c_1, c_2) = \\frac{2 \\cdot depth(mac(c_1, c_2))}{depth(c_1) + depth(c_2)}\n                    "]);return t=function(){return e},e}function o(){var e=c(["mac"]);return o=function(){return e},e}function r(){var e=c(["\n                        sim_pd(c_1, c_2) = \frac{1}{dist(c_1, c_2) + 1}\n                    "],["\n                        sim\\_pd(c_1, c_2) = \\frac{1}{dist(c_1, c_2) + 1}\n                    "]);return r=function(){return e},e}function u(){var e=c(["c_2"]);return u=function(){return e},e}function s(){var e=c(["c_1"]);return s=function(){return e},e}function c(e,l){return l||(l=e.slice(0)),e.raw=l,e}var d=i("hosL"),p=i("mbOI"),m=(i("KwpI"),String.raw);l.a=function(){return e(d.Fragment,null,e(p.s,{title:"Relazioni tra parole"},e(p.r,{title:"Sinonimia"},e("blockquote",null,"synonymy"),e("p",null,"Due parole sono ",e("i",null,"sinonimi")," quando hanno lo ",e("b",null,"stesso identico significato"),".")),e(p.r,{title:"Somiglianza"},e("blockquote",null,"similarity"),e("p",null,"Due parole sono ",e("i",null,"simili")," rappresentano concetti con ",e("b",null,"caratteristiche in comune"),".")),e(p.r,{title:"Correlazione"},e("blockquote",null,"relatedness"),e("p",null,"Due parole sono ",e("i",null,"correlate")," quando rappresentano ",e("b",null,"concetti vengono usati insieme")," spesso."))),e(p.s,{title:"Somiglianza path-based"},e(p.r,{title:"Cos'è?"},e("p",null,"Un modo per misurare la somiglianza tra due parole confrontando solo la loro ",e("b",null,"posizione nel thesaurus"),"."))),e(p.s,null,e(p.r,{title:"Somiglianza path-distance"},e("p",null,"Calcola la somiglianza basandosi sull'",e("b",null,"inverso della distanza")," tra le due parole ",e(p.i,null,m(s()))," e ",e(p.i,null,m(u()))," nell'albero:"),e(p.q,null,m(r()))),e(p.r,{title:"Somiglianza Wu-Palmer"},e("p",null,"Calcola la somiglianza basandosi sulla ",e("b",null,"profondità dei due nodi")," e sulla ",e("b",null,"profondità del minimo antenato comune")," ",e(p.i,null,m(o())),":"),e(p.q,null,m(t())))),e(p.s,{title:"Somiglianza information-content-based"},e(p.r,{title:"Cos'è?"},e("p",null,"Un modo per misurare la somiglianza tra due parole attraverso i loro valori di ",e("b",null,"information content"),"."))),e(p.s,null,e(p.r,{title:"Somiglianza Resnik"},e("p",null,"Calcola la somiglianza basandosi sull'",e("b",null,"information content del minimo antenato comune")," ",e(p.i,null,m(a()))," tra i due termini."),e(p.q,null,m(n())))))}}).call(this,i("hosL").h)},KwpI:function(e,l,i){"use strict";(function(e){var n=i("mbOI");l.a=function(l){return e(n.r,{title:"To be continued",color:n.e.YELLOW},e("p",null,"Questa sezione è incompleta. Torna più avanti!"),l.children)}}).call(this,i("hosL").h)},RaT1:function(e,l,i){"use strict";(function(e){var n=i("hosL"),a=i("mbOI");l.a=function(){return e(n.Fragment,null,e(a.s,{title:"Analisi lessicale"},e(a.r,{title:"Word sense disambiguation"},e("p",null,"Procedura che ",e("b",null,"disambigua tra più significati")," dello stesso token."),e("p",null,"Si può realizzare confrontando la somiglianza di ogni significato con tutti gli altri nomi presenti nella frase."))))}}).call(this,i("hosL").h)},hGQu:function(e,l,i){"use strict";(function(e){var n=i("mbOI"),a=i("hosL");i("ke5e"),i("YNhk");l.a=function(){return e(a.Fragment,null,e(n.s,{title:"Information Retrieval (IR)"},e(n.r,{title:"Cos'è?"},e("p",null,e("b",null,"Processo")," di ",e("b",null,"raccolta")," e ",e("b",null,"recupero approssimato")," di informazioni spesso ",e("b",null,"non strutturate"),"."),e("p",null,"Riceve in input una ",e("b",null,"query"),", elabora ",e("b",null,"documenti")," e restituisce una ",e("b",null,"risposta")," più rilevante possibile."),e("p",null,"Un'applicazione che effettua IR si chiama ",e("b",null,"motore di ricerca"),"."))))}}).call(this,i("hosL").h)},ke5e:function(e,l,i){"use strict";(function(e){var n=i("2w3n"),a=i.n(n);l.a=function(l){return e("div",{class:a.a.example},l.children)}}).call(this,i("hosL").h)},roys:function(e,l,i){"use strict";(function(e){var n=i("hosL"),a=i("mbOI"),t=i("ke5e"),o=i("YNhk");l.a=function(){return e(n.Fragment,null,e(a.s,{title:"Query"},e(a.r,{title:"User Information Need (UIN)"},e("p",null,"La ",e("b",null,"richiesta")," di informazioni effettuata da un utente ",e("b",null,"in linguaggio naturale"),".")),e(a.r,{title:"Query"},e("p",null,"La ",e("b",null,"traduzione")," dell'UIN in un linguaggio ",e("b",null,"specifico al motore di ricerca"),"."),e("p",null,"La complessità di questo linguaggio dipende dall'utilizzatore del motore di ricerca: il suo ",e("b",null,"livello di esperienza"),", il suo ",e("b",null,"background di conoscenze")," e il ",e("b",null,"livello di approfondimento desiderato"),"."))),e(a.s,{title:"Query languages"},e(a.r,{title:"Keyword-based query"},e(t.a,null,e(o.a,{href:"https://it.wikipedia.org/w/index.php?search=&title=Speciale:Ricerca&go=Go"},"Wikipedia")," e la ",e(o.a,{href:"https://telegram.org/blog/shared-files#multisearch"},"ricerca di Telegram")," usano un linguaggio di query ",e("i",null,"keyword-based"),"."),e("p",null,"Definisce ",e("b",null,"parole chiave")," da cercare all'interno dei documenti."),e("p",null,"In esse, è possibile cercare ",e("b",null,"molteplici")," parole chiave, ",e("b",null,"concatenarle")," per formare una ",e("b",null,"frase")," oppure cercare parole a una data ",e("b",null,"prossimità")," l'una dall'altra."),e("p",null,"Spesso processa il linguaggio naturale per trasformarne le parole specifiche in parole chiave più generiche."),e(t.a,null,"Cercando su Telegram un plurale inglese, verranno restituiti anche i messaggi che riportano la stessa parola ma al singolare.")),e(a.r,{title:"Pattern-based query"},e(t.a,null,"Le ",e(o.a,{href:"https://regex101.com/"},"regex")," e i ",e(o.a,{href:"https://en.wikipedia.org/wiki/Glob_(programming)"},"glob")," sono due dei pattern-based query languages più comuni."),e("p",null,"Definisce ",e("b",null,"parti di testo")," da cercare all'interno dei documenti."),e("p",null,"Permettono dunque la ricerca di ",e("b",null,"prefissi"),", ",e("b",null,"suffissi"),", ",e("b",null,"sottostringhe")," e ",e("b",null,"intervalli"),"."))),e(a.s,null,e(a.r,{title:"Boolean query"},e(t.a,null,e(o.a,{href:"https://www.google.it/"},"Google"),", ",e(o.a,{href:"https://duckduckgo.com/"},"DuckDuckGo"),", ",e(o.a,{href:"https://www.ecosia.org/"},"Ecosia")," usano tutti un linguaggio di query keyword-based booleano."),e("p",null,e("b",null,"Estendono")," gli altri tipi di query permettendo l'inserimento di ",e("b",null,"operatori booleani")," (",e("code",null,"AND"),", ",e("code",null,"OR")," e ",e("code",null,"NOT"),") tra le parole chiave."),e(t.a,null,"Per esempi sulla sintassi per effettuare ricerche booleane su Google, visita ",e(o.a,{href:"https://www.google.it/advanced_search"},"Google Advanced Search"),".")),e(a.r,{title:"Structural query"},e(t.a,null,e(o.a,{href:"https://books.google.com/advanced_book_search"},"Google Books")," permette di sfruttare la struttura fissa delle informazioni sui libri (titolo, autore, editore...) per ottenere risultati più precisi.,"),e("p",null,"Permettono di effettuare i precedenti tipi di query su ",e("b",null,"specifiche parti della struttura")," dei documenti.")),e(a.r,{title:"Concept-based query"},e(t.a,null,e(o.a,{href:"https://www.ncbi.nlm.nih.gov/mesh"},"MeSH")," cataloga i paper di medicina caricati su PubMed organizzandoli in una gerarchia di categorie."),e("p",null,"Limitano le keyword a un ",e("b",null,"vocabolario predefinito")," utilizzato anche dai documenti."))))}}).call(this,i("hosL").h)},uilM:function(e,l,i){"use strict";(function(e){var n=i("hosL"),a=i("mbOI"),t=i("YNhk");l.a=function(){return e(n.Fragment,null,e(a.s,{title:"Esame"},e(a.r,{title:"Contatti"},e("ul",null,e("li",null,e(t.a,{href:"mailto:federica.mandreoli@unimore.it"},"Prof. Federica Mandreoli")))),e(a.r,{title:"Collegamenti"},e("ul",null,e("li",null,e(t.a,{href:"https://dolly.fim.unimore.it/2020/course/view.php?id=69"},"Pagina Dolly Unimore")))),e(a.r,{title:"Download videolezioni"},e("p",null,"Puoi scaricare le videolezioni di Gestione dell'informazione con ",e(t.a,{href:"https://github.com/Steffo99/bbbdl"},"bbbdl"),":"),e(a.f,{language:"bash"},"bbbdl sync -r https://raw.githubusercontent.com/Steffo99/unimoreinfo-wiki/main/gestionedellinformazione.json"))))}}).call(this,i("hosL").h)}}]);
//# sourceMappingURL=route-GestioneDellInformazione.chunk.2c0b9.js.map