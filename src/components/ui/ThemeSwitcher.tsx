'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { CiSun } from 'react-icons/ci';
import { BiMoon } from 'react-icons/bi';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  if (!mounted) return null;

  return (
    <div
      className={`relative flex h-[2rem] w-[4rem] rounded-lg`}
      onClick={handleClick}
    >
      <span className='cursor-pointer text-3xl text-[goldenrod]'>
        {theme === 'light' ? <CiSun width={150} /> : <BiMoon width={50} />}
      </span>
    </div>
  );
};

export default ThemeSwitcher;
