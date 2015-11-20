import React from 'react'
import ReactDOM from 'react-dom'
import ReactPullToRefresh from '../../lib/index'

let count = 1
let App = React.createClass({

  getInitialState() {
    return {
      items: [
        <div key={'item-' + count}>Item {count++}</div>
      ]
    }
  },

  handleRefresh(resolve, reject) {
    let self = this
    setTimeout(function () {
      self.addItem() ? resolve() : reject()
    }, 500)
  },

  addItem() {
    this.state.items.push(<div key={'item-' + count}>Item {count++}</div>)
    this.setState({
      items: this.state.items
    })
    return true
  },

  render() {
    return (
      <ReactPullToRefresh onRefresh={this.handleRefresh} style={{
        textAlign: 'center'
      }}>
        <h3>Pull down to refresh</h3>
        <div>
          {this.state.items}
        </div>
      </ReactPullToRefresh>
    )
  }
})

ReactDOM.render(<App/>, document.getElementById('container'))
