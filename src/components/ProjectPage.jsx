import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { GithubIcon } from 'lucide-react';

const ProjectPage = ({ project }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{project.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">{project.description}</p>
          <Button className="mb-8">
            <GithubIcon className="mr-2 h-4 w-4" />
            Contribute on GitHub
          </Button>
          
          <h3 className="text-xl font-semibold mb-4">Top Contributors</h3>
          <div className="flex flex-wrap gap-4">
            {project.contributors.map((contributor, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src={contributor.avatar} alt={contributor.name} />
                  <AvatarFallback>{contributor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{contributor.name}</p>
                  <p className="text-sm text-gray-500">{contributor.contributions} contributions</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectPage;