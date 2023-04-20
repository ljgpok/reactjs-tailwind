declare module 'react-lazy-load-image-component' {
  import * as React from 'react';

  export interface LazyLoadImageProps {
    src: string;
    srcSet?: string;
    sizes?: string;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
    effect?: 'blur' | 'black-and-white' | 'opacity' | 'rotate' | 'color';
  }

  export class LazyLoadImage extends React.Component<LazyLoadImageProps, {}> {}
}
