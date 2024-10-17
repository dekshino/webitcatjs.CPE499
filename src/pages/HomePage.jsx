import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4">Meeting and talking with Superhero cats</h1>
          <p className="text-lg mb-6">Discover the extraordinary world of feline superheroes!</p>
          <Button size="lg">
            Explore More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Button>
        </div>
        <div className="w-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-400 rounded-full transform -rotate-6"></div>
            <img src="/superhero-cats.png" alt="Superhero Cats" className="relative z-10 mx-auto object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;