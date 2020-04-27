# Responsive Class Names (aka `rcx`)

Use responsive props inspired by [Styled System] for components
that using your [Tailwind CSS] class names.

[Demo on Codesandbox](https://codesandbox.io/s/responsive-classnames-demo-rl8wt)

## Install

Use your choice of NPM client to install the package:

```shell
$ yarn add responsive-classnames
# or
$ npm install responsive-classnames
```

## Getting Started

To get started you will need supply an array of your breakpoint
keys (e.g. `sm`, `md`, `lg`, etc.) to the
`createResponsiveClassNames` function. 

```js
import {createResponsiveClassNames} from 'responsive-classnames';

const rcx = createResponsiveClassNames(tailwind.screens);
```

This creates your own responsive class names function for you.
You can call it whatever you’d like, but something short and
sweet like `rcx` will probably serve you best.

## Usage

`rcx` is designed for the `className` prop. It is used as a
tagged template. The string literal you use is the template for
the class names it will create. The expression passed can be a
numeric value, an array of numeric values, or an object with
keys corresponding to your breakpoints.

```jsx
import cx from 'classnames';

const Stack = ({as: AsElement = 'div', space, ...props}) => (
  <AsElement
    className={cx('flex flex-col', rcx`space-y-${space}`)} 
    {...props} 
  />
);

<Stack as="ul" space={[2, 4, 6]}>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</Stack>

<Stack space={{default: 2, md: 4}}>
  <Card />
  <Card />
  <Card />
</Stack>
```

## Limitations

The following are some technical limitations of this package. I
plan to address these in the future.

### Only one expression allowed in template

Currently, the tagged template only takes a single expression
(e.g. `space-y-${space}`)

### Purgecss

If your use Purgecss with Tailwind then you are probably quite
aware that you are told to avoid string concatenation. This is
problematic if you plan to use this package. Currently, I have a
Babel plugin in development that will analyze your React
project’s source code for string concatenations in `className`
props, find values from usages of those components, then create
a whitelist of compiled class names for Purgecss to use. My
early findings are proving to be effective. Please create an
issue if your are interested in taking a look at how this works
so far.

## Disclaimer

`responsive-classnames` is not meant to replace packages like
[`classnames`], but to be used in tandem with them.

## Contributing

Contributions are welcome. Please make an issue first unless
it’s something small.

[Styled System]: https://github.com/styled-system/styled-system
[Tailwind CSS]: https://github.com/tailwindcss/tailwindcss
[`classnames`]: https://github.com/JedWatson/classnames
