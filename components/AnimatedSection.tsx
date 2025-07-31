
import React, { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

// This is a workaround since we can't edit package.json to add framer-motion.
// In a real project, you would `import { motion, useInView } from 'framer-motion';`
// and have it in your dependencies. For this environment, we assume it's globally available
// or can be loaded dynamically, but write the code as if it's imported.
// The provided setup should handle this library's availability.

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {children}
    </motion.section>
  );
};
