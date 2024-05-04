import { createContext } from 'solid-js';
import { createStore } from 'solid-js/store';

export const DrawerIsOpenContext = createContext();

export function DrawerIsOpenContextProvider(props) {
  const [drawerIsOpen, setDrawerIsOpen] = createStore({open: false});
  // console.log({drawerIsOpen, setDrawerIsOpen});

  return (
    <DrawerIsOpenContext.Provider value={{drawerIsOpen, setDrawerIsOpen} }>
      {props.children}
    </DrawerIsOpenContext.Provider>
  );
}

// to use the context
// import { useContext } from 'solid-js';
// import { DrawerIsOpenContext } from '../context/DrawerIsOpenContext';
// use the following
// const { drawerIsOpen, setDrawerIsOpen } = useContext(DrawerIsOpenContext);
