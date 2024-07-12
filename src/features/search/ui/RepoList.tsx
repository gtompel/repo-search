import React from 'react';
import { Link } from '../../../shared/ui/Link';

interface RepoListProps {
  repositories: Array<{
    id: string;
    name: string;
    stargazerCount: number;
    pushedAt: string;
    url: string;
  }>;
}

export const RepoList: React.FC<RepoListProps> = ({ repositories }) => {
  return (
    <ul>
      {repositories.map((repo) => (
        <li key={repo.id}>
          <Link href={repo.url}>{repo.name}</Link>
          <p>Stars: {repo.stargazerCount}</p>
          <p>Last commit: {new Date(repo.pushedAt).toLocaleDateString()}</p>
        </li>
      ))}
    </ul>
  );
};
