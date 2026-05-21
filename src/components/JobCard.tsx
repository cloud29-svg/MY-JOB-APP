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
    <div style={{ border: '1px solid gray', 
    padding: '16px', 
    marginBottom: '16px',
      borderRadius: '14px',
     }}>

      <h3 style={{color: 'white'}}>{title}</h3>
      <p style={{ fontSize: '18px', color: 'white', margin: '12px 0' }}>
      {company}</p>
      <button onClick={() => setShowDetails(!showDetails)}
        style={{ backgroundColor: showDetails ? '#f95454' : '#77cdff', 
        border: 'none', 
        padding: '8px 16px', 
        cursor: 'pointer',
        fontSize: '16px',
        borderRadius: '14px',
        color: 'seawhite',
        marginBottom: '8px',
      }}>
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