const navTriggers = document.querySelectorAll("[data-page]");
const pages = document.querySelectorAll(".page");

function activatePage(pageKey) {
  pages.forEach((page) => {
    page.classList.remove("is-active");
  });

  navTriggers.forEach((item) => {
    item.classList.remove("active");
  });

  const target = document.getElementById(`page-${pageKey}`);
  const activeTrigger = document.querySelector(`[data-page="${pageKey}"]`);

  if (target) {
    target.classList.add("is-active");
  }

  if (activeTrigger) {
    activeTrigger.classList.add("active");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

navTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    const pageKey = trigger.dataset.page;
    activatePage(pageKey);
  });
});

activatePage("home");