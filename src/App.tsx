import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Portfolio from './Portfolio';





export default function App() {


  return (
    <BrowserRouter>
    <div className="App">
      {/* <Suspense fallback={
        <div className="min-h-screen bg-[#FDFDFD] flex items-center justify-center font-[Cairo]" dir="rtl">
            <div className="text-center space-y-4">
              <svg className="loader-spin mx-auto" width="48" height="48" viewBox="0 0 50 50" aria-hidden>
                <circle cx="25" cy="25" r="20" fill="none" stroke="rgba(29,158,117,0.18)" strokeWidth="4" />
                <circle className="spinner-arc" cx="25" cy="25" r="20" fill="none" stroke="var(--color-brand-green)" strokeWidth="4" strokeLinecap="round" strokeDasharray="94" strokeDashoffset="31" />
              </svg>
              <p className="text-slate-400 font-black text-sm">جاري تحميل الصفحة...</p>
            </div>
        </div>
      }> */}
        <Routes>
          <Route path="/" element={<Portfolio /> } />
          {/* <Route path="/blog/:slug" element={<BlogPost /> } /> */}
        </Routes>
      {/* </Suspense> */}
    </div>
    </BrowserRouter>
  );
}
