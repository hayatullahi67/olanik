import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Small image component that falls back to an external placeholder if the local file is missing
const ProjectImage: React.FC<{ src?: string; alt?: string; id?: number }> = ({ src, alt, id }) => {
  const [current, setCurrent] = React.useState<string | undefined>(src);

  const handleError = () => {
    // fallback to a free image service
    setCurrent(`https://picsum.photos/800/480?random=${id ?? Math.floor(Math.random() * 1000)}`);
  };

  return (
    // eslint-disable-next-line jsx-a11y/img-redundant-alt
    <div className="aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-gray-100">
      <img
        src={current}
        alt={alt}
        onError={handleError}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

const Projects: React.FC = () => {
  const frontend = [
    { id: 1, title: 'TechGrid (Frontend)', img: '/project1.png', desc: 'Marketing site and interactive UI for a SaaS company. Built with React, Tailwind and Framer Motion.' },
    { id: 2, title: 'Ovote System (Frontend)', img: '/project2.png', desc: 'Responsive frontend for an online voting platform with accessible forms.' },
    { id: 3, title: 'Ceadese (Frontend)', img: '/project3.png', desc: 'Landing pages and component library for a consultancy; emphasis on performance and SEO.' },
    { id: 4, title: 'Design System (Frontend)', img: '/hero-dashboard.png', desc: 'Reusable component system and patterns used across multiple projects.' }
  ];

  const backend = [
    { id: 1, title: 'FCE Voting API (Backend)', desc: 'REST API built for a voting system with authentication, rate-limiting and audit logs. Tech: Node.js, Express, PostgreSQL.' },
    { id: 2, title: 'Analytics ETL (Backend)', desc: 'Data pipelines to ingest and transform client metrics into a reporting warehouse. Tech: Python, Airflow, BigQuery.' },
    { id: 3, title: 'Auth Service (Backend)', desc: 'Microservice handling sign-in, JWT issuance, and refresh tokens. Tech: Go, Redis, PostgreSQL.' }
  ];

  const fullstack = [
    { id: 1, title: 'TechGrid Suite (Fullstack)', img: '/project1.png', desc: 'End-to-end SaaS product: frontend SPA, REST API, and deployment pipelines. Tech: React, Node, PostgreSQL, Docker.' },
    { id: 2, title: 'Ovote Platform (Fullstack)', img: '/project2.png', desc: 'Fullstack voting platform with real-time updates and admin dashboard. Tech: React, WebSockets, Node.' },
    { id: 3, title: 'Marketplace (Fullstack)', img: '/dashboard-screenshot.png', desc: 'Two-sided marketplace with payments, listings and background tasks. Tech: Next.js, Node, Stripe.' }
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <Header />

      <main className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[72%] mx-auto py-8 sm:py-12">
        <header className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            All Projects
          </h1>
          <p className="text-gray-600 mt-2 sm:mt-4 text-sm sm:text-base md:text-lg max-w-2xl">
            A curated list of frontend, backend and fullstack projects built by Olanik.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Frontend Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {frontend.map(p => (
              <article key={p.id} className="group border rounded-2xl p-4 sm:p-5 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                {p.img ? (
                  <ProjectImage src={p.img} alt={p.title} id={p.id} />
                ) : (
                  <ProjectImage alt={p.title} id={p.id} />
                )}
                <h4 className="font-semibold text-base sm:text-lg group-hover:text-blue-600 transition-colors duration-300">{p.title}</h4>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2 sm:line-clamp-none">{p.desc}</p>
                <div className="text-xs text-gray-500 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-500"></span>
                  Role: UI/Frontend
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Backend Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {backend.map(p => (
              <article key={p.id} className="group border rounded-2xl p-4 sm:p-5 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors">
                    <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-base sm:text-lg group-hover:text-blue-600 transition-colors duration-300">{p.title}</h4>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2 sm:line-clamp-none">{p.desc}</p>
                    <div className="text-xs text-gray-500 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                      Role: Backend Engineer
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Fullstack Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fullstack.map(p => (
              <article key={p.id} className="group border rounded-2xl p-4 sm:p-5 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                {p.img ? (
                  <ProjectImage src={p.img} alt={p.title} id={100 + p.id} />
                ) : (
                  <ProjectImage alt={p.title} id={100 + p.id} />
                )}
                <h4 className="font-semibold text-base sm:text-lg group-hover:text-blue-600 transition-colors duration-300">{p.title}</h4>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2 sm:line-clamp-none">{p.desc}</p>
                <div className="text-xs text-gray-500 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-purple-500"></span>
                  Role: Fullstack Developer
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-12 sm:mt-16 text-center">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to home
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
