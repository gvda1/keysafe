export function computeFareCents(params: {
  base: number;
  perKm: number;
  distanceKm: number;
  durationMin: number;
}): number {
  const { base, perKm, distanceKm, durationMin } = params;
  return base + perKm * distanceKm + durationMin;
}
