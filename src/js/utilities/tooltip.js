import { updateUI } from 'state/ui';

function show(content, side, position) {
  updateUI({ tooltip: { content, side, position } });
}

function hide() {
  updateUI({ tooltip: null });
}

function calculateVerticalPosition(vertical, left, right, shift = 0) {
  return {
    x: left + ((right - left) / 2),
    y: vertical + shift,
  };
}

function calculateHorizontalPosition(horizontal, top, bottom, shift = 0) {
  return {
    x: horizontal + shift,
    y: top + ((bottom - top) / 2),
  };
}

function calculatePosition(node, side) {
  const rect = node.getBoundingClientRect();
  const { top, right, bottom, left } = rect;
  if (side === 'bottom') return calculateVerticalPosition(bottom, left, right, -12);
  else if (side === 'right') return calculateHorizontalPosition(right, top, bottom, -18);
  else if (side === 'left') return calculateHorizontalPosition(left, top, bottom, -18);
  return calculateVerticalPosition(top, left, right, 12);
}

export function tooltip(node, { content, side }) {
  function onNodeMouseOver() {
    const position = calculatePosition(node, side);
    show(content, side, position);
  }

  function onNodeMouseOut() {
    if (!document.activeElement || document.activeElement !== node) hide();
  }

  function onNodeFocus() {
    const position = calculatePosition(node);
    show(content, side, position);
  }

  function onNodeBlur() {
    hide();
  }

  function init() {
    node.addEventListener('mouseover', onNodeMouseOver);
    node.addEventListener('mouseout', onNodeMouseOut);
    node.addEventListener('focus', onNodeFocus);
    node.addEventListener('blur', onNodeBlur);
  }

  function destroy() {
    node.removeEventListener('mouseover', onNodeMouseOver);
    node.removeEventListener('mouseout', onNodeMouseOut);
    node.removeEventListener('focus', onNodeFocus);
    node.removeEventListener('blur', onNodeBlur);
  }

  init();

  return {
    destroy,
  };
}
