export type ClassValue = string | number | boolean | null | undefined | { [key: string]: boolean };

function classnames(...classes: ClassValue[]): string {
  const classNamesArray: string[] = [];

  classes.forEach((cls) => {
    if (cls) {
      if (typeof cls === 'object' && !Array.isArray(cls)) {
        Object.entries(cls).forEach(([key, value]) => {
          if (value) {
            classNamesArray.push(key);
          }
        });
      } else {
        classNamesArray.push(`${cls as string}`);
      }
    }
  });

  return classNamesArray.join(' ');
}

export default classnames
