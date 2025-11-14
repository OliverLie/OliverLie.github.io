const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const stars = [];
for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    z: Math.random() * canvas.width,
  });
}

function animate() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < stars.length; i++) {
    let p = stars[i];
    p.z -= 2;
    if (p.z <= 0) p.z = canvas.width;

    const k = 128.0 / p.z;
    const x = p.x * k + canvas.width / 2;
    const y = p.y * k + canvas.height / 2;

    if (x < 0 || x > canvas.width || y < 0 || y > canvas.height) continue;

    const size = (1 - p.z / canvas.width) * 2;
    ctx.fillStyle = "white";
    ctx.fillRect(x, y, size, size);
  }

  requestAnimationFrame(animate);
}
animate();
