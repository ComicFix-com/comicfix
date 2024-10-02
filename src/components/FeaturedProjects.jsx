import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGitHubData } from '../hooks/useGitHubData';
import { GithubIcon, Star, GitFork } from 'lucide-react';

const ProjectCard = ({ repoFullName }) => {
  const { data: repo, isLoading, error } = useGitHubData(repoFullName);

  if (isLoading) return <Card><CardContent>Loading...</CardContent></Card>;
  if (error) return <Card><CardContent>Error: {error.message}</CardContent></Card>;
  if (!repo) return <Card><CardContent>No data available</CardContent></Card>;

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center">
          <GithubIcon className="mr-2" />
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {repo.name}
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-4">{repo.description}</p>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <span className="flex items-center">
            <Star className="mr-1" size={16} />
            {repo.stargazers_count}
          </span>
          <span className="flex items-center">
            <GitFork className="mr-1" size={16} />
            {repo.forks_count}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

const FeaturedProjects = () => {
  const projects = [
    "ComicFix-com/Corn.ai",
    "ComicFix-com/AI-tools-for-you",
    "ComicFix-com/FinSage-",
    "ComicFix-com/UniW",
    "ComicFix-com/ZoXach",
    "ComicFix-com/Law-Buddy-"
    
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} repoFullName={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;