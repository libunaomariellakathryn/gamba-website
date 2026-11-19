document.addEventListener('DOMContentLoaded', () => {

  // SEARCH BAR
  const params = new URLSearchParams(window.location.search);
  const term = (params.get('search') || '').trim().toLowerCase();

  const cards = document.querySelectorAll('.product-card');
  const noResults = document.getElementById('noResults');

  if (term && cards.length) {
    let visible = 0;

    cards.forEach(card => {
      const match = (card.dataset.productName || '').includes(term);

      card.classList.toggle('d-none', !match);

      if (match) visible++;
    });

    if (noResults) {
      noResults.classList.toggle('d-none', visible !== 0);
    }

    document.getElementById('products')?.scrollIntoView({
      behavior: 'smooth'
    });
  }


  // NEWSLETTER SIGN-UP
  const newsletter = document.getElementById('newsletterForm');

  newsletter?.addEventListener('submit', event => {
    event.preventDefault();

    const email = document.getElementById('newsletterEmail');
    const message = document.getElementById('newsletterMessage');

    message.textContent = `Thanks! ${email.value} has been added to this demo signup.`;

    newsletter.reset();
  });
  
  
// PRODUCT PAGES — ORDER BUTTON

  const TO_ADDRESS = "orders@examplewebsite142.com";
  const form = document.getElementById("orderForm");

  if (form) {

    function buildMailto() {

      const product = document.querySelector(".product-title").textContent.trim();

      const size = form.querySelector('input[name="size"]:checked').value;

      const color = form.querySelector('input[name="color"]:checked').value;

      const quantity = form.querySelector("#quantity").value;

      const subject = "Product request and order details for: " + product;

      const body =
        "Hello Gamba!\r\n\r\n" +
        "I would like to order the following product:\r\n\r\n" +
        "Product: " + product + "\r\n" +
        "Size: " + size + "\r\n" +
        "Color: " + color + "\r\n" +
        "Quantity: " + quantity + "\r\n\r\n" +
        "Thank you!";

      return (
        "mailto:" + TO_ADDRESS +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body)
      );
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      window.location.href = buildMailto();
    });

  }

});
