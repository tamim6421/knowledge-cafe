
import profile from '../../assets/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between item-center p-4 mx-10  border-b-2'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;