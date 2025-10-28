const registerButtons = document.querySelectorAll('.register-button');

registerButtons.forEach(btn => {
  const overlay = btn.nextElementSibling; // formOverlay is right after button
  const closeBtn = overlay.querySelector('.close-button');
  const form = overlay.querySelector('.regForm');

  // Open overlay
  btn.addEventListener('click', e => {
    e.preventDefault();
    overlay.style.display = 'flex';
  });

  // Close overlay when clicking X
  closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
  });

  // Close overlay when clicking outside
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.style.display = 'none';
  });

  // === Validation ===
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const age = form.querySelector('[name="age"]').value.trim();
    const num = form.querySelector('[name="num"]').value.trim();

    if (name.length < 2) {
      alert("Please enter your full name.");
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
    if (!emailPattern.test(email)) {
      alert("Invalid email address.");
      return;
    }

    if (isNaN(age) || age < 1 || age > 120) {
      alert("Please enter a valid age number between 1 and 120.");
      return;
    }

    if (isNaN(num) || num.length < 11) {
      alert("Please enter a valid phone number (at least 11 digits).");
      return;
    }

    alert(`Welcome, ${name}! Registration successful.`);
    form.reset();
    overlay.style.display = 'none';
  });
});
