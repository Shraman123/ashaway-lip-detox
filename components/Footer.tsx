
import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  // This is a mock API call function. In a real application, this would
  // be a fetch() call to your backend server.
  const subscribeToClub = (email: string): Promise<{ success: boolean; message: string }> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email.includes('error')) { // Simulate a server error
          reject(new Error('Failed to subscribe. Please try again later.'));
        } else { // Simulate a successful subscription
          resolve({ success: true, message: 'Thanks for joining the AshAway Club!' });
        }
      }, 1500); // Simulate network delay
    });
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const response = await subscribeToClub(email);
      setMessage(response.message);
      setEmail(''); // Clear input on success
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <footer className="bg-[#121212] border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
                 <h2 className="text-xl font-bold mb-2">AshAway<span className="text-[#39FF14]">.</span></h2>
                 <p className="text-gray-400 text-sm">Detox Your Lips. AshAway the Damage.</p>
            </div>
            <div>
                 <h3 className="font-bold mb-3 uppercase tracking-wider text-gray-400">Quick Links</h3>
                 <ul className="space-y-2">
                     <li><a href="#" className="hover:text-[#39FF14] transition-colors duration-300">FAQ</a></li>
                     <li><a href="#" className="hover:text-[#39FF14] transition-colors duration-300">Shipping & Returns</a></li>
                     <li><a href="#" className="hover:text-[#39FF14] transition-colors duration-300">Contact Us</a></li>
                 </ul>
            </div>
            <div>
                <h3 className="font-bold mb-3 uppercase tracking-wider text-gray-400">Join the Club</h3>
                <p className="text-gray-400 mb-3 text-sm">Get exclusive offers and lip care tips.</p>
                <form onSubmit={handleSubscribe} className="flex max-w-sm mx-auto md:mx-0">
                    <input 
                        type="email" 
                        placeholder="Your email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                        className="w-full bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#39FF14] disabled:opacity-50" 
                        aria-label="Email for newsletter"
                    />
                    <button 
                        type="submit"
                        disabled={isLoading}
                        className="bg-[#39FF14] text-black font-bold px-4 py-2 rounded-r-md transition-colors w-28 disabled:bg-gray-500 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Joining...' : 'Join'}
                    </button>
                </form>
                {message && <p className={`text-sm mt-2 ${message.includes('Thanks') ? 'text-[#39FF14]' : 'text-red-500'}`}>{message}</p>}
            </div>
        </div>
        <div className="text-center text-gray-500 border-t border-gray-800 mt-8 pt-6 text-sm">
            <p>&copy; {new Date().getFullYear()} AshAway. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
