import type React from 'react';

export type SeparatorProps = React.ComponentPropsWithoutRef<'hr'>;

/**
 * @deprecated Use SeparatorProps instead
 */
export type SplitterProps = SeparatorProps;

export type Resizable = {
  /**
   * border position
   */
  position: number;
  /**
   * position at end of drag
   */
  endPosition: number;
  /**
   * whether the border is dragging
   */
  isDragging: boolean;
  /**
   * props for drag bar
   */
  separatorProps: SeparatorProps;
  /**
   * @deprecated Use separatorProps instead
   */
  splitterProps: SplitterProps;
};

export type UseResizableProps = {
  /**
   * direction of resizing
   */
  axis: 'x' | 'y';
  /**
   * ref of the container element
   */
  containerRef?: React.RefObject<HTMLElement>;
  /**
   * if true, cannot resize
   */
  disabled?: boolean;
  /**
   * initial border position
   */
  initial?: number;
  /**
   * minimum border position
   */
  min?: number;
  /**
   * maximum border position
   */
  max?: number;
  /**
   * calculate border position from other side
   */
  reverse?: boolean;
  /**
   * resizing step with keyboard
   */
  step?: number;
  shiftStep?: number;
  /**
   * callback when border position changes start
   */
  onResizeStart?: () => void;
  /**
   * callback when border position changes end
   */
  onResizeEnd?: () => void;
};

export type ResizableProps = UseResizableProps & {
  /**
   * callback children
   */
  children: (props: Resizable) => JSX.Element;
};
