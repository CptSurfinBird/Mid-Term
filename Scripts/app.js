// setup your IIFE (Immediately Invoked Function Expression)
/*var travelReport = (function () {

"use strict";
console.log("App Started...")




})();

IntroParagraph*/

function replaceContent() {
	console.log("App started");
		var IntroParagraph;
		var Folegandros;
		var Alonissos;
		var Spetses;
		var Amorgos;
		var Syros;
		var Milos;

			IntroParagraph = document.getElementById("IntroParagraph");

			if (IntroParagraph != null) {
				IntroParagraph = document.getElementById("IntroParagraph");
				IntroParagraph.innerHTML = "Now is the time to travel to Greece. The country may be going through an economic crisis, but many travellers say that it hasn't impacted the experience of visiting. Plus, there may be some great deals. Greece has 1,400 islands, though only 230 of them are inhabited. And while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in Greece, too.";
			};

			else if (Folegandros != null) {
				Folegandros = document.getElementById("Folegandros");
				Folegandros.innerHTML = "Folegandros is almost a Greek cliché, full of beautiful whitewashed houses with bright blue doors lining cobblestoned streets on steep cliffs. Rugged and remote, without chain hotels or package tours — not even a bank or ATM — and accessible only by ferry, the volcanic island boasts solitude in spades, secluded beaches, and incredible sunsets.";	
			};

			else if (Alonissos != null) {
				Alonissos = document.getElementById("Alonissos");
				Alonissos.innerHTML = "Off the mainland, this island, whose surrounding waters are a designated marine park full of seals and dolphins, is a nature lover's dream. The spectacular spot's crystal clear waters and beautiful beaches are perfect for diving, and its lush flora and dense forests ideal for hikes. Since the rich landscape is chock full of indigenous herbs, it's also known for its traditional medicine, and home of the International Academy of Homeopathy.";
			};

			else if (Spetses != null) {
				Spetses = document.getElementById("Spetses");
				Spetses.innerHTML = "This bohemian paradise is more Côte d'Azur than Grecian island. Spetses was hot in the '60s, when it hosted Marilyn Monroe and Elizabeth Taylor, and remains a swanky summer retreat for Athens' glitterati to this day, full of fancy hotels, mansions and yachts, and stylish boutiques. Aside from a handful of locally-owned cabs, the four-mile-long island has banned cars in town, giving it a refreshingly 19th-century vibe, with horse-drawn carriages being a common sight.";
			};

			else if (Amorgos != null) {
				Amorgos = document.getElementById("Amorgos");
				Amorgos.innerHTML = "Shipwrecks, sea caves and beautiful clear waters make Amorgos popular with snorkelers, but the mountainous island is the perfect compromise between unwinding and adventure, boasting beautiful beaches but also hiking, scuba diving and rock-climbing. One of the island's main attractions is the 11th-century cliffside monastery of Panayia Hozoviótissa, which is precariously carved into a cliff.";
			};

			else if (Syros != null) {
				Syros = document.getElementById("Syros");
				Syros.innerHTML = "A favourite Athenian escape and former shipowners' vacation spot full of grand mansions, Syros is little known to foreigners. Famous for its neoclassical architecture and perfectly preserved heritage, its capital, Ermoupolis, was a 13th-century Venetian-built town and important trade and industrial centre, and boasts giant churches and beautiful villas, a stunning town hall, and labyrinthine streets and stairways.";
			};

			else if (Milos != null) {
				Milos = document.getElementById("Milos");
				Milos.innerHTML = "This volcanic island, with catacombs and ancient iron mines to explore, is dramatically rugged, and famous for its stunning rock formations. Often likened to a moonscape, it's also known for its hot springs, the ancient Venus De Milo statue that was found here, and for its diversity of incredible beaches. Known as 'the island of colours' it's home to around 80 beaches — some only accessible by boat — ranging from stunningly white, to striking black, and even unusual red and grey. However, each beach has the same Evian-clear turquoise waters, and is surrounded by a rugged mountain landscape.";
			};
replaceContent();

/*"use strict";
// contact page stuffs
$(document).ready(function(){
		console.log("Contact Page");
});

$("#form_submit").click(function(){
	var first_name = $("#firstName").val();
	var last_name = $("#lastName").val();
	var Email = $("#email").val();
	var Comments = $("#comments").val();

	console.log("first_name: " + firstName);
	console.log("last_name: " + lastName);
	console.log("Email: " + email);
	console.log("Comments: " + comments);
});

// IIFE
function replaceContent() {
	console.log("App started");
		var IntroParagraph;
		var Folegandros;
		var Alonissos;
		var Spetses;
		var Amorgos;
		var Syros;
		var Milos;

			IntroParagraph = document.getElementById("IntroParagraph");

			if (IntroParagraph != null) {
				IntroParagraph = document.getElementById("IntroParagraph");
				IntroParagraph.innerHTML = "Now is the time to travel to Greece. The country may be going through an economic crisis, but many travellers say that it hasn't impacted the experience of visiting. Plus, there may be some great deals. Greece has 1,400 islands, though only 230 of them are inhabited. And while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in Greece, too.";
			};

			if (IntroParagraph == null) {
			Folegandros = document.getElementById("Folegandros");

				if (Folegandros != null) {
				Folegandros.innerHTML = "Folegandros is almost a Greek cliché, full of beautiful whitewashed houses with bright blue doors lining cobblestoned streets on steep cliffs. Rugged and remote, without chain hotels or package tours — not even a bank or ATM — and accessible only by ferry, the volcanic island boasts solitude in spades, secluded beaches, and incredible sunsets.";

				Alonissos = document.getElementById("Alonissos");
				Alonissos.innerHTML = "This project was done with pseudo code, a fake computing language which helps with planning a project.";

				my_project3 = document.getElementById("my_project3");
				my_project3.innerHTML = "";
				}

				if (Folegandros == null) {
					contact_me = document.getElementById("contact_me");
					contact_me.innerHTML = "Feel free to send me a message";
				}}};
replaceContent();*/