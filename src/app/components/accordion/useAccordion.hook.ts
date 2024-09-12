import { useState } from 'react';

export const useAccordion = ({ ids }: { ids: string[] }) => {
  const [_openIds, _setOpenIds] = useState<string[]>([]);

  const toggleItem = (id: string) =>
    _setOpenIds(s =>
      s.includes(id) ? [...s.filter(x => x !== id)] : [...s, id]
    );

  const toggleAllItems = () =>
    _setOpenIds(s => (s.length === ids.length ? [] : ids));

  return {
    openIds: _openIds,
    toggleItem,
    toggleAllItems,
  };
};
