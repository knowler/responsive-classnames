import {createResponsiveClassNames} from '../src/responsive-classnames';

const breakpoints = ['sm', 'md', 'lg'];

const rcx = createResponsiveClassNames(breakpoints);

// TODO: test if it’s a function, not undefined
test('creates a function', () => {
  expect(rcx).not.toBeUndefined();
});

test('it works with an array', () => {
  expect(rcx`space-y-${[2, 4, 8]}`).toBe('space-y-2 sm:space-y-4 md:space-y-8');
});

test('it works with an object', () => {
  expect(rcx`space-y-${{md: 4, lg: 8}}`).toBe('md:space-y-4 lg:space-y-8');
});

test('object default entry sets class name without breakpoint', () => {
  expect(rcx`space-y-${{default: 2, md: 4, lg: 8}}`).toBe('space-y-2 md:space-y-4 lg:space-y-8');
});

test('returns null if passed nullish', () => {
  expect(rcx`space-y-${null}`).toBeNull();
});
