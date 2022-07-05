🚧 This library is Beta version! 🚧

🚧 Core methods are working, but css coverage is not perfect. 🚧

🚧 Other css properties are will be added soon. 🚧

🚧 If you want, you can contribute! 🚧

# Chained Style Props - Csp

Csp provides easier way to write `Inline styles` on `React.js`

# What is Csp?

Csp (chained style props) is `TypeScript` library that generates inline style `CSSProperties` of `React.js`. Literraly chained style props.

## Method chaining style

Write styles in method chaining, Instead of `object` that provides key and value.

```tsx
<Component
  style={
    csp() //
      .Flex.column.topAlign.horizontalCenterAlign.Size.minWidth(320)
      .minHeight("100%")
      .Box.padding(5)
      .Border.solid.radius(2)
      .width(1)
      .color("#ccc").csp
  }
/>
```

Each props are categorized, Can only be called from parent class.

## Extendible style

It also provides extending. So you can reuse declared styles.

```tsx
import { commonCspStyle } from "/path-to-file";

// extends commonCspStyle, adding size adjustments.
const menuSize = csp(commonCspStyle).Size.minWidth(320).minHeight("100%").csp;

// extends menuSize, adding display:"flex", flexDiretion:"column"
const componentStyle = csp(menuSize).Flex.column.csp; //

<Component style={componentStyle} />;
```

It works with Typescript, so you can write code faster on your IDE.

## Are you interested in?

Get started with

```
npm install chained-style-props
// or
yarn add chained-style-props
```

# How to use

Here

## Basic rules

---

- Csp chains `CSS Properties` with `.` chain.

- Must start with `csp()` and ends with `csp`.

- You can extend other declared csp into `csp(here)`.

- All of the props are can only be called from their parent classes.

## `Props` are categorized into `Chained Class`.

---

Each css props are classificated to several Class into `Flex`, `Border`, `Size`, `Text`... And we call these classes `Chained Class`.

In Css, every props are available anywhere. So we can write `flex-direction:"column"` and `fontSize:12` at same time. It's very easy to write, but the names are too long and it should be considered to make easy to read (e.g. sort orders). Otherwise, it will be cause mamy problems.

In Csp, `boderRadius:2` can be called as `Radius(2)` from `Border` class.

```tsx
csp().Border.radius(2).csp;
```

## Classes and inlcudings

---

Supported props in each classes are introduced in `class/folder`. It also has class definition file, so you can read them.

- [FlexBox](https://github.com/laptise/chained-style-props/blob/main/src/class/flex-box/README.md) : `display:flex` settings. (e.g. `gap`, `wrap`, `direction`, flex align features )
- Elm : Elements settings (e.g. `pointerEvents`, `backgroundColor`)
- Size : settings about size (e.g. `height`, `width`, `padding`, `margin` etc)
- Text : settings about fonts. (g.s. `fontWeight`, `fontSize`, etc)
- Border: settings about border.
- Border Left, Border Right, Border Bottom, Border Top : Border classes grouped into each directions
- Position: setting about positions.
- Transition: settings about transitions.
