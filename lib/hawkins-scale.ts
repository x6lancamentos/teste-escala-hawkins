export interface HawkinsLevel {
  level: number;
  frequency: number;
  name: string;
  minScore: number;
  maxScore: number;
  category: "baixa" | "media-baixa" | "media-alta" | "alta";
}

export const hawkinsScale: HawkinsLevel[] = [
  { level: 1, frequency: 20, name: "Vergonha", minScore: 20, maxScore: 35, category: "baixa" },
  { level: 2, frequency: 30, name: "Culpa", minScore: 36, maxScore: 50, category: "baixa" },
  { level: 3, frequency: 50, name: "Apatia", minScore: 51, maxScore: 65, category: "baixa" },
  { level: 4, frequency: 75, name: "Tristeza", minScore: 66, maxScore: 80, category: "baixa" },
  { level: 5, frequency: 100, name: "Medo", minScore: 81, maxScore: 95, category: "baixa" },
  { level: 6, frequency: 125, name: "Desejo", minScore: 96, maxScore: 110, category: "media-baixa" },
  { level: 7, frequency: 150, name: "Raiva", minScore: 111, maxScore: 125, category: "media-baixa" },
  { level: 8, frequency: 175, name: "Orgulho", minScore: 126, maxScore: 140, category: "media-baixa" },
  { level: 9, frequency: 200, name: "Coragem", minScore: 141, maxScore: 155, category: "media-alta" },
  { level: 10, frequency: 250, name: "Neutralidade", minScore: 156, maxScore: 170, category: "media-alta" },
  { level: 11, frequency: 310, name: "Aceitação", minScore: 171, maxScore: 185, category: "media-alta" },
  { level: 12, frequency: 350, name: "Razão", minScore: 186, maxScore: 190, category: "media-alta" },
  { level: 13, frequency: 400, name: "Amor", minScore: 191, maxScore: 195, category: "alta" },
  { level: 14, frequency: 500, name: "Alegria", minScore: 196, maxScore: 196, category: "alta" },
  { level: 15, frequency: 540, name: "Paz", minScore: 197, maxScore: 197, category: "alta" },
  { level: 16, frequency: 600, name: "Iluminação", minScore: 198, maxScore: 200, category: "alta" },
];

export function getUserLevel(totalScore: number): HawkinsLevel {
  return hawkinsScale.find(
    (level) => totalScore >= level.minScore && totalScore <= level.maxScore
  ) || hawkinsScale[0];
}

export function getFrequencyFromScore(totalScore: number): number {
  const level = getUserLevel(totalScore);
  // Interpolação linear para frequência mais precisa
  const range = level.maxScore - level.minScore;
  if (range === 0) return level.frequency;
  const progress = (totalScore - level.minScore) / range;
  const nextLevel = hawkinsScale[hawkinsScale.indexOf(level) + 1];
  if (!nextLevel) return level.frequency;
  return Math.round(level.frequency + (nextLevel.frequency - level.frequency) * progress);
}
