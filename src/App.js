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

  // Dark mode detection and auto-toggle logic
  const isDark = window.matchMedia('(prefers-color-scheme: dark)')
  const [toggled, setToggled] = useStickyState(isDark.matches, "toggled");
  isDark.addListener(() => { setToggled(isDark.matches) })

  return (
    <div className={`${!toggled ? "bg-gray-300" : "bg-gray-900"} transition ease-in-out duration-500 min-h-full h-screen`}>
      <div className="flex pb-2 sm:pt-16 justify-center">
        <div className="w-96 p-4">
          <TopPill toggled={toggled}>
            <div className="inline-block">
              <Avatar toggled={toggled} />
            </div>
            <div className="pt-4">
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
            <div className="pt-4 space-x-4">
              <IconButton icon="resume" toggled={toggled} />
              <IconButton icon="linkedin" toggled={toggled} />
              <IconButton icon="github" toggled={toggled} />
              <IconButton icon="twitter" toggled={toggled} />
              <IconButton icon="medium" toggled={toggled} />
            </div>
            <div className="pt-6">
              <TextTitle toggled={toggled} size="signature">
                (Made with <a className="underline hover:opacity-80" href="https://reactjs.org/">React</a> &amp; <a className="underline hover:opacity-80" href="https://tailwindcss.com">TailwindCSS</a>. Source on <a className="underline hover:opacity-80" href="https://github.com/asilvr/website">GitHub</a>.)
              </TextTitle>
            </div>
          </BottomPill>
        </div>
      </div>
    </div >
  );
}

export default App;
