
// Maxsulotni savatga qo'shish

function productBuyBox() {
  crateCard()
  let product = document.querySelectorAll(".prduct_list-items")

  product.forEach(product => {
    product.addEventListener("click", (e) => {      

      let productImg = product.querySelector(".product_img-box").querySelector("img").src;
      let productPrice = product.querySelector(".product_list-price").innerHTML;
      let productName = product.querySelector(".product_bottom-title").innerHTML;
      let productId = product.querySelector(".product_id").innerHTML;

      let count = 1;
      let buyCardBox = document.querySelector(".products_buy-box");
      let buyCard = document.createElement("div");
      buyCard.className = "product_buy-box";
      buyCardBox.appendChild(buyCard);
      buyCard.innerHTML = `
          <div class="product_items">
              <div class="product_count">
                <div class="product_title-picture">
                  <div class="product_img">
                    <img src="${productImg}" alt="lagmon">
                  </div>
                  <div class="product_name-price">
                    <h4 class="product_title">${productName}</h4>
                    <span class="product_price">${productPrice}</span>
                  </div>
                </div>
                <div class="product_size-box">
                  <span class="product_size">${count}</span>
                </div>
              </div>
              <div class="product_about">
                <h4>Please, just a little bit spicy only.</h4>
              </div>
            </div>
            <div class="product_total-price-remove">
              <div class="product_total-price-box">
                <h3 class="product_total-price">$ 4,58</h3>
              </div>
              <a class="product_remove-box" href="#">
                <i class='bx bx-trash-alt'></i>
              </a>
            </div>
        `      
    })
  })

}
productBuyBox()




















// Mahsulotlar ro'yxati
function crateCard() {
  const products = [
    {
      id: 1, name: 'Product-1', price: 100000, imgSrc: "media/img/lagmons.png"
    },
    {
      id: 2, name: 'Product-2', price: 200000, imgSrc: "media/img/makron.png"
    },
    {
      id: 3, name: 'Product-3', price: 100000, imgSrc: "media/img/manti_suyuq.png"
    },
    {
      id: 4, name: 'Product-4', price: 500000, imgSrc: "media/img/Osh.png"
    },
    {
      id: 5, name: 'Product-5', price: 400000, imgSrc: "media/img/uygur_lagmon.png"
    },
    {
      id: 6, name: 'Product-6', price: 500000, imgSrc: "media/img/lagmons.png"
    }
  ];

  function createProduct(product) {
    let cards = document.createElement('div');
    cards.className = 'prduct_list-items';

    cards.innerHTML = `
      <div class="product_img-box">
        <img src="${product.imgSrc}" alt="${product.name}">
      </div>
      <h4 class="product_bottom-title">${product.name}</h4>
      <h4 class="product_list-price">${product.price.toLocaleString()} so'm</h4>
      <span class="product_id">ID: ${product.id}</span>
    `;

    let productListBox = document.querySelector(".product_list-box");
    productListBox.appendChild(cards);
  }

  products.forEach(product => {
    createProduct(product);
  });
}

// Navbar section
function navbarAnotherPage() {
  let navBtn = document.querySelectorAll(".sidebar_items i"),
    productSectionTitle = document.querySelector(".product__section"),
    productListBox = document.querySelector(".product_list-box"),
    dashboardSection = document.querySelector(".dashboard_section"),
    memorySection = document.querySelector(".memory_section"),
    letterSection = document.querySelector(".letter_section");


  navBtn.forEach((item, idx) => {
    item.addEventListener("click", (e) => {
      setTimeout(() => {
        if (idx == 0) {
          productSectionTitle.classList.add("product__section-active");
          productListBox.classList.add("product_list-box-active");
          dashboardSection.classList.remove("dashboard_section-active");
          letterSection.classList.remove("letter_section-active");
          memorySection.classList.remove("memory_section-active");
        }

        if (idx == 1) {
          productSectionTitle.classList.remove("product__section-active");
          productListBox.classList.remove("product_list-box-active");
          dashboardSection.classList.add("dashboard_section-active");
          letterSection.classList.remove("letter_section-active");
          memorySection.classList.remove("memory_section-active");
        }

        if (idx == 2) {
          productSectionTitle.classList.remove("product__section-active");
          productListBox.classList.remove("product_list-box-active");
          dashboardSection.classList.remove("dashboard_section-active");
          memorySection.classList.add("memory_section-active");
          letterSection.classList.remove("letter_section-active");
        }
        if (idx == 3) {
          productSectionTitle.classList.remove("product__section-active");
          productListBox.classList.remove("product_list-box-active");
          dashboardSection.classList.remove("dashboard_section-active");
          memorySection.classList.remove("memory_section-active");
          letterSection.classList.add("letter_section-active");
        }
        if (idx == 4) {
          productSectionTitle.classList.remove("product__section-active");
          productListBox.classList.remove("product_list-box-active");
          dashboardSection.classList.remove("dashboard_section-active");
          memorySection.classList.remove("memory_section-active");
          letterSection.classList.remove("letter_section-active");
        }
        if (idx == 5) {
          productSectionTitle.classList.remove("product__section-active");
          productListBox.classList.remove("product_list-box-active");
          dashboardSection.classList.remove("dashboard_section-active");
          memorySection.classList.remove("memory_section-active");
          letterSection.classList.remove("letter_section-active");
        }
      }, 500);
    });
  });
}
navbarAnotherPage()

// Product menu bar
function productMenuBar() {
  let productlink = document.querySelectorAll(".product_menu-items-link");

  productlink.forEach((item, idx) => {
    item.addEventListener("click", (e) => {
      productlink.forEach((item) => item.classList.remove("product_menu-items-link-active"));
      let animationLine = document.querySelector(".animation_line");
      item.classList.add("product_menu-items-link-active");
      if (idx == 0) {
        animationLine.style.left = "calc(100px * 0)";
      };
      if (idx == 1) {
        animationLine.style.left = "calc(100px * 1)";
      };
      if (idx == 2) {
        animationLine.style.left = "calc(100px * 2)";
      };
      if (idx == 3) {
        animationLine.style.left = "calc(100px * 3)";
      };
      if (idx == 4) {
        animationLine.style.left = "calc(100px * 4)";
      };
      if (idx == 5) {
        animationLine.style.left = "calc(100px * 5)";
      };
    })
  })
}
productMenuBar()

// Sidebar navigation
function navbarFunc() {
  let box = document.querySelectorAll(".sidebar_item-box");

  box.forEach((item, idx) => {
    item.addEventListener("click", (e) => {
      box.forEach((item) => item.classList.remove("active_item"));
      let indicator = document.querySelector(".indicator");
      item.classList.add("active_item");
      if (idx == 0) {
        indicator.style.top = "calc(80px * 0)";
      };
      if (idx == 1) {
        indicator.style.top = "calc(80px * 1)";
      };
      if (idx == 2) {
        indicator.style.top = "calc(80px * 2)";
      };
      if (idx == 3) {
        indicator.style.top = "calc(80px * 3)";
      };
      if (idx == 4) {
        indicator.style.top = "calc(80px * 4)";
      };
      if (idx == 5) {
        indicator.style.top = "calc(80px * 5)";
      };
    })
  })
}
navbarFunc()

