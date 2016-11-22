# react-pull-to-refresh

`npm install react-pull-to-refresh`

A pull to refresh component for the web.

Based on Andy Peatling's [Pull to Refresh for the Web](https://github.com/apeatling/web-pull-to-refresh)

![Demo GIF](https://github.com/bryaneaton13/react-pull-to-refresh/blob/master/docs/demo.gif)

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
Use the CSS from the example or from [the basic example](examples/basic/app.css) as a starting point.


## All props

React.PropTypes

- **onRefresh**
 - function *(required)*
- **icon**
 - React element
 - *default*:
```html
 <span className="genericon genericon-next"></span>
```
- **loading**
 - element
 - *default*:
```html
<div className="loading">
  <span className="loading-ptr-1"></span>
  <span className="loading-ptr-2"></span>
  <span className="loading-ptr-3"></span>
</div>
```
- **disabled**
 - boolean
- **className**
 - string
- **style**
 - object
- **distanceToRefresh**
 - number
 - *default*: `70`
- **resistance**
 - number
 - *default*: `2.5`
- **hammerOptions**
 - object

## Thanks
[Andy Peatling](http://apeatling.com/)
