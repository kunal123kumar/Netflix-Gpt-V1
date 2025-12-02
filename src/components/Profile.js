import { useState, useRef, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import auth from "../utils/firebase"; // Make sure this exports your Firebase auth instance

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef();

  // Listen for auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Clean up
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Avatar Button */}
      <img
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full cursor-pointer"
        src={user?.photoURL || "https://tamilglitz.in/wp-content/uploads/2021/01/Sai-Pallavi-Traditional.jpg"} // Fallback
        alt="User avatar"
      />

      {/* Dropdown Menu */}
      {isOpen && user && (
        <div className="absolute right-0 mt-2 w-56 z-50 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div className="font-semibold">{user.displayName || 'Sai Pallavi'}</div>
            <div className="text-gray-500 dark:text-gray-300 truncate">{user.email}</div>
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a
                href="/dashboard"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/settings"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;

