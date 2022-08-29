// Action Type
const DARK = "theme/DARK";
const WHITE = "theme/WHITE";

// Action 생성 함수
export const dark = () => ({ type: DARK });
export const white = () => ({ type: WHITE });

// 초기화
const initialState = {
  mode: true,
};

// reducer
const mode = (state = initialState, action) => {
  switch (action.type) {
    case DARK:
      return {
        mode: true,
      };
    case WHITE:
      return {
        mode: false,
      };

    default:
      return state;
  }
};

export default mode;
