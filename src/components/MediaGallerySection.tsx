import React from 'react';
import { ExternalLink } from 'lucide-react';

// Custom Card Component
const Card = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

// Custom CardContent Component
const CardContent = ({ 
  children,
  className = ""  
}: { 
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

const MediaGallerySection = () => {
  const mediaItems = [
    {
      title: "Doctor explains: Loneliness, now a mental health epidemic, needs to be tackled to avert social disaster",
      source: "Firstpost",
      date: "2024",
      imageUrl: "/images/lonely.webp",
      link: "https://www.firstpost.com/health/doctor-explains-loneliness-now-a-mental-health-epidemic-needs-to-be-tackled-to-avert-social-disaster-13833803.html",
      excerpt: "In this insightful article, Dr. Bushra discusses the growing concern of loneliness as a mental health epidemic and its potential impact on society, offering professional insights on addressing this critical issue."
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-fraunces-slab text-foreground mb-8 text-center">
          Media & Gallery
        </h2>
        
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {mediaItems.map((item, index) => (
            <Card key={index} className="bg-cardish shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-w-16 aspect-h-9">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between bg-new h-full">
                    <div>
                      <p className="text-sm font-work-sans-slab text-foreground/70 mb-2">
                        {item.source} • {item.date}
                      </p>
                      <h3 className="text-xl font-fraunces-slab text-foreground mb-4 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-foreground/80 font-work-sans-slab mb-6 line-clamp-3">
                        {item.excerpt}
                      </p>
                    </div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-foreground hover:text-foreground/70 transition-colors duration-200 font-work-sans-slab"
                    >
                      Read Full Article
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaGallerySection;