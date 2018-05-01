import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WebPullToRefresh from '../pull-to-refresh/wptr.1.1';

export default class ReactPullToRefresh extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialized: false
    };
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleRefresh() {
    return new Promise((resolve, reject) => {
      this.props.onRefresh(resolve, reject);
    });
  }

  init() {
    if (!this.state.initialized) {
      WebPullToRefresh().init({
        contentEl: this.refresh,
        ptrEl: this.ptr,
        bodyEl: this.body,
        distanceToRefresh: this.props.distanceToRefresh || undefined,
        loadingFunction: this.handleRefresh,
        resistance: this.props.resistance || undefined,
        hammerOptions: this.props.hammerOptions || undefined
      });
      this.setState({
        initialized: true
      });
    }
  }

  componentDidMount() {
    if (!this.props.disabled) {
      this.init();
    }
  }

  componentDidUpdate() {
    if (!this.props.disabled) {
      this.init();
    }
  }

  render() {
    const {
      children,
      disabled,
      distanceToRefresh,
      hammerOptions,
      icon,
      loading,
      onRefresh,
      resistance,
      ...rest
    } = this.props;

    if (disabled) {
      return (
        <div {...rest}>
          {children}
        </div>
      );
    }

    return (
      <div ref={(el) => { this.body = el; }} {...rest}>
        <div ref={(el) => { this.ptr = el; }} className="ptr-element">
          {icon || <span className="genericon genericon-next"></span>}
          {loading ||
            <div className="loading">
              <span className="loading-ptr-1"></span>
              <span className="loading-ptr-2"></span>
              <span className="loading-ptr-3"></span>
           </div>}
        </div>
        <div ref={(el) => { this.refresh = el; }} className="refresh-view">
          {children}
        </div>
      </div>
    );
  }
}

ReactPullToRefresh.propTypes = {
  onRefresh: PropTypes.func.isRequired,
  icon: PropTypes.element,
  loading: PropTypes.element,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  distanceToRefresh: PropTypes.number,
  resistance: PropTypes.number,
  hammerOptions: PropTypes.object
};
