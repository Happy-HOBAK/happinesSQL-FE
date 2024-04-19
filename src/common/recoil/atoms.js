import { atom } from "recoil";

export const EmotionState = atom({
    key:'EmotionState',
    default:'',
})

export const ActivityState = atom({
  key:'ActivityState',
  default:'',
})

export const MemoState = atom({
    key: 'MemoState',
    default: '',
  });
  
  export const LocationState = atom({
    key: 'LocationState',
    default: '',
  });
  
  export const ImageState = atom({
    key: 'ImageState',
    default: null,
  });