import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

export type Filter = {
  category: string;
  minPrice: number;
};

interface FiltersContextInterface {
  filters: Filter;
  setFilters: Dispatch<SetStateAction<Filter>>;
}

const initialFilterState = {
  filters: {
    category: '',
    minPrice: 0,
  },
  setFilters: () => {
    /**/
  },
} as FiltersContextInterface;

export const FiltersContext = createContext(initialFilterState);

interface FiltersProps {
  children: ReactNode;
}
export const FiltersProvider: FC<FiltersProps> = ({ children }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  });

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
