document.addEventListener("DOMContentLoaded", () => {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const closeBtn = document.getElementById("closeBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentVisibleItems = [];
  let currentIndex = 0;

  // Track active items for Lightbox navigation
  function updateVisibleItems() {
    currentVisibleItems = Array.from(galleryItems).filter(
      (item) => !item.classList.contains("hide")
    );
  }

  // Category Filtering 
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      galleryItems.forEach((item) => {
        const category = item.dataset.category;
        if (filter === "all" || category === filter) {
          item.classList.remove("hide");
        } else {
          item.classList.add("hide");
        }
      });

      updateVisibleItems();
    });
  });

  // Lightbox Logic
  function openLightbox(index) {
    if (!currentVisibleItems.length || !currentVisibleItems[index]) return;

    currentIndex = index;
    const item = currentVisibleItems[currentIndex];
    const img = item.querySelector("img");
    const captionEl = item.querySelector(".overlay-title");

    if (img) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || "";
    }
    
    lightboxCaption.textContent = captionEl ? captionEl.textContent : "";

    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = ""; // Resets back to stylesheet default
  }

  function showNext() {
    if (!currentVisibleItems.length) return;
    currentIndex = (currentIndex + 1) % currentVisibleItems.length;
    openLightbox(currentIndex);
  }

  function showPrev() {
    if (!currentVisibleItems.length) return;
    currentIndex =
      (currentIndex - 1 + currentVisibleItems.length) %
      currentVisibleItems.length;
    openLightbox(currentIndex);
  }


  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      updateVisibleItems();
      const indexInVisible = currentVisibleItems.indexOf(item);
      if (indexInVisible !== -1) {
        openLightbox(indexInVisible);
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (nextBtn) nextBtn.addEventListener("click", showNext);
  if (prevBtn) prevBtn.addEventListener("click", showPrev);

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (!lightbox || !lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });
  updateVisibleItems();
});

window.addEventListener('DOMContentLoaded', () => {
  const squareImg = new Image();
  squareImg.src = 'icon.jpeg'; 
  squareImg.crossOrigin = 'Anonymous';
  squareImg.onload = () => {
    const canvas = document.createElement('canvas');
    const size = 64; 
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    //favicon
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(squareImg, 0, 0, size, size);

    let favicon = document.getElementById('favicon');
    
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.id = 'favicon';
      favicon.rel = 'icon';
      document.head.appendChild(favicon);
    }
    
    favicon.href = canvas.toDataURL('image/png');
  };

  squareImg.onerror = () => {
    console.error('Failed to load image at path:', squareImg.src);
  };
});
