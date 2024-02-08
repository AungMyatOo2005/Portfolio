const Intersecting = () => {
  const observer = () =>
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
  const leftImg = document.querySelector(".left_img");
  observer().observe(leftImg);
  const hiddenCard = document.querySelector(".text_hide");
  observer().observe(hiddenCard);
  const rightImg = document.querySelector(".right_img");
  observer().observe(rightImg);
  const firstAboutText = document.querySelector(".first-about-text");
  observer().observe(firstAboutText);
  const secondAboutText = document.querySelector(".second-about-text");
  observer().observe(secondAboutText);
  const skillCard = document.querySelectorAll(".skill_card");
  skillCard.forEach((el) => observer().observe(el));
};

export default Intersecting;
