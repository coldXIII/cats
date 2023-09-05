import { create } from 'zustand';
import { LogData } from '../types';
import { persist, devtools } from 'zustand/middleware';

interface LoggerState {
  requestLog: LogData[];
  setLog: (value: LogData) => void;
  updateLog: () => void;
}

export const useLogger = create<LoggerState>()(
  devtools(
    persist(
      (set, get) => ({
        requestLog: [],
        setLog: (value) =>
          set((state) => ({ requestLog: [...state.requestLog, value] })),
        updateLog: () => {
          const dayInMilliseconds = 24 * 60 * 60 * 1000;
          const updatedLog = get().requestLog.filter(
            (item) =>
              new Date(item.time).getTime() + dayInMilliseconds <
              new Date().getTime()
          );
          set(() => {
            return {
              requestLog: updatedLog,
            };
          });
        },
      }),

      {
        name: 'logger-storage',
      }
    )
  )
);
