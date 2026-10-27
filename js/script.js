const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");
toggle.addEventListener("click", () => {
	const opened = nav.classList.toggle("open");
	toggle.setAttribute("aria-expanded", String(opened));
	toggle.setAttribute("aria-label", opened ? "Chiudi menu" : "Apri menu");
});
nav.querySelectorAll("a").forEach((link) =>
	link.addEventListener("click", () => {
		nav.classList.remove("open");
		toggle.setAttribute("aria-expanded", "false");
		toggle.setAttribute("aria-label", "Apri menu");
	}),
);
document.querySelector("#year").textContent = new Date().getFullYear();
if ("IntersectionObserver" in window) {
	const observer = new IntersectionObserver(
		(entries) =>
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
					observer.unobserve(entry.target);
				}
			}),
		{ threshold: 0.08 },
	);
	document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
} else {
	document
		.querySelectorAll(".reveal")
		.forEach((el) => el.classList.add("visible"));
}
