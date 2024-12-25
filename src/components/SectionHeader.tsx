export default function SectionHeader({ text }: { text: string }): JSX.Element {
    return (
        <h2 className="px-8 py-2 w-fit h-fit font-satoshi font-medium text-base xl:text-lg tracking-[.01em] bg-metallic-text text-transparent bg-clip-text !leading-none rounded-2xl border bg-dark-gray/20 border-white/30 shadow-container">
            {text}
        </h2>
    );
}
