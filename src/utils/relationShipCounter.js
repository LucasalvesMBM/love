export function getRelationshipTime(startDate) {
  const start = new Date(startDate);
  const now = new Date();

  const difference = now - start;

  if (difference < 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
  };
}