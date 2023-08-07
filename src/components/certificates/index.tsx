import Link from "next/link";
import { CertificateType } from "./types";
import ItemCertificates from './certificate';

const certificates: CertificateType[] = [
    {
        id: 0,
        image: '/certificates/Desarrollo Fullstack.png',
        url: 'https://www.coderhouse.com/certificados/648117f55e404a0002337143',
        title: 'FullStack Web Developer',
        plataforma: (
            <>
                <Link
                    className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
                    href="https://www.coderhouse.com/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >Coderhouse</Link>
            </>
        ),
        fecha: 'May 2023'
    },
    {
        id: 1,
        image: '/certificates/Certificado_YoProgramo.png',
        url: 'OCskIHWzx7',
        title: '#YoProgramo Web FullStack Junior',
        plataforma: (
            <>
                <Link
                    className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
                    href="https://www.argentina.gob.ar/economia/conocimiento/argentina-programa"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >Argentina Programa</Link>
            </>
        ),
        fecha: 'May 2023'
    },
    {
        id: 2,
        image: '/certificates/Programacion Backend.png',
        url: 'https://www.coderhouse.com/certificados/648117f55e404a000233713f',
        title: 'Backend Programming',
        plataforma: (
            <>
                <Link
                    className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
                    href="https://www.coderhouse.com/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >Coderhouse</Link>
            </>
        ),
        fecha: 'May 2023'
    },
    {
        id: 3,
        image: '/certificates/Ciberseguridad.png',
        url: 'https://www.coderhouse.com/certificados/63d9be2c19faf7000ef7405e',
        title: 'Cibersecurity',
        plataforma: (
            <>
                <Link
                    className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
                    href="https://www.coderhouse.com/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >Coderhouse</Link>
            </>
        ),
        fecha: 'January 2023'
    },
    {
        id: 4,
        image: '/certificates/Desarrollo Front End.png',
        url: 'https://www.coderhouse.com/certificados/6361c9c5e80e29000e8dc371',
        title: 'Frontend React Developer',
        plataforma: (
            <>
                <Link
                    className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
                    href="https://www.coderhouse.com/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >Coderhouse</Link>
            </>
        ),
        fecha: 'September 2022'
    },
    {
        id: 5,
        image: '/certificates/ReactJS.png',
        url: 'https://www.coderhouse.com/certificados/6361c9c3e80e29000e8dc36e',
        title: 'ReactJS',
        plataforma: (
            <>
                <Link
                    className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
                    href="https://www.coderhouse.com/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >Coderhouse</Link>
            </>
        ),
        fecha: 'September 2022'
    },
    {
        id: 6,
        image: '/certificates/JavaScript.png',
        url: 'https://www.coderhouse.com/certificados/6324bce0aeb871000e8583fd',
        title: 'JavaScript',
        plataforma: (
            <>
                <Link
                    className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
                    href="https://www.coderhouse.com/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >Coderhouse</Link>
            </>
        ),
        fecha: 'August 2022'
    },
    {
        id: 7,
        image: '/certificates/Desarrollo Web.png',
        url: 'https://www.coderhouse.com/certificados/62a4e699fb841b00247aaa2e',
        title: 'Web Developer',
        plataforma: (
            <>
                <Link
                    className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
                    href="https://www.coderhouse.com/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >Coderhouse</Link>
            </>
        ),
        fecha: 'May 2022'
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