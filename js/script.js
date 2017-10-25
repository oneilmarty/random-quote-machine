var quotes = [
	{
		quote: "The night is darkest just before the dawn. And I promise you, the dawn is coming.",
		person: "Harvey Dent",
		movie: "The Dark Knight"
	},
	{
		quote: "Why do we fall? So we can learn to pick ourselves back up.",
		person: "Alfred",
		movie: "Batman Begins"
	},
	{
		quote: "It&rsquo;s not who we are underneath, but what we do that defines us.",
		person: "Rachel Dawes",
		movie: "Batman Begins"
	},
	{
		quote: "They may be drinkers, Robin, but they&rsquo;re still human beings.",
		person: "Batman",
		movie: "The Batman Movie"
	},
	{
		quote: "You gotta admit I played this stinkin&rsquo; city like a harp from hell.",
		person: "Penguin",
		movie: "Batman Returns"
	},
	{
		quote: "Meow.",
		person: "Catwoman",
		movie: "Batman Returns"
	},
	{
		quote: "Let&rsquo;s kick some ice!",
		person: "Mr. Freeze",
		movie: "Batman and Robin"
	},
	{
		quote: "I call this little number... Bane. Bane of humanity!",
		person: "Dr. Jason Woodrue",
		movie: "Batman and Robin"
	},
	{
		quote: "Vengeance isn&rsquo;t power. Anyone can take a life. But to give life... that&rsquo;s true power.",
		person: "Batman",
		movie: "Batman and Robin"
	},
	{
		quote: "It took God seven days to create paradise. Let&rsquo;s see if I can do better.",
		person: "Poison Ivy",
		movie: "Batman and Robin"
	},
	{
		quote: "Riddle me this, riddle me that, who&rsquo;s afraid of the big, black bat?",
		person: "Riddler",
		movie: "Batman Forever"
	},
	{
		quote: "Oh, you think darkness is your ally. But you merely adopted the dark; I was born in it, moulded by it. I didn't see the light until I was already a man, by then it was nothing to me but BLINDING!",
		person: "Bane",
		movie: "The Dark Knight Rises"
	},
	{
		quote: "He&rsquo;s the hero Gotham deserves, but not the one it needs right now. So we&rsquo;ll hunt him. Because he can take it. Because he&rsquo;s not our hero. He&rsquo;s a silent guardian, a watchful protector. A dark knight.",
		person: "Jim Gordon",
		movie: "The Dark Knight"
	},
	{
		quote: "Have you ever danced with the devil in the pale moonlight?",
		person: "Joker",
		movie: "Batman"
	},
	{
		quote: "That should be upside down. We know better now, don't we? Devils don't come from hell beneath us. No, they come from the sky.",
		person: "Lex Luthor",
		movie: "Batman v Superman: Dawn of Justice"
	}
];

var rand = quotes[Math.floor(Math.random() * quotes.length)];
var randCol = Math.floor(Math.random() * 9);
var randCol2 = Math.floor(Math.random() * 9);
var randCol3 = Math.floor(Math.random() * 9);
var randCol4 = Math.floor(Math.random() * 9);
var randCol5 = Math.floor(Math.random() * 9);
var randCol6 = Math.floor(Math.random() * 9);

function refreshPage() {
	window.location.reload();
}

document.body.style.backgroundColor = "#" + randCol + randCol2 + randCol3 + randCol4 + randCol5 + randCol6;
document.body.style.color = "#" + randCol + randCol2 + randCol3 + randCol4 + randCol5 + randCol6;
document.querySelector("#q-btn").style.backgroundColor = "#" + randCol + randCol2 + randCol3 + randCol4 + randCol5 + randCol6;
document.querySelector("#quote").innerHTML = "\"" + rand["quote"] + "\"";
document.querySelector("#person").innerHTML = "-" + rand["person"] + " in " + rand["movie"];