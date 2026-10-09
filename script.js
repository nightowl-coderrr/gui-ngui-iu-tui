// Trái tim bay nền
const box = document.getElementById("hearts");
const colors = ["#ff1f8e", "#ff1f8e", "#ff1f8e", "#ff4fa7", "#e0007a"];
const rand = (a, b) => a + Math.random() * (b - a);

if (box) {
  const count = window.innerWidth < 600 ? 28 : 46;
  for (let i = 0; i < count; i++) {
    const h = document.createElement("span");
    h.className = "heart";
    h.style.setProperty("--s", rand(18, 64) + "px");
    h.style.setProperty("--x", rand(-2, 100) + "%");
    h.style.setProperty("--d", rand(7, 15) + "s");
    h.style.setProperty("--delay", -rand(0, 15) + "s");
    h.style.setProperty("--sway", rand(-40, 40) + "px");
    h.style.setProperty("--r0", rand(-30, 30) + "deg");
    h.style.setProperty("--r1", rand(-45, 45) + "deg");
    h.style.setProperty("--c", colors[Math.floor(Math.random() * colors.length)]);
    h.style.setProperty("--o", rand(0.55, 1));
    h.style.setProperty("--top", rand(0, 100) + "%");
    box.appendChild(h);
  }
}

// Bấm vào đâu thì tim bung ra ở đó
document.addEventListener("pointerdown", (e) => {
  if (!box) return;
  for (let i = 0; i < 7; i++) {
    const p = document.createElement("span");
    p.className = "pop heart";
    p.style.animation = "pop .9s ease-out forwards";
    p.style.bottom = "auto";
    p.style.setProperty("--s", rand(14, 30) + "px");
    p.style.left = e.clientX - 10 + "px";
    p.style.top = e.clientY - 10 + "px";
    p.style.setProperty("--dx", rand(-90, 90) + "px");
    p.style.setProperty("--dy", rand(-110, 40) + "px");
    p.style.position = "fixed";
    p.style.zIndex = 3;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 950);
  }
});
