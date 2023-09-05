'use client';
import React from 'react';
import { ThemeProvider } from 'next-themes';
import { useState, useEffect } from 'react';

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute='class'>{children}</ThemeProvider>;
};

export default Provider;
