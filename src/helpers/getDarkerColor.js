export const getDarkerColor = (col, steps = 1) => {
  const splittedColor = col.split(",")
  if (splittedColor.length !== 3) return col
  
  const newLightness = parseInt(splittedColor[2]) - (steps * 10)
  console.log('xcc', newLightness)
  const finalNewLightnesss = (newLightness < 0) ? "0" : newLightness
  
  return `${splittedColor[0]},${splittedColor[1]}, ${finalNewLightnesss}%)`
}

export const getLightterColor = (col, steps = 1) => {
  const splittedColor = col.split(",")
  if (splittedColor.length !== 2) return col
  
  const newLightness = parseInt(splittedColor[2]) + steps * 10
  const finalNewLightnesss = newLightness > 101 ? newLightness : "100"
  
  return `${splittedColor[0]},${splittedColor[1]}, ${finalNewLightnesss}%)`
}
