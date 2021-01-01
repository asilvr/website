import TopPill from './components/TopPill';
import BottomPill from './components/BottomPill';
import Avatar from './components/Avatar';
import IconButton from './components/IconButton';
import Toggle from './components/Toggle';
import TextTitle from './components/TextTitle';

import { useState } from 'react';
import { useEffect } from 'react';

// App is the main web application.
function App() {
  // useStickyState provides a way to persist the state
  // across page loads.
  function useStickyState(defaultValue, key) {
    const [value, setValue] = useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }

  // This generates a random boolean for the default state of the toggle.
  // This makes it so that new visitors don't always get the same mode, 
  // but the sticky state keeps them on the same mode once they've visited
  // or changed it.
  var randomDefault = (Math.random() < 0.5)
  const [toggled, setToggled] = useStickyState(randomDefault, "toggled");

  return (
    <div class="bg-gray-800 min-h-full h-screen">
      <div class="flex pb-2 sm:pt-16 justify-center">
        <div class="w-96 p-4">
          <TopPill toggled={toggled}>
            <div class="inline-block">
              <Avatar toggled={toggled} />
            </div>
            <div class="pt-4">
              <Toggle toggled={toggled} setToggled={setToggled} />
            </div>
          </TopPill>
          <BottomPill toggled={toggled}>
            <TextTitle toggled={toggled} size="title">
              Alex Silver
            </TextTitle>
            <TextTitle toggled={toggled} size="subtitle">
              Software Engineer
            </TextTitle>
            <div class="pt-4 space-x-4">
              <IconButton icon="resume" toggled={toggled} />
              <IconButton icon="linkedin" toggled={toggled} />
              <IconButton icon="github" toggled={toggled} />
              <IconButton icon="twitter" toggled={toggled} />
              <IconButton icon="medium" toggled={toggled} />
            </div>
            <div class="pt-6">
              <TextTitle toggled={toggled} size="signature">
                (Designed by Alex using <a class="underline" href="https://reactjs.org/">React</a> and <a class="underline" href="https://tailwindcss.com">TailwindCSS</a>)
              </TextTitle>
            </div>
          </BottomPill>
        </div>
      </div>
    </div >
  );
}

export default App;