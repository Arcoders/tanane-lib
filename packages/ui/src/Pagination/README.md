# Pagination

The Pagination component manages pagination functionality in React applications, offering easy customization and handling of page navigation.

## Usage

Import the Pagination component in your React application:

```javascript
import { Pagination, PaginationProps } from 'tanane-lib-ui';

// Use the Pagination component with desired props

<Pagination
  totalItems={100}
  currentPage={1}
  onPageChange={({currentPage, itemsPerPage, offset}) => {
    // Handle page change logic
  }}
  defaultItemsPerPage={10}
/>
```

---

## Props

The Pagination component accepts the following props:

`simple`: (Optional) A boolean flag indicating whether to render a simplified pagination view. Default: false.

`options`: (Optional) An object defining custom options for pagination buttons.

```javascript
type Options = {
  previous: string | JSX.Element,
  next: string | JSX.Element,
  displayText: string,
  itemsText: string
};
```

`totalItems`: The total number of items to paginate.

currentPage: (Optional) The current active page. Default: 1.

`visiblePages`: (Optional) The number of visible pages in the pagination. Default: 3.

`defaultItemsPerPage`: The default number of items per page.

| Prop                 | Type                       | Description                                       | Default Value |
|----------------------|----------------------------|---------------------------------------------------|---------------|
| `simple`             | `boolean`                  | Flag for simplified pagination view                 | `false`       |
| `options`            | `Options`                  | Custom options for pagination buttons              |               |
| `totalItems`         | `number`                   | Total number of items for pagination               |               |
| `currentPage`        | `number`                   | Current active page                                | `1`           |
| `visiblePages`       | `number`                   | Number of visible pages in pagination              | `3`           |
| `defaultItemsPerPage`| `number`                   | Default number of items per page                   |               |

---

# usePagination Hook

The `usePagination` hook manages pagination-related state and provides functions to handle page changes and items per page changes in React applications.

# Usage
This hook can be imported and used within functional components to manage pagination functionality. Example usage:

```javascript
import { usePagination } from 'tanane-lib-ui';

const YourComponent = () => {
  const totalItems = 100;
  const onPageChange = ({currentPage, itemsPerPage, offset}) => {
    // Handle page change logic
  };

  const {
    page,
    itemsPerPage,
    isNextDisabled,
    calculatePages,
    handlePageChange,
    isPreviousDisabled,
    handelOnItemsPerPage
  } = usePagination({
    totalItems,
    onPageChange,
    defaultItemsPerPage: 10,
  });

  // Use the returned values within your component
  // e.g., Render pagination controls based on page and itemsPerPage

  return (
    // Your component JSX
  );
};

```

## Parameters:
The usePagination hook accepts the following parameters:

`totalItems`: number - The total number of items for pagination.

`currentPage`: number (Optional) - The current active page. Default: 1.

`visiblePages`: number (Optional) - The number of visible pages in the pagination control. Default: 3.

`onPageChange`: ({currentPage, itemsPerPage, offset}) => void - A function to handle page changes.

`defaultItemsPerPage`: number - The default number of items per page.

## Returned Values
The usePagination hook returns an object with the following properties and functions:

`page`: number - The current active page.

`itemsPerPage`: number - The number of items per page.

`isNextDisabled`: boolean - Indicates if the "Next" button should be disabled.

`calculatePages`: () => number[] - Function that calculates the visible page numbers.

`handlePageChange`: ({currentPage, itemsPerPage, offset}) => void - Function to handle page changes.

`isPreviousDisabled`: boolean - Indicates if the "Previous" button should be disabled.

`handelOnItemsPerPage`: (itemsNumber: number) => void - Function to handle changes in the number of items per page.
