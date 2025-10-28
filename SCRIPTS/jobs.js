
const openButtons = document.querySelectorAll('.openBtn');
const closeButtons = document.querySelectorAll('.close-btn');
const panels = document.querySelectorAll('.side-panel');
let activePanel = null;

// Open a panel
openButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const targetId = btn.getAttribute('data-target');
    const targetPanel = document.getElementById(targetId);

    // Close previously open panel (if not the same)
    if (activePanel && activePanel !== targetPanel) {
      activePanel.classList.remove('active');
    }

    // Toggle target panel
    targetPanel.classList.toggle('active');
    activePanel = targetPanel.classList.contains('active') ? targetPanel : null;
  });
});

// Close panel with X button
closeButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const panel = btn.closest('.side-panel');
    panel.classList.remove('active');
    if (activePanel === panel) activePanel = null;
  });
});

// Close panel when clicking outside
document.addEventListener('click', (e) => {
  if (
    activePanel &&
    !activePanel.contains(e.target) &&
    !e.target.classList.contains('openBtn')
  ) {
    activePanel.classList.remove('active');
    activePanel = null;
  }
});