import { Dialog } from "@headlessui/react";
import { Dispatch, ReactNode, SetStateAction, memo } from "react";
import { tv } from "tailwind-variants";

type Props = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    children: ReactNode;
    className?: string;
};

export const Modal = memo(
    ({ isOpen, setIsOpen, children, className }: Props): JSX.Element => {
        return (
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="fixed inset-[0px] bg-gray-dark opacity-50" />
                <Dialog.Panel
                    className={tv({
                        base: "space-y-[8px] fixed top-[50%] left-[50%] h-[96px] w-[288px] bg-white translate-x-[-50%] translate-y-[-50%] justify-center items-center flex flex-col rounded p-[4px]",
                    })({ className: className })}
                >
                    {children}
                </Dialog.Panel>
            </Dialog>
        );
    }
);
