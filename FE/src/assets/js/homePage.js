document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.querySelector(".search-bar");
  const burger = document.querySelector(".burger");
  const burger_div = document.querySelector(".burger_div");
  const navbar = document.querySelector(".navbar");
  const burgerInput = document.querySelector("#burger");
  const spans = document.querySelectorAll(".burger span");

  let isMenuOpen = false;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 150 && !isMenuOpen) {
      searchBar.classList.add("w-[66%]");
      searchBar.classList.remove("w-[68%]");

      burger_div.classList.remove("hidden");
      burger_div.classList.add("flex");

      navbar.classList.add("mt-[-6rem]", "z-30");
      navbar.classList.remove("mt-0");
    } else if (currentScroll < 50) {
      searchBar.classList.add("w-[68%]");
      searchBar.classList.remove("w-[66%]");

      burger_div.classList.add("hidden");
      burger_div.classList.remove("flex");

      navbar.classList.add("mt-0");
      navbar.classList.remove("mt-[-6rem]", "z-30");
      if (isMenuOpen) {
        burgerInput.checked = !burgerInput.checked;
        spans[0].classList.remove("rotate-45", "translate-y-[8px]");
        spans[2].classList.remove("rotate-[-45deg]", "translate-y-[-8px]");
        spans[1].classList.remove("opacity-0");
        isMenuOpen = false;
      }
    }
  });

  burgerInput.addEventListener("change", () => {
    if (burgerInput.checked) {
      console.log("1");
      // Mở menu
      spans[0].classList.add("rotate-45", "translate-y-[8px]");
      spans[2].classList.add("rotate-[-45deg]", "translate-y-[-8px]");
      spans[1].classList.add("opacity-0");

      navbar.classList.add("mt-0", "z-30");
      navbar.classList.remove("mt-[-6rem]");
      isMenuOpen = true;
    } else {
      // Đóng menu
      spans[0].classList.remove("rotate-45", "translate-y-[8px]");
      spans[2].classList.remove("rotate-[-45deg]", "translate-y-[-8px]");
      spans[1].classList.remove("opacity-0");

      navbar.classList.add("mt-[-6rem]");
      navbar.classList.remove("mt-0", "z-30");
      isMenuOpen = false;
    }
  });

  // Sự kiện click vào burger icon
  burger.addEventListener("click", () => {
    burgerInput.checked = !burgerInput.checked;
  });
});
