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
                } project-badge text-gray-400 transition-colors duration-1000`}>
                All
            </Link>
            <Link
                to="?type=freelance"
                className={`text-gray-400 ${
                    filter === "freelance" ? "freelance-badge" : ""
                } project-badge transition-colors duration-1000`}>
                Freelance Projects
            </Link>
            <Link
                to="?type=team"
                className={`text-gray-400 ${
                    filter === "team" ? "team-badge" : ""
                } project-badge transition-colors duration-1000`}>
                Team Projects
            </Link>
            <Link
                to="?type=personal"
                className={`text-gray-400 ${
                    filter === "personal" ? "personal-badge" : ""
                } project-badge transition-colors duration-1000`}>
                Personal Projects
            </Link>
            <Link
                to="?type=open-source"
                className={`text-gray-400 ${
                    filter === "open-source" ? "open-source-badge" : ""
                } project-badge transition-colors duration-1000 `}>
                Open Source Contributions
            </Link>
        </div>
    );
}
