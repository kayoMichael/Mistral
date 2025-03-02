import { forwardRef } from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  wide?: boolean;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ wide, children, className, ...props }, ref) => {
    return (
      <div
        className={`mx-auto flex w-full px-8 sm:px-12 md:px-10 lg:px-16 xl:px-6' ${wide ? "max-w-15xl" : "max-w-[85rem]"} ${className}`}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";
export default Container;
