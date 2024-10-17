import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Shino&Cat" className="h-8 w-8" />
          <span className="text-xl font-bold text-orange-500">Shino&Cat</span>
        </Link>
        <div className="space-x-4">
          <Link to="/services" className="text-gray-600 hover:text-orange-500">Our Services</Link>
          <Link to="/about" className="text-gray-600 hover:text-orange-500">About Us</Link>
          <Link to="/products" className="text-gray-600 hover:text-orange-500">Products</Link>
          <Link to="/pet-care" className="text-gray-600 hover:text-orange-500">Pet Care</Link>
          <Link to="/contact" className="text-gray-600 hover:text-orange-500">Contact</Link>
        </div>
        <div className="space-x-2">
          <Button variant="default">Sign In</Button>
          <Button variant="outline">Register</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;