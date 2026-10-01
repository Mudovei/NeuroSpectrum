/* ================ NeuroVita — app.js ================ */

// 1) Toggle de senha (login)
document.querySelectorAll('[data-toggle-password]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const input = document.querySelector(btn.dataset.togglePassword);
    if (!input) return;
    const isPwd = input.type === 'password';
    input.type = isPwd ? 'text' : 'password';
    btn.querySelector('.eye-on')?.classList.toggle('hidden', !isPwd);
    btn.querySelector('.eye-off')?.classList.toggle('hidden', isPwd);
  });
});
