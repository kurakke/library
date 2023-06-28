import classNames from "classnames";
import { ComponentProps, ReactNode, forwardRef } from "react";

export type Props = Omit<ComponentProps<"button">, "type"> & {
    type?: "submit" | "reset" | "button";
    disable?: boolean;
    children: ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, Props>(
    ({ type, disable, children, ...rest }: Props) => {
        return (
            <button
                type={type}
                disabled={disable}
                className={classNames(
                    "flex justify-center items-center w-200 h-40 rounded font-black text-white",
                    {
                        "bg-gray-light": disable,
                        "bg-brand-green lib-pointer": !disable,
                    }
                )}
                {...rest}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
