var maplink = document.querySelector(".mini-map");

var mappopup = document.querySelector(".modal-map");
var mapclose = mappopup.querySelector(".modal-close");

maplink.addEventListener("click", function (evt){
	mappopup.classList.add("modal-show");
});

mapclose.addEventListener("click", function (evt){
	evt.preventDefault();
	mappopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (mappopup.classList.contains("modal-show")){
			mappopup.classList.remove("modal-show");
		}
	}
});