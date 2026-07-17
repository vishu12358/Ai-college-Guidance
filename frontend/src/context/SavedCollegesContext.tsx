import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { College } from "../data/colleges";

interface SavedCollegesContextType {
  savedColleges: College[];
  saveCollege: (college: College) => void;
  removeCollege: (id: number) => void;
  clearSaved: () => void;
}

const SavedCollegesContext = createContext<
  SavedCollegesContextType | undefined
>(undefined);

export const SavedCollegesProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [savedColleges, setSavedColleges] = useState<College[]>([]);

  const saveCollege = (college: College) => {
    setSavedColleges((prev) => {
      if (prev.find((item) => item.id === college.id)) {
        return prev;
      }

      return [...prev, college];
    });
  };

  const removeCollege = (id: number) => {
    setSavedColleges((prev) =>
      prev.filter((college) => college.id !== id)
    );
  };

  const clearSaved = () => {
    setSavedColleges([]);
  };

  return (
    <SavedCollegesContext.Provider
      value={{
        savedColleges,
        saveCollege,
        removeCollege,
        clearSaved,
      }}
    >
      {children}
    </SavedCollegesContext.Provider>
  );
};

export const useSavedColleges = () => {
  const context = useContext(SavedCollegesContext);

  if (!context) {
    throw new Error(
      "useSavedColleges must be used within SavedCollegesProvider"
    );
  }

  return context;
};