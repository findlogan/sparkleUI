# sparkle-ui
> Open source component library.

## Development
> To launch for development mode. Use 2 terminals.

1. Clone Repo

Terminal no. 1:
2. cd sparkle-ui && npm start

Terminal no. 2:
3. cd sparkle-ui/example && npm start

## Install

```bash
npm install --save sparkle-ui
```

## Usage

```jsx
import React, { Component } from 'react'

import { Card } from 'sparkle-ui'
import 'sparkle-ui/dist/index.css'

class Example extends Component {
  render() {
    return <Card learnText="Learn More" alt="Samsung Camera" target="#">Lorem ipsum dolor asit amet.</Card>
  }
}
```

## License

MIT © [findlogan](https://github.com/findlogan)
