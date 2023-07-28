export type CertificateType = {
    id: number;
    image?: string;
    deploy?: string;
    status?: string;
    github?: string;
    repository?: string;
    isPrivate?: string;
    title: string;
    description: React.ReactNode | string;
};