export default (title, plural, short) => {
  const flatMap = new Map([
    ['1k', '1'],
    ['2k', '2'],
    ['3k', '3'],
    ['4k', '4'],
    ['S', 'Евро 2'],
    ['M', 'Евро 3'],
    ['L', 'Евро 4'],
    ['XL', 'Евро 5'],
    ['XXL', 'Евро 6'],
    ['7к', 'Евро 7'],
    ['8к', 'Евро 8'],
  ]);

  if (title === 'XS') {
    return plural ? 'Студии' : 'Студия';
  }

  if (flatMap.has(title)) {
    const result = plural ? `${flatMap.get(title)} комнатные` : `${flatMap.get(title)} комнатная`;

    if (short) {
      return result;
    }

    return plural ? `${result} квартиры` : `${result} квартира`;
  }

  return '';
};
