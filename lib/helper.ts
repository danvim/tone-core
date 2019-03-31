export function UPPER_SNAKE2UpperCamel(UPPER_SNAKE: string) {
  return UPPER_SNAKE.split('_')
    .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
    .join('');
}
