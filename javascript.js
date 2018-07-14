var quotes = [
	'Nothing is impossible, the word itself says \"I\'m possible\"! <br>- Audrey Hepburn',
	"I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. <br>- Maya Angelou",
	"Whether you think you can or you think you can\'t, you\'re right. <br>- Henry Ford",
	"Perfection is not attainable, but if we chase perfection we can catch excellence. <br>- Vince Lombardi",
	"Life is 10% what happens to me and 90% of how I react to it. <br>- Charles Swindoll",
	"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. <br>- Oprah Winfrey",
	"Remember no one can make you feel inferior without your consent.  <br>- Eleanor Roosevelt",
	"I can't change the direction of the wind, but I can adjust my sails to always reach my destination. <br>- Jimmy Dean",
	"Believe you can and you're halfway there. <br>- Theodore Roosevelt",
	"To handle yourself, use your head; to handle others, use your heart. <br>- Eleanor Roosevelt",
	"Too many of us are not living our dreams because we are living our fears. <br>- Les Brown",
	"Do or do not. There is no try. <br>- Yoda"
]

function newQuote(){
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
