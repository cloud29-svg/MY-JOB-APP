import JobCard from './JobCard';

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
};

type JobListProps = {
  jobs: Job[];
};

function JobList( { jobs }: JobListProps) {
  if (jobs.length === 0) {
    return <p>No jobs available at the moment.</p>
  }

  return (
    <div>
      {jobs.map( (job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

export default JobList;