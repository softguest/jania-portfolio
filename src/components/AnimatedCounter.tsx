import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
}

const AnimatedCounter = ({ end, suffix = "", label }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const increment = Math.ceil(end / 60);
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 25);
    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="font-body text-sm text-muted-foreground uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
};

export default AnimatedCounter;
