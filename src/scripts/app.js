// Enable href for buttons
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  const href = button.getAttribute("href");

  button.addEventListener("click", (e) => {
    href && e.preventDefault();

    if (href) {
      window.location.href = href;
    } else {
      console.error("No href attribute found on button");
    }
  });
});
