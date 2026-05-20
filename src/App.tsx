import JobList from './components/JobList';
import { jobs } from './data/jobs';

function App() {
  return (
    <div>
      <h1>Job Listing Application</h1>
       <JobList jobs={jobs} />
    </div>
  );
}

export default App;