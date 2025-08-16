
export function setupNavModal() {
  const logoBtn = document.getElementById("logo-mobile-modal"); 
  const navModal = document.getElementById("nav-modal");
  const closeBtn = document.getElementById("close-nav-modal");

  if (!logoBtn || !navModal || !closeBtn) return;

  // Open modal when clicking logo
  logoBtn.addEventListener("click", () => {
    navModal.showModal(); // showDialog for modal
  });

  // Close modal when clicking close button
  closeBtn.addEventListener("click", () => {
    navModal.close();
  });

  // Optional: click outside modal to close
  navModal.addEventListener("click", (e) => {
    if (e.target === navModal) {
      navModal.close();
    }
  });
}
