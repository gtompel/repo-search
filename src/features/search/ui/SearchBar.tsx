import React, { useState } from 'react';
import { setSearchTerm } from '../model/store';

export const SearchBar: React.FC = () => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(term);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search repositories..."
      />
      <button type="submit">Search</button>
    </form>
  );
};
