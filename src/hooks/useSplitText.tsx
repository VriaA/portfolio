import SplitType, { TypesList } from "split-type";
import { useEffect, useState } from "react";

type SplitTextStatus = {
    hasSplitText: boolean;
};

export default function useSplitText(
    target: string,
    type: TypesList | undefined
): SplitTextStatus {
    const [hasSplitText, setHasSplitText] = useState<boolean>(false);

    useEffect(() => {
        const splitText = new SplitType(target, {
            types: type,
            tagName: "span",
        });
        setHasSplitText(true);
        return () => splitText.revert();
    }, []);

    return { hasSplitText };
}
