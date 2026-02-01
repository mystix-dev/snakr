// Simple UI behavior: highlight selected bet amount
const betButtons = document.querySelectorAll("[data-bet]");
betButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    betButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Demo actions (safe placeholders)
document.querySelector(".btn-login")?.addEventListener("click", () => {
  alert("Login clicked (hook your real auth here).");
});

document.querySelector(".join")?.addEventListener("click", () => {
  const active = document.querySelector("[data-bet].active");
  const bet = active?.getAttribute("data-bet") || "1";
  alert(`Join Game (bet: $${bet}) — connect to your backend here.`);
});
