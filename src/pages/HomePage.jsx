import { Link } from '@reach/router';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <Link to='/song/1'>Song 1</Link>
    <Link to='/song/2'>Song 2</Link>
    <Link to='/song/3'>Song 3</Link>
  </div>
);

export default HomePage;
