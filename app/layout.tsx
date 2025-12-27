import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import AppLoader from '@/components/app-loader';
import { Sidebar } from '@/components/sidebar'; 

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

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
      <body className={`${inter.className} bg-black min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen">
            {/* Sidebar Component */}
            <Sidebar />
            
            {/* Main Content Area */}
            <div className="flex-1 lg:pl-64 w-full"> 
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}