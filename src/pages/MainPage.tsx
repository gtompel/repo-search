import React from 'react';
import { useStore } from 'effector-react';
import { SearchBar } from '../features/search/ui/SearchBar';
import { RepoList } from '../features/search/ui/RepoList';
import { Paginator } from '../features/search/ui/Paginator';
import { $searchTerm, $page, useRepositories } from '../features/search/model/store';

export const MainPage: React.FC = () => {
  const searchTerm = useStore($searchTerm);
  const page = useStore($page);
  const { loading, error, repositories, loadMore } = useRepositories(searchTerm, page);

  return (
    <div>
      <SearchBar />
      {loading && <p>Loading...</p>}
      {error && <p>Error occurred.</p>}
      <RepoList repositories={repositories} />
      <Paginator currentPage={page} totalPages={10} />
    </div>
  );
};
