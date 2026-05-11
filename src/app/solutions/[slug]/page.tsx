import SolutionDetailClient from './SolutionDetailClient';

// This is no longer needed here as data is in translations.ts
// but we keep generateStaticParams for build-time optimization
export async function generateStaticParams() {
  const slugs = [
    "dossiers-collaborateurs",
    "transport-logistique",
    "workflows-conges",
    "portail-self-service",
    "planning-intelligent",
    "equite-contraintes",
    "multi-entites",
    "analytics-kpis"
  ];
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <SolutionDetailClient slug={slug} />;
}
