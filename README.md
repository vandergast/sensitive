# Example

```shell
$ npm i sensitive -S
```

```javascript
const {sensitive} = require('sensitive')
/// ES2015 modules
import {sensitive} from 'sensitive'

const filtered = sensitive('The new apple macbook pro will have a touchbar', ['pro', 'touchbar'])

console.log(filtered)
// The new apple macbook *** will have a ***
```
