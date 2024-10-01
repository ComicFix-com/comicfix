import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Badge from './Badge';
import { GithubIcon, LinkedinIcon } from 'lucide-react';

const UserProfile = ({ user }) => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{user.name}</CardTitle>
        <div className="flex space-x-2">
          <a href={user.github} target="_blank" rel="noopener noreferrer">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Badges</h3>
          <div className="flex flex-wrap gap-2">
            {user.badges.map((badge, index) => (
              <Badge key={index} name={badge.name} icon={badge.icon} description={badge.description} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Contributions</h3>
          <ul className="list-disc list-inside">
            {user.contributions.map((contribution, index) => (
              <li key={index}>{contribution}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;