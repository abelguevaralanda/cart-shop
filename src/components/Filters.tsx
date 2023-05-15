import { useId } from 'react';
import './Filters.css';
import { useFilters } from '../hooks/useFilters';

export const Filters = () => {
  const { filters, setFilters } = useFilters();
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: +event.target.value,
    }));
  };

  const handleChangeCategory = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value,
    }));
  };
  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input
          type="range"
          id={minPriceFilterId}
          min={0}
          max={1000}
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        ></input>
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Móviles</option>
          <option value="home-decoration">Hogar</option>
          <option value="fragrances">Perfumes</option>
          <option value="skincare">Cremas</option>
          <option value="groceries">Comida</option>
        </select>
      </div>
    </section>
  );
};
