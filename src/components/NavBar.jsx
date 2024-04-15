import { createSignal, useContext } from 'solid-js';
import solibeeLogo from '../../assets/solibee-logo2.png';
import gitLogo from '../../assets/github-mark.png';
import gitLogoWhite from '../../assets/github-mark-white.png';
import sunIcon from '../../assets/sun-svgrepo-com.svg';
import nightIcon from '../../assets/night-svgrepo-com.svg';
import { ComponentContext } from '../context/ComponentContext';

export default function NavBar() {
  const { components } = useContext(ComponentContext);
  const href = `/component/${components[0].toLowerCase().replaceAll(' ', '')}`;

  return (
    <div class='bg-white-200 sticky top-0 z-50 flex h-16 w-full items-center justify-between  border border-orange-100 px-5 py-2 text-sm font-medium text-slate-700 backdrop-blur-sm'>
      <div class='flex items-center'>
        <a
          href='/'
          class='mr-10 flex items-center justify-center font-pacifico text-2xl'
        >
          <img
            class='h-8 mr-2'
            src={solibeeLogo}
            alt='the solibee logo: a bee in a honeycomb'
          />
          Solibee
        </a>
        <span class='mr-6 mt-1 hover:text-orange-200'>
          <a href='/introduction'>Docs</a>
        </span>
        <span class='mt-1 hover:text-orange-200'>
          <a href={href}>Components</a>
        </span>
      </div>
      <div class='mt-1 flex items-center'>
        <a
          class='ml-6'
          target='_blank'
          href='https://github.com/oslabs-beta/solibee/'
        >
          <span class=''>
            <img class='h-6' src={gitLogo} alt='GitHub logo' />
          </span>
        </a>
        <img class='ml-6 h-6 ' src={sunIcon} alt='Sun icon' />
      </div>
    </div>
  );
}
