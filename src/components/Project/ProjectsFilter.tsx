import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext, TAppContext } from "@/contexts/AppContext";

export default function ProjectsFilter({
    filter,
}: {
    filter: string | null;
}): JSX.Element {
    const { viewport } = useContext(AppContext) as TAppContext;
    const POSITION_CLASS = viewport.canStick ? "sticky" : "";
    return (
        <div
            className={`${POSITION_CLASS} top-[116px] flex flex-wrap justify-center gap-5 mt-10`}>
            <Link
                to="."
                className={`${
                    !filter ? "bg-dark-gray/10 border border-dark-gray" : ""
                } project-badge text-gray-400`}>
                All
            </Link>
            <Link
                to="?filter=freelance"
                className={`text-gray-400 ${
                    filter === "freelance" ? "freelance-badge" : ""
                } project-badge`}>
                Freelance Projects
            </Link>
            <Link
                to="?filter=team"
                className={`text-gray-400 ${
                    filter === "team" ? "team-badge" : ""
                } project-badge`}>
                Team Projects
            </Link>
            <Link
                to="?filter=personal"
                className={`text-gray-400 ${
                    filter === "personal" ? "personal-badge" : ""
                } project-badge`}>
                Personal Projects
            </Link>
            <Link
                to="?filter=open-source"
                className={`text-gray-400 ${
                    filter === "open-source" ? "open-source-badge" : ""
                } project-badge `}>
                Open Source Contributions
            </Link>
        </div>
    );
}
