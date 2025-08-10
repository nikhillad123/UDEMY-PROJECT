import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'
import { assets, dummyEducatorData } from '../../assets/assets'

const Navbar = () => {
    const educatorData = dummyEducatorData;
    const { user } = useUser();

    return (
        <nav className='flex items-center justify-between px-4 md:px-8 py-3 border-b border-gray-500/20'>
            <Link to={'/'}>
                <img src={assets.logo} alt="Logo" className='w-28 lg:w-32' />
            </Link>

            <div className='flex items-center gap-5 text-gray-500 relative'>
                <p>Hi! {user ? user.fullName : 'Developers'}</p>
                {user ? <UserButton /> : <img className='max-w-8' src={assets.profile_img} />}
            </div>
        </nav>
    );
}

export default Navbar;