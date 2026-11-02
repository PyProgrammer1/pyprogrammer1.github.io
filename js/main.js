(() => {
  if (document.querySelector(".metaballs-background")) return;

  const namespace = "http://www.w3.org/2000/svg";
  const colors = ["#30d9db", "#5c82ff", "#9d63ff", "#328fff", "#3ed5b5", "#6f71ff"];
  const blobs = [
    { x: 0.12, y: 0.24, radius: 0.14, phase: 0.2, speed: 0.2 },
    { x: 0.31, y: 0.72, radius: 0.17, phase: 1.8, speed: 0.16 },
    { x: 0.53, y: 0.28, radius: 0.16, phase: 3.1, speed: 0.18 },
    { x: 0.72, y: 0.68, radius: 0.18, phase: 4.5, speed: 0.15 },
    { x: 0.9, y: 0.34, radius: 0.13, phase: 5.7, speed: 0.19 },
    { x: 0.48, y: 0.88, radius: 0.12, phase: 2.4, speed: 0.17 },
  ];
  const background = document.createElement("div");
  background.className = "metaballs-background";
  background.setAttribute("aria-hidden", "true");

  const svg = document.createElementNS(namespace, "svg");
  svg.setAttribute("preserveAspectRatio", "none");
  svg.setAttribute("aria-hidden", "true");

  const definitions = document.createElementNS(namespace, "defs");
  const filter = document.createElementNS(namespace, "filter");
  filter.setAttribute("id", "metaball-filter");
  filter.setAttribute("x", "-20%");
  filter.setAttribute("y", "-20%");
  filter.setAttribute("width", "140%");
  filter.setAttribute("height", "140%");

  const blur = document.createElementNS(namespace, "feGaussianBlur");
  blur.setAttribute("in", "SourceGraphic");
  blur.setAttribute("stdDeviation", "24");
  blur.setAttribute("result", "blur");
  const threshold = document.createElementNS(namespace, "feColorMatrix");
  threshold.setAttribute("in", "blur");
  threshold.setAttribute("type", "matrix");
  threshold.setAttribute(
    "values",
    "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
  );
  filter.append(blur, threshold);
  definitions.append(filter);

  const group = document.createElementNS(namespace, "g");
  group.setAttribute("filter", "url(#metaball-filter)");
  const circles = blobs.map((blob, index) => {
    const circle = document.createElementNS(namespace, "circle");
    circle.setAttribute("fill", colors[index]);
    group.append(circle);
    return circle;
  });

  svg.append(definitions, group);
  background.append(svg);
  document.body.prepend(background);

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let width = 0;
  let height = 0;
  let minDimension = 0;

  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    minDimension = Math.min(width, height);
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  };

  const render = (time = 0) => {
    const seconds = time / 1000;
    circles.forEach((circle, index) => {
      const blob = blobs[index];
      const angle = seconds * blob.speed + blob.phase;
      const x = (blob.x + Math.sin(angle) * 0.07) * width;
      const y = (blob.y + Math.cos(angle * 0.8) * 0.08) * height;
      circle.setAttribute("cx", x.toFixed(1));
      circle.setAttribute("cy", y.toFixed(1));
      circle.setAttribute("r", (minDimension * blob.radius).toFixed(1));
    });

    if (!reducedMotion) window.requestAnimationFrame(render);
  };

  window.addEventListener("resize", resize);
  resize();
  render();
})();