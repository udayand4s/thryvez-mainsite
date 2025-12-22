import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import AppLoader from '@/components/app-loader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Thryvez - Join the Fastest Way Forward',
  description: 'Join thousands of students learning from industry experts. Master in-demand skills and advance your career with our comprehensive courses.',
  keywords: 'online learning, courses, education, skills, professional development',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppLoader>{children}</AppLoader>
        </ThemeProvider>
      </body>
    </html>
  );
}