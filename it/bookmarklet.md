---
title: Utilizzare il Bookmarklet
date: 2017-05-12 16:41:00.000000000 +01:00
layout: page
type: page
published: true
status: publish
categories: []
tags: []
lang: it
---
In caso si desideri usare un browser diverso da Firefox o Chrome, è possibile usare il *bookmarklet*.

Un bookmarklet è un link che, una volta inserito all'interno dei preferiti del proprio browser, quando viene cliccato esegue un microscopico programma.  Il *bookmarklet* di Kjuicer farà una nuova versione della pagina web nella quale vi trovate, completa di una interfaccia utente per sottolinearla. Inoltre, se avete un account Kjuicer e vi siete loggati di recente, la salverà nella vostra *bacheca personale*.

Il pulsante di seguito è il bookmarklet. **Non va premuto**: è necessario alternativamente *cliccare sul tasto destro* del vostro mouse e salvarlo nei preferiti, oppure può essere *trascinato* direttamente nella barra dei preferiti.

[Kjuicer Bookmarklet ](javascript:var%20s=document.createElement('script');document.body.appendChild(s);s.onload=function(){KjuicerBookmarklet()};s.src='//kjuicer.gitlab.io/bookmarklet/bookmarklet.js';void(0);){:.center.control-width.waves-effect.btn-large.waves-light.btn.green.accent-4}

Il vostro browser potrebbe avere delle istruzioni specifiche per installare un bookmarklet. Di seguito trovate quelle per Microsoft Internet Explorer 11, e per Edge.

## Internet Explorer 11
Per abilitare le barre degli strumenti:
> Fai clic con il pulsante destro sul titolo della barra degli strumenti di Internet Explorer e quindi abilita l'elemento desiderato scegliendo Barra dei comandi, Barra Preferiti e Barra di stato dal menu.

oppure
> In Internet Explorer, premi ALT+V per visualizzare il menu Visualizza, premi T per visualizzare il menu Barre degli strumenti e quindi premi:
"C" per abilitare la barra dei comandi
"F" per abilitare la barra Preferiti
"S" per abilitare la barra di stato

[fonte](https://technet.microsoft.com/it-it/library/dn321455.aspx)

Una volta che la barra degli strumenti è visibile, è possibile trascinare dentro la stessa il *bookmarklet* con il mouse. Da quel momento in poi basterà andare sulla pagina web desiderata, e cliccare sul bookmarklet per poterla sottolineare con Kjuicer.

## Microsoft Edge
Per installare un bookmarklet in Edge è invece necessario aggiungerlo all'*Elenco di lettura*. Questa procedura si fa cliccando con il tasto destro del mouse sul bookmarklet, e selezionando la voce *Aggiungi a Elenco di Lettura*.
Una volta che il bookmarklet è stato aggiunto, e la pagina che ci interessa curare con Kjuicer è attiva, è sufficiente cliccare sul tasto con le tre linee orizzontali asimmetriche, che si trova in alto a destra nella barra degli strumenti (si veda la freccia rossa nell'immagine), scegliere il *tab* dell'*Elenco di Lettura*, rappresentato da una serie di righe anch'esse asimmetriche (si veda la freccia blu nell'immagine), e cliccare sul bookmarklet. A questo punto verrà creata la versione Kjuicer della pagina scelta.

![](/assets/edge.jpg){:.center}

[fonte](https://stackoverflow.com/questions/37986517/microsoft-edge-browser-does-not-support-javascript-bookmarklet-in-favorites)
