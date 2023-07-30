import Link from "next/link";
import { CertificateType } from "./types";
import Certificate from './certificate';

const projects: CertificateType[] = [
    {
        id: 0,
        image: '',
        status: 'Finished',
        title: 'FullStack Web Developer'
    }
];


//Component
export default function CertificatesSection() {
    return (
        <section id="projects" className="pt-24 max-[800px]:pt-5">
            <h3 className="text-2xl font-semibold tracking-tight mb-3 pb-4 dark:text-orange-100/90 text-black/80">
                Certificates
            </h3>
            {projects.map((certificate) => (
                <Certificate></Certificate>
            ))}
        </section>
    );
};