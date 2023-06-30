import classNames from "classnames";
import { useState } from "react";

export enum DisplayStatus {
    All,
    CanRent,
}

export type Props = {
    displayStatus: DisplayStatus;
    onChange: (displayStatus: DisplayStatus) => void;
};
export const Tab = ({ displayStatus, onChange }: Props) => {
    const handleClick = () => {
        if (displayStatus === DisplayStatus.All) {
            onChange(DisplayStatus.CanRent);
        }
        if (displayStatus === DisplayStatus.CanRent) {
            onChange(DisplayStatus.All);
        }
    };

    return (
        <div
            className="lib-tab flex justify-around items-center w-full h-40 rounded-lg border-2 border-solid font-black"
            data-status={displayStatus}
            onClick={handleClick}
        >
            <button
                className={classNames("z-10 transition-all duration-500", {
                    "text-white": displayStatus === DisplayStatus.All,
                })}
            >
                全て
            </button>
            <button
                className={classNames("z-10 transition-all duration-500", {
                    "text-white": displayStatus === DisplayStatus.CanRent,
                })}
            >
                貸出可能
            </button>
        </div>
    );
};
