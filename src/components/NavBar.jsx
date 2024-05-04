// solidJS
import { useContext, createEffect, createSignal } from 'solid-js';
import { ComponentContext } from '../context/ComponentContext';
import { DrawerIsOpenContext } from '../context/DrawerIsOpenContextProvider';

// assets
import solibeeLogoLight from '../../assets/solibee-logo2.png';
import solibeeLogoDark from '../../assets/solibee-logo-light-v2.png';
import gitLogo from '../../assets/github-mark.png';
import gitLogoWhite from '../../assets/github-mark-white.png';
import sunIcon from '../../assets/sun-svgrepo-com.svg';
import nightIcon from '../../assets/night-svgrepo-com.svg';
import expandSideMenu from '../../assets/expand-menu.svg';
import expandSideMenuWhite from '../../assets/expand-menu-white.svg';



export default function NavBar() {
  const { components } = useContext(ComponentContext);
  const { drawerIsOpen, setDrawerIsOpen } = useContext(DrawerIsOpenContext);
  const href = `/component/${components[0].toLowerCase().replaceAll(' ', '')}`;
  const [isDarkMode, setIsDarkMode] = createSignal(false);
 
  //it will set the side menu to open or close
  function handleSideMenu(){
    return setDrawerIsOpen({open: !drawerIsOpen.open}); // Toggle side menu
  }

  function handleClick() {
    setIsDarkMode(!isDarkMode()); // Toggle dark mode
  }

  // Effect to update icon and theme based on dark mode state
  createEffect(() => {
    const modeIcon = document.getElementById('mode-icon');
    const githubIcon = document.getElementById('github-icon');

    if (isDarkMode()) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark');
      modeIcon.src = nightIcon;
      modeIcon.alt = 'Night icon';
      githubIcon.src = gitLogoWhite;
    } else {
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.classList.remove('dark');
      modeIcon.src = sunIcon;
      modeIcon.alt = 'Sun icon';
      githubIcon.src = gitLogo;
    }
  });

  // function handleClick() {
  //   const isDarkMode = document.documentElement.hasAttribute('data-theme');
  //   const modeIcon = document.getElementById('mode-icon');
  //   const githubIcon = document.getElementById('github-icon');

  //   if (isDarkMode) {
  //     document.documentElement.removeAttribute('data-theme');
  //     modeIcon.src = sunIcon;
  //     modeIcon.alt = 'Sun icon';
  //     githubIcon.src = gitLogo;
  //   } else {
  //     document.documentElement.setAttribute('data-theme', 'dark');
  //     modeIcon.src = nightIcon;
  //     modeIcon.alt = 'Night icon';
  //     githubIcon.src = gitLogoWhite;
  //   }

  //   modeIcon.removeEventListener('click', handleClick);
  //   modeIcon.addEventListener('click', handleClick);
  // }

  // modeIcon.removeEventListener('click', handleClick);
  // modeIcon.addEventListener('click', handleClick);
  return (
    <header class=' bg-white-200 sticky top-0 z-40 flex h-16 w-screen justify-center border-b border-orange-100 px-5 py-2 text-sm font-medium text-slate-700  backdrop-blur-3xl dark:border-orange-300'>
      <div class=' flex w-full max-w-6xl items-center justify-between'>
        <div class='flex items-center text-font'>
          <a
            href='/'
            class='mr-4 flex items-center justify-center font-pacifico text-2xl md:mr-10'
          >
            <img
              class='mr-2 h-6 md:h-8'
              src={isDarkMode() ? solibeeLogoDark : solibeeLogoLight}
              alt='the solibee logo: a bee in a honeycomb'
            />
            Solibee
          </a>
          <span class='mr-2 mt-1 hover:text-orange-200 md:mr-6'>
            <a href='/introduction'>Docs</a>
          </span>
          <span class='mt-1 hover:text-orange-200'>
            <a href={href}>Components</a>
          </span>
        </div>
        <div id='icons' class='mt-1 flex items-center'>
          <a
            class='ml-6'
            target='_blank'
            href='https://github.com/oslabs-beta/solibee/'
          >
            <img
              id='github-icon'
              class='h-6'
              src={isDarkMode() ? gitLogo : gitLogoWhite}
              alt='GitHub logo'
            />
          </a>
          <img
            id='mode-icon'
            class='ml-2 h-6 md:ml-6 '
            src={isDarkMode() ? nightIcon : sunIcon}
            alt='Sun icon'
            onClick={handleClick}
          />
      
          <button
            onClick={handleSideMenu}
            aria-haspopup='dialog'
            aria-expanded={drawerIsOpen.open}
            aria-controls=''
          >
            <span class='sr-only'>Open navigation to the left side</span>
            <img
              class='ml-2 h-6 md:hidden'
              src={isDarkMode() ? expandSideMenuWhite : expandSideMenu}
              alt='expand menu icon'
            />
          </button>
        </div>
      </div>
    </header>
  );
}
