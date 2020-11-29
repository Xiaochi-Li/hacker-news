export const getColor = (index) => {
  const Colors = [
    'magenta',
    'red',
    'orange',
    'gold',
    'lime',
    'green',
    'cyan',
    'blue',
    'volcano',
  ];
  if (index < 10) return Colors[index];
  return Colors[index % 10];
};
