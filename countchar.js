function countOccurrences(string) {
  return _.countBy(string, function(num) {
    return num;
  });
}

console.log(countOccurrences("engineering"));
/*
 * Prints:
 *   {e: 3, n: 3, g: 2, i: 2, r: 1}
 */