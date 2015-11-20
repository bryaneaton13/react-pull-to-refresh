import React from 'react'
import WebPullToRefresh from '../pull-to-refresh/wptr.1.1'

export default React.createClass({

  getInitialState() {
    return {
      initialized: false
    }
  },

  handleRefresh() {
    return new Promise((resolve, reject) => {
      this.props.onRefresh(resolve, reject)
    })
  },

  init() {
    if (!this.state.initialized) {
      WebPullToRefresh().init({
        contentEl: this.refs.refresh,
        ptrEl: this.refs.ptr,
        distanceToRefresh: this.props.distanceToRefresh || undefined,
        loadingFunction: this.handleRefresh,
        resistance: this.props.resistance || undefined
      })
      this.setState({
        initialized: true
      })
    }
  },

  componentDidMount() {
    if (!this.props.disabled) {
      this.init()
    }
  },

  componentDidUpdate() {
    if (!this.props.disabled) {
      this.init()
    }
  },

  render() {
    if (this.props.disabled) {
      return (
        <div {...this.props}>
          {this.props.children}
        </div>
      )
    }
    let icon = this.props.icon || <span className="genericon genericon-next"></span>
    return (
      <div {...this.props}>
        <div ref="ptr" className="ptr-element">
          {icon}
          <div className="loading">
            <span className="loading-ptr-1"></span>
            <span className="loading-ptr-2"></span>
            <span className="loading-ptr-3"></span>
          </div>
        </div>
        <div ref="refresh" className="refresh-view">
          {this.props.children}
        </div>
      </div>
    )
  }
})
