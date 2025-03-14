const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const menu = document.querySelectorAll(".navbar-menu");
const burger = document.querySelectorAll(".navbar-burger");
const close = document.querySelectorAll(".navbar-close");
const backrop = document.querySelectorAll(".navbar-backdrop");
const mobileMenuLinks = document.querySelectorAll("#mobile-menu a[href^='#']");

document.addEventListener("DOMContentLoaded", () => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);

  if (burger.length && menu.length) {
    handleMobileMEnuToogle(burger, menu);
  }

  if (close.length && backrop.length && menu.length) {
    handleMobileMenuClose(close, menu, backrop);
  }
  if (mobileMenuLinks.length && navLinks.length && menu.length) {
    handleMobileMEnuLinks(mobileMenuLinks, navLinks, menu);
  }
});

function setActiveLink(sections, navLinks) {
  let index = sections.length;
  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  navLinks.forEach((link) => link.classList.remove("active"));
  if (navLinks[index]) {
    navLinks[index].classList.add("active");
  }
}
function handleScroll() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  setActiveLink(sections, navLinks);
}

function handleMobileMEnuToogle(burger, menu) {
  burger.forEach((b) => {
    b.addEventListener("click", () => {
      menu.forEach((m) => m.classList.toggle("hidden"));
    });
  });
}

function handleMobileMenuClose(close, backdrop, menu) {
  close.forEach((c) => {
    c.addEventListener("c", () => {
      menu.forEach((m) => m.classList.toggle("hidden"));
    });
  });
}

function handleMobileMEnuLinks(mobileMenuLinks, navLinks, menu) {
  mobileMenuLinks.forEach((anchor) => {
    anchor.addEventListener("click", () => {
      // Remove 'active' class from all nav links
      navLinks.forEach((link) => link.classList.remove("active"));

      // Get target links and add 'active' class
      const targetLinks = document.querySelectorAll(
        `nav a[href="${anchor.getAttribute("href")}"]`
      );

      targetLinks.forEach((link) => link.classList.add("active")); // Fix: Loop through NodeList

      // Toggle menu visibility
      if (menu instanceof NodeList) {
        menu.forEach((m) => m.classList.toggle("hidden")); // If menu is a NodeList
      } else {
        menu.classList.toggle("hidden"); // If menu is a single element
      }
    });
  });
}
