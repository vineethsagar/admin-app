/* eslint-disable perfectionist/sort-imports */
import { useEffect } from 'react';
import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();
  useEffect(()=>{
    window.addEventListener('click',(e)=>{
      console.log(e)
    })
  },[])
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
