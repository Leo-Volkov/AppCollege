export default function useSortScheduleDey(scheduleDey, numGrup) {
  const result = [];

  for (let i = 0; i < numGrup.length; i++) {
    if (scheduleDey[numGrup[i]] !== undefined) {
      result.push(scheduleDey[numGrup[i]]);
    }
    //  else {
    // result.push({
    //   group: 'null',
    //   subjects: [
    //     {
    //       subject: '',
    //       teacher: '',
    //       classroom: '',
    //     },
    //     {
    //       subject: '',
    //       teacher: '',
    //       classroom: '',
    //     },
    //     {
    //       subject: '',
    //       teacher: '',
    //       classroom: '',
    //     },
    //     {
    //       subject: '',
    //       teacher: '',
    //       classroom: '',
    //     },
    //     {
    //       subject: '',
    //       teacher: '',
    //       classroom: '',
    //     },
    //     {
    //       subject: '',
    //       teacher: '',
    //       classroom: '',
    //     },
    //     {
    //       subject: '',
    //       teacher: '',
    //       classroom: '',
    //     },
    //     {
    //       subject: '',
    //       teacher: '',
    //       classroom: '',
    //     },
    //     {
    //       subject: '',
    //       teacher: '',
    //       classroom: '',
    //     },
    //     {
    //       subject: '',
    //       teacher: '',
    //       classroom: '',
    //     },
    //   ],
    // });
    // }
  }

  return result;
}
