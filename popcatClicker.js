let interval = null;
const doClick = () => {
  document.dispatchEvent(new PointerEvent('pointerdown'));
  document.dispatchEvent(new PointerEvent('pointerup'));
};
const start = (delay = 250) => {
  if (interval === null) {
    interval = setInterval(doClick, delay);
  }
};
const stop = () => {
  if (interval !== null) {
    clearInterval(interval);
    interval = null;
  }
};

export const popcatClicker = {
  start,
  stop,
};
