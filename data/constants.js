export const stabilityThreshold = 7

export const superAbsorbThreshold = 7
export const superBounceThreshold = 8

export const calcNormalAbsorb = (absorb) => Math.min(10, absorb / (superAbsorbThreshold/10))
export const calcNormalBounce = (bounce) => Math.min(10, bounce / (superBounceThreshold/10))

export const matchBuffer = 1.0