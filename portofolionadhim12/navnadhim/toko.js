const navNavbar = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
	navNavbar.classList.toggle("active");
};

/*const ultoko = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
	ultoko.classList.toggle("active");
};*/

const burgger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
	if (!burgger.contains(e.target) && !navNavbar.contains(e.target)) {
		navNavbar.classList.remove("active");
	}
});

function konfirmnasa() {
	var inama = document.nasakontak.nama.value;
	var iemail = document.nasakontak.emailanda.value;
	var inohp = document.nasakontak.nohpanda.value;
	var kosong = "Wajib diisi";

	if (inama == "") {
		alert("Namanya" + kosong);
	} else if (iemail == "") {
		alert("Emailnya" + kosong);
	} else if (inohp == "") {
		alert("No hpnya" + kosong);
	} else {
		document.nasakontak.submit();
	}
}
