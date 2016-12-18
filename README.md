# react-native-elastic

Installation
---

```
npm i react-native-elastic
```

Usage
---

```
import Elastic from 'react-native-elastic';

...
// Return a StyleSheet object
const styles = Elastic.create({
    ...
});

// Just scale the style value
const styles = Elastic.repair({
    ...
});
```

Scaling
---

| PixelRatio   | 1            | 1.5          | 2            | 3            | 3.5          |
|--------------|--------------|--------------|--------------|--------------|--------------|
| height       | x1.0         | x1.0         | x1.0         | x1.2         | x1.2         |
| fontSize     | x1.0         | x1.0         | x1.0         | x1.2         | x1.2         |
| lineHeight   | x1.0         | x1.0         | x1.0         | x1.2         | x1.2         |
