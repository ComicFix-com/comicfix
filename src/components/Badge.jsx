import React from 'react';
import { Tooltip } from "@/components/ui/tooltip";

const Badge = ({ name, icon, description }) => {
  return (
    <Tooltip content={description}>
      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800">
        {icon}
        <span className="sr-only">{name}</span>
      </div>
    </Tooltip>
  );
};

export default Badge;