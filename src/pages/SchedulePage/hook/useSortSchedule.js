export default function useSortScheduleDey(scheduleDey, numGrup) {
  const result = [];

  for (let i = 0; i < numGrup.length; i++) {
    if (scheduleDey[numGrup[i]] === undefined) {
      result.push({
        group: '',
        subjects: [
          {
            subject: '',
            teacher: '',
            classroom: '',
          },
          {
            subject: '',
            teacher: '',
            classroom: '',
          },
          {
            subject: '',
            teacher: '',
            classroom: '',
          },
          {
            subject: '',
            teacher: '',
            classroom: '',
          },
          {
            subject: '',
            teacher: '',
            classroom: '',
          },
          {
            subject: '',
            teacher: '',
            classroom: '',
          },
          {
            subject: '',
            teacher: '',
            classroom: '',
          },
          {
            subject: '',
            teacher: '',
            classroom: '',
          },
          {
            subject: '',
            teacher: '',
            classroom: '',
          },
          {
            subject: '',
            teacher: '',
            classroom: '',
          },
        ],
      });
    } else {
      result.push(scheduleDey[numGrup[i]]);
    }
  }

  return result;
}
