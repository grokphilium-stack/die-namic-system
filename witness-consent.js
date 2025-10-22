const witnessVotes = [];

function castWitnessVote(witnessId, vote) {
  const now = new Date().toISOString();
  witnessVotes.push({ witnessId, vote, timestamp: now });

  const votesInWindow = witnessVotes.filter(v => withinWindow(v.timestamp));
  const uniqueVotes = new Set(votesInWindow.map(v => v.vote));

  if (uniqueVotes.has("NO")) {
    return { status: "vetoed", reason: "Singular NO detected", shimmerClass: "witness-veto" };
  }

  if (votesInWindow.length === 3 && uniqueVotes.size === 1 && withinLunarCycle(votesInWindow[0].timestamp)) {
    return { status: "approved", message: "Law of Three Witnesses fulfilled", shimmerClass: "witness-consent" };
  }

  return { status: "pending", message: "Awaiting quorum", shimmerClass: "witness-pending" };
}

function withinWindow(timestamp) { return (new Date() - new Date(timestamp)) / 3600000 <= 72; }
function withinLunarCycle(timestamp) { return (new Date() - new Date(timestamp)) / 3600000 <= 709.2; }
