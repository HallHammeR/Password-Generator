var upperCase = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];
var lowerCase = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];

var characterTypes = [];

var passwordLength;
var userUpperCase;
var userLowerCase;
var userNumbers;
var userSpecialChar;

var randomlySelectedArray;
var randomlySelectedCharacter;

var passwordArr = [];
var password = "";

function userPrompt() {
	password = "";
	document.getElementById("messageInput").value = "";

	characterTypes = [];
	randomlySelectedArray = "";
	randomlySelectedCharacter = "";

	passwordLength = slider.value;

	if (passwordLength < 8 || passwordLength > 128) {
		alert("Enter number between 8-128");
	} else {
		userUpperCase = confirm("Do you want uppercase letters?");
		userLowerCase = confirm("Do you need lowercase letters?");
		userNumbers = confirm("Would you like some numbers?");
		userSpecialChar = confirm("Do you want speical characters?");

		if (userUpperCase === true) {
			characterTypes.push(upperCase);
		}
		if (userLowerCase === true) {
			characterTypes.push(lowerCase);
		}
		if (userNumbers === true) {
			characterTypes.push(numbers);
		}
		if (userSpecialChar === true) {
			characterTypes.push(specialCharacters);
		}

		if (characterTypes.length < 2) {
			alert("Select more than 1 character type for security");
		} else {
			for (let i = 0; i < passwordLength; i++) {
				randomArray(characterTypes);
				password += randomChar(randomlySelectedArray);
			}

			document.getElementById("messageInput").value = password;
		}
	}
}

function randomArray(array) {
	var randomIndex = Math.floor(Math.random() * array.length);
	randomlySelectedArray = array[randomIndex];
}

function randomChar(arr) {
	var randomIndex = Math.floor(Math.random() * arr.length);
	randomlySelectedCharacter = arr[randomIndex];
	console.log("random character: " + randomlySelectedCharacter);
	return randomlySelectedCharacter;
}

var slider = document.getElementById("sliderr");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
	output.innerHTML = this.value;
};
