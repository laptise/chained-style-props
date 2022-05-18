🚧 This library is under construction! 🚧

# Chained Style Props - Csp

Csp provides easier way to write `Inline styles` on `React.js`

## Concepts & Goal

- Write inline style easier.
- Write inline style more easy to read.

# How to

## Sample

Csp like writes inline style like below.

```tsx
<Component style={
    csp()
    .Flex.column.topAlign.horizontalCenterAlign
    .Size.minWidth(320).minHeight("100%")
    .Box.padding(5)
    .Border.solid.radius(2).width(1).color("#ccc")
    .csp}>
```

This code generates style object like this.

```tsx
<Component style={{
    display : "flex",
    flexDirection : "column",
    justifyContents : "flex-start",
    alignItems : "center",
    minWidth : 320,
    minHeight : "100%",
    padding : 5,
    borderStyle : "solid",
    borderRadius : 2,
    borderWidth : 1,
    borderColor : "#ccc"
}}>
```

As you can see, Csp chains `CSS Properties` with `.` chain.

Each css props are classificated to several `Chained Style Class`.

Csp start with `csp()` and ends with `csp`
