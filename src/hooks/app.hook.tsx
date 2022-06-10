import React, {
  createContext,
  useEffect,
  useMemo,
  useContext,
  useReducer
} from 'react';

import { storage } from '../services/Storage';

export interface AppProviderProps {
  children?: any;
}

interface AppContextType {
  // Especificamos la interface del context
  appData?: any;
  completeLesson: (lessonId: string) => any;
  loadCourses: (courses: any) => any;
}
type Action = 'SET_COURSES' | 'SET_LESSON_DATA' | 'INITIAL_LOAD';
export interface ActionReducer {
  type: Action;
  data?: any;
}
export interface AppState {
  courses: any;
  lessons: any;
  playHistory: any;
}
const INITIAL_STATE = {
  courses: {},
  lessons: {},
  playHistory: {}
};
const appReducer = (state: AppState, action: ActionReducer): AppState => {
  switch (action.type) {
    case 'INITIAL_LOAD':
      return {
        ...state,
        ...action?.data
      };
    case 'SET_COURSES':
      return {
        ...state,
        courses: {
          ...state.courses,
          ...action.data
        }
      };
    case 'SET_LESSON_DATA':
      return {
        ...state,
        lessons: { ...state.lessons, [action.data]: true }
      };
    default:
      throw new Error('Acción no definida ');
  }
};

const AppContent = createContext<AppContextType>({} as AppContextType);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [appData, dispatch] = useReducer(appReducer, INITIAL_STATE);
  useEffect(() => {
    // Refrescamos la sesión
    async function recallData() {
      // Inicializamos el storage
      await storage.create();
      const dataTmp: any = await storage.get('appData');

      if (dataTmp !== '') {
        const data = JSON.parse(dataTmp);
        dispatch({
          type: 'INITIAL_LOAD',
          data
        });
      }
    }
    recallData();
  }, []);
  useEffect(() => {
    storage.set('appData', JSON.stringify(appData));
    console.log(appData);
  }, [appData]);
  function completeLesson(lessonId: string) {
    dispatch({
      type: 'SET_LESSON_DATA',
      data: lessonId
    });
  }
  function loadCourses(data: any) {
    dispatch({
      type: 'SET_COURSES',
      data
    });
  }
  const memoedValue = useMemo(
    () => ({
      appData,
      completeLesson,
      loadCourses
    }),
    [appData, completeLesson]
  );

  return (
    <AppContent.Provider value={memoedValue}>{children}</AppContent.Provider>
  );
};
export default function useApp() {
  return useContext(AppContent);
}
