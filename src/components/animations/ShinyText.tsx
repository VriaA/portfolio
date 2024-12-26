type ShinyTextProps = {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
};

export default function ShinyText({
    text,
    disabled = false,
    speed = 5,
    className = "",
}: ShinyTextProps): JSX.Element {
    const animationDuration = `${speed}s`;

    return (
        <span
            className={`text-[#b5b5b5a4] bg-clip-text inline-block ${
                disabled ? "" : "animate-shine"
            } ${className}`}
            style={{
                backgroundImage:
                    "linear-gradient(90deg, #4b54ff, #BBB999, #4b54ff)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                animationDuration: animationDuration,
            }}>
            {text}
        </span>
    );
}
