export interface ProjectType {
    isOpenSource?: boolean;
    isFreelance?: boolean;
    isTeam?: boolean;
}

export interface ProjectLinkData {
    github?: string;
    website?: string;
}

export interface ProjectData extends ProjectType {
    name: string;
    description: string;
    technologiesUsed: {
        techName: string;
        logo: JSX.Element | null;
    }[];
    imageSrc: string;
    links: ProjectLinkData;
    isCompleted: boolean;
}
