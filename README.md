Simple test case for https://github.com/fergiemcdowall/search-index/issues/164

To test:

* npm i
* npm test

After some number of iterations you should see:

```
TypeError: Cannot read property 'filter' of undefined
```

On my four-core laptop this typically takes less than 50 iterations.
