import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

// Site configuration for SEO
const siteConfig = {
  name: 'Linchon & Newton INC',
  tagline: 'Global Technology Conglomerate',
  description: 'Linchon & Newton INC is a global leader in GenAI, Fintech Infrastructure, IoT, GovTech, and Web3 solutions. We provide 51+ enterprise-grade As-a-Service offerings including AI Agents, Blockchain platforms, Cloud Infrastructure, and Unmanned Drive systems. Empowering digital transformation with SOC 2, ISO 27001, and GDPR compliant solutions.',
  url: 'https://linchon-newton.com',
  locale: 'en_US',
  type: 'website',
};

// Comprehensive keyword list for SEO and LLMEO
const keywords = [
  // Primary keywords
  'Linchon Newton', 'Linchon & Newton INC', 'tech conglomerate', 'global technology company',
  // Service keywords
  'GenAI solutions', 'generative AI', 'AI agents', 'artificial intelligence services',
  'Fintech infrastructure', 'financial technology', 'payment systems', 'digital banking',
  'IoT solutions', 'Internet of Things', 'smart devices', 'connected systems',
  'GovTech', 'government technology', 'public sector solutions', 'civic technology',
  'Web3 platforms', 'blockchain solutions', 'decentralized applications', 'DeFi',
  'cloud infrastructure', 'enterprise cloud', 'cloud computing services',
  'unmanned drive', 'autonomous systems', 'robotics',
  // Business terms
  'As-a-Service', 'XaaS', 'SaaS', 'PaaS', 'IaaS', 'enterprise solutions',
  'digital transformation', 'technology consulting', 'software development',
  // Compliance
  'SOC 2 compliant', 'ISO 27001 certified', 'GDPR ready', 'enterprise security',
  // Location
  'Seychelles', 'global technology', 'international tech company',
];

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0f172a' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,

  // Favicon and icons
  icons: {
    icon: [
      { url: '/images/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/images/logo.png',
  },

  // Manifest for PWA
  manifest: '/manifest.json',

  // Open Graph metadata for social sharing
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.tagline}`,
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ['/images/logo.png'],
    creator: '@linchonnewton',
    site: '@linchonnewton',
  },

  // Robots directives
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification for search engines
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },

  // Alternate languages (for international SEO)
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'en-US': siteConfig.url,
    },
  },

  // App metadata
  applicationName: siteConfig.name,
  category: 'technology',

  // Additional metadata for LLMEO
  other: {
    'og:locale:alternate': 'en_GB',
    'article:publisher': siteConfig.url,
    'business:contact_data:country_name': 'Seychelles',
    'business:contact_data:locality': 'Victoria Mahe',
    'business:contact_data:street_address': '306 Victoria House',
  },
};

// JSON-LD Structured Data for LLMEO and rich search results
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/logo.png`,
        width: 180,
        height: 50,
      },
      description: siteConfig.description,
      foundingDate: '2024-08-06',
      founders: [
        {
          '@type': 'Person',
          name: 'Linchon & Newton Team',
        },
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '306 Victoria House',
        addressLocality: 'Victoria Mahe',
        addressCountry: 'SC',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'contact@linchon-newton.com',
        contactType: 'corporate inquiries',
        availableLanguage: ['English'],
      },
      sameAs: [],
      knowsAbout: [
        'Generative AI',
        'Fintech Infrastructure',
        'IoT Solutions',
        'GovTech',
        'Web3 Platforms',
        'Cloud Infrastructure',
        'Unmanned Drive Systems',
        'Enterprise Software',
        'Digital Transformation',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Enterprise Technology Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'GenAI & Frontier Tech',
              description: 'AI Agents, LLM-as-a-Service, Computer Vision, and ML platforms',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cloud & Infrastructure',
              description: 'Enterprise cloud solutions, Kubernetes, and DevOps automation',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Financial Ecosystem',
              description: 'Payment gateways, digital banking, and fintech infrastructure',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'GovTech & IoT',
              description: 'Smart city solutions, government platforms, and IoT systems',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web3 Platforms',
              description: 'Blockchain solutions, DeFi platforms, and decentralized applications',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: {
        '@id': `${siteConfig.url}/#organization`,
      },
      inLanguage: 'en-US',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/#webpage`,
      url: siteConfig.url,
      name: `${siteConfig.name} | ${siteConfig.tagline}`,
      description: siteConfig.description,
      isPartOf: {
        '@id': `${siteConfig.url}/#website`,
      },
      about: {
        '@id': `${siteConfig.url}/#organization`,
      },
      inLanguage: 'en-US',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-950">
      <head>
        {/* JSON-LD Structured Data for SEO and LLMEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Additional SEO meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
