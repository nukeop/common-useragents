# common-useragents
Get a list of common useragents

## Usage

Promise-based API. Only a single function.

```javascript
  import getUseragents from 'common-useragents';

  getUseragents()
  .then(console.log);
  // [
  // { percent: '14.2%',
  //  useragent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36',
  //  system: 'Chrome 71.0 Win10' }...
```

Every time you call this function a new request is made, so be sure to cache the results to avoid making too many requests.

## About
### License
Copyright © 2019, [nukeop](https://github.com/nukeop).
Released under the [Affero GPL 3.0 License](LICENSE).
