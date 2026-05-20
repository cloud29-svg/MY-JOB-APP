import { useState } from 'react';

type JobCardProps = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
};

function JobCard({ title, company, location, salary }: JobCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <h3>{title}</h3>
      <p>{company}</p>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && (
        <div>
          <p>Location: {location}</p>
          <p>Salary: {salary}</p>
        </div>
      )}
    </div>
  );
}

export default JobCard;