---
layout: page
title: Guida rapida
lang: it
ref: get-started
---

## 1. Creare un account
La creazione di un account permette di tenere traccia dei documenti e salvarli. Verranno visualizzati sul *Wall* personale, che è la propria collezione. Si crea un nuovo documento quando si fa clic sulla estensione per evidenziare una pagina web (vedi punto 2 qui di seguito per installarla, o il punto 4 più avanti per sottolineare) o se ne carica uno. L'account permette anche di decidere se rendere un documento visibile a tutti e lasciare che compaia sul *Wall* pubblico o meno, e se le sottolineature sono aperte alle modifiche da parte di altri utenti oppure no. Un documento senza proprietario è di default pubblico, e le sue sottolineature sono modificabili da chiunque. L'account permette anche di segnarsi i preferiti, che possono essere fra i propri documenti o quelli di altri: dal menu informazioni in basso a destra di ogni pagina analizzata con il Kjuicer si può includere una pagina tra i preferiti facendo clic sull'icona con la stella, che compare nella finestra delle informazioni. I documenti cui è stata attribuita una stella compaiono nel *Wall* dei Preferiti. Sempre dalla pagina *Info* si può scegliere se rendere il documento pubblico o meno, e se permettere le modifiche delle sottolineature o no.

Per ora si può creare un account Kjuicer solo autenticandosi attraverso un account Google. Gli account aperti con Mozilla Persona sono ancora utilizzabili ma, dal momento che il servizio Persona è stato disattivato da Mozilla e non è più disponibile, è necessario reimpostare la password. Un post sul blog è dedicato a spiegare questa semplice procedura.

Per creare l'utente o accedere tramite Google: cliccare sul tasto di login in alto a destra di ogni pagina Kjuicer (ad esempio si può usare questa: <a href = "http://alpha.kjuicer.com/cache/4549/show/#l:1,c:on" target="_blank">Kjuicer</a>), poi scegliere Google e consentire a Kjuicer di accedere alle credenziali di base dell'account Google.

## 2. Installare l'estensione oppure...
L'estensione permette di salvare una "fotografia" di una pagina web standard e trasformarla in un documento che può essere evidenziato con Kjuicer.

Kjuicer attualmente funziona al meglio su Firefox e Chrome, e abbiamo sviluppato un'estensione per entrambi i browser.
Per installarla, si prega di fare riferimento al link appropriato a seconda del browser:
  - [Estensione per Firefox][kj1]
  - [Estensione per Chrome][kj2]

Non appena si installa l'estensione, comparirà un pulsante con uno spremiagrumi stilizzato sulla barra degli strumenti del browser. Una volta scelta la pagina web che si desidera sottolineare, basta cliccare sulla estensione: verrà creata una versione Kjuicer di quella stessa pagina, pronta per essere evidenziata. Se si dispone di un account e si è effettuato il login, la pagina verrà salvata automaticamente sul vostro *Wall* personale.

Per tutti gli altri browser è disponibile un bookmarklet a cui è dedicata [un'intera pagina](bookmarklet.html)

## 3. Leggere una pagina Kjuicer
Se si desidera leggere una pagina già sottolineata con Kjuicer, è sufficiente cliccare sui pulsanti colorati in basso:
> il **pulsante giallo** vi porterà alla sintesi più breve, che contiene tutto ciò che è stato evidenziato in giallo;

> il **pulsante verde** vi mostrerà un riepilogo più lungo, composto dalle evidenziature gialle e verde chiaro, mentre

> il **pulsante verde scuro** vi proporrà tutto il contenuto evidenziato, quindi giallo + verde chiaro + verde scuro, che dovrebbe essere la sintesi più estesa e completa del contenuto originale.

> il **pulsante bianco** invece vi mostrerà il contenuto originale.

Un click su una qualsiasi parola o frase di un riassunto istruirà il Kjuicer di zoomare, e mostrare il contenuto al successivo livello di sintesi: un po come nella navigazione una mappa, vi mostrerà maggiori dettagli. Se si sceglie un colore cui corrisponde una sintesi più breve, il Kjuicer tornerà indietro alla parola o frase precedentemente selezionata, tendendo il segno della vostra navigazione.

Nel caso in cui si desiderasse modificare le sottolineature, è sufficiente cliccare sul pulsante *Edit* nell'angolo in basso a sinistra.
> Se avete creato il documento, o è modificabile, lo sfondo della barra di navigazione diventerà bianco e si potrà selezionare l'evidenziatore del colore desiderato e iniziare a sottolineare o modificare.

> Nel caso in cui il documento fosse stato creato da qualcun altro e non fosse modificabile, verrà richiesto se si desidera **clonarlo** (anche chiamato *fork*), cioè copiarlo e creare la propria versione, completa di sottolineature pronte per la modifica.

## 4. Sottolineare con Kjuicer
Non appena si clicca sulla estensione o sul bookmarklet, o si sceglie **Edit** su una pagina Kjuicer modificabile, lo sfondo della barra di navigazione diventerà bianco e si potrà selezionare l'evidenziatore desiderato. Se non è ancora modificabile leggete gli ultimi due paragrafi del punto 3.

Dopo aver selezionato un evidenziatore questi rimarrà attivo finché non se ne sceglie un altro, o lo si disattiva cliccandoci sopra nuovamente (questo viene utile se si vuole selezionare senza evidenziare, ad esempio quando si desidera cercare una parola su internet), e qualsiasi testo selezionato verrà evidenziato nel colore desiderato.

È possibile cambiare il colore dell'evidenziatore scegliendone uno diverso, o anche utilizzando i tasti di scelta rapida: 1 attiva l'evidenziatore giallo, 2 quello verde chiaro, verde scuro 3, o 4 per attivare il bianco, che è il cancellino.

Affinché il meccanismo di sintesi funzioni correttamente, creando note in ordine di priorità e riassunti di dimensioni diverse, si dovrebbe evidenziare tenendo in mente che:
> Il testo evidenziato deve rimanere comprensibile alla rilettura, e vanno inclusi spazi e punteggiatura necessari allo scopo;
> Il giallo deve essere utilizzato per i concetti più importanti, il verde chiaro per le parti di supporto, il verde scuro per tutto il resto che si desidera comunque tenere evidenziato;

**Quando si è terminato di sottolineare**, o si desidera controllare i risultati, fare clic sul pulsante di **spunta** nell'angolo in basso a sinistra.

**Se si è fatto un errore** è possibile utilizzare i pulsanti **undo** o **redo** nella parte destra della barra inferiore: undo cancella l'ultima sottolineatura, redo la rimette se se ne è eliminata una di troppo.


[kj1]: https://addons.mozilla.org/en-US/firefox/addon/kjuicer/
[kj2]: https://chrome.google.com/webstore/detail/kjuicer/kgjcgankonbfhdgpfdbggfifpcabocno
