import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  { name: "Corn.ai", description: "An AI project to advance natural language processing capabilities.", github: "https://github.com/muhammedadnanv/Corn.ai.git" },
  { name: "UniW", description: "A platform for university students to manage and enhance their academic journey.", github: "#" },
  { name: "Law-Buddy", description: "A legal assistant tool to simplify legal document management.", github: "#" },
  { name: "Widgets", description: "A collection of customizable UI widgets for various applications.", github: "#" },
  { name: "FinSage", description: "A financial management solution for users to manage their finances effectively.", github: "#" },
];

const FeaturedProjects = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Current Projects You Can Contribute To</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
                <Button>Contribute</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;