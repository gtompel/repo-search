import React from 'react';
import { useParams } from 'react-router-dom';

export const RepoCardPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Здесь можно добавить логику для получения данных репозитория по id

  return (
    <div>
      <h1>Repository Details</h1>
      {/* Здесь можно добавить логику для отображения деталей репозитория */}
    </div>
  );
};
