<script>
  // Add an item to the cart and store it
  function addToCart(name, colour, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, colour, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} (${colour}) added to cart.`);
  }

  // Get cart items (used on checkout page)
  function getCartItems() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }

  // Clear cart (after successful checkout)
  function clearCart() {
    localStorage.removeItem('cart');
  }
</script>
