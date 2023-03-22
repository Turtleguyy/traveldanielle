function resize() {
    const vh = `${window.innerHeight * 0.01}px`;
    document.documentElement.style.setProperty("--vh", vh);
}

resize();
window.addEventListener("resize", resize);
