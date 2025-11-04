// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Touch support: tap Services to toggle the mega menu
const servicesLink = document.getElementById("servicesLink");
const servicesItem = document.getElementById("servicesItem");
if (servicesLink && servicesItem) {
  servicesLink.addEventListener("click", (e) => {
    e.preventDefault();
    const open = servicesItem.classList.toggle("open");
    servicesLink.setAttribute("aria-expanded", String(open));
  });
  document.addEventListener("click", (e) => {
    if (!servicesItem.contains(e.target)) {
      servicesItem.classList.remove("open");
      servicesLink.setAttribute("aria-expanded", "false");
    }
  });
}