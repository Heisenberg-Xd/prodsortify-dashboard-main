
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter reveal-1">
                Organize. Analyze.{" "}
                <span className="text-primary">Optimize.</span>
              </h1>
              
              <p className="text-muted-foreground text-lg md:text-xl max-w-[700px] reveal-2">
                Unlock hidden insights from your product data with PRODSORT's powerful segmentation and analysis tools.
              </p>
              
              <div className="reveal-3">
                <Button asChild size="lg" className="button-hover h-12 px-8">
                  <Link to="/login">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Moved up with less spacing */}
        <section className="py-12 bg-white" id="features">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Powerful Features
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                Everything you need to segment, analyze, and optimize your product inventory.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className={`flex flex-col items-center text-center p-6 rounded-xl border bg-white shadow-sm transition-all hover:shadow-md fade-in-${index + 1}`}
                >
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-slate-50" id="about">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Why Choose PRODSORT?
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  PRODSORT combines powerful data science algorithms with an intuitive interface, making product segmentation accessible to businesses of all sizes.
                </p>
                
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                  <div className="text-primary font-medium">
                    Visualization preview
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Removed the extra "Get Started" button */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to Transform Your Product Data?
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                Join thousands of businesses that use PRODSORT to gain competitive insights.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Feature data
const features = [
  {
    icon: ({ size }: { size: number }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 11v8a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8" />
        <path d="M13 13h3" />
        <rect x="5" y="16" width="4" height="4" rx="1" />
        <path d="m8 4 8 0" />
        <path d="m7 8 10 0" />
      </svg>
    ),
    title: 'Data Integration',
    description: 'Seamlessly import your product data from various sources with our intuitive upload tools.',
  },
  {
    icon: ({ size }: { size: number }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 18h1.4c1.3 0 2.5-.7 3.2-1.8l7-9.8a4 4 0 0 1 3.2-1.8H22" />
        <path d="m2 6 7 9.8a4 4 0 0 0 3.2 1.8H22" />
        <path d="M22 18a4 4 0 0 1-4-4" />
        <circle cx="18" cy="18" r="4" />
        <circle cx="22" cy="6" r="4" />
      </svg>
    ),
    title: 'Advanced Algorithms',
    description: 'Choose from a variety of proven segmentation algorithms optimized for product data analysis.',
  },
  {
    icon: ({ size }: { size: number }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12h10" />
        <path d="M9 7V5c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-2" />
        <path d="m15 11-3 3 3 3" />
      </svg>
    ),
    title: 'Interactive Visualization',
    description: 'Explore your segmentation results with beautiful, interactive charts and dashboards.',
  },
];

// Benefits data
const benefits = [
  'Save time with automated segmentation',
  'Discover hidden patterns in your product data',
  'Make data-driven inventory decisions',
  'Optimize product marketing strategies',
  'Improve customer targeting and satisfaction',
];

export default Index;
