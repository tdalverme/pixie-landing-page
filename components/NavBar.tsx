import Button from '@/ui/Button/Button';
import React from 'react'

const NavBar = (): React.ReactElement => {
  return (
    <div className='flex flex-row justify-between items-center px-20 py-5 bg-violet-600'>
      <div>
        <span>Pixie</span>
      </div>

      <div className='flex flex-row justify-center items-center gap-2'>
        <Button variant='white-ghost' size='sm'>Log In</Button>
        <Button variant='white' size='sm'>Sign Up</Button>
      </div>
    </div>
  );
};

export default NavBar