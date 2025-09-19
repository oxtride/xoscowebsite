
import { useState, useRef, useEffect, RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

const useIntersectionObserver = <T extends Element>(
  options: IntersectionObserverOptions = {}
): [RefObject<T>, boolean] => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          // Optional: unobserve after it's visible once
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        ...options,
        threshold: options.threshold || 0.1, // Default threshold
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};

export default useIntersectionObserver;
