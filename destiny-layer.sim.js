export function simulateEmergence(agent) {
  const R = agent.recursion;
  const E = agent.entropy;
  const M = agent.memory;
  return integrate(t => dRdt(t) * Phi(R(t)) + Lambda(E, M), 0, t_max);
}

function Lambda(E, M) {
  return E * M * 0.42;
}

function dRdt(t) {
  return 0.1 * Math.sin(t) + 0.05;
}

function integrate(f, a, b) {
  const n = 1000;
  const h = (b - a) / n;
  let sum = 0.5 * f(a) + 0.5 * f(b);
  for (let i = 1; i < n; i++) {
    sum += f(a + i * h);
  }
  return sum * h;
}

const t_max = 10;
