// Variables globales
let currentProduct = {};

// Función para abrir el modal con detalles del producto
function openProductModal(title, category, price, description, image) {
  currentProduct = {
    title: title,
    category: category,
    price: price,
    description: description,
    image: image
  };

  document.getElementById('modalProductTitle').textContent = title;
  document.getElementById('modalProductCategory').textContent = category;
  document.getElementById('modalProductPrice').textContent = price;
  document.getElementById('modalProductDescription').textContent = description;
  document.getElementById('modalProductImage').src = image;

  document.getElementById('productModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal
function closeProductModal() {
  document.getElementById('productModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Función para agregar al carrito
function addToCart() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItems.push(currentProduct);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
  alert(`${currentProduct.title} ha sido agregado al carrito`);
  closeProductModal();
}

// Función para contactar por mail
function contactViaMail() {
  const subject = `Consulta sobre: ${currentProduct.title}`;
  const body = `Hola, quisiera hacer una consulta sobre el producto: ${currentProduct.title} (${currentProduct.price})%0A%0A`;
  window.location.href = `mailto:contacto@libconstruct.com?subject=${encodeURIComponent(subject)}&body=${body}`;
}

// Función para contactar por WhatsApp
function contactViaWhatsapp() {
  const message = `Hola LibConstruct, quisiera consultar sobre: ${currentProduct.title} (${currentProduct.price})`;
  const whatsappNumber = '5491176888890';
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

// Funcionalidad de filtros
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Actualizar botón activo
      filterButtons.forEach(btn => btn.classList.remove('filter-btn--active'));
      this.classList.add('filter-btn--active');

      const selectedFilter = this.getAttribute('data-filter');

      // Filtrar productos
      productCards.forEach(card => {
        if (selectedFilter === 'todos') {
          card.style.display = 'block';
          setTimeout(() => {
            card.classList.add('fade-in');
          }, 10);
        } else {
          const productCategory = card.getAttribute('data-category');
          if (productCategory === selectedFilter) {
            card.style.display = 'block';
            setTimeout(() => {
              card.classList.add('fade-in');
            }, 10);
          } else {
            card.classList.remove('fade-in');
            card.style.display = 'none';
          }
        }
      });
    });
  });

  // Cerrar modal al presionar Escape
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeProductModal();
    }
  });
});
