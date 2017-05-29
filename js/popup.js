var feedbackLink = document.querySelector(".contacts .btn");
var feedbackForm = document.querySelector(".feedback");
var overlay = document.querySelector(".overlay");
var close = document.querySelector(".modal-content-close");
var html = document.documentElement;


html.className = html.className.replace("js-off","js-on");

feedbackLink.addEventListener("click", function(event) {
	event.preventDefault();
	feedbackForm.classList.add("modal-content-show");
	overlay.classList.add("overlay-show");
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	feedbackForm.classList.remove("modal-content-show");
	overlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (feedbackForm.classList.contains("modal-content-show")) {
			feedbackForm.classList.remove("modal-content-show");
			overlay.classList.remove("overlay-show");
		}
	}
});

overlay.addEventListener("click", function(event){
	feedbackForm.classList.remove("modal-content-show");
	overlay.classList.remove("overlay-show");
});
