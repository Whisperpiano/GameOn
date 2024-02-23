export let wishlist = JSON.parse(localStorage.getItem("wishlistData")) || [];

export function addToWishlist(id) {
  let selectedItemId = id;
  let searchProduct = wishlist.find(
    (product) => product.productID === selectedItemId
  );

  if (searchProduct === undefined) {
    wishlist.push({
      productID: selectedItemId,
    });
  } else {
    alert("This item is already in your wishlist.");
    return;
  }

  localStorage.setItem("wishlistData", JSON.stringify(wishlist));
  updateWishlist(selectedItemId);
}

export function updateWishlist(id) {
  const wishlistSpan = document.querySelector("#wishlist-span");
  let searchWishlist = wishlist.find((product) => product.productID === id);
  wishlistSpan.textContent = wishlist.length;
}

updateWishlist();
