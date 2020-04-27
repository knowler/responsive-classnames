import isPlainObject from 'lodash.isplainobject';

export const createResponsiveClassNames = breakpoints => (
  classNameFragments,
  responsivePropValue,
  ...restrictedExtraExpressions
) => {
  if (restrictedExtraExpressions.length > 0) {
    throw new Error('Responsive class name template can only receive one value');
  }

  if (responsivePropValue == null) return null;

  const createClassName = (value, breakpoint) =>
    [breakpoint && `${breakpoint}:`, classNameFragments[0], value, classNameFragments[1]]
      .filter(Boolean)
      .join('');

  if (Array.isArray(responsivePropValue)) {
    return responsivePropValue
      .map((value, index) => createClassName(value, breakpoints[index - 1]))
      .join(' ');
  }

  if (isPlainObject(responsivePropValue)) {
    return Object.entries(responsivePropValue)
      .map(([breakpoint, value]) => createClassName(value, breakpoint !== 'default' && breakpoint))
      .join(' ');
  }

  return createClassName(responsivePropValue);
};
