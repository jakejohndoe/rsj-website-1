// src/components/auth/SignInModal.tsx
import React from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { X } from "lucide-react";

interface SignInModalProps {
  darkMode: boolean;
  onClose: () => void;
}

export const SignInModal = ({ darkMode, onClose }: SignInModalProps) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log({ email, password });
    setTimeout(() => {
      setIsLoading(false);
      onClose();
    }, 1500);
  };

  const themeClasses = {
    bg: darkMode ? 'bg-black/90' : 'bg-white/95',
    text: darkMode ? 'text-white' : 'text-black',
    textMuted: darkMode ? 'text-white/70' : 'text-black/70',
    border: darkMode ? 'border-white/20' : 'border-black/20',
    inputBg: darkMode ? 'bg-black/30' : 'bg-white',
    inputBorder: darkMode ? 'border-white/20' : 'border-black/20',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <Card className={`${themeClasses.bg} ${themeClasses.border} rounded-2xl p-6 max-w-md w-full relative border`}>
        <button 
          onClick={onClose}
          className={`absolute top-4 right-4 p-1 rounded-full ${themeClasses.textMuted} hover:${themeClasses.text} transition-colors`}
        >
          <X size={20} />
        </button>
        
        <h2 className={`text-2xl font-serif font-medium mb-6 ${themeClasses.text}`}>
          Sign In
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className={`block text-sm font-medium mb-1 ${themeClasses.textMuted}`}>
              Email or Username
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg ${themeClasses.inputBg} ${themeClasses.inputBorder} border focus:outline-none focus:ring-2 ${themeClasses.text}`}
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className={`block text-sm font-medium mb-1 ${themeClasses.textMuted}`}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg ${themeClasses.inputBg} ${themeClasses.inputBorder} border focus:outline-none focus:ring-2 ${themeClasses.text}`}
              required
            />
          </div>
          
          <Button
            type="submit"
            className={`w-full rounded-full mt-6 ${
              darkMode 
                ? 'bg-white text-black hover:bg-white/90' 
                : 'bg-black text-white hover:bg-black/90'
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
        </form>
        
        <div className={`text-center mt-4 text-sm ${themeClasses.textMuted}`}>
          Don't have an account? <button className="underline">Register</button>
        </div>
      </Card>
    </div>
  );
};