// Enable href for buttons
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  const href = button.getAttribute("href");

  button.addEventListener("click", (e) => {
    href && e.preventDefault();

    if (href) {
      button.removeAttribute("href");
      window.location.href = href;
    } else {
      console.error("No href attribute found on button");
    }
  });
});

// renderPage api
const renderPage = (page) => {
  let currentPage = page;
  const pages = document.querySelectorAll(".page");

  pages.forEach((page) => {
    if (page.id === currentPage) {
      page.classList.remove("hidden")
    } else {
      page.classList.add("hidden")
      console.log(`${page.id} is hidden`);
    }
  });
};

renderPage("app");