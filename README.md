# react-pull-to-refresh

A pull to refresh component for the web.

Based on Andy Peatling's [Pull to Refresh for the Web](https://github.com/apeatling/web-pull-to-refresh)

## Usage

Your refresh handler function takes in `resolve` and `reject` to tell the PullToRefresh component when it's finished.

```javascript
handleRefresh(resolve, reject) {
  // do some async code here
  if (success) {
    resolve();
  } else {
    reject();
  }
}

```

Where you want to render the component:

```xml
<ReactPullToRefresh
  onRefresh={this.handleRefresh}
  className="your-own-class-if-you-want"
  style={{
    textAlign: 'center'
  }}>
  <h3>Pull down to refresh</h3>
  <div>{items}</div>
  <div>etc.</div>
</ReactPullToRefresh>
```



## CSS
Use the CSS from the example or from [here](https://github.com/apeatling/web-pull-to-refresh) as a starting point.


## Thanks
[Andy Peatling](http://apeatling.com/)
