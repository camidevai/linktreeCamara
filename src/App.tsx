import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Logo } from './components/Logo';
import { LinkCard } from './components/LinkCard';
import { brand } from './config/brand';
import { links } from './config/links';

function App() {
  // Inyectar variables CSS desde la configuración
  useEffect(() => {
    document.documentElement.style.setProperty('--brand-navy', brand.colors.navy);
    document.documentElement.style.setProperty('--brand-teal-1', brand.colors.teal1);
    document.documentElement.style.setProperty('--brand-teal-2', brand.colors.teal2);
  }, []);

  return (
    <>
      <Helmet>
        <title>CCHIA — Cámara Chilena de Inteligencia Artificial</title>
        <meta
          name="description"
          content="Conectamos talento, industria y academia para una IA responsable en Chile."
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CCHIA — Cámara Chilena de Inteligencia Artificial" />
        <meta
          property="og:description"
          content="Conectamos talento, industria y academia para una IA responsable en Chile."
        />
        <meta property="og:image" content="/og-cchia.jpg" />
        <meta property="og:site_name" content="CCHIA" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CCHIA — Cámara Chilena de Inteligencia Artificial" />
        <meta
          name="twitter:description"
          content="Conectamos talento, industria y academia para una IA responsable en Chile."
        />
        <meta name="twitter:image" content="/og-cchia.jpg" />

        {/* PWA */}
        <meta name="theme-color" content="#0E3A66" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="pt-12 pb-8 px-4">
          <div className="max-w-[520px] md:max-w-[720px] mx-auto text-center">
            <Logo className="mb-6" />
            <h1 className="text-2xl md:text-3xl font-bold mb-3 text-balance">
              {brand.name}
            </h1>
            <p
              className="text-base md:text-lg opacity-80 max-w-md mx-auto text-balance"
              style={{ color: 'var(--brand-text-secondary)' }}
            >
              {brand.claim}
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 px-4 pb-24">
          <div className="max-w-[520px] md:max-w-[880px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {links.map((link) => (
                <LinkCard key={link.id} link={link} />
              ))}
            </div>
          </div>
        </main>

        {/* Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[var(--brand-bg-start)] via-[var(--brand-bg-start)]/95 to-transparent backdrop-blur-sm z-40">
          <div className="max-w-[520px] md:max-w-[720px] mx-auto">
            <a
              href="https://www.cchia.cl/request-info"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 px-6 rounded-2xl font-semibold text-white bg-gradient-to-r from-brand-teal-1 to-brand-teal-2 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-1 focus-visible:ring-offset-2 text-center"
              aria-label="Ir a solicitar información"
            >
              Unirse a la CCHIA
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-6 px-4 text-center text-sm opacity-60">
          <p>
            © CCHIA {brand.year} · Ecosistema de IA responsable en Chile
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
