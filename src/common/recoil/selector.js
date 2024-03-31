import { selector } from "recoil";
import { EmotionState } from "./atoms";

export const EmotionSeletor = selector({
    key: 'EmotionSeletor',
    get: ({get}) => {
        const EmotionList = get(EmotionState);
        return(
            EmotionList // 임시로 설정
        )
    }
})