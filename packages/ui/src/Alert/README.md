# Alert

The Alert component renders a message with different visual variants for indicating different types of alerts or messages.

## Usage

Import the Button component in your React application as
follows:

```javascript
import { Alert, AlertProps } from 'tanane-lib-ui'

// Use the Alert component with desired variants

<Alert variant="success" message="This is a success message!" />
```

---

## Props
The Alert component accepts the following props:

`variant`: AlertVariantType (Optional) - Specifies the visual variant of the alert. Default: 'primary'. Possible values: 'primary, 'success', 'warning', 'danger'.

message: string (Optional) - The message to be displayed in the alert.

| Prop      | Type                     | Description                                       | Default Value |
|-----------|--------------------------|---------------------------------------------------|---------------|
| `variant` | `AlertVariantType`       | Visual variant of the alert                       | `'primary'`   |
| `message` | `string`                 | The message to be displayed in the alert          | -             |

