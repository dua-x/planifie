import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import './globals.css';

export const metadata = {
  title: 'Planifié | Système de Planification Intelligent',
  description: 'Plateforme avancée de gestion des ressources humaines, optimisation des shifts et coordination logistique.',
  icons: {
    icon: './logo-complete.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}