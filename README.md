# TooltipX v1.1 (A simple & easy to use library)

TooltipX is a lightweight library with no dependencies that allows you to add tooltips to your web elements effortlessly.



### Attention!
* **Note** : there's no need to initialize TooltipX, it will automatically by itself! ⚠️
* You must have **TooltipX** attribute on the element to which you want to add tooltip.

&ensp;
## Installation

* Import Javascript using CDN:
```javascript
<script src="https://cdn.jsdelivr.net/gh/nisargkavi/tooltipX@main/src/js/tooltip.min.js"></script>
```
## Usage/Examples

### 1. Placements

You can specify the placement of the tooltip by using the **tooltipX-position** attribute and assigning a value to it. Available options are:
- top
- bottom
- left
- right
- top-left
- top-right
- bottom-left
- bottom-right

Example :
```html
<button tooltipX tooltipX-position="top" tooltipX-text="Hello!">Button</button>
```

### 2. Size
You can control the size of the tooltip by using the **tooltipX-size** attribute. Available options are:
- small
- medium
- large

Example :
```html
<button tooltipX tooltipX-position="top" tooltipX-text="Hello!" tooltipX-size="medium">Button</button>
```

### 3. Always Visible
Use **tooltipX-visible** attribute for tooltip always visible.

Example :
```html
<button tooltipX tooltipX-visible tooltipX-position="bottom" tooltipX-text="Hello!">Button</button>
```

### 4. Customizing TooltipX
You can customize the appearance of the tooltip by using the **tooltipX-color** attribute to set the text color and the **tooltipX-bgcolor** attribute to set the background color.

Example :
```html
<button tooltipX tooltipX-position="bottom" tooltipX-text="Hello!" tooltipX-color="#000" tooltipX-bgcolor="#57fcbc">Button</button>
```

### 5. Trigger Event
To change the trigger event of the tooltip, you can use the **tooltipX-action** attribute. The available option is:
- click

Example :
```html
<button tooltipX tooltipX-action="click" tooltipX-position="bottom" tooltipX-text="Hello!">Button</button>
```

### 6. Remove Animation
If you want to disable the native animation, you can use **tooltipX-clean** attribute

Example :
```html
<button tooltipX tooltipX-action="click" tooltipX-position="bottom" tooltipX-text="Hello!">Button</button>
```

### 7. Dynamically Adding TooltipX
If you want to add tooltips dynamically to your web page, you can use the
```javascript
TooltipX.refresh();
```

Example :
```javascript
function addTooltip() {
    var html = `<button tooltipX-position="top" tooltipX tooltipX-text="Dynamic!" tooltipX-color="#000" tooltipX-bgcolor="#6fff1c">Click Me!</button>`;
    document.getElementById('dynamicTooltip').innerHTML = html;
    TooltipX.refresh();
}
addTooltip();
```

&ensp;
## Support / Feedback

For support or if you have any feedback, email hello@nisargkavi.in / kavinisarg@gmail.com or https://nisargkavi.in/contact


## Contributing

Contributions are always welcome!
Special Thanks to [Hardik Desai](https://thehardik.in)


## License

[MIT](https://choosealicense.com/licenses/mit/)

