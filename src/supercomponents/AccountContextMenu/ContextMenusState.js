import { useState } from 'react';

export const ContextMenusState = (initialValue) => {
  const [contextMenuState, setContextMenuState] = useState(initialValue);

  return { contextMenuState, setContextMenuState };
};
