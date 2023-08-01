import Link from "next/link";
import { CertificateType } from "./types";
import ItemCertificates from './certificate';

const certificates: CertificateType[] = [
    {
        id: 0,
        image: '/certificates/Desarrollo Web.png',
        url: 'Finished',
        title: 'Web Developer',
        plataforma: 'Coderhouse'
    }
];

//Component
export default function CertificatesSection() {
    return (
        <section id="certificates" className="pt-24 max-[800px]:pt-5">
            <h3 className="text-2xl font-semibold tracking-tight mb-3 pb-4 dark:text-orange-100/90 text-black/80">
                Certificates
            </h3>
            {certificates.map((certificate) => (
                <ItemCertificates key={certificate.id} {...certificate} />
            ))}
        </section>
    );
};