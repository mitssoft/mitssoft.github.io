function closeWelcome() {
	var w_cont = document.getElementById("welcome_container");
	var w_cont_parent = w_cont.parentElement;
	w_cont_parent.removeChild(w_cont);
}