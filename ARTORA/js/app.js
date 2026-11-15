/* ========================================================= ARTORA FRONTEND APPLICATION ========================================================= */
const artworks = [
  {
    id: 1,
    title: "Golden Horizon",
    artist: "Elena Martins",
    category: "abstract",
    price: 850,
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988d5?auto=format&fit=crop&w=900&q=85",
    medium: "Acrylic on canvas",
    size: "80 × 100 cm",
    description:
      "A warm contemporary abstract painting inspired by the final light of sunset.",
  },
  {
    id: 2,
    title: "Blue Dreams",
    artist: "Sofia Adeyemi",
    category: "abstract",
    price: 620,
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=900&q=85",
    medium: "Acrylic",
    size: "60 × 80 cm",
    description:
      "A vibrant abstract work exploring movement, emotion and color.",
  },
  {
    id: 3,
    title: "The Wanderer",
    artist: "Marcus Cole",
    category: "landscape",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=900&q=85",
    medium: "Oil on canvas",
    size: "90 × 120 cm",
    description:
      "A dramatic landscape inspired by long walks through the countryside.",
  },
  {
    id: 4,
    title: "Quiet Woman",
    artist: "Amelia Stone",
    category: "portrait",
    price: 950,
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=85",
    medium: "Oil on canvas",
    size: "70 × 90 cm",
    description:
      "A timeless figurative portrait focused on expression and atmosphere.",
  },
  {
    id: 5,
    title: "Ocean Morning",
    artist: "James Carter",
    category: "landscape",
    price: 740,
    image:
      "https://images.unsplash.com/photo-1578301978018-3005759f48f7?auto=format&fit=crop&w=900&q=85",
    medium: "Oil",
    size: "60 × 90 cm",
    description:
      "Soft morning light reflected across a peaceful coastal landscape.",
  },
  {
    id: 6,
    title: "Modern Energy",
    artist: "Lena Brooks",
    category: "modern",
    price: 1450,
    image:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&q=85",
    medium: "Mixed media",
    size: "100 × 100 cm",
    description:
      "A bold modern composition created with layered textures and colors.",
  },
  {
    id: 7,
    title: "Summer Fields",
    artist: "David Moore",
    category: "landscape",
    price: 680,
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988d5?auto=format&fit=crop&w=900&q=85",
    medium: "Oil",
    size: "70 × 90 cm",
    description:
      "A bright interpretation of open fields during the summer season.",
  },
  {
    id: 8,
    title: "Red Expression",
    artist: "Nina Evans",
    category: "abstract",
    price: 1100,
    image:
      "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=900&q=85",
    medium: "Acrylic",
    size: "80 × 100 cm",
    description:
      "An expressive contemporary abstract built around strong red tones.",
  },
  {
    id: 9,
    title: "The Musician",
    artist: "Sofia Adeyemi",
    category: "portrait",
    price: 890,
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=85",
    medium: "Oil",
    size: "60 × 80 cm",
    description:
      "A character portrait capturing the quiet concentration of a musician.",
  },
  {
    id: 10,
    title: "Night City",
    artist: "Marcus Cole",
    category: "modern",
    price: 1320,
    image:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&q=85",
    medium: "Mixed media",
    size: "90 × 120 cm",
    description: "A contemporary cityscape inspired by lights after dark.",
  },
  {
    id: 11,
    title: "Autumn",
    artist: "Elena Martins",
    category: "landscape",
    price: 780,
    image:
      "https://images.unsplash.com/photo-1578301978018-3005759f48f7?auto=format&fit=crop&w=900&q=85",
    medium: "Oil",
    size: "60 × 80 cm",
    description: "Warm autumn colors translated onto canvas.",
  },
  {
    id: 12,
    title: "Fragments",
    artist: "Lena Brooks",
    category: "modern",
    price: 1650,
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=900&q=85",
    medium: "Mixed media",
    size: "100 × 120 cm",
    description: "A large-scale contemporary piece exploring fragmented forms.",
  },
];

/* ========================================================= CART ========================================================= */

let cart = JSON.parse(localStorage.getItem("artoraCart")) || [];
function saveCart() {
  localStorage.setItem("artoraCart", JSON.stringify(cart));
  updateCartCount();
}
function updateCartCount() {
  const elements = document.querySelectorAll("#cartCount");
  elements.forEach((element) => {
    element.textContent = cart.length;
  });
}
function addToCart(id) {
  const artwork = artworks.find((item) => item.id === id);
  if (!artwork) return;
  const existing = cart.find((item) => item.id === id);
  if (!existing) {
    cart.push(artwork);
  }
  saveCart();
  openCart();
}
function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  saveCart();
  renderCart();
}
function renderCart() {
  const container = document.getElementById("cartItems");
  if (!container) return;
  if (cart.length === 0) {
    container.innerHTML = ` <div style=" text-align:center; padding:50px 10px; color:#777; "> <div style=" font-size:40px; margin-bottom:10px; "> 🛒 </div> <p>Your cart is empty.</p> </div> `;
    updateCartTotal();
    return;
  }
  container.innerHTML = cart
    .map(
      (item) =>
        ` <div class="cart-item"> <img src="${item.image}" alt="${item.title}" > <div> <h4> ${item.title} </h4> <p> ${item.artist} </p> <strong> $${item.price.toLocaleString()} </strong> </div> <button class="remove-item" onclick="removeFromCart(${item.id})" > Remove </button> </div> `,
    )
    .join("");
  updateCartTotal();
}
function updateCartTotal() {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const element = document.getElementById("cartTotal");
  if (element) {
    element.textContent = `$${total.toLocaleString()}.00`;
  }
}
function openCart() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (!drawer) return;
  drawer.classList.add("active");
  overlay.classList.add("active");
  renderCart();
}
function closeCart() {
  document.getElementById("cartDrawer")?.classList.remove("active");
  document.getElementById("cartOverlay")?.classList.remove("active");
}
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }
  alert("Checkout would connect to Stripe in the production version.");
}
/* ========================================================= ARTWORK CARDS ========================================================= */ function createArtworkCard(
  artwork,
) {
  return ` <article class="art-card" data-category="${artwork.category}" > <div class="art-image"> <a href="artwork.html?id=${artwork.id}"> <img src="${artwork.image}" alt="${artwork.title}" > </a> <button class="favorite" onclick="toggleFavorite(event, ${artwork.id})" > ♡ </button> </div> <div class="art-info"> <h3> ${artwork.title} </h3> <div class="artist-name"> ${artwork.artist} </div> <div class="art-bottom"> <span class="price"> $${artwork.price.toLocaleString()} </span> <button class="add-cart" onclick="addToCart(${artwork.id})" > Add to cart </button> </div> </div> </article> `;
}
/* ========================================================= HOME PAGE ========================================================= */ function renderFeatured() {
  const grid = document.getElementById("featuredGrid");
  if (!grid) return;
  grid.innerHTML = artworks.slice(0, 8).map(createArtworkCard).join("");
}
/* ========================================================= SHOP FILTER ========================================================= */ function renderShop() {
  const grid = document.getElementById("shopGrid");
  if (!grid) return;
  filterArtwork();
}
function filterArtwork() {
  const grid = document.getElementById("shopGrid");
  if (!grid) return;
  const search =
    document.getElementById("shopSearch")?.value.toLowerCase() || "";
  const category = document.getElementById("categoryFilter")?.value || "all";
  const price = Number(document.getElementById("priceFilter")?.value || 5000);
  const sort = document.getElementById("sortFilter")?.value || "featured";
  const priceValue = document.getElementById("priceValue");
  if (priceValue) {
    priceValue.textContent = price.toLocaleString();
  }
  let filtered = artworks.filter((artwork) => {
    const matchesSearch =
      artwork.title.toLowerCase().includes(search) ||
      artwork.artist.toLowerCase().includes(search);
    const matchesCategory = category === "all" || artwork.category === category;
    const matchesPrice = artwork.price <= price;
    return matchesSearch && matchesCategory && matchesPrice;
  });
  if (sort === "low") {
    filtered.sort((a, b) => a.price - b.price);
  }
  if (sort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }
  grid.innerHTML = filtered.map(createArtworkCard).join("");
  const result = document.getElementById("resultCount");
  if (result) {
    result.textContent = `${filtered.length} artwork${filtered.length === 1 ? "" : "s"}`;
  }
}
/* ========================================================= ARTWORK DETAILS ========================================================= */ function renderArtworkDetails() {
  const container = document.getElementById("artworkDetails");
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const artwork = artworks.find((item) => item.id === id);
  if (!artwork) {
    container.innerHTML = ` <h1>Artwork not found.</h1> `;
    return;
  }
  document.title = `${artwork.title} | ARTORA`;
  container.innerHTML = ` <div> <img class="artwork-main-image" src="${artwork.image}" alt="${artwork.title}" > </div> <div class="artwork-info"> <span class="eyebrow"> ORIGINAL ARTWORK </span> <h1> ${artwork.title} </h1> <div class="artist-name"> By ${artwork.artist} </div> <div class="artwork-price"> $${artwork.price.toLocaleString()} </div> <p class="artwork-description"> ${artwork.description} </p> <div class="artwork-meta"> <div> <span>Medium</span> <strong>${artwork.medium}</strong> </div> <div> <span>Size</span> <strong>${artwork.size}</strong> </div> <div> <span>Availability</span> <strong>Available</strong> </div> </div> <button class="btn btn-dark full" onclick="addToCart(${artwork.id})" > Add to Cart </button> <button class="btn btn-outline full" style="margin-top:10px" onclick="buyNow(${artwork.id})" > Buy Now </button> </div> `;
  renderRelated(artwork.id);
}
function renderRelated(currentId) {
  const grid = document.getElementById("relatedGrid");
  if (!grid) return;
  grid.innerHTML = artworks
    .filter((item) => item.id !== currentId)
    .slice(0, 4)
    .map(createArtworkCard)
    .join("");
}
/* ========================================================= LOGIN ========================================================= */ function openLogin() {
  document.getElementById("loginModal")?.classList.add("active");
}
function closeLogin() {
  document.getElementById("loginModal")?.classList.remove("active");
}
function loginUser(event) {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  localStorage.setItem("artoraUser", email);
  closeLogin();
  alert(
    "Login successful. Backend authentication will be connected in the production version.",
  );
}
function showRegister() {
  alert("Registration page will be connected to the backend.");
}
/* ========================================================= SEARCH ========================================================= */ function searchArtwork() {
  const input = document.getElementById("globalSearch");
  if (!input) return;
  const query = input.value.trim();
  window.location.href = `shop.html?search=${encodeURIComponent(query)}`;
}
/* ========================================================= MOBILE MENU ========================================================= */ function toggleMobileMenu() {
  document.getElementById("mobileNav")?.classList.toggle("active");
}
/* ========================================================= FAVORITES ========================================================= */ function toggleFavorite(
  event,
  id,
) {
  event.preventDefault();
  event.stopPropagation();
  const button = event.currentTarget;
  button.textContent = button.textContent === "♡" ? "♥" : "♡";
}
/* ========================================================= BUY NOW ========================================================= */ function buyNow(
  id,
) {
  const artwork = artworks.find((item) => item.id === id);
  if (!artwork) return;
  alert(
    `Checkout for "${artwork.title}" will connect to Stripe in the production version.`,
  );
}
/* ========================================================= ARTIST DASHBOARD ========================================================= */ function openUpload() {
  document.getElementById("uploadModal")?.classList.add("active");
}
function closeUpload() {
  document.getElementById("uploadModal")?.classList.remove("active");
}
function submitArtwork(event) {
  event.preventDefault();
  const title = document.getElementById("artTitle").value;
  const price = document.getElementById("artPrice").value;
  closeUpload();
  alert(`"${title}" has been submitted for admin approval at $${price}.`);
}
/* ========================================================= ADMIN ========================================================= */ function approveArtwork(
  button,
) {
  const item = button.closest(".approval-item");
  item.style.opacity = "0.4";
  setTimeout(() => {
    item.remove();
  }, 300);
}
function rejectArtwork(button) {
  const item = button.closest(".approval-item");
  item.style.opacity = "0.4";
  setTimeout(() => {
    item.remove();
  }, 300);
}
function saveCommission() {
  const value = document.getElementById("commission").value;
  localStorage.setItem("artoraCommission", value);
  alert(`Marketplace commission updated to ${value}%.`);
}
/* ========================================================= INITIALIZATION ========================================================= */ document.addEventListener(
  "DOMContentLoaded",
  () => {
    updateCartCount();
    renderFeatured();
    renderShop();
    renderArtworkDetails();
  },
);
