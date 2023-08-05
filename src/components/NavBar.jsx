import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function NavBar() {
  const { isAuthenticated, logout, user } = useAuth();

  console.log(user);

  return (
    <nav className='bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg'>
      <Link to='/'>
        <h1 className='text-2xl font-bold'>Casino App 🎲</h1>
      </Link>
      <ul className='flex gap-x-2'>
        {isAuthenticated ? (
          <>
            <li>Welcome</li>
            <li>
              <Link to='/add-bet' className='bg-indigo-500 px-4 py-1 rounded-sm'>Add Bet</Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  logout();
                }}
                to='/'>
                LogOut
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to='/login' className='bg-indigo-500 px-4 py-1 rounded-sm'>Login</Link>
            </li>
            <li>
              <Link to='/register' className='bg-indigo-500 px-4 py-1 rounded-sm'>Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
