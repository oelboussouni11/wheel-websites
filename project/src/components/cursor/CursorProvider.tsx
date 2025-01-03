import React, { createContext, useContext, useEffect, useState } from 'react';
import CustomCursor from './CustomCursor';

interface CursorContextType {
  cursorType: 'tire' | 'f1';
  setCursorType: (type: 'tire' | 'f1') => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) throw new Error('useCursor must be used within CursorProvider');
  return context;
};

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cursorType, setCursorType] = useState<'tire' | 'f1'>('tire');

  useEffect(() => {
    document.body.classList.add('custom-cursor');
    return () => document.body.classList.remove('custom-cursor');
  }, []);

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType }}>
      <CustomCursor />
      {children}
    </CursorContext.Provider>
  );
};