import React from "react";

interface SplitScreenProps {
    children: React.ReactNode[]; // Array of child components to render
    splitRatios?: number[]; // Optional array to specify the ratio for each screen
}

const SplitScreen: React.FC<SplitScreenProps> = ({ children, splitRatios = [] }) => {
    // Default split ratio: equally distribute if not provided
    const defaultRatio = 1 / children.length;
    const ratios = splitRatios.length ? splitRatios : new Array(children.length).fill(defaultRatio);

    return (
        <div className="flex w-full h-screen">
            {children.map((child, index) => (
                <div
                    key={index}
                    style={{ flex: ratios[index] }}
                    className={`p-4 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}`}
                >
                    {child}
                </div>
            ))}
        </div>
    );

}
export default SplitScreen;