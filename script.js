document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    const targetId = link.getAttribute("data-target");
    document.querySelectorAll(".content").forEach(section => {
      section.classList.remove("active");
    });
    document.getElementById(targetId).classList.add("active");
  });
});
