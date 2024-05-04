// solidJS
import { createSignal, For, createEffect, Show } from 'solid-js';
import { useContext } from 'solid-js';
import { ComponentContext } from '../context/ComponentContext';

function MenuItem(props) {
  const [items, setItems] = createSignal();
  createEffect(() => setItems(props.items));

  return (
    <ul>
      <For each={items()}>
        {(item) => {
          return (
            <li>
              <a
                class='flex cursor-pointer justify-between gap-1 rounded-lg p-2 px-3 transition-colors duration-75 hover:bg-orange-200'
                href={'/component/' + item.toLowerCase().replaceAll(' ', '')}
              >
                <span>{item}</span>{' '}
                <Show
                  when={
                    item == 'Accordion' ||
                    item == 'Drag And Drop' ||
                    item == 'Input OTP'
                  }
                >
                  <span class='italic opacity-50'>Beta</span>
                </Show>
              </a>
            </li>
          );
        }}
      </For>
    </ul>
  );
}

export default function Menu() {
  
  const { components } = useContext(ComponentContext); // get components from db if we set up and store them in db;
  
  return (
    // these were the former styles for the wrapper sticky top-28 mr-6 hidden h-full w-52 px-3 backdrop-blur-sm md:block
    <>
      <ul>
        <li class='mb-3 px-3 font-bold text-boldfont'>Getting Started</li>
        <li>
          <a
            class='block cursor-pointer rounded-lg p-2 px-3 transition-colors duration-75 hover:bg-orange-200'
            href='/introduction'
          >
            Introduction
          </a>
        </li>
        <li>
          <a
            class='block cursor-pointer rounded-lg p-2 px-3 transition-colors duration-75 hover:bg-orange-200'
            href='/installation'
          >
            Installation
          </a>
        </li>
        <li class='my-3 px-3 font-bold text-boldfont'>Components</li>
        <MenuItem items={components} />
      </ul>
    </>
  );
}
