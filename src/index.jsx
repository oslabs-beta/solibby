/* @refresh reload */
import { render } from 'solid-js/web';
import './index.css';
import App from './App';
import { CompContextProvider } from './context/ComponentContext';
import { StrContextProvider } from './context/StrRepresentationContext';
import { CompDescriptionContextProvider } from './context/CompDescriptions';
import { DrawerIsOpenContextProvider } from './context/DrawerIsOpenContextProvider';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
  () => (
    <CompDescriptionContextProvider>
      <CompContextProvider>
        <DrawerIsOpenContextProvider>
          <StrContextProvider>
            <App />
          </StrContextProvider>
        </DrawerIsOpenContextProvider>
      </CompContextProvider>
    </CompDescriptionContextProvider>
  ),
  root,
);
