export function postureMultiplier(postureResponses) {
  const multipliers = {
    absorb: {left:1,right:1},
    bounce: {left:1,right:1},
    stability: {left:1,right:1},
  };

  // console.log(postureResponses)

  for (const side of ["left","right"]) {

    const weightedPosture = 0.45*postureResponses["Feet"][side] + 0.33*postureResponses["Pelvis / Lsp"][side] + 0.22*postureResponses["Shoulders / Tsp"][side]
  
    const delta = Math.abs(weightedPosture)
  
    if (weightedPosture < 0) {
      multipliers.bounce[side] *= Math.pow(0.985, delta)
    } else if (weightedPosture > 0) {
      multipliers.absorb[side] *= Math.pow(0.985, delta)
    }

  }


  // const postureImpact = {
  //   Feet: {
  //     Flat: "A",
  //     Neutral: "N",
  //     "High Arch": "B",
  //   },
  //   "Pelvis / Lsp": {
  //     "Anterior / S curve": "A",
  //     Neutral: "N",
  //     "Posterior / C Curve": "B",
  //   },
  //   "Shoulders / Tsp": {
  //     IR: "A",
  //     Neutral: "N",
  //     ER: "B",
  //   },
  // };

  // const impactCombination =
  //   postureResponses?.["Feet"] &&
  //   postureResponses?.["Pelvis / Lsp"] &&
  //   postureResponses?.["Shoulders / Tsp"]
  //     ? `${postureImpact["Feet"][postureResponses["Feet"]]}${
  //         postureImpact["Pelvis / Lsp"][postureResponses["Pelvis / Lsp"]]
  //       }${
  //         postureImpact["Shoulders / Tsp"][
  //           postureResponses["Shoulders / Tsp"]
  //         ]
  //       }`
  //     : "";

  // const resultFn = {
  //   AAA: () => (multipliers.bounce *= 0.6528),
  //   AAN: () => (multipliers.bounce *= 0.673),
  //   ANA: () => (multipliers.bounce *= 0.6938),
  //   NAA: () => (multipliers.bounce *= 0.7153),
  //   AAB: () => (multipliers.bounce *= 0.7374),
  //   ABA: () => (multipliers.bounce *= 0.7602),
  //   BAA: () => (multipliers.bounce *= 0.7837),
  //   ANN: () => (multipliers.bounce *= 0.808),
  //   NAN: () => (multipliers.bounce *= 0.833),
  //   NNA: () => (multipliers.bounce *= 0.8587),
  //   ANB: () => (multipliers.bounce *= 0.8853),
  //   ABN: () => (multipliers.bounce *= 0.9127),
  //   NAB: () => (multipliers.bounce *= 0.9409),
  //   NNA: () => (multipliers.bounce *= 0.97),
  //   NNN: () => void 0,
  //   NNB: () => (multipliers.absorb *= 0.97),
  //   NBA: () => (multipliers.absorb *= 0.9409),
  //   BAN: () => (multipliers.absorb *= 0.9127),
  //   BNA: () => (multipliers.absorb *= 0.8853),
  //   NNB: () => (multipliers.absorb *= 0.8587),
  //   NBN: () => (multipliers.absorb *= 0.833),
  //   BNN: () => (multipliers.absorb *= 0.808),
  //   ABB: () => (multipliers.absorb *= 0.7837),
  //   BAB: () => (multipliers.absorb *= 0.7602),
  //   BBA: () => (multipliers.absorb *= 0.7374),
  //   NBB: () => (multipliers.absorb *= 0.7153),
  //   BNB: () => (multipliers.absorb *= 0.6938),
  //   BBN: () => (multipliers.absorb *= 0.673),
  //   BBB: () => (multipliers.absorb *= 0.6528),
  // };

  // resultFn[impactCombination]?.();

  return multipliers;
}