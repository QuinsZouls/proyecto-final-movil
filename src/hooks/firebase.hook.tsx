import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useContext
} from 'react';
import { getCollectionByName } from '../services/Firebase';

import { storage } from '../services/Storage';
export interface Course {
  name: string;
  id: string;
  level?: number;
}
export interface FirebaseProviderProps {
  children?: any;
}

interface FirebaseContextType {
  // Especificamos la interface del context
  courses?: Course[];
  loading: boolean;
  error?: any;
  fetchCourses: () => void;
  getLessons: (courseId: string) => any;
}

const FirebaseContext = createContext<FirebaseContextType>(
  {} as FirebaseContextType
);

export const FirebaseProvider = ({ children }: FirebaseProviderProps) => {
  const [courses, setCourses] = useState<Course[] | any>(null);
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    // Refrescamos la sesión
    async function recallData() {
      // Inicializamos el storage
      await storage.create();
      const dataTmp: any = await storage.get('courses');

      if (dataTmp !== '') {
        const parsedData = JSON.parse(dataTmp);
        setCourses(parsedData);
      }
    }
    recallData();
  }, []);
  async function fetchCourses() {
    setLoading(true);
    try {
      const documents = await getCollectionByName('courses');
      setCourses(
        documents.docs.map(docSnapshot => ({
          ...docSnapshot.data(),
          id: docSnapshot.id
        }))
      );
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }
  async function getLessons(courseId: string) {
    const documents = await getCollectionByName(`courses/${courseId}/lessons`);
    return documents.docs.map(docSnapshot => ({
      ...docSnapshot.data(),
      id: docSnapshot.id
    }));
  }
  const memoedValue = useMemo(
    () => ({
      courses,
      loading,
      error,
      fetchCourses,
      getLessons
    }),
    [courses, loading, error]
  );

  return (
    <FirebaseContext.Provider value={memoedValue}>
      {children}
    </FirebaseContext.Provider>
  );
};
export default function useFirebase() {
  return useContext(FirebaseContext);
}
