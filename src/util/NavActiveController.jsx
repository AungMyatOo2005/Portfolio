const NavActiveController = function () {
  var sections = document.querySelectorAll("section");
  var navLinks = document.querySelectorAll("a");

  sections.forEach(function (section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.clientHeight;
    var currentScroll = window.pageYOffset;
    if (
      currentScroll + 500 >= sectionTop &&
      currentScroll < sectionTop + sectionHeight - 100
    ) {
      var sectionId = section.getAttribute("id");

      navLinks.forEach(function (link) {
        if (link.getAttribute("href") === "#" + sectionId) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });
};

export default NavActiveController;
