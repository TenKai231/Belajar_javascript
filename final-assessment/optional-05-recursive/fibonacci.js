function fibonacci(n) {
  if (n === 0) return [0];
  const prev = fibonacci(n - 1);
  const nextValue = prev.length < 2 ? prev[prev.length - 1] : prev[prev.length - 1] + prev[prev.length - 2];
  return [...prev, nextValue];
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
