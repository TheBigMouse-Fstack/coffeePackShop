document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.querySelector(".search-bar");
  const burger = document.querySelector(".burger");
  const burger_div = document.querySelector(".burger_div");
  const navbar = document.querySelector(".navbar");
  const burgerInput = document.querySelector("#burger");
  const spans = document.querySelectorAll(".burger span");

  let isMenuOpen = false;

  // Kiểm tra xem có phải là màn hình lớn không
  const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;

  // Hàm để xử lý sự kiện scroll chỉ khi màn hình đủ lớn
  const handleScroll = () => {
    if (!isLargeScreen) return; // Nếu không phải màn hình lớn thì không làm gì cả

    const currentScroll = window.scrollY;
    if (currentScroll > 150 && !isMenuOpen) {
      searchBar.classList.add("w-[66%]");
      searchBar.classList.remove("w-[68%]");

      burger_div.classList.remove("lg:hidden");
      burger_div.classList.add("flex");

      navbar.classList.add("mt-[-6rem]", "z-30");
      navbar.classList.remove("mt-0");
    } else if (currentScroll < 50) {
      searchBar.classList.add("w-[68%]");
      searchBar.classList.remove("w-[66%]");

      burger_div.classList.add("lg:hidden");
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
  };

  // Lắng nghe sự kiện scroll chỉ khi là màn hình lớn
  window.addEventListener("scroll", handleScroll);

  // Lắng nghe sự kiện thay đổi trạng thái của burgerInput
  burgerInput.addEventListener("change", () => {
    if (!isLargeScreen) return; // Nếu không phải màn hình lớn thì không làm gì cả

    if (burgerInput.checked) {
      spans[0].classList.add("rotate-45", "translate-y-[8px]");
      spans[2].classList.add("rotate-[-45deg]", "translate-y-[-8px]");
      spans[1].classList.add("opacity-0");

      navbar.classList.add("mt-0", "z-30");
      navbar.classList.remove("mt-[-6rem]");
      isMenuOpen = true;
    } else {
      spans[0].classList.remove("rotate-45", "translate-y-[8px]");
      spans[2].classList.remove("rotate-[-45deg]", "translate-y-[-8px]");
      spans[1].classList.remove("opacity-0");

      navbar.classList.add("mt-[-6rem]");
      navbar.classList.remove("mt-0", "z-30");
      isMenuOpen = false;
    }
  });

  // Sự kiện click vào burger icon chỉ khi màn hình lớn
  burger.addEventListener("click", () => {
    if (!isLargeScreen) return; // Nếu không phải màn hình lớn thì không làm gì cả
    console.log("click");
    burgerInput.checked = !burgerInput.checked;
  });
  // Sự kiện slice
  var splide = new Splide("#splice__banner", {
    perPage: 1,
    rewind: true,
    perMove: 1,
    type: "loop",
    autoplay: true,
  });
  splide.mount();

  document.querySelectorAll('.options input[type="radio"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      const selected = document.querySelector(".selected");
      const text = document
        .querySelector(`[for=${this.id}]`)
        .getAttribute("data-txt");
      selected.textContent = text;
    });
  });
});
