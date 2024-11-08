export default function useSortScheduleDey(scheduleDey, numGrup) {
  const result = [];

  for (let i = 0; i < numGrup.length; i++) {
    result.push(scheduleDey[numGrup[i]]);
  }

  return result;
}
