import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-12 mt-auto">
        <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-2xl font-bold mb-4">GadgetBucket</h3>
                    <p className="text-gray-100 mb-4">
                        Your one-stop destination for the latest gadgets and tech accessories.
                    </p>
                    <div className="text-gray-400">
                        <p>Follow us on social media:</p>
                        <ul className="flex space-x-4">
                            <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                
                <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                        <li><a href="/products" className="hover:text-white transition-colors">Products</a></li>
                        <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                        <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="text-lg font-semibold mb-4">Support</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
                        <li><a href="/shipping" className="hover:text-white transition-colors">Shipping</a></li>
                        <li><a href="/returns" className="hover:text-white transition-colors">Returns</a></li>
                        <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-white">
                <p>&copy; 2024 GadgetBucket. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer