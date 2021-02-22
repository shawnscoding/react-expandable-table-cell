# react-expandable-table-cell

> React table cell that allows you to easily expand and edit cells

[![NPM](https://img.shields.io/npm/v/react-expandable-table-cell.svg)](https://www.npmjs.com/package/react-expandable-table-cell) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Expandable Cell Demo](https://github.com/shawnscoding/react-expandable-table-cell/blob/master/asssets/demo_2.gif)

## Install

```bash
npm install react-expandable-table-cell
```

## Basic Usage

[Code Sandbox](https://codesandbox.io/s/cell-basic-demo-woqxn?file=/src/Table.jsx)

## Usage of Props 'readOnly'

[Code Sandbox](https://codesandbox.io/s/cell-readonly-demo-e1xvp?file=/src/Table.jsx)

## Usage of Props 'type'

[Code Sandbox](https://codesandbox.io/s/cell-type-demo-jo1dj?file=/src/Table.jsx)

## Usage of Props 'expandOnOneClick'

[Code Sandbox](https://codesandbox.io/s/cell-expandononeclick-demo-6t06u?file=/src/Table.jsx)

## Features

- **Supports All modern browsers**
- **No style library** is used to style the components. **vanilla css** is used.
- **No extra dependencies** except React
- **customizing internal css** is very easy. Just edit `react-expandable-table-cell/dist/index.css` file
- Provide **specific error message** when something is wrong

## API

```jsx
ExpandableCell.defaultProps = {
  onBlur: undefined,
  onChange: undefined,
  expandOnOneClick: false,
  type: 'text',
  readOnly: false,
  stylesOnEdit: { maxWidth: null, maxHeight: null }
}

ExpandableCell.propTypes = {
  initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  rowId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  columnId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['text', 'number']).isRequired,
  expandOnOneClick: PropTypes.bool,
  readOnly: PropTypes.bool,
  stylesOnEdit: PropTypes.object
}
```

## Supported browsers

We use [browserslist](https://github.com/browserslist/browserslist) config to state the browser support for this lib, so check it out on [browserslist.dev](https://browserslist.dev/?q=ZGVmYXVsdHM%3D).

## Note

- feel free to open issue. [React-expandable-table-cell Github repo](https://github.com/shawnscoding/react-expandable-table-cell). Any idea that might improve the quality of this package or any kind of bug report will be highly appreciated.
- We'll highly appreciate it if you promote this package to other devs in any way. We believe the appropriate usage of this package will save loads of time.

## License

MIT © [shawnscoding](https://github.com/shawnscoding/react-expandable-table-cell/blob/master/LICENSE)
