Super Light weight Subscribe/Publish event system for Node.js and browser. (Only 0.52KB after gzipped)

## Installing

Using npm:

```bash
$ npm install subscribable-lite
```

Using yarn:

```bash
$ yarn add subscribable-lite
```

## Usage

sub.subscribe(handler)

sub.publish([arg[, ...]])

```js
import SubLite from 'subscribable-lite';

const sub = new SubLite();

sub.subscribe((a, b, c) => {
    console.log(a, b, c); // => 'you are awesome'
});
sub.publish('you', 'are', 'awesome');
```

sub.unsubscribe([handler])

```js
const unsubscribe = sub.subscribe((a, b, c) => {
    console.log(a, b, c); // => 'will not trigger'
});

unsubscribe();
/* or `sub.unsubscribe();` */

sub.publish('you', 'are', 'awesome');
```

## License

MIT
