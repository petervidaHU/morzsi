export const getSectionClipingPath = (borderUp, borderDown) => `
  polygon(
    0 ${borderDown ? "10vh" : "0"},
    100% 0,
    100% ${borderUp ? "calc(100% - 10vh)" : "100%"},
    0 100%
  )`;
