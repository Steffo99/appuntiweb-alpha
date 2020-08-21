import {BLatex, ILatex, Panel, PLatex, Section, TablePanel, Timer} from "bluelib";
import Example from "../components/Example";

const r = String.raw;

export default function (props) {
    return (
        <div>
            <h1>Basi di dati</h1>
            <Section title={"Informazioni"}>
                <Panel title={"Contatti"}>
                    <ul>
                        <li><a href={"mailto:riccardo.martoglia@unimo.it"}>Prof. Riccardo Martoglia</a></li>
                    </ul>
                </Panel>
                <Panel title={"Archivio"}>
                    <p>
                        Se sei uno <b>studente dell'Unimore</b>, puoi accedere all'<b><a
                        href={"https://drive.google.com/drive/folders/1q3bOf9czDXq7Bd5-kwdICuz-9Nx1zVp_"}>archivio del
                        corso su Google Drive</a></b>.
                    </p>
                </Panel>
            </Section>
            <Section title={"Esame"}>
                <Panel title={"Scritto"}>
                    <p>
                        Uno scritto con tre domande:
                    </p>
                    <ul>
                        <li>Progettazione concettuale e logica</li>
                        <li>Formulazione interrogazione</li>
                        <li>Una domanda tra:
                            <ul>
                                <li>Studio dato derivato</li>
                                <li>Progettazione fisica</li>
                                <li>Tecnologia database</li>
                            </ul>
                        </li>
                    </ul>
                </Panel>
                <Panel title={"Appelli"}>
                    <ol>
                        <li><Timer to={"2020-06-24"}/></li>
                        <li><Timer to={"2020-07-09"}/></li>
                        <li><Timer to={"2020-07-28"}/></li>
                    </ol>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Progetto"}>
                    <p>
                        In gruppo, progettare un database secondo <a
                        href={"https://t.me/unimorefiles/23"}>queste</a> specifiche.
                    </p>
                    <p>
                        Va consegnato via mail almeno 10 giorni prima dello scritto.
                    </p>
                </Panel>
                <Panel title={"Termini di consegna"}>
                    <ol>
                        <li><Timer to={"2020-06-14"}/></li>
                        <li><Timer to={"2020-06-30"}/></li>
                        <li><Timer to={"2020-07-18"}/></li>
                    </ol>
                </Panel>
            </Section>
            <Section title={"Visualizzazioni utili"}>
                <Panel title={"B+ Tree"}>
                    <p>
                        <a href={"https://www.cs.usfca.edu/~galles/visualization/BPlusTree.html"}>Link</a>
                    </p>
                </Panel>
            </Section>
            <Section title={"Calcolo dei costi delle query"}>
                <TablePanel>
                    <thead>
                    <tr>
                        <th>Simbolo</th>
                        <th>Descrizione</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><BLatex>{r`N_{tuple}`}</BLatex></td>
                        <td>Numero di tuple di una tabella</td>
                    </tr>
                    <tr>
                        <td><BLatex>{r`N_{blocchi}`}</BLatex></td>
                        <td>Numero di blocchi di una tabella</td>
                    </tr>
                    <tr>
                        <td><BLatex>{r`N_{foglie}`}</BLatex></td>
                        <td>Numero di foglie di un indice</td>
                    </tr>
                    <tr>
                        <td><BLatex>{r`N_{indici}`}</BLatex></td>
                        <td>Numero di indici presenti in una tabella</td>
                    </tr>
                    <tr>
                        <td><BLatex>{r`N_{unici}`}</BLatex></td>
                        <td>Numero di valori unici presenti in una colonna</td>
                    </tr>
                    <tr>
                        <td><BLatex>{r`F`}</BLatex></td>
                        <td>Fattore di selettività di una condizione</td>
                    </tr>
                    <tr>
                        <td><BLatex>{r`C`}</BLatex></td>
                        <td>Costo di accesso a una o più tuple</td>
                    </tr>
                    <tr>
                        <td><BLatex>{r`N_{selezionati}`}</BLatex></td>
                        <td>Numero di tuple del risultato</td>
                    </tr>
                    </tbody>
                </TablePanel>
            </Section>
            <Section>
                <Panel title={"Fattore booleano"}>
                    <p>
                        Espressione formata da <b>una o più condizioni moltiplicate tra loro</b>.
                    </p>
                </Panel>
                <Panel title={"Argomenti di ricerca attraverso indice"}>
                    <p>
                        Condizioni che soddisfano i seguenti requisiti:
                    </p>
                    <ul>
                        <li>
                            Usa uno dei seguenti <b>operatori</b>:
                            <ul>
                                <li><ILatex>{r`<`}</ILatex></li>
                                <li><ILatex>{r`\leq`}</ILatex></li>
                                <li><ILatex>{r`=`}</ILatex></li>
                                <li><ILatex>{r`\geq`}</ILatex></li>
                                <li><ILatex>{r`>`}</ILatex></li>
                                <li><b><code>{r`BETWEEN`}</code></b></li>
                                <li><b><code>{r`OR`}</code></b> (solo in alcuni DBMS)</li>
                            </ul>
                        </li>
                        <li>Uno dei due termini del confronto è <b>una colonna</b> della tabella</li>
                        <li>L'altro termine del confronto è <b>una costante numerica</b></li>
                    </ul>
                </Panel>
                <Panel title={"Indici"}>
                    <p>
                        È possibile costruire indici sulle colonne di una tabella per velocizzare le query che
                        riguardano quelle colonne.
                    </p>
                    <p>
                        In particolare, ogni tabella può avere <b>un</b> <i>indice clustered</i> e <b>infiniti</b> <i>indici
                        unclustered</i>.
                    </p>
                    <p>
                        Generalmente, l'indice clustered è costruito sulla colonna della primary key, ma <a
                        href={"https://stackoverflow.com/questions/15051869/relationship-of-primary-key-and-clustered-index"}>non
                        è sempre quello il caso</a>.
                    </p>
                    <p>
                        Gli indici vanno tenuti aggiornati, e ciò ha un <b>costo di manutenzione</b>:
                    </p>
                    <ul>
                        <li><code>DELETE</code>: <ILatex>{r`N_{indici} \cdot 2 \cdot N_{selezionati}`}</ILatex></li>
                        <li><code>UPDATE</code>: <ILatex>{r`N_{indici} \cdot 4 \cdot N_{selezionati}`}</ILatex></li>
                    </ul>
                    <p>
                        È possibile usare gli indici nelle query solo per gli <b>argomenti di ricerca attraverso
                        indice</b>.
                    </p>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Fattore di selettività"}>
                    <p>
                        La percentuale di tuple di una tabella che soddisfano una condizione.
                    </p>
                    <table>
                        <thead>
                        <tr>
                            <th>Condizione</th>
                            <th>Fattore di selettività</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><code>col = $costante</code></td>
                            <td><BLatex>{r`F = \frac{1}{N_{unici}`}</BLatex></td>
                        </tr>
                        <tr>
                            <td><code>col != $costante</code></td>
                            <td><BLatex>{r`F = 1 - \frac{1}{N_{unici}`}</BLatex></td>
                        </tr>
                        <tr>
                            <td><code>col1 != col2</code></td>
                            <td><BLatex>{r`F = \frac{1}{max(N_{unici_A}, N_{unici_B})`}</BLatex></td>
                        </tr>
                        <tr>
                            <td><code>IN</code></td>
                            <td><BLatex>{r`F = \frac{n_{IN}}{N_{unici}}`}</BLatex></td>
                        </tr>
                        <tr>
                            <td><code>col > $costante</code></td>
                            <td><BLatex>{r`F = \frac{ max(col) - \$costante }{ max(col) - min(col) }`}</BLatex></td>
                        </tr>
                        <tr>
                            <td><code>{r`col < $costante`}</code></td>
                            <td><BLatex>{r`F = \frac{ \$costante - min(col) }{ max(col) - min(col) }`}</BLatex></td>
                        </tr>
                        <tr>
                            <td><code>col BETWEEN $lower AND $upper</code></td>
                            <td><BLatex>{r`F = \frac{ \$upper - \$lower }{ max(col) - min(col) }`}</BLatex></td>
                        </tr>
                        <tr>
                            <td><code>cond1 OR cond2</code></td>
                            <td><BLatex>{r`F = F_{cond1} + F_{cond2} - ( F_{cond1} \cdot F_{cond2} )`}</BLatex></td>
                        </tr>
                        </tbody>
                    </table>
                </Panel>
                <Panel title={"Costo di accesso"}>
                    <p>
                        Quante <i>unità di lavoro</i> costa accedere a una specifica relazione:
                    </p>
                    <PLatex>{r`
                        C = {\color{yellow} {C_{indice}}} + {\color{Orange} C_{relazione}}
                    `}</PLatex>
                    <p>
                        Per accedere attraverso un indice a una specifica tupla della relazione, si spenderà:
                    </p>
                    <PLatex>{r`
                        C = {\color{yellow} 1} + {\color{Orange} 1}
                    `}</PLatex>
                    <p>
                        Se le tuple a cui si vuole accedere sono più di una, allora, il costo dipenderà da se l'indice è
                        clustered o non-clustered.
                    </p>
                    <Example>
                        Nel calcolo del costo di una query, si considerano tutti i cambi di pagina come <b>page
                        fault</b>.
                    </Example>
                    <p>
                        Per gli indici <b>clustered</b>, visto che basta caricare in memoria i blocchi in sequenza, il
                        costo sarà:
                    </p>
                    <PLatex>{r`
                        C = {\color{yellow} ( F \cdot N_{foglie} ) } + {\color{Orange} ( F \cdot N_{blocchi} ) }
                    `}</PLatex>
                    <p>
                        Per gli indici <b>unclustered</b>, per i quali potremmo dover caricare e rimuovere lo stesso
                        blocco dalla memoria più volte, il costo sarà:
                    </p>
                    <PLatex>{r`
                        C = {\color{yellow} ( F \cdot N_{foglie} ) } + {\color{Orange} ( F \cdot N_{tuple} ) }
                    `}</PLatex>
                    <p>
                        Se si stanno effettuando query su più indici unclustered, il costo sarà:
                    </p>
                    <PLatex>{r`
                        C = {\color{yellow}\sum_k ( F_k \cdot N_{foglie_k} )} + {\color{Orange} \left( \prod_k F_k \cdot N_{tuple} \right)}
                    `}</PLatex>
                </Panel>
                <Panel title={"Costo di join"}>
                    <p>
                        Quante <i>unità di lavoro</i> costa effettuare un join tra due relazioni.
                    </p>
                    <p>
                        Varia in base al metodo di join utilizzato.
                    </p>
                    <p>
                        Utilizzando il metodo del <b>nested loop</b>:
                    </p>
                    <PLatex>{r`
                        C_{1 \times 2} = C_1 + ( N_{selezionati_1} \cdot C_2 )
                    `}</PLatex>
                    <p>
                        La scelta della colonna su cui iterare è quindi importante!
                    </p>
                </Panel>
            </Section>
        </div>
    )
}
