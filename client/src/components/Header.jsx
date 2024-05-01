import HomeButton from '../components/HomeButton';
import ColorThemeButton from '../components/ColorTheme';

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
        <HomeButton />
        <ColorThemeButton />
      </div>
  );
};

export default Header;