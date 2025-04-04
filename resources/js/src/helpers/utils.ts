export const currencyFormat = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};

export const getTotal = (values: number[]) => {
  return values.reduce((acc, curr) => acc + curr, 0);
}; 