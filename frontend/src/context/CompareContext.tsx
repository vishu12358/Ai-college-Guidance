import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { College } from "../data/colleges";

interface CompareContextType {
  compareColleges: College[];
  addToCompare: (college: College) => void;
  removeFromCompare: (id: number) => void;
  clearCompare: () => void;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [compareColleges, setCompareColleges] = useState<College[]>([]);

  const addToCompare = (college: College) => {
    setCompareColleges((prev) => {
      if (prev.find((item) => item.id === college.id)) return prev;
      if (prev.length >= 3) return prev;

      return [...prev, college];
    });
  };

  const removeFromCompare = (id: number) => {
    setCompareColleges((prev) =>
      prev.filter((college) => college.id !== id)
    );
  };

  const clearCompare = () => {
    setCompareColleges([]);
  };

  return (
    <CompareContext.Provider
      value={{
        compareColleges,
        addToCompare,
        removeFromCompare,
        clearCompare,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);

  if (!context) {
    throw new Error(
      "useCompare must be used within CompareProvider"
    );
  }

  return context;
};