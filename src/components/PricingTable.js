import * as React from "react"

const breedsData = [
  ["Yorkshire terrier", "2800-3500"],
  ["Máltai selyemszőrű", "3500-4000"],
  ["Bichonok", "3800-5000"],
  ["Si-cu", "3500-4000"],
  ["Yorkshire terrier", "2500-3000"],
  ["Pekingi palotapincsi", "3500-4000"],
  ["Uszkár, törpe", "4000-5000"],
  ["Uszkár, közép", "4500-5500"],
  ["Uszkár, óriás", "6000-7000"],
  ["Szetterek, retrieverek, golden retriever", "5000-7000"],
  ["Szálkás szőrű tacskó", "3500-4500"],
  ["Spániel", "4500-6000"],
  ["Border collie, berni pásztor, skót juhász", "5000-6000"],
  ["Törpe schnauzer", "3000-4000"],
  ["Törpe spitz", "3500-4000"],
  ["Közép spitz", "4000-5000"],
  ["Pomerániai spitz", "4500-6000"],
  ["Labrador", "3000-4000"],
  ["Akita, husky, csau-csau, újfundlandi", "5000-8000"],
  ["Puli nyírás", "4000-5000"],
  ["Puli nemezelés", "4500-7000"],
  ["Westie (West highland white terrier)", "2500-4000 "],
]

const datas = [
  ["Karomvágás", "15 perc ingyenes (600)"],
  ["Fülszörszedés és fültisztítás", "15 perc ingyenes (800)"],
  ["Bűzmirigy tisztítás", "15 perc ingyenes (600)"],
  ["Egészségügyi kozmetika", "1500-2500"],
  ["Csak fürdetés és szárítás", "2000-4000"],
  ["Csak bontás fésülés", "1500/óra"],
  ["Fogkő leszedés", "5000-8000"],
  ["Fogkő utókezelés", "1500/alkalom"],
]

const pricingAforText = `A komplett kutyakozmetikai kezelés tartalmazza a teljes fazonozást, fürdetést, szárítást, az egészségügyi nyírásokat, tisztításokat, amennyiben szükségesek.
Az ár változhat, ha az állat szőre és állapota az átlagostól jelentősen rosszabb. 
Az ártáblázatban nem szereplő fajtákkal kapcsolatban hívjon bátran!`;

const pricingAfterText = `Áraink bruttó árak és magyar forintban értendőek.
Oltással nem rendelkező állatokat nem fogadok.
Agresszív, illetve nehezen kezelhető állatokat illetve gazdikat nem fogadok. `;

export function PricingTable() {
  const breedJSX = breedsData.map(breedData => (
    <div key={breedData[0]+breedData[1]}>
      {breedData[0]}: {breedData[1]}
    </div>
  ))
  const dataJSX = datas.map(data => (
    <div key={data[0]}>
      {data[0]}: {data[1]}
    </div>
  ))
  return (
    <section id="section-prices">
      <div>{pricingAforText}</div>
      <div>{breedJSX}</div>
      <div>{dataJSX}</div>
      <div>{pricingAfterText}</div>
    </section>
  )
}
