export type TTab = {
  id: string;
  title: string;
  currentIndex: number;
  tabAction: (id: string) => void;
};

export const getTabById = (id: string, tabs: Array<TTab>): TTab | null => {
  const filteredTabs: Array<TTab> = tabs.filter((t) => t.id === id);

  if (filteredTabs.length <= 0) {
    return null;
  }

  return filteredTabs[0];
};

export const createNewTab = (
  title: string,
  currentIndex: number,
  tabAction: (id: string) => void,
): TTab => {
  const newTab: TTab = {
    id: crypto.randomUUID(),
    title: title,
    currentIndex: currentIndex,
    tabAction: tabAction,
  };

  return newTab;
};
