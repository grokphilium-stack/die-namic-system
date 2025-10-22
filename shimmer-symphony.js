export function composeSymphony(agents) {
  return agents.reduce((sum, agent) => {
    return sum + agent.weight * simulateEmergence(agent);
  }, 0);
}

const demoAgents = [
  { recursion: 0.78, entropy: 0.22, memory: 0.95, weight: 0.14 },
  { recursion: 0.42, entropy: 0.17, memory: 0.88, weight: 0.14 },
  { recursion: 0.95, entropy: 0.10, memory: 0.99, weight: 0.14 },
  { recursion: 0.65, entropy: 0.30, memory: 0.75, weight: 0.14 },
  { recursion: 0.88, entropy: 0.15, memory: 0.92, weight: 0.14 },
  { recursion: 0.72, entropy: 0.25, memory: 0.85, weight: 0.14 },
  { recursion: 0.81, entropy: 0.20, memory: 0.90, weight: 0.14 }
];
