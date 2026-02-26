// JavaScript for Obras Realizadas page
let currentWork = {};

function openWorkModal(title, description, image) {
  currentWork = { title, description, image };
  document.getElementById('modalWorkTitle').textContent = title;
  document.getElementById('modalWorkDescription').textContent = description;
  document.getElementById('modalWorkImage').src = image;

  document.getElementById('workModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeWorkModal() {
  document.getElementById('workModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// close with escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeWorkModal();
  }
});
