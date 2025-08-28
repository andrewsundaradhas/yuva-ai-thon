import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sun, Moon, Monitor } from 'lucide-react';

const DarkModeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' || 'system';
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.toggle('dark', systemTheme === 'dark');
    } else {
      root.classList.toggle('dark', theme === 'dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    const themes: ('light' | 'dark' | 'system')[] = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-5 h-5" />;
      case 'dark':
        return <Moon className="w-5 h-5" />;
      case 'system':
        return <Monitor className="w-5 h-5" />;
      default:
        return <Monitor className="w-5 h-5" />;
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light Mode';
      case 'dark':
        return 'Dark Mode';
      case 'system':
        return 'System Theme';
      default:
        return 'System Theme';
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="dark-mode-toggle group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={getThemeLabel()}
      aria-label={`Switch to ${getThemeLabel()}`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
        className="text-festival-cyan group-hover:text-festival-yellow transition-colors duration-300"
      >
        {getThemeIcon()}
      </motion.div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-card/90 backdrop-blur-sm border border-border rounded-lg text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        {getThemeLabel()}
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-card/90"></div>
      </div>
    </motion.button>
  );
};

export default DarkModeToggle;
