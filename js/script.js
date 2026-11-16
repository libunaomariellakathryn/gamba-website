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
  
  // Add additional JS properties here

});