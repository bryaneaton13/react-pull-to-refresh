import { HTMLAttributes, ReactNode, useEffect, useRef } from 'react';
import webPullToRefresh from '../pull-to-refresh/wptr.1.1';

export interface ReactPullToRefreshProps extends HTMLAttributes<HTMLDivElement> {
  onRefresh: Function;
  icon?: ReactNode;
  loading?: ReactNode;
  disabled?: boolean;
  distanceToRefresh?: number;
  resistance?: number;
  hammerOptions?: object;
}

function ReactPullToRefresh(props: ReactPullToRefreshProps) {
  const { onRefresh, disabled, distanceToRefresh, resistance, hammerOptions, children, icon, loading, ...rest } = props;

  async function handleRefresh() {
    await onRefresh();
  }

  const hasBeenInit = useRef<boolean | null>(null);
  const refreshRef = useRef<HTMLDivElement>(null);
  const ptrRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!disabled) {
      if (hasBeenInit.current) return;
      webPullToRefresh().init({
        contentEl: refreshRef.current,
        ptrEl: ptrRef.current,
        bodyEl: bodyRef.current,
        distanceToRefresh,
        loadingFunction: handleRefresh,
        resistance,
        hammerOptions,
      });
      hasBeenInit.current = true;
    }
  }, [disabled]);

  if (disabled) {
    return <div {...rest}>{children}</div>;
  }

  return (
    <div ref={bodyRef} {...rest}>
      <div className="ptr-element" ref={ptrRef}>
        {icon ?? <span className="genericon genericon-next" />}
        {loading ?? (
          <div className="loading">
            <span className="loading-ptr-1" />
            <span className="loading-ptr-2" />
            <span className="loading-ptr-3" />
          </div>
        )}
      </div>
      <div className="refresh-view" ref={refreshRef}>
        {children}
      </div>
    </div>
  );
}

export default ReactPullToRefresh;
