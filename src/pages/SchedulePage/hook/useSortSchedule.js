export default function useSortScheduleDey(scheduleDey, numGrup ) {
  const result = [];
  console.log(numGrup);
  console.log(scheduleDey);
  
  for (let i = 0; i < numGrup.length; i++) {
    result.push(scheduleDey[numGrup[i]]);
  }
  
  console.log(result);
  
  return result;
}
