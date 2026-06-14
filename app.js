let menuItems = [
  { id: 1, name: "Paneer Butter Masala", category: "veg", price: 200, image: "https://tse3.mm.bing.net/th/id/OIP.aeuDTUu-a_u1-rXFzQYKdgHaE7" },
  { id: 2, name: "Chicken Biryani", category: "non-veg", price: 250, image: "https://img.freepik.com/premium-photo/chicken-biryani-background-images-chicken-biryani-wallpapers-basmati-rice-chicken-biryani_1037362-12163.jpg" },
  { id: 3, name: "Gulab Jamun", category: "dessert", price: 50, image: "https://images.unsplash.com/photo-1604908176997-431a9b8a5d9d" },
  { id: 4, name: "Veg Pulao", category: "veg", price: 150, image: "https://www.whiskaffair.com/wp-content/uploads/2020/07/Hibachi-Fried-Rice-3-768x768.jpg" },
  { id: 5, name: "Chicken 65", category: "non-veg", price: 180, image: "https://i0.wp.com/www.relishthebite.com/wp-content/uploads/2014/08/Chicken65-4.jpg" },
  { id: 6, name: "Chocolate Brownie", category: "dessert", price: 70, image: "https://img.freepik.com/premium-photo/decadent-chocolate-brownie-delight_941761-15205.jpg" },
  { id: 7, name: "Masala Dosa", category: "veg", price: 120, image: "https://img.freepik.com/premium-photo/golden-brown-dosa-photo_1036998-301225.jpg" },
  { id: 8, name: "Mutton Curry", category: "non-veg", price: 300, image: "https://img.freepik.com/premium-photo/lamb-rogan-josh-indian-food_198067-360917.jpg" },
  { id: 9, name: "Ice Cream Sundae", category: "dessert", price: 90, image: "https://img.freepik.com/premium-photo/glass-chocolate-sundae-with-cherry-top_759095-6748.jpg" },
  { id: 10, name: "Butter Naan", category: "veg", price: 40, image: "https://img.freepik.com/premium-photo/closeup-baked-naan-bread-with-butter-cilantro-wooden-desk-indian-bakery-cookery-with_1014870-20854.jpg" },
  { id: 11, name: "Mutton Korma", category: "non-veg", price: 300, image: "https://img.freepik.com/premium-photo/lamb-rogan-josh-indian-food-photography_1037600-134.jpg" },
  { id: 12, name: "Rasgulla", category: "dessert", price: 60, image: "https://img.freepik.com/premium-photo/tempting-rasgulla-symphony-indian-traditional-sweet-dessert-rasgulla-picture-photography_1020697-145210.jpg" },
  { id: 13, name: "Grilled Fish", category: "non-veg", price: 220, image: "https://tse1.mm.bing.net/th/id/OIP.1A1Nb6ZN1wjpxbjIRHVIxwHaEP" },
  { id: 14, name: "Rasmalai", category: "dessert", price: 150, image: "https://i.ytimg.com/vi/qtQf1gMVM0E/maxresdefault.jpg" },
  { id: 15, name: "Paneer Tikka", category: "veg", price: 220, image: "https://img.freepik.com/premium-photo/paneer-tikka-tempting-flavors_1179130-55028.jpg" },
  { id: 16, name: "Veg Biryani", category: "veg", price: 220, image: "https://img.freepik.com/premium-photo/fragrant-veg-biryani-with-tempting-colors_1179130-187779.jpg" },
  { id: 17, name: "Fish Curry", category: "non-veg", price: 220, image: "https://img.freepik.com/premium-photo/tempting-fish-curry-ready-serve_1179130-97520.jpg" },
  { id: 18, name: "Choco Lava Cake", category: "dessert", price: 60, image: "https://thumbs.dreamstime.com/b/indulge-decadence-tempting-close-up-rich-molten-lava-cake-masterpiece-generative-ai-indulge-decadence-297336629.jpg" },
  { id: 19, name: "Jalebi", category: "dessert", price: 50, image: "https://img.freepik.com/premium-photo/exotic-saffron-jalebi-traditional-indian-sweet-jalebi-image-photography_1020697-132377.jpg" },
  { id: 20, name: "Kulfi", category: "dessert", price: 35, image: "https://www.varanasimirror.com/wp-content/uploads/2021/04/kulfi.jpg" },
  { id: 21, name: "Fried Prawn", category: "non-veg", price: 180, image: "https://img.freepik.com/premium-photo/tempting-fried-prawns-platter-delicious-seafood-dish-black-background_1106454-38817.jpg" },
  { id: 22, name: "Cheese Cake", category: "dessert", price: 60, image: "https://img.freepik.com/premium-photo/classic-cheesecake-slice-tempting-sweet-treat_1106454-21178.jpg" },
  { id: 23, name: "Payasam", category: "dessert", price: 80, image: "https://aartimadan.com/wp-content/uploads/2019/07/rice-kheer-recipe-images-6.jpg" },
  { id: 24, name: "Kheer", category: "dessert", price: 75, image: "https://img.freepik.com/premium-photo/rice-kheer-indian-dessert_1020697-200.jpg" },
  { id: 25, name: "Brownie Ice Cream", category: "dessert", price: 90, image: "https://img.freepik.com/premium-photo/tempting-chocolate-brownie_729149-4852.jpg" },
  { id: 26, name: "Carrot Halwa", category: "dessert", price: 120, image: "https://grain2grind.com/wp-content/uploads/2023/05/7-100.jpg" },
  { id: 27, name: "Mushroom Biryani", category: "veg", price: 150, image: "https://static.vecteezy.com/system/resources/previews/030/496/513/large_2x/tempting-biryani-with-basmati-rice-that-was-absolutely-delicious-by-generative-ai-free-photo.jpg" },
  { id: 28, name: "Gobi Rice", category: "veg", price: 60, image: "https://img.freepik.com/premium-photo/pan-rice-with-rice-meat-rice_1209326-115709.jpg" },
  { id: 29, name: "Coconut Milk Veg Biryani", category: "veg", price: 120, image: "https://rakskitchen.net/wp-content/uploads/2016/08/28292062553_a9a32beb5d_z-500x500.jpg" },
  { id: 30, name: "Hyderabad Biryani", category: "non-veg", price: 120, image: "https://img.freepik.com/premium-photo/tempting-tandoor-biryani_1179130-14681.jpg" },
  { id: 31, name: "Fried Rice", category: "non-veg", price: 120, image: "https://rskfood.com/wp-content/uploads/2023/08/chiken-fried-rice-1-1.png" },
  { id: 32, name: "Fried Noodles", category: "non-veg", price: 120, image: "https://i.pinimg.com/originals/28/67/06/2867064fcdae349df0c7f907d6b39628.jpg" },
  { id: 33, name: "Egg Biryani", category: "non-veg", price: 120, image: "https://img.freepik.com/premium-photo/bowl-egg-biryani-with-halves-boiled-eggs-plac_1207919-14023.jpg" },
  { id: 34, name: "Grill Chicken", category: "non-veg", price: 120, image: "https://img.freepik.com/premium-photo/roast-chicken-bbq_1029622-160697.jpg" },
  { id: 35, name: "Ice Cream", category: "dessert", price: 90, image: "https://img.freepik.com/premium-photo/three-scoops-ice-cream-with-syrup-illustration-generative-ai_850000-3931.jpg" },
  { id: 36, name: "Idli", category: "veg", price: 40, image: "https://www.corriecooks.com/wp-content/uploads/2023/04/Idli.jpg" }
];

let cart = [];
let appliedDiscount = 0;
let filteredItems = [...menuItems];

// Floating Cart Toggle
const cartIcon = document.getElementById("cart-icon");
const cartPanel = document.getElementById("cart");

cartIcon.addEventListener("click", () => {
  cartPanel.classList.toggle("open");
});

// Update Cart Count
function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

// Add to Cart
function addToCart(id, btn) {
  const item = menuItems.find(i => i.id === id);
  cart.push(item);
  renderCart();
  if(btn) flyToCart(btn.closest(".menu-card").querySelector("img"));
}

// Render Menu
function renderMenu(items) {
  const menuList = document.getElementById("menu-list");
  menuList.innerHTML = "";
  items.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("menu-card");
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="menu-image">
      <div class="menu-details">
        <div class="menu-name">${item.name}</div>
        <div class="menu-category">${item.category.toUpperCase()}</div>
        <div class="menu-price">₹${item.price}</div>
        <button onclick="addToCart(${item.id}, this)">Add</button>
      </div>
    `;
    menuList.appendChild(div);
  });
}

function renderCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";

  if(cart.length === 0) {
    cartList.innerHTML = "<p>Cart is empty</p>";
  } else {
    cart.forEach((item, index) => {
      const div = document.createElement("div");
      div.classList.add("cart-item");
      div.innerHTML = `
        <span>${item.name} - ₹${item.price}</span>
        <button class="remove-btn">Remove</button>
      `;
      cartList.appendChild(div);

      // Attach remove event
      div.querySelector(".remove-btn").addEventListener("click", () => {
        cart.splice(index, 1);
        renderCart(); // Re-render cart after removal
      });
    });
  }

  let total = cart.reduce((sum, i) => sum + i.price, 0);
  document.getElementById("total-price").textContent = `Total: ₹${(total*(1-appliedDiscount/100)).toFixed(2)}`;
  updateCartCount();
}



// Fly Animation
function flyToCart(imgElement) {
  const cartIcon = document.getElementById("cart-icon");
  const rect = imgElement.getBoundingClientRect();
  const cartRect = cartIcon.getBoundingClientRect();

  const flyingImg = imgElement.cloneNode(true);
  flyingImg.style.position = "fixed";
  flyingImg.style.left = rect.left + "px";
  flyingImg.style.top = rect.top + "px";
  flyingImg.style.width = rect.width + "px";
  flyingImg.style.height = rect.height + "px";
  flyingImg.style.transition = "all 0.8s ease-in-out";
  flyingImg.style.zIndex = 1000;
  document.body.appendChild(flyingImg);

  setTimeout(() => {
    flyingImg.style.left = cartRect.left + "px";
    flyingImg.style.top = cartRect.top + "px";
    flyingImg.style.width = "0px";
    flyingImg.style.height = "0px";
    flyingImg.style.opacity = "0";
  }, 10);

  flyingImg.addEventListener("transitionend", () => {
    flyingImg.remove();
  });
}

// Discount Coupons
const coupons = { "ZOMATO10":10, "FOOD20":20, "YUMMY30":30 };
document.getElementById("apply-coupon").addEventListener("click",()=>{
  const code = document.getElementById("coupon-code").value.toUpperCase();
  const message = document.getElementById("coupon-message");
  if(coupons[code]) { 
    appliedDiscount=coupons[code]; 
    message.textContent=`Coupon applied! ${appliedDiscount}% off 🥳`; 
    renderCart(); 
  } else { 
    appliedDiscount=0; 
    message.textContent="Invalid coupon"; 
    renderCart(); 
  }
});

// Place Order
document.getElementById("place-order").addEventListener("click",()=>{
  const status = document.getElementById("order-status");
  if(cart.length===0) return alert("Cart is empty!");
  status.textContent = "Preparing";
  setTimeout(()=> { status.textContent = "Out for Delivery"; }, 3000);
  setTimeout(()=> { 
    status.textContent = "Delivered"; 
    cart = []; appliedDiscount=0; 
    document.getElementById("coupon-code").value=""; 
    document.getElementById("coupon-message").textContent="";
    renderCart();
  }, 6000);
});

// Recommended Section
document.addEventListener("DOMContentLoaded", () => {
  const recommendedContainer = document.getElementById("recommended-list");

  function renderRecommendations() {
    recommendedContainer.innerHTML = "";
    let recommended = [];
    while(recommended.length < 12) {
      let item = menuItems[Math.floor(Math.random() * menuItems.length)];
      if(!recommended.includes(item)) recommended.push(item);
    }

    recommended.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("recommend-card");
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <p>${item.name}</p>
        <div class="overlay">₹${item.price} • ${item.category.toUpperCase()}</div>
        <button class="rec-add-btn">Add</button>
      `;
      recommendedContainer.appendChild(card);
      card.querySelector(".rec-add-btn").addEventListener("click", () => {
        addToCart(item.id, card.querySelector("img"));
      });
    });
  }

  renderRecommendations();

  // Scroll buttons
  document.querySelector(".left-btn").addEventListener("click", () => {
    recommendedContainer.scrollBy({ left: -220, behavior: 'smooth' });
  });
  document.querySelector(".right-btn").addEventListener("click", () => {
    recommendedContainer.scrollBy({ left: 220, behavior: 'smooth' });
  });

  // Auto-scroll
  let scrollAmount = 0;
  setInterval(() => {
    scrollAmount += 2;
    if(scrollAmount >= recommendedContainer.scrollWidth - recommendedContainer.clientWidth) {
      scrollAmount = 0;
    }
    recommendedContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }, 30);
});

// Dark Mode Toggle
document.getElementById("toggle-mode").addEventListener("click",()=>{
  document.body.classList.toggle("dark-mode");
});

// Search & Filter
function filterCategory(cat) {
  filteredItems = cat ? menuItems.filter(i=>i.category===cat) : [...menuItems];
  renderMenu(filteredItems);
}

document.getElementById("search-btn").addEventListener("click", ()=>{
  let name = document.getElementById("search-name").value.toLowerCase();
  let price = document.getElementById("search-price").value;
  let category = document.getElementById("search-category").value;

  filteredItems = menuItems.filter(i => 
    (i.name.toLowerCase().includes(name)) &&
    (price==="" || i.price<=price) &&
    (category==="" || i.category===category)
  );
  renderMenu(filteredItems);
});

// Initial Render
renderMenu(menuItems);
renderCart();
