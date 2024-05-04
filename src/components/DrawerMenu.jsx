// Desc: DrawerMenu component for mobile view
import Menu from './Menu';
import { useContext } from 'solid-js';
import { DrawerIsOpenContext } from '../context/DrawerIsOpenContextProvider';
import solibeeLogoLight from '../../assets/solibee-logo2.png';
import solibeeLogoDark from '../../assets/solibee-logo-light-v2.png';


export default function DrawerMenu() {
  const {drawerIsOpen, setDrawerIsOpen} = useContext(DrawerIsOpenContext);
  const isDarkMode = () => {
    console.log(document.documentElement.hasAttribute('data-theme'));
    return document.documentElement.hasAttribute('data-theme');
  };
  return (
    <>
      {/* overlay for the webpage when the drawer is open */}
      <div
        class='fixed left-0 top-0 w-full h-full z-40 bg-black bg-opacity-50 md:hidden transition-transform duration-300'
        aria-hidden={!drawerIsOpen.open}
        tabIndex={-1}
        onClick={() => setDrawerIsOpen({ open: false })}
        classList={{
          block: drawerIsOpen.open,
          hidden: !drawerIsOpen.open,
        }}
      />

      {/* drawer menu */}
      {/* TO DO: figure out how to make it bg on dark mode */}
      <div
        class=' fixed left-0 top-0 z-50 flex h-screen w-64 flex-col bg-white p-4 shadow-lg transition-transform duration-300 md:hidden'
        aria-hidden={true}
        classList={{
          'translate-x-0': drawerIsOpen.open,
          '-translate-x-full': !drawerIsOpen.open,
        }}
      >
        <a
          href='/'
          class='mb-4 flex items-center justify-start  p-2 font-pacifico text-2xl md:mr-10 '
        >
          <img
            class='mr-2 h-6 md:h-8'
            src={isDarkMode() ? solibeeLogoDark : solibeeLogoLight}
            alt='the solibee logo: a bee in a honeycomb'
          />
          Solibee
        </a>
        <Menu />
      </div>
    </>
  );
 
}

//  <div role="dialog" id="s20-0-0-2-0-0-0-0-0-0" aria-modal="true" data-open="" tabindex="-1" style="transform: translate3d(0px, 0px, 0px); pointer-events: auto;" data-corvu-drawer-content="" class="fixed inset-y-0 left-0 z-50 flex w-[230px] flex-col items-start bg-corvu-bg after:absolute after:inset-y-0 after:right-[calc(100%-1px)] after:w-1/2 after:bg-inherit corvu-transitioning:transition-transform corvu-transitioning:duration-500 corvu-transitioning:ease-[cubic-bezier(0.32,0.72,0,1)]"></div>


//  <div
//    class='fixed
//          left-0 top-0 z-40 h-full w-full bg-black bg-opacity-50 md:hidden'
//    aria-hidden={true}
//    classList={{
//      'translate-x-0': drawerIsOpen.open,
//      '-translate-x-full': !drawerIsOpen.open,
//    }}
//    onClick={() => setDrawerIsOpen({ open: false })}
//  />;