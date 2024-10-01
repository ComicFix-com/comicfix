import React, { useEffect, useState } from 'react';
import { useWebSocket } from '../contexts/WebSocketContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);
  const socket = useWebSocket();

  useEffect(() => {
    if (socket) {
      socket.emit('getProjects');
      socket.on('projects', (data) => {
        setProjects(data);
      });
    }

    return () => {
      if (socket) {
        socket.off('projects');
      }
    };
  }, [socket]);

  const handleContribute = (projectId) => {
    if (socket) {
      socket.emit('contributeProject', projectId);
    }
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Current Projects You Can Contribute To</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
                <Button onClick={() => handleContribute(project.id)}>Contribute</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;