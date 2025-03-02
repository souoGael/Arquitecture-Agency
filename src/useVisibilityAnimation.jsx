import { useInView } from "react-intersection-observer";

export const useVisibilityAnimation = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const animationClass = `transition-all duration-500 delay-150 ${
    inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
  }`;

  const animationClassLeft = `transition-all duration-500 delay-150 ${
    inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
  }`;

  const animationClassUp = `transition-all duration-500 delay-150 ${
    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`;

  return { ref, animationClass, animationClassUp, animationClassLeft };
};