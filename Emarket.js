document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const searchMessage = document.getElementById("searchMessage");
  const productItems = document.querySelectorAll(".product-item");
  const categoryFilter = document.getElementById("categoryFilter");
  const emptyMessage = document.getElementById("emptyMessage");
  const categoryFilter = document.getElementById("categoryFilter");
  const searchForm = document.getElementById("themeSearchForm");
  const searchInput = document.getElementById("themeSearch");
  const themeFilter = document.getElementById("themeFilter");
  const templateItems = document.querySelectorAll(".template-item");
  const startButton = document.querySelector(".start-btn");
  const kits = [...document.querySelectorAll(".kit")];
  const categories = [...document.querySelectorAll(".category")];
  const noResults = document.getElementById("noResults");
  const assetCards = document.querySelectorAll(".asset-card");
  const themeFilter = document.getElementById("themeFilter");
  const themeItems = document.querySelectorAll(".theme-item");
  const assetItems = document.querySelectorAll(".asset-item");
  const graphicItems = document.querySelectorAll(".graphic-item");
  const noResults = document.getElementById("noResults");
  const searchForm = document.getElementById("videoSearchForm");
  const searchInput = document.getElementById("videoSearch");
  const videoFilter = document.getElementById("videoFilter");
  const videoItems = document.querySelectorAll(".video-item");
  const yearElement = document.getElementById("currentYear");
  const newsletterForm = document.getElementById("newsletterForm");
  const newsletterEmail = document.getElementById("newsletterEmail");
  const newsletterMessage = document.getElementById("newsletterMessage");
  const backToTop = document.getElementById("backToTop");
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").textContent =
    new Date().getFullYear();
}
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const formMessage = document.getElementById("formMessage");

/** Navigation Bar  **/
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const keyword = searchInput.value.trim();

  if (keyword === "") {
    searchMessage.textContent = "Please enter an item to search.";
    searchInput.focus();
    return;
  }

  searchMessage.textContent =
    `You searched for "${keyword}". Connect a product catalogue to show results.`;
});

/** Home Seaction Bar  **/
// Search products
function filterProducts() {
  const keyword = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;
  let visibleCount = 0;

  productItems.forEach((item) => {
    const text = item.textContent.toLowerCase();
    const category = item.dataset.category;

    const matchesSearch = text.includes(keyword);
    const matchesCategory =
      selectedCategory === "all" || category === selectedCategory;

    if (matchesSearch && matchesCategory) {
      item.classList.remove("d-none");
      visibleCount++;
    } else {
      item.classList.add("d-none");
    }
  });

  emptyMessage.classList.toggle("d-none", visibleCount !== 0);
}

// Search on submit
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  filterProducts();

  document.getElementById("products").scrollIntoView({
    behavior: "smooth"
  });
});

// Live category filter
categoryFilter.addEventListener("change", filterProducts);

// Search as user types
searchInput.addEventListener("input", filterProducts);

// Popular search links
document.querySelectorAll("[data-search]").forEach((link) => {
  link.addEventListener("click", function () {
    searchInput.value = this.dataset.search;
    categoryFilter.value = "all";
    filterProducts();
  });
});

// Highlight active navigation link
document.querySelectorAll(".custom-navbar .nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelectorAll(".custom-navbar .nav-link")
      .forEach((navLink) => navLink.classList.remove("active"));

    this.classList.add("active");
  });
});

// Start now button scrolls to creative assets
startButton.addEventListener("click", function (event) {
  event.preventDefault();

  document.querySelector("#assets").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});

// Interactive card hover support
assetCards.forEach((card) => {
  card.addEventListener("click", function () {
    assetCards.forEach((item) => {
      item.classList.remove("selected-card");
    });

    this.classList.add("selected-card");
  });
});

/** Discover Seaction Bar  **/
function filterAssets() {
  const keyword = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;
  let visibleCount = 0;

  assetItems.forEach((item) => {
    const itemText = item.textContent.toLowerCase();
    const itemCategory = item.dataset.category;

    const matchesKeyword = itemText.includes(keyword);
    const matchesCategory =
      selectedCategory === "all" ||
      itemCategory === selectedCategory;

    const shouldShow = matchesKeyword && matchesCategory;

    item.classList.toggle("d-none", !shouldShow);

    if (shouldShow) visibleCount++;
  });

  noResults.classList.toggle("d-none", visibleCount > 0);
}

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  filterAssets();

  document.getElementById("trending").scrollIntoView({
    behavior: "smooth"
  });
});

searchInput.addEventListener("input", filterAssets);
categoryFilter.addEventListener("change", filterAssets);

// Popular search buttons
document.querySelectorAll("[data-search]").forEach((button) => {
  button.addEventListener("click", function () {
    searchInput.value = this.dataset.search;
    categoryFilter.value = "all";
    filterAssets();

    document.getElementById("trending").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Category cards
document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", function () {
    categoryFilter.value = this.dataset.filter;
    filterAssets();

    document.querySelectorAll("[data-filter]").forEach((item) => {
      item.classList.remove("active");
    });

    this.classList.add("active");

    document.getElementById("trending").scrollIntoView({
      behavior: "smooth"
    });
  });
});

/** Discover Seaction Bar  **/
function filterAssets() {
  const keyword = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;
  let visibleCount = 0;

  assetItems.forEach((item) => {
    const itemText = item.textContent.toLowerCase();
    const itemCategory = item.dataset.category;

    const matchesKeyword = itemText.includes(keyword);
    const matchesCategory =
      selectedCategory === "all" ||
      itemCategory === selectedCategory;

    const shouldShow = matchesKeyword && matchesCategory;

    item.classList.toggle("d-none", !shouldShow);

    if (shouldShow) visibleCount++;
  });

  noResults.classList.toggle("d-none", visibleCount > 0);
}

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  filterAssets();

  document.getElementById("trending").scrollIntoView({
    behavior: "smooth"
  });
});

searchInput.addEventListener("input", filterAssets);
categoryFilter.addEventListener("change", filterAssets);

// Popular search buttons
document.querySelectorAll("[data-search]").forEach((button) => {
  button.addEventListener("click", function () {
    searchInput.value = this.dataset.search;
    categoryFilter.value = "all";
    filterAssets();

    document.getElementById("trending").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Category cards
document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", function () {
    categoryFilter.value = this.dataset.filter;
    filterAssets();

    document.querySelectorAll("[data-filter]").forEach((item) => {
      item.classList.remove("active");
    });

    this.classList.add("active");

    document.getElementById("trending").scrollIntoView({
      behavior: "smooth"
    });
  });
});

/** WordPress Seaction Bar  **/
function filterThemes() {
  const keyword = searchInput.value.trim().toLowerCase();
  const category = themeFilter.value;
  let visible = 0;

  themeItems.forEach((item) => {
    const text = item.textContent.toLowerCase();
    const itemCategory = item.dataset.category;

    const matchesText = text.includes(keyword);
    const matchesCategory = category === "all" || itemCategory === category;

    if (matchesText && matchesCategory) {
      item.classList.remove("d-none");
      visible++;
    } else {
      item.classList.add("d-none");
    }
  });

  emptyMessage.classList.toggle("d-none", visible > 0);
}

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  filterThemes();

  document.getElementById("themes").scrollIntoView({
    behavior: "smooth"
  });
});

searchInput.addEventListener("input", filterThemes);
themeFilter.addEventListener("change", filterThemes);

// Popular search buttons
document.querySelectorAll("[data-search]").forEach((button) => {
  button.addEventListener("click", function () {
    searchInput.value = this.dataset.search;
    themeFilter.value = "all";
    filterThemes();

    document.getElementById("themes").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Category cards
document.querySelectorAll("[data-category]").forEach((card) => {
  card.addEventListener("click", function () {
    themeFilter.value = this.dataset.category;
    filterThemes();
  });
});

/** Website-Template Seaction Bar  **/
function filterTemplates() {
  const searchText = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;
  let visibleCount = 0;

  templateItems.forEach((item) => {
    const text = item.textContent.toLowerCase();
    const category = item.dataset.category.toLowerCase();

    const matchesSearch =
      text.includes(searchText) || category.includes(searchText);

    const matchesCategory =
      selectedCategory === "all" ||
      item.dataset.category === selectedCategory;

    const show = matchesSearch && matchesCategory;

    item.classList.toggle("d-none", !show);

    if (show) visibleCount++;
  });

  noResults.classList.toggle("d-none", visibleCount !== 0);
}

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  filterTemplates();

  document.getElementById("popular").scrollIntoView({
    behavior: "smooth"
  });
});

searchInput.addEventListener("input", filterTemplates);
categoryFilter.addEventListener("change", filterTemplates);

// Popular keyword buttons
document.querySelectorAll("[data-search]").forEach((button) => {
  button.addEventListener("click", function () {
    searchInput.value = this.dataset.search;
    categoryFilter.value = "all";
    filterTemplates();

    document.getElementById("popular").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Category selection
document.querySelectorAll(".category-card").forEach((button) => {
  button.addEventListener("click", function () {
    categoryFilter.value = this.dataset.category;
    filterTemplates();

    document.querySelectorAll(".category-card").forEach((card) => {
      card.classList.remove("active");
    });

    this.classList.add("active");

    document.getElementById("popular").scrollIntoView({
      behavior: "smooth"
    });
  });
});

/** Website-Template-Wordpress Theam Seaction Bar  **/
function filterThemes() {
  const keyword = searchInput.value.trim().toLowerCase();
  const selectedCategory = themeFilter.value;
  let count = 0;

  themeItems.forEach((item) => {
    const content = item.textContent.toLowerCase();
    const category = item.dataset.category;

    const matchesKeyword = content.includes(keyword);
    const matchesCategory =
      selectedCategory === "all" || category === selectedCategory;

    const show = matchesKeyword && matchesCategory;
    item.classList.toggle("d-none", !show);

    if (show) count++;
  });

  noThemes.classList.toggle("d-none", count !== 0);
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  filterThemes();
  document.getElementById("themes").scrollIntoView({ behavior: "smooth" });
});

searchInput.addEventListener("input", filterThemes);
themeFilter.addEventListener("change", filterThemes);

// Popular searches
document.querySelectorAll("[data-search]").forEach((button) => {
  button.addEventListener("click", () => {
    searchInput.value = button.dataset.search;
    themeFilter.value = "all";
    filterThemes();
    document.getElementById("themes").scrollIntoView({ behavior: "smooth" });
  });
});

// Category buttons
document.querySelectorAll(".category-box").forEach((button) => {
  button.addEventListener("click", () => {
    themeFilter.value = button.dataset.category;

    document.querySelectorAll(".category-box").forEach((categoryButton) => {
      categoryButton.classList.remove("active");
    });

    button.classList.add("active");
    filterThemes();
    document.getElementById("themes").scrollIntoView({ behavior: "smooth" });
  });
});

// Theme preview modal
const themeModal = new bootstrap.Modal(document.getElementById("themeModal"));
const themeModalTitle = document.getElementById("themeModalTitle");

document.querySelectorAll(".quick-preview, .details-btn").forEach((button) => {
  button.addEventListener("click", () => {
    themeModalTitle.textContent = button.dataset.title || "Theme Preview";
    themeModal.show();
  });
});

// Hero button
document.getElementById("heroExplore").addEventListener("click", () => {
  document.getElementById("themes").scrollIntoView({ behavior: "smooth" });
});

// Current year
document.getElementById("year").textContent = new Date().getFullYear();

/** Website-Template-Plugins Seaction Bar  **/
function filterPlugins() {
  const keyword = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;
  let visibleCount = 0;

  pluginItems.forEach((item) => {
    const content = item.textContent.toLowerCase();
    const category = item.dataset.category;

    const matchesText = content.includes(keyword);
    const matchesCategory =
      selectedCategory === "all" || selectedCategory === category;

    const show = matchesText && matchesCategory;
    item.classList.toggle("d-none", !show);

    if (show) visibleCount++;
  });

  emptyState.classList.toggle("d-none", visibleCount !== 0);
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  filterPlugins();
  document.getElementById("plugins").scrollIntoView({ behavior: "smooth" });
});

searchInput.addEventListener("input", filterPlugins);
categoryFilter.addEventListener("change", filterPlugins);

// Popular search shortcuts
document.querySelectorAll("[data-search]").forEach((button) => {
  button.addEventListener("click", () => {
    searchInput.value = button.dataset.search;
    categoryFilter.value = "all";
    filterPlugins();
    document.getElementById("plugins").scrollIntoView({ behavior: "smooth" });
  });
});

// Category selection
document.querySelectorAll(".category-card").forEach((button) => {
  button.addEventListener("click", () => {
    categoryFilter.value = button.dataset.category;

    document.querySelectorAll(".category-card").forEach((card) => {
      card.classList.remove("active");
    });

    button.classList.add("active");
    filterPlugins();
    document.getElementById("plugins").scrollIntoView({ behavior: "smooth" });
  });
});

// Save/favourite buttons
document.querySelectorAll(".save-plugin").forEach((button) => {
  button.addEventListener("click", () => {
    const saved = button.classList.toggle("saved");
    button.setAttribute("aria-pressed", String(saved));

    button.innerHTML = saved
      ? '<i class="bi bi-heart-fill"></i>'
      : '<i class="bi bi-heart"></i>';
  });
});

// Plugin details modal
const modalElement = document.getElementById("pluginModal");
const pluginModal = new bootstrap.Modal(modalElement);

document.querySelectorAll(".plugin-details").forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById("modalTitle").textContent = button.dataset.title;
    document.getElementById("modalPrice").textContent = button.dataset.price;
    document.getElementById("modalDescription").textContent =
      button.dataset.description;

    pluginModal.show();
  });
});

// Footer year
document.getElementById("currentYear").textContent =
  new Date().getFullYear();
/** Website-Template-Template-Kits Seaction Bar  **/
let activeCategory = "all";

document.getElementById("year").textContent =
  new Date().getFullYear();

function filterKits() {
  const query = searchInput.value.toLowerCase().trim();
  let visible = 0;

  kits.forEach(function (kit) {
    const category = kit.dataset.category;
    const name = kit.dataset.name.toLowerCase();

    const matchesCategory =
      activeCategory === "all" || category === activeCategory;

    const matchesSearch = name.includes(query);
    const show = matchesCategory && matchesSearch;

    kit.classList.toggle("d-none", !show);

    if (show) visible++;
  });

  noResults.classList.toggle("d-none", visible > 0);
}

categories.forEach(function (button) {
  button.addEventListener("click", function () {
    activeCategory = button.dataset.filter;

    categories.forEach(function (item) {
      item.classList.remove("active");
    });

    button.classList.add("active");
    filterKits();
  });
});

searchBtn.addEventListener("click", filterKits);

searchInput.addEventListener("input", filterKits);

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    filterKits();
  }
});

// Favorite button
document.querySelectorAll(".heart").forEach(function (button) {
  button.addEventListener("click", function () {
    button.classList.toggle("liked");
    button.textContent =
      button.classList.contains("liked") ? "♥" : "♡";
  });
});

// Template preview modal
const modalElement = document.getElementById("kitModal");
const previewModal = new bootstrap.Modal(modalElement);

document.querySelectorAll(".btn-preview").forEach(function (button) {
  button.addEventListener("click", function () {
    document.getElementById("modalTitle").textContent =
      button.dataset.title;

    document.getElementById("modalDescription").textContent =
      button.dataset.description;

    previewModal.show();
  });
});

// Demo newsletter form
document.getElementById("newsletterForm").addEventListener(
  "submit",
  function (event) {
    event.preventDefault();

    document.getElementById("newsletterMessage").textContent =
      "Thank you! This is a demo form.";

    this.reset();
  }
);
);

/** Graphics Seaction Bar  **/
function filterGraphics() {
  const searchText = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;
  let visibleItems = 0;

  graphicItems.forEach((item) => {
    const itemText = item.textContent.toLowerCase();
    const itemCategory = item.dataset.category;

    const matchesSearch = itemText.includes(searchText);
    const matchesCategory =
      selectedCategory === "all" || itemCategory === selectedCategory;

    const isVisible = matchesSearch && matchesCategory;
    item.classList.toggle("d-none", !isVisible);

    if (isVisible) visibleItems++;
  });

  noResults.classList.toggle("d-none", visibleItems !== 0);
}

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  filterGraphics();

  document.getElementById("graphics").scrollIntoView({
    behavior: "smooth"
  });
});

searchInput.addEventListener("input", filterGraphics);
categoryFilter.addEventListener("change", filterGraphics);

// Trending keyword buttons
document.querySelectorAll("[data-search]").forEach((button) => {
  button.addEventListener("click", function () {
    searchInput.value = this.dataset.search;
    categoryFilter.value = "all";
    filterGraphics();

    document.getElementById("graphics").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Category card filters
document.querySelectorAll(".category-card").forEach((button) => {
  button.addEventListener("click", function () {
    categoryFilter.value = this.dataset.category;
    filterGraphics();

    document.querySelectorAll(".category-card").forEach((card) => {
      card.classList.remove("active");
    });

    this.classList.add("active");

    document.getElementById("graphics").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Quick Preview modal
const previewModalElement = document.getElementById("previewModal");
const previewModal = new bootstrap.Modal(previewModalElement);
const previewTitle = document.getElementById("previewTitle");

document.querySelectorAll(".preview-btn").forEach((button) => {
  button.addEventListener("click", function () {
    previewTitle.textContent = this.dataset.title;
    previewModal.show();
  });
});

/** Video Seaction Bar  **/
function filterVideos() {
  const query = searchInput.value.trim().toLowerCase();
  const category = videoFilter.value;
  let visibleCount = 0;

  videoItems.forEach((item) => {
    const text = item.textContent.toLowerCase();
    const itemCategory = item.dataset.category;

    const matchesSearch = text.includes(query);
    const matchesCategory =
      category === "all" || itemCategory === category;

    const visible = matchesSearch && matchesCategory;

    item.classList.toggle("d-none", !visible);

    if (visible) visibleCount++;
  });

  emptyMessage.classList.toggle("d-none", visibleCount > 0);
}

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  filterVideos();

  document.getElementById("videos").scrollIntoView({
    behavior: "smooth"
  });
});

searchInput.addEventListener("input", filterVideos);
videoFilter.addEventListener("change", filterVideos);

// Popular search buttons
document.querySelectorAll("[data-search]").forEach((button) => {
  button.addEventListener("click", function () {
    searchInput.value = this.dataset.search;
    videoFilter.value = "all";
    filterVideos();

    document.getElementById("videos").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Category buttons
document.querySelectorAll(".video-category").forEach((button) => {
  button.addEventListener("click", function () {
    videoFilter.value = this.dataset.category;

    document.querySelectorAll(".video-category").forEach((card) => {
      card.classList.remove("active");
    });

    this.classList.add("active");
    filterVideos();

    document.getElementById("videos").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Preview modal
const modalElement = document.getElementById("videoModal");
const videoModal = new bootstrap.Modal(modalElement);
const modalTitle = document.getElementById("videoModalTitle");

document.querySelectorAll(".preview-video").forEach((button) => {
  button.addEventListener("click", function () {
    modalTitle.textContent = this.dataset.title || "Video Preview";
    videoModal.show();
  });
});

/** License Seaction Bar  **/
// Open a modal with details for the selected license.
const modalElement = document.getElementById("licenseModal");
const licenseModal = new bootstrap.Modal(modalElement);

document.querySelectorAll("[data-plan]").forEach(function (button) {
  button.addEventListener("click", function () {
    document.getElementById("modalTitle").textContent =
      button.dataset.plan;

    document.getElementById("modalDetail").textContent =
      button.dataset.detail;

    licenseModal.show();
  });
});

// Demo newsletter form: no data is sent to a server.
document.getElementById("subscribeForm").addEventListener(
  "submit",
  function (event) {
    event.preventDefault();

    document.getElementById("subscribeMessage").textContent =
      "Thanks for your interest! This is a demo form.";

    this.reset();
  }
);
);

/** Signin Seaction Bar  **/
// Current year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Show / hide password
togglePassword.addEventListener("click", function () {
  const isPassword = passwordInput.type === "password";

  passwordInput.type = isPassword ? "text" : "password";

  togglePassword.innerHTML = isPassword
    ? '<i class="bi bi-eye-slash"></i>'
    : '<i class="bi bi-eye"></i>';

  togglePassword.setAttribute(
    "aria-label",
    isPassword ? "Hide password" : "Show password"
  );
});

// Display message
function showMessage(message, type) {
  formMessage.textContent = message;
  formMessage.className = "form-message show " + type;
}

// Sign in form validation
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  formMessage.className = "form-message";

  emailInput.classList.remove("is-invalid", "is-valid");
  passwordInput.classList.remove("is-invalid", "is-valid");

  let isValid = true;

  if (!emailInput.checkValidity()) {
    emailInput.classList.add("is-invalid");
    isValid = false;
  } else {
    emailInput.classList.add("is-valid");
  }

  if (
    passwordInput.value.trim().length < 6
  ) {
    passwordInput.classList.add("is-invalid");
    isValid = false;
  } else {
    passwordInput.classList.add("is-valid");
  }

  if (!isValid) {
    showMessage(
      "Please correct the highlighted fields.",
      "error"
    );
    return;
  }

  // Frontend demo only: no real authentication
  showMessage(
    "Form validated! Connect a backend to sign in securely.",
    "success"
  );
});

// Demo links
document.getElementById("googleButton").addEventListener(
  "click",
  function () {
    showMessage(
      "Google sign-in requires a configured authentication service.",
      "error"
    );
  }
);

document.getElementById("signupLink").addEventListener(
  "click",
  function (event) {
    event.preventDefault();

    showMessage(
      "Create a separate registration page to continue.",
      "success"
    );
  }
);

/** Join-Now Seaction Bar  **/
// Footer year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Show / hide password
togglePassword.addEventListener("click", function () {
  const show = password.type === "password";

  password.type = show ? "text" : "password";

  togglePassword.innerHTML = show
    ? '<i class="bi bi-eye-slash"></i>'
    : '<i class="bi bi-eye"></i>';

  togglePassword.setAttribute(
    "aria-label",
    show ? "Hide password" : "Show password"
  );
});

// Password strength indicator
password.addEventListener("input", function () {
  const value = password.value;
  let score = 0;

  if (value.length >= 8) score++;
  if (/[A-Z]/.test(value)) score++;
  if (/[0-9]/.test(value)) score++;
  if (/[^A-Za-z0-9]/.test(value)) score++;

  const widths = ["0%", "25%", "50%", "75%", "100%"];
  const labels = [
    "Password strength: not entered",
    "Password strength: weak",
    "Password strength: fair",
    "Password strength: good",
    "Password strength: strong"
  ];

  const colors = [
    "#e4dfeb",
    "#df6464",
    "#e6ad42",
    "#8a65d1",
    "#32a66a"
  ];

  strengthBar.style.width = widths[score];
  strengthBar.style.backgroundColor = colors[score];
  strengthText.textContent = value ? labels[score] : labels[0];
});

// Show form messages
function showMessage(message, type) {
  formMessage.textContent = message;
  formMessage.className = "form-message show " + type;
}

// Validate registration form
joinForm.addEventListener("submit", function (event) {
  event.preventDefault();

  formMessage.className = "form-message";

  // Reset previous validation styles
  [fullName, email, accountType, password, terms].forEach(
    function (field) {
      field.classList.remove("is-invalid", "is-valid");
    }
  );

  let valid = true;

  // Name validation
  if (fullName.value.trim().length < 2) {
    fullName.classList.add("is-invalid");
    valid = false;
  } else {
    fullName.classList.add("is-valid");
  }

  // Email validation
  if (!email.checkValidity() || email.value.trim() === "") {
    email.classList.add("is-invalid");
    valid = false;
  } else {
    email.classList.add("is-valid");
  }

  // Account type validation
  if (!accountType.value) {
    accountType.classList.add("is-invalid");
    valid = false;
  } else {
    accountType.classList.add("is-valid");
  }

  // Password validation
  if (password.value.length < 8) {
    password.classList.add("is-invalid");
    valid = false;
  } else {
    password.classList.add("is-valid");
  }

  // Terms validation
  if (!terms.checked) {
    terms.classList.add("is-invalid");
    valid = false;
  } else {
    terms.classList.add("is-valid");
  }

  if (!valid) {
    showMessage(
      "Please check the highlighted fields and try again.",
      "error"
    );
    return;
  }

  // Demo only: no account is actually created.
  showMessage(
    "All fields are valid! Connect a backend to create your account.",
    "success"
  );
});

// Google signup placeholder
document.getElementById("googleJoin").addEventListener(
  "click",
  function () {
    showMessage(
      "Google registration requires an authentication provider.",
      "error"
    );
  }
);

// Sign In link placeholder
function handleSignIn(event) {
  event.preventDefault();

  showMessage(
    "Create a separate Sign In page and link it here.",
    "success"
  );
}

document.getElementById("signInLink").addEventListener(
  "click",
  handleSignIn
);

document.getElementById("bottomSignIn").addEventListener(
  "click",
  handleSignIn
);

/** Footer Seaction Bar  **/
// Automatic copyright year
yearElement.textContent = new Date().getFullYear();

// Newsletter demo interaction
newsletterForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!newsletterEmail.checkValidity()) {
    newsletterEmail.reportValidity();
    return;
  }

  newsletterMessage.textContent =
    "Thank you! Your demo subscription has been recorded on this page.";
  newsletterMessage.style.color = "#d9b66f";

  newsletterForm.reset();
});

// Smooth scroll to top
backToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
