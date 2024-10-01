import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchRepoData = async (repoFullName) => {
  const response = await axios.get(`https://api.github.com/repos/${repoFullName}`);
  return response.data;
};

export const useGitHubData = (repoFullName) => {
  return useQuery({
    queryKey: ['githubRepo', repoFullName],
    queryFn: () => fetchRepoData(repoFullName),
    retry: 1,
    refetchOnWindowFocus: false,
  });
};