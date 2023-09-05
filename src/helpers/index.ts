import { nanoid } from 'nanoid';
import { LogData } from '../types';

export const sortByTime = (arr: LogData[]): LogData[] | undefined => {
  if (arr) {
    return arr.sort((a, b) => {
      const timeA = new Date(a.time).getTime();
      const timeB = new Date(b.time).getTime();
      return timeB - timeA;
    });
  }
};

export const setFileToBase64 = (file: File, func: (result: string) => void) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    func(reader.result as string);
  };
};

export const logger = (id: string, actionType: string) => {
  const logData: LogData = {
    id: nanoid(),
    image_id: id,
    type: actionType,
    time: new Date(),
  };
  return logData;
};
