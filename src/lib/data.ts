import { Cpu, Cloud, Globe, Landmark, ShieldCheck, type LucideIcon } from 'lucide-react';

// --- Types ---
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

export interface Pillar {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: LucideIcon;
  categories: ServiceCategory[];
}

// --- Content Database ---
export const SERVICE_CATALOG: Pillar[] = [
  {
    id: "frontier-tech",
    title: "Frontier Technology (AI & IoT)",
    shortDesc: "Leading the revolution in GenAI, Unmanned Systems, and Immersive Tech.",
    fullDesc: "We act as a leader developer in multi-fields including Generative AI, machine learning, and hardware integration.",
    icon: Cpu,
    categories: [
      {
        title: "Artificial Intelligence",
        items: [
          { id: "gen-ai", title: "GenAI & AI Agents", description: "Custom LLM deployment and autonomous agent frameworks." },
          { id: "ml-nlp", title: "ML, LLM & NLP", description: "Natural Language Processing and large-scale machine learning models." }
        ]
      },
      {
        title: "Immersive & Hardware",
        items: [
          { id: "xr-vr", title: "VR / XR Solutions", description: "Extended reality environments for training and simulation." },
          { id: "iot", title: "Internet of Things (IoT)", description: "Smart sensor networks and industrial connectivity." },
          { id: "autonomous", title: "Unmanned Drive & Drones", description: "Autonomous vehicle software and commercial drone logistics." }
        ]
      }
    ]
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud & Infrastructure (XaaS)",
    shortDesc: "Scalable SaaS, PaaS, and over 51 types of As-a-Service offerings.",
    fullDesc: "Comprehensive cloud solutions ranging from content delivery to financial backend logic.",
    icon: Cloud,
    categories: [
      {
        title: "Core Cloud Services",
        items: [
          { id: "iaas-paas", title: "IaaS & PaaS", description: "Infrastructure and Platform as a Service for enterprise scale." },
          { id: "saas", title: "SaaS Development", description: "Software as a Service solution architecture." },
          { id: "faas", title: "FaaS (Function as a Service)", description: "Serverless computing architectures." }
        ]
      },
      {
        title: "Specialized XaaS",
        items: [
          { id: "baas", title: "Backend & Bank BaaS", description: "Banking-as-a-Service and backend infrastructure." },
          { id: "caas", title: "Content & Cloud CaaS", description: "Content-as-a-Service delivery networks." },
          { id: "laas", title: "Logistics (LaaS)", description: "Logistics and supply chain management as a service." }
        ]
      }
    ]
  },
  {
    id: "financial-ecosystem",
    title: "Financial Ecosystem",
    shortDesc: "Infrastructure for Banks, Equities, Options, and Wealth Management.",
    fullDesc: "Robust financial infrastructure supporting settlements, clearance, and diverse asset classes.",
    icon: Landmark,
    categories: [
      {
        title: "Market Infrastructure",
        items: [
          { id: "settlement", title: "Settlement & Clearance", description: "High-frequency trade settlement systems." },
          { id: "banking", title: "Banking & Personal Finance", description: "Core banking engines and personal finance apps." },
          { id: "forex", title: "Forex & GoldEx", description: "Foreign exchange and Gold Exchange trading platforms." }
        ]
      },
      {
        title: "Investment Vehicles",
        items: [
          { id: "derivatives", title: "Equity, Options & Futures", description: "Trading platforms for complex derivatives." },
          { id: "funds", title: "Trust Funds & ETFs", description: "Management systems for Exchange Traded Funds and Trusts." },
          { id: "insurance", title: "Insurance Tech", description: "Digital underwriting and claims processing." }
        ]
      }
    ]
  },
  {
    id: "fintech-govtech",
    title: "Fintech & GovTech",
    shortDesc: "Compliance, Payments, VC, and Government Administration Systems.",
    fullDesc: "Bridging the gap between regulatory technology and advanced financial services.",
    icon: ShieldCheck,
    categories: [
      {
        title: "Fintech & Capital",
        items: [
          { id: "payments", title: "PGI, PSP & POP", description: "Payment Gateway Integration and Point of Purchase systems." },
          { id: "lending", title: "Lending & Wealth Mgmt", description: "Credit scoring, lending platforms, and asset management." },
          { id: "regtech", title: "RegTech & Compliance", description: "Automated compliance and security auditing." },
          { id: "vc", title: "VC & Family Office", description: "Investment management for Venture Capital and Family Offices." }
        ]
      },
      {
        title: "GovTech",
        items: [
          { id: "finance-admin", title: "Tax & Treasury", description: "Governmental tax collection and treasury management systems." },
          { id: "social-services", title: "Pension & Social Security", description: "Medical security and social governance platforms." },
          { id: "civic", title: "Justice & Identity", description: "Identity info management, municipal admin, and public utilities." }
        ]
      }
    ]
  },
  {
    id: "web3-platforms",
    title: "Web3 & Digital Platforms",
    shortDesc: "Blockchain, CryptoEx, E-Learning, and high-traffic Social Platforms.",
    fullDesc: "Next-gen platforms for the decentralized web and consumer engagement.",
    icon: Globe,
    categories: [
      {
        title: "Blockchain & Crypto",
        items: [
          { id: "crypto", title: "CryptoEx & DeFi", description: "Cryptocurrency exchanges and Decentralized Finance protocols." },
          { id: "blockchain", title: "Blockchain Solutions", description: "Distributed ledger technology implementation." }
        ]
      },
      {
        title: "Consumer Platforms",
        items: [
          { id: "booking", title: "Booking & Travel", description: "Engines for hotel, traffic, travel, and movie bookings." },
          { id: "media", title: "Social Media & IM", description: "Instant messaging, video hosting, and social networks." },
          { id: "commerce", title: "On-Demand & Dropshipping", description: "E-commerce platforms supporting dropshipping models." },
          { id: "learning", title: "E-Learning & CMS", description: "Event management, Sports CMS, and educational platforms." }
        ]
      }
    ]
  }
];

export const SUBSCRIPTION_PLANS = [
  {
    name: "Enterprise Starter",
    price: "$2,500/mo",
    features: ["Access to 5 SaaS Modules", "Basic Cloud CaaS", "Standard Support"]
  },
  {
    name: "Global Scale",
    price: "$8,000/mo",
    features: ["Full FinTech Suite", "AI/ML API Access", "Dedicated Infrastructure", "24/7 Priority Support"]
  },
  {
    name: "Government/Sovereign",
    price: "Custom",
    features: ["On-Premise Deployment", "Full Source Code Access", "Security Clearance Level 3", "White-Glove Integration"]
  }
];
