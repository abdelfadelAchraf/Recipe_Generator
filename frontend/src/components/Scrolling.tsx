import React, { useEffect, useState, useRef } from 'react';
import { assets } from '../assets/assets';
import Button from './common/button';

// Define the structure for each content section
interface ContentSection {
  id: string;
  heading: string;
  description: string;
  imageUrl: string;
}

type Props = {
  // You can add any props here if needed
  sections?: ContentSection[];
}

const Scrolling: React.FC<Props> = ({ 
  sections = [
    {
      id: 'section1',
      heading: 'AI-Powered Recipe Creation',
      description: 'Discover personalized recipes tailored to your preferences and dietary needs. Our AI analyzes thousands of recipes to create unique combinations that match your taste profile while accommodating allergies and nutritional goals.',
      imageUrl: assets.photo1, // Chef using tablet or AI visualization
    },
    {
      id: 'section2',
      heading: 'Ingredient Flexibility',
      description: 'Work with what you have! Tell our AI what ingredients are in your pantry, and it will generate creative recipes using only what\'s available. No more last-minute grocery runs or wasted food sitting in your refrigerator.',
      imageUrl: assets.photo1, // Ingredients or pantry image
    },
    {
      id: 'section3',
      heading: 'Nutritional Customization',
      description: 'Set your health goals and dietary restrictions, and our AI will create recipes that perfectly balance flavor and nutrition. Whether you\'re looking for high-protein, low-carb, vegan, or gluten-free options, we\'ve got you covered.',
      imageUrl: assets.photo2, // Nutritional chart or healthy meal image
    },
    {
      id: 'section4',
      heading: 'Step-by-Step Guidance',
      description: 'Never feel lost in the kitchen again. Each AI-generated recipe comes with detailed, easy-to-follow instructions. Our intelligent assistant can even answer cooking questions in real-time and adapt techniques to your skill level.',
      imageUrl: assets.photo1, // Step-by-step cooking image
    },
  ]
}) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);
  const sectionRefs = useRef<{[key: string]: HTMLDivElement | null}>({});

  useEffect(() => {
    // Function to check which section is currently in view
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Find which section is currently visible
      let currentSection = sections[0].id;
      
      for (const section of sections) {
        const element = sectionRefs.current[section.id];
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        const topPosition = rect.top + window.scrollY;
        
        if (scrollPosition >= topPosition) {
          currentSection = section.id;
        }
      }
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections, activeSection]);

  return (
    <div className="flex flex-col w-full p-6 md:flex-row min-h-screen ">
      {/* Left div containing scrolling text sections */}
      <div className="w-full md:w-1/2 p-4 text-left">
        {sections.map((section) => (
          <div 
            key={section.id}
            id={section.id}
            ref={(el) => {
              sectionRefs.current[section.id] = el;
            }}
            className="min-h-screen flex flex-col justify-center"
          >
            <h1 className="text-4xl font-bold mb-4 uppercase">{section.heading}</h1>
            <p className="text-lg text-gray-700 ">{section.description}</p>
            <Button text='learn more' className='mt-4 py-4 rounded-lg w-1/2 '/>
          </div>
        ))}
      </div>
      
      {/* Right div containing images - fixed position on desktop */}
      <div className="hidden md:flex w-full sticky top-0 h-screen items-center justify-center p-6">
        {sections.map((section) => (
          <div 
            key={section.id}
            className={`transition-opacity duration-500 absolute ${
              activeSection === section.id ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={section.imageUrl} 
              alt={section.heading}
              className="max-w-full h-full object-contain rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Images for mobile - visible after each section */}
      <div className="block md:hidden">
        {sections.map((section) => (
          <div 
            key={`mobile-${section.id}`}
            className="p-4 flex justify-center"
          >
            <img 
              src={section.imageUrl} 
              alt={section.heading}
              className="max-w-full object-contain rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scrolling;