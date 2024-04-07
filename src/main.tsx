import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from './components/Error/ErrorBoundary.tsx';

// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpApi from 'i18next-http-backend';

// i18n.use(initReactI18next)
//     .use(LanguageDetector)
//     .use(HttpApi)
//     .init({
//         fallbackLng: 'en',
//         detection: {
//             order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
//             caches: ['localStorage', 'cookie'],
//         },
//         backend: {
//             loadPath: 'assets/locales{{lng}}/translation.json',
//         },
//         react: { useSuspense: false },
//     });

import './i18n';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ErrorBoundary>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </QueryClientProvider>
        </ErrorBoundary>
        <ToastContainer />
    </React.StrictMode>,
);
