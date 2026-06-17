import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shahabuddin Ahmed Ovi — AI Engineer',
  description:
    'AI Engineer building agentic systems: RAG pipelines, multi-agent orchestration, and intelligent applications. LangChain, LangGraph, FastAPI, TensorFlow.',
  keywords: [
    'AI Engineer',
    'Machine Learning',
    'Agentic AI',
    'RAG',
    'LangChain',
    'LangGraph',
    'Shahabuddin Ahmed Ovi',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Inter+Tight:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
