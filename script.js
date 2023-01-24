const hamburgerIcon = document.querySelector(".hamburger-icon");
const close = document.querySelector(".close");
const modal = document.querySelector(".modal");
const allLinks = document.querySelectorAll(".links2");
const header = document.querySelector(".first-section");
const secondSection = document.querySelector(".second-section");
const navBar = document.querySelector(".nav-bar");

hamburgerIcon.addEventListener("click", function () {
	modal.style.display = "grid";
});

function closeModal() {
	modal.style.display = "none";
}

close.addEventListener("click", closeModal);

function scrollIntoView(e) {
	closeModal();
	const block = e.target.dataset.block;
	document.getElementById(block).scrollIntoView({ behavior: "smooth" });
}
allLinks.forEach((item) => {
	item.addEventListener("click", scrollIntoView);
});

function stickyNav(entries) {
	const [entry] = entries;
	console.log(entry);
	if (!entry.isIntersecting) {
		navBar.classList.add("sticky");
	} else navBar.classList.remove("sticky");
}

const headerObserver = new IntersectionObserver(stickyNav, {
	root: null,
	threshold: 0,
});
headerObserver.observe(header);
