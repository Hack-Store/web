export function formatBytes(bytes: number) {
  if (bytes == 0) { return "0B"; }
  var e = Math.floor(Math.log(bytes) / Math.log(1000));
  return (bytes / Math.pow(1000, e)).toFixed(0) + ' KMGTP'.charAt(e) + 'B';
}