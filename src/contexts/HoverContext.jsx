import React, { createContext } from 'react';

export const HoverContext = createContext();

export const HoverProvider = ({ children }) => {
  let resolveHover;
  const hoverPromise = new Promise((resolve) => {
    resolveHover = resolve;
  });

  document.addEventListener('mouseover', (e) => {
    const target = e.target;
    if (
      target.tagName === 'A' ||
      target.tagName === 'BUTTON' ||
      target.closest('a') ||
      target.closest('button')
    ) {
      resolveHover(true);
    } else {
      resolveHover(false);
    }
  });

  return (
    <HoverContext.Provider value={hoverPromise}>
      {children}
    </HoverContext.Provider>
  );
};
