const message =
  "Nous vous remercions pour votre message, nous vous contacterons très bientôt";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });


