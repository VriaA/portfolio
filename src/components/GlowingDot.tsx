export default function GlowingDot({ style }: { style: string }): JSX.Element {
    return (
        <span className="relative grid grid-cols-1 grid-rows-1 place-items-center w-fit">
            <span className={`absolute z-[11] col-start-1 col-end-1 row-start-1 row-end-1 w-5 h-5 blur rounded-full animate-pulse ${style}`}></span>
            <span className={`relative z-[12] col-start-1 col-end-1 row-start-1 row-end-1 w-[10px] h-[10px] rounded-full ${style}`}></span>
        </span>
    )
}