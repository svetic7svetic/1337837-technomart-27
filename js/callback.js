var callbacklink = document.querySelector(".write-us");
			
var callbackpopup = document.querySelector(".modal-callback");
var callbackclose = callbackpopup.querySelector(".modal-close");

var callbackform = callbackpopup.querySelector("form");
var username = callbackpopup.querySelector("[name=name]");
var useremail = callbackpopup.querySelector("[name=email]");
var usermessage = callbackpopup.querySelector("[name=message]");

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("name");
	}	catch (err) {
		isStorageSupport = false;
	}

callbacklink.addEventListener("click", function (evt){
	callbackpopup.classList.add("modal-show");

	if (storage) {
		username.value = storage;
		useremail.focus();
	} else {
		username.focus();
		}
});

callbackclose.addEventListener("click", function (evt){
	evt.preventDefault();
	callbackpopup.classList.remove("modal-show");
	callbackpopup.classList.remove("modal-error");
});

callbackform.addEventListener("submit", function (evt) {
	if (!username.value || !useremail.value || !usermessage.value) {
	evt.preventDefault();
	callbackpopup.classList.remove("modal-error");
	callbackpopup.offsetWidth = callbackpopup.offsetWidth;
	callbackpopup.classList.add("modal-error")
	console.log("Нужжно ввести имя, почту и сообщение.");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("username", username.value);
			console.log("Сохранили имя.");
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (callbackpopup.classList.contains("modal-show")){
			callbackpopup.classList.remove("modal-show");
			callbackpopup.classList.remove("modal-error");
		}
	}
});