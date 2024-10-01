import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturedProjects = () => {
  const projects = [
    { name: "Corn.ai", url: "https://github.com/muhammedadnanv/Corn.ai" },
    { name: "UniW", url: "https://github.com/muhammedadnanv/UniW" },
    { name: "Law-Buddy", url: "https://github.com/muhammedadnanv/Law-Buddy-" },
    { name: "Widgets", url: "https://github.com/muhammedadnanv/Widgets" },
    { name: "FinSage", url: "https://github.com/ComicFix-com/FinSage-" }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 h-96">
                <iframe
                  src={`${project.url}/blob/main/README.md`}
                  title={project.name}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                ></iframe>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;