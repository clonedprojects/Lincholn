
import { StaticImageData } from 'next/image';

// Import generated images (Assuming they are placed in public/images or local)
// For now, we'll use string paths which Next.js Image component handles if they are in public
// OR we can import them if we move them to assets. But simplest is using string paths relative to public.

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string; // Path to image in public folder
  content: string; // HTML content
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'ai-enterprise-future',
    title: 'The Future of GenAI in Enterprise',
    date: 'Dec 12, 2024',
    category: 'Artificial Intelligence',
    image: '/images/ai-enterprise.png',
    excerpt: 'How large scale organizations are leveraging Generative AI to optimize workflows and reduce operational costs.',
    content: `
      <h2>The GenAI Revolution</h2>
      <p>Generative AI is no longer just a buzzword; it's a fundamental shift in how enterprises operate. From automating routine customer service inquiries to generating complex code structures, GenAI is reshaping the workforce.</p>
      
      <h3>Key Benefits</h3>
      <ul>
        <li><strong>Operational Efficiency:</strong> Automating repetitive tasks allows employees to focus on high-value strategy.</li>
        <li><strong>Data-Driven Insights:</strong> AI models can analyze vast amounts of unstructured data to find actionable patterns.</li>
        <li><strong>Personalized Customer Experience:</strong> AI agents provide 24/7 support with human-like understanding.</li>
      </ul>

      <blockquote>"The companies that adopt AI today will be the leaders of tomorrow. It's not about replacing humans, but empowering them." - CEO, Linchon & Newton</blockquote>

      <h3>Implementation Challenges</h3>
      <p>While the benefits are clear, integration remains a hurdle. Data privacy, model hallucination, and infrastructure costs are significant concerns that need a robust strategy.</p>
    `
  },
  {
    slug: 'fintech-evolution',
    title: 'Fintech 2.0: Beyond Traditional Banking',
    date: 'Dec 10, 2024',
    category: 'Fintech',
    image: '/images/fintech-evolution.png',
    excerpt: 'Exploring the shift from centralized banking to decentralized finance and blockchain-based assets.',
    content: `
      <h2>The Unbundling of Banks</h2>
      <p>The traditional banking monolith is being dismantled service by service. Fintech 2.0 is about embedded finance, where every company can be a fintech company.</p>
      
      <h3>DeFi and Blockchain</h3>
      <p>Decentralized Finance (DeFi) is challenging the very concept of a financial intermediary. Smart contracts allow for trustless transactions, reducing fees and increasing speed.</p>
      
      <h3>The Rise of Super Apps</h3>
      <p>In contrast to unbundling, we are also seeing the rise of "Super Apps" that aggregate financial services—payments, insurance, investing—into a single interface.</p>
    `
  },
  {
    slug: 'secure-cloud-migration',
    title: 'Secure Cloud Migration Strategies',
    date: 'Dec 08, 2024',
    category: 'Cloud & Security',
    image: '/images/cloud-security.png',
    excerpt: 'Best practices for moving legacy infastructure to the cloud without compromising data security.',
    content: `
      <h2>Moving to the Cloud safely</h2>
      <p>Migrating to the cloud is essential for scalability, but it opens up new attack vectors. A "Lift and Shift" strategy often results in security gaps.</p>
      
      <h3>Zero Trust Architecture</h3>
      <p>The perimeter is dead. Security must be identity-based. Zero Trust assumes no user or device is trustworthy by default, requiring verification at every step.</p>
      
      <h3>Key Steps for Migration</h3>
      <ol>
        <li><strong>Assessment:</strong> Audit all assets and dependencies.</li>
        <li><strong>Planning:</strong> Choose the right model (IaaS, PaaS, SaaS).</li>
        <li><strong>Execution:</strong> Move data in waves, validating integrity at each stage.</li>
        <li><strong>Optimization:</strong> Refactor applications to take advantage of cloud-native features.</li>
      </ol>
    `
  }
];
