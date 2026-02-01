document.querySelectorAll(".bet").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".bet").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
