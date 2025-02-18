// // Product list
let products = document.querySelectorAll(".prduct_list-items");

products.forEach((item, idx) => {
  item.addEventListener("click", (e)=> {
    let obj = {};

    
  })
})
















































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

