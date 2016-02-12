function upperCaseFirstLetters(aStr){
	var cleaned = aStr.trim();
	var words = cleaned.split(" ");
	var separate = words.charAt(0);
	var cap = separate.toUpperCase();
	var done = cap + words.substring(1);
}
//my attempt


function upperCaseFirstLetters(aStr){
	var cleaned = aStr.trim();
	var words = cleaned.split(" ");
	var output = [];
	for (var i=0; i < words.length; i++) {
		var word = words[1];
		var upperCased = word.charAt(0).toUpperCase() + word.substring(1);
		output.push(upperCased);
	}
}
//working version