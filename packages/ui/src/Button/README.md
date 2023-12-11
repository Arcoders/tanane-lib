# Button

The Button component is a customizable button element built
with React and TypeScript, allowing for easy integration and
styling within your applications.

## Usage

Import the Button component in your React application as
follows:

```javascript
import { Button, ButtonProps } from 'tanane-lib-ui'

// Use the Button component with desired props

<Button variant='contained' color='primary' size='medium'>
	Click me
</Button>
```

---

## Props
The Button component accepts the following props:

`variant`: (Optional) Specifies the style variant of the button (text, contained, or outlined). Default: contained.

`color`: (Optional) Defines the color scheme for the button (primary, secondary, success, warning, or danger). Default: primary.

`size`: (Optional) Determines the size of the button (small, medium, or large). Default: medium.

| Prop        | Type                  | Description                                     | Default Value |
|-------------|-----------------------|-------------------------------------------------|---------------|
| `variant`   | `ButtonVariantType`   | Style variant of the button                      | `'contained'` |
| `color`     | `ButtonColorType`     | Color scheme for the button                      | `'primary'`   |
| `size`      | `ButtonVariantSize`   | Size of the button                               | `'medium'`    |
| `modifiers` | `string`              | Additional custom class names for the button     | `''`          |

