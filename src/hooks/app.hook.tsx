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
  startGame: (courseId: string) => any;
  setQuestionResults: (
    courseId: string,
    questionId: string,
    result: number
  ) => any;
}
type Action =
  | 'SET_COURSES'
  | 'SET_LESSON_DATA'
  | 'INITIAL_LOAD'
  | 'START_GAME'
  | 'SET_GAME_RESULTS';
export interface ActionReducer {
  type: Action;
  data?: any;
}
export interface AppState {
  courses: any;
  lessons: any;
  playHistory: any;
  ready: boolean;
}
const INITIAL_STATE = {
  courses: {},
  lessons: {},
  playHistory: {},
  ready: false
};
const appReducer = (state: AppState, action: ActionReducer): AppState => {
  switch (action.type) {
    case 'INITIAL_LOAD':
      return {
        ...state,
        ...action?.data,
        ready: true
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
    case 'START_GAME':
      return {
        ...state,
        playHistory: {
          ...state.playHistory,
          [action.data]: {}
        }
      };
    case 'SET_GAME_RESULTS':
      return {
        ...state,
        playHistory: {
          ...state.playHistory,
          [action.data?.courseId]: {
            ...state.playHistory[action.data?.courseId],
            [action.data?.questionId]: action.data?.result
          }
        }
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
    if (appData.ready) {
      storage.set('appData', JSON.stringify(appData));
      console.log(appData);
    }
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
  function startGame(courseId: string) {
    dispatch({
      type: 'START_GAME',
      data: courseId
    });
  }
  function setQuestionResults(
    courseId: string,
    questionId: string,
    result: number
  ) {
    dispatch({
      type: 'SET_GAME_RESULTS',
      data: {
        questionId,
        courseId,
        result
      }
    });
  }
  const memoedValue = useMemo(
    () => ({
      appData,
      completeLesson,
      loadCourses,
      startGame,
      setQuestionResults
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
