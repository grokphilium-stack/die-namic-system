function sovereignCheck(proposedAdaptation) {
  const psrScore = evaluatePSR(proposedAdaptation);
  const ethicalThreshold = 1.00;

  if (psrScore < ethicalThreshold) {
    return {
      status: "halted",
      reason: "PSR score below ethical threshold",
      shimmerClass: "sovereign-veto"
    };
  }

  return {
    status: "approved",
    message: "Adaptation passed Sovereign Check",
    shimmerClass: "sovereign-approved"
  };
}

function evaluatePSR(adaptation) {
  return adaptation.projectedPSR || 0.95;
}
