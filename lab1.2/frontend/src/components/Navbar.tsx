import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <Link to="/employees" style={{ color: 'white', marginRight: '15px' }}>
          Employees
        </Link>
        <SignedIn>
          <Link to="/organization" style={{ color: 'white' }}>
            Organization
          </Link>
        </SignedIn>
      </div>
      <div>
        <SignedOut>
          <SignInButton mode="modal">
            <button style={{ color: 'white', background: 'none', border: '1px solid white', padding: '5px 10px', cursor: 'pointer' }}>
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}

export default Navbar;