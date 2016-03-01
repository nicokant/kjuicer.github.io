---
layout: post
title: Instructions for Unibocconi
date: 2016-03-1 12:36:43.000000000 +01:00
type: post
published: true
status: publish
categories: []
tags: []
---
# 1 Installation
Since the KJuicer is not a program but a service rendered through the browser, a real installation is not necessary. But the first time you will have to go through a few steps in order to use it.

## 1.1 Create an account/login
While it is possible to read documents that have been highlighted through the KJuicer, or highlight them simply by using the Extensions or the Bookmarklet, in order to be able to save your own versions and store them in your personal Wall, as well as identify your documents on the public Wall, you need an account.

The KJuicer uses the open source infrastructure provided by Mozilla (the creators of Firefox) called Persona. If you already have an account with Persona you will be able to access the KJuicer infrastructure just by logging into your Persona Account, otherwise you can create the account.

To create an account, if you are not already on a KJuicer page go to [http://unibocconi.kjuicer.com/cache/](http://unibocconi.kjuicer.com/cache/), and/or simply click on the Login button. Choose the Mozilla Persona option. It will present you with a new window where you can enter your email and then either login directly, if you already have a Persona account, or create a new account by simply entering a password. Mozilla Persona will send you a confirmation link to the email address provided, and by clicking it you will have your account activated.

As soon as the account is created and activated the Login button will be replaced by a Logout one, and you will have a Private Wall where all your personal KJ pages will be stored.

Currently the KJuicer is used on web pages, or by uploading your own documents.

## 1.2 Use on web pages
If you want to use the KJ on generic web pages, two instruments are available:

* The extension, available for Firefox and Chrome; 
* The bookmarklet, for other browsers. 

You can install both by going to [this page](http://alpha.kjuicer.com/cache/extension/)

***Please note***: You might receive a security message that warns that you are visiting a non safe page, or you are installing a component that is not safe. This is due to the fact that the service is still provided on a temporary server, suitable only for a few users, therefore we have not yet purchased the final SSL certificate. But it is a professional and reliable service, and likewise our code. Confirm your browser that you are aware of the risks, and proceed by visiting the page or by installing the component. If it asks you whether to add a security exception for our page, you can proceed to do so.

### 1.2.1 The extension
On the link in [Paragraph 1.2](#use-on-web-pages) above you will find the two links for the Firefox and Chrome Extensions, and the instructions.

Once the Extension has been installed you will see a small icon with a stylized juicer on your browser's toolbar. When you find a generic web page that you wish to underline with the KJuicer simply press it. In the Use section below you will find further details.

### 1.2.2 The bookmarklet
On the link in Paragraph 1.2 above you will find also the bookmarklet: it is the red button named "KJ Bookmarklet".

If you use a browser different than Firefox or Chrome which does support bookmarklets, you should be able to click and drag the Bookmarklet onto the bar of your bookmarks / favorites. The Bookmarklet is a bit of a special bookmark: when clicked, instead of sending the user to a different web page, it executes a piece of Javascript code.

Keep in mind that Firefox or Chrome are currently more effective while using the KJuicer, because they use standard and easily testable technologies. In the event that you wish to use IE we know that the KJuicer is quite well supported from version 11, while 10 and 9 might give some problems.

For Edge, the newest Windows 10 browser: the KJuicer works, but the bookmarklet is slightly more cumbersome to install. The general procedure is explained well in [this page](http://www.itworld.com/article/2954526/personal-technology/how-to-manually-install-bookmarklets-in-microsoft-edge.html).

***In short***: you need to ask Edge to display the bookmarks' bar, and insert a bookmark there. We suggest bookmarking [this page](http://unibocconi.kjuicer.com/cache/) which will give you the KJuicer's name. Then you want to open the file manager and edit the bookmark, which is actually a file, by replacing the URL with the JavaScript code of the bookmarklet (see later). Usually before doing so you have to tell the File Manager to display also hidden files, and you do it from the View menu of the File Manager itself.  
The address where you will find the bookmark in the File Manager of your Windows 10 PC should be this:

```
C:\Users\{username}\AppData\Local\Packages\Microsoft.MicrosoftEdge_{randomstring}\AC\MicrosoftEdge\User\Default\Favorites\Links
```

```{username}``` and ```{randomstring}``` vary depending on the PC, but it should not be difficult to find them. 
To edit the bookmark and turn it in the KJuicer bookmarklet just click on its name with the right button, and replace the url with this string:

```
javascript:{var%20s=document.createElement('script');s.src='//unibocconi.kjuicer.com/static/bookmarklet/js/bookmarklet.js';document.body.appendChild(s);s.onload=function(){init('unibocconi.kjuicer.com')};};void(0);
```

## 1.3 Loading your own documents
To underline and extract hierarchical summaries on your own documents, or documents that are not available within HTML web pages, you can use the loader. The loader allows you to upload html documents in the KJuicer. If documents are not html yet, they must first be turned into html. To convert we suggest two methods:

* Save or export the document in html from the instrument that is being used to create them. Many editors now allow that, including Word, Libre / Open Office, etc.
* Convert the document. The most complex conversion is usually for PDF documents, and for this we suggest the free online conversion tool provided [here](http://www.pdftohtml.net/), so far the best we have found.

The KJ loader is located [here](http://unibocconi.kjuicer.com/cache/save/), or you can access it from the Upload (experimental) button from the unibocconi.kjuicer.com website, or from a page with the KJuicer.
In case you use Firefox, an alternate and slightly faster way is to open the html page from your browser and click on the KJuicer extension and directly create the KJuicer page.

---

# 2 Use
Both the Extensions and the Bookmarklet are activated by pressing them, and they will:

* Create a cached version of the original page, i.e. the KJ will make a snapshot and will save it with a new web address; this allows us to remove any code that might interfere with the KJ functionality and to lock the text in its place, since updates of the page could mess highlights up;
* Provide the KJuicer's user interface.

## 2.1 Features

### 2.1.1 Premises
The KJuicer is a tool that allows the user to extract his own notes out of a text just by underlying it. Since the user can underline with different colors and priority, he can choose to highlight core concepts and enrich them with two additional sets of less meaningful details. The tool then uses the highlights to create corresponding layers of text, that become precious to navigate it, for himself or for other users.

When text is highlighted, the KJ directly builds such new layers, which we mostly refer to as Levels, without the need to instruct it to do so. The new Levels are immediately available for viewing and reading.
Each Level is a differently sized summary of the original content, built by extracting the text that has been highlighted: the smallest summary is created by extracting texts underlined in yellow; the second Level is built by displaying all of the text highlighted in yellow, but expanded with the content highlighted in light green; the last Level displays all of the highlighted text, and is therefore the longest summary. The navigation mechanism allows to use these three Levels in a much more useful way than mere summaries though. Use is the best way to realize this last statement.

A few points to bear in mind follow.
The Levels are organized with the level of the original content as the basis, and the other layers might be viewed as structures "above" it. The following figure tries to represent what we mean:

![]({{site.url}}/post_assets/instructions/levels.png)

The various text levels remain linked together thanks to the navigation mechanism. We use a picture again to make this concept, hoping to succeed:

![]({{site.url}}/post_assets/instructions/4levels.png)

From now on when we refer to moving down or zooming in the text, we mean switching to a layer with more details, down to the original content -which for now is the bottom of the newly formed text structure; when we refer to moving up or zooming out one or more Levels we mean switching to a layer with less details, climbing up to the yellow one which it is the topmost.

## 2.2 Underline
Underlining is done using the ***highlighters' drawer***.

It looks like this:

![]({{site.url}}/post_assets/instructions/kj_bar_highlights.png)

To reach the ***highlighters' drawer*** you need to be at the level of the original document, since right now you can highlight only at that level. If you are not already at the level of the original document, click to the “+” lens button of the ***navigation drawer*** crescent menu:

![]({{site.url}}/post_assets/instructions/kj_bar.png)

until it disappears:

![]({{site.url}}/post_assets/instructions/kj_bar_l4.png)

Then to change to the ***highlighters' drawer*** and make it visible, click on the ***"^" shaped button***, placed at the center bottom of the crescent.

The first three markers correspond to the three different Levels of emphasis, where Yellow is the most important or highest in priority, the second on or Light Green is used for the second Level and slightly less important highlights and the third or Dark Green is the last level of priority and should be used for everything else. The fourth, the White marker, displayed in the user interface is an eraser.

By selecting an highlighter the cursor will change to that particular highlighter, and from that moment on selecting the text will make it underlined in the selected highlighter's color, or make the highlight disappear if you chose the eraser. In case a highlight was already present, by selecting the text you are overriding the previous work and the highlight will be updated to your new choice.

A special note for mobile use, with a smartphone or a tablet: given that a web-app cannot control the mobile device user interface, when you underline on mobile you will need to perform an additional operation: after selecting the text a cyan “HIGHLIGHT” button will appear on top of the page, and text will be highlighted only after pressing such button.

After any highlight, an ***undo*** button will appear at the bottom left of the page. It can help in case you need to undo the last highlight. You can undo up to three highlights made in the current session, and you can ***redo*** them with the redo button, which appears at the bottom right corner if you undo an operation. Both buttons are shaped like a curved arrow, as in most user interfaces: the arrow pointing left activates the undo (cancellation of the last underlying operation), while the right pointing curved arrow activates the redo (it restores the last underlying that was canceled).

### 2.2.1 How to underline
Since the text that will be underlined will then used by the KJ to extract a number of text layers corresponding to the number of colors used for highlighting, the Levels, it is very important to keep in mind:

1. The highlights are hierarchical, i.e.: the yellow color should be used to underline crucial content, the light green for things a little less important, the dark green to mark everything else that need to be marked; currently Levels are only three, but soon it will be possible to add additional ones;
2. Highlighted text should make sense if re-read by itself. While this is true in absolute terms for yellow underscores, for light green highlights the content that needs to remain readable is the *yellow combined with the light green*; dark green highlights, instead, should remain readable *together with all the other highlights*. It sounds complicated, but it will become clear very quickly just by trying.

3. To fine tune one's ability to underline hierarchically, it is useful to go to the results of the highlights in the resulting summaries and check them. This is easily done by clicking on the “v” shaped button at the top of the ***highlighters' drawer***, and then clicking the “-” lens: one click will get you to the third Level (which is made up by all highlights: dark green, light green and yellow ones), a second one will show the second layer (light green and yellow ones), and one last click will get you to the first one (only yellow-underlined text).

Point 3 instructions are also very handy when studying a text: at every reference of the script to previously explained steps, the navigation mechanism allows to clarify and integrate them with the newly explained content in just three or four clicks. The new material will also act as a check for the highlighting job: you will immediately see if all the necessary elements have been marked. The navigation interface will be explained in further details in the next section;

Some users find it useful to highlight everything interesting with dark green first, then select the light green parts among the dark green ones and finally choose yellow highlights; others find it faster and/or more effective to build directly the yellow / light green / dark green hierarchy, which at first sight might look more complicated. Every user should find his own way.

### 2.2.2 Forking documents
Documents that are not KJuiced by yourself are generally "protected": the highlights cannot be changed. In such cases, trying to open the highlighters' drawer will show this version of the user interface:

![]({{site.url}}/post_assets/instructions/kj_bar_fork.png)

By pressing button "Fork me!" the KJ will create a new version of the current document, with its own link, complete with all of the original's highlights, but they can now be modified. It will also store it in your Personal Wall.

## 2.3 Navigation

### 2.3.1 Commands
The navigation interface is displayed when the navigation drawer is active. The ***navigation drawer*** looks like this:

![]({{site.url}}/post_assets/instructions/kj_bar.png)

If you are on the ***highlighters' drawer***, to show the navigation drawer simply press the ***"v" shaped button*** at the top of the user interface's crescent of the highlighters' drawer, which will make the **navigation drawer** appear.

To zoom out and go back to a higher Level, one with a more concise summary, use the "-" lens button; when you reach the yellow Level, the shortest summary layer, the "-" lens button will disappear:

![]({{site.url}}/post_assets/instructions/kj_bar_l1.png)

To move down, or zoom into a Level with more details, just use the lens with the "+". When you have reached the level of the original text and you can't go further, the lens with the “+” will disappear from the user interface, as in the following image:

![]({{site.url}}/post_assets/instructions/kj_bar_l4.png)

And the “^” shaped button will re-appear, indicating that if you want you can access the **highlighters' drawer** and underline the text, or modify existing highlights.

You can zoom in also by clicking on a specific word or sentence: the difference is that in this case the KJ will take you to a more detailed layer at the point where the sentence on which you clicked is. The chosen sentence will briefly flash, so that you can identify it easily. Bear in mind that when you click on a sentence the KJ will use it as a reference point for the next zoom-ins or zoom-outs.

### 2.3.2 Other features found in the navigation drawer 
In the navigation drawer, there are three more buttons:

1. ***the Lamp***: it switches on and off the highlight colors to improve readability, if requested, in all Levels; the fact that they are not visible does not mean they are no longer there;
2. ***the Sharing*** button: it creates a link to share the "kjuiced" document (the document which has been underlined using the KJ); you can send the link in a mail or message, or share it by other means; bear in mind that a document might be covered by copyright, and therefore sharing it might constitute a copyright infringement;
3. ***the Statistics*** button, the one representing a bar chart: it will pop up some statistics on the underlined texts at the different Levels, and will show the percentage of the highlighted text in relation to the total written content; at the moment this function is useful when highlights have been completed, since otherwise the numbers are less relevant.

---

# 3 Website menus
While on a KJ page, you will see the top bar:

![]({{site.url}}/post_assets/instructions/menu_new.png)

Let's have a look at the functions in it:

## 3.1 KJuicer
This is a link that will bring you to the KJuicer.com website. By having a Persona account you will be registered on the KJuicer.com website as well, and you will be able to see the Public Wall, which comprises also KJuiced documents unrelated to your work in the class, and is accessible to other users.

## 3.2 Home Page
The Home Page link brings you to a brief presentation of the KJuicer.

## 3.3 Extension
A link to install the Kjuicer's Extensions for Firefox and Chrome or the Bookmark, as explained in [Section 1 - Installation](#installation).

## 3.4 Wall
This is a drop down menu that will propose you access to either your Personal Wall or the Public Wall.

### 3.4.1 The Personal Wall
The Personal Wall is your collection of documents/highlighted versions, either created, forked or uploaded.  
So a document is added to your Personal Wall when:

* You click on the Extension to cache and underline a web page as described above in [Section 2](#use), or
* Every time you choose to fork an existing KJuiced document -[see Section 2.2](#underline)-, or
* When you upload your own document.

### 3.4.2 The Public Wall
The Public Wall at unibocconi.kjuicer.com lists all of the documents and highlighted versions created in your class. In the alpha.kjuicer.com version of the KJuicer website the Public Wall shows all of the public KJuiced documents created by all users.

### 3.4.3 The Walls' elements
In the Walls you fill find the full list of documents, be them yours or others'.
This is an example:

![]({{site.url}}/post_assets/instructions/wall.png)

Each rectangle of the Wall identifies an item. Its elements are:

* ***ID and description*** – A unique number identifier corresponds to each set of Highlights, and it has a description. A document might have more than one set of highlights available. By clicking on the document's ID you can see a particular document's set of highlights.
* ***Source*** – It shows the original link of the document, usually a web page. It could also show a file's path, if it has been uploaded. If you uploaded it, the path will be a reminder or where it is on your PC, otherwise it will not mean anything to you.
* ***Owner*** – The Gravatar symbol or the user's icon tells you, when available, infos about the user that created that particular set of highlights. In the Personal Wall the owner is always you, in the Public Wall you might find your course peers.
* ***Last edit*** – This field shows how long ago this set of highlights has been modified.

## 3.5 Upload (experimental)
This is the function that allows you to upload an html document of your choice. Please [see Section 1.3](#loading-your-own-documents) for using it.

## 3.6 Related
This is a drop down button that -when present- will show you other sets of highlights for the document displayed, if there are any.  
It will show a list of numbers, and by clicking on a specific one you will be able to access it and read it with the corresponding set of highlights. If it is not write protected you should also be able to modify it, which is always the case if you are the owner of the set of highlights.

## 3.7 Contact us
It is a ``mailto:info@kjuicer.com`` button: when pressed it will pull up your predefined mail client and pull up a “Compose mail” window with the info@kjuicer.com address pre-filled.

In case you do not use the mail client of your pc/mobile device you can right click/long press the Contact us button, copy the address and paste it in the address field of the desired mail interface to write to us.  
Please do not hesitate to contact us in case you need support, and the more so if you encounter a bug and wish to report it. 

### 3.7.1 Reporting Bugs
In order to report a bug, it is very important to send us the information that allows us to solve the problem. 
Among them there are:

* Which Operating System (Windows, Apple or which Linux distribution) or Mobile platform you are working on (Android, iOS, etc);
* The version of such OS (Windows 10, 8, OsX, Ubuntu 15.10 or Fedora 23, or else) for laptop/desktops; the version of the Android or iOS or else for a mobile device;
* The browser's name and version;
* What you were doing when the bug happened, and possibly
* The steps that we should follow to reproduce it, with a mention if the bug happens all the time you perform such actions or if it happens only sometimes.

We will get back to you to report if we could fix it or ask for additional information.

We know that reporting bugs is a little nuisance, but please know that we are very grateful if you do, and we will put our best effort in addressing them as effectively and fast as we can.

## 3.8 Blog
By clicking on the Blog menu you will be brought to our Blog, where you can find some info and news on our work.

## 3.9 Login/Logout
As explained in [Section 1.1](#create-an-accountlogin) this is the access to the Login/Logout functions, and if you do not yet have an account by clicking on the Mozilla Persona option you will be prompted to create one.

---

# 4 Notes
Images and tables for the time being are not carried in the summaries. It is still a Beta version, and we hope to put that too in place within a reasonable time.
