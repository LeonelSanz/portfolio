import Link from "next/link";
import ItemProjects from "./project";
import { ProjectType } from "./types";

const projects: ProjectType[] = [
    {
        id: 0,
        image: '/projects/Airbnb-clone.png',
        status: 'Finished',
        deploy: 'https://airclone-ten.vercel.app/',
        repository: 'https://github.com/LeonelSanz/Airbnb-Clone',
        title: 'Airbnb Clone',
        description: (
            <>
                Airbnb clone developed with{' '}
                <Link
                    className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
                    href="https://nextjs.org"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    NextJS,
                </Link>{' '}
                <Link
                    className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
                    href="https://tailwindcss.com/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    Tailwindcss
                </Link>{' '}
                <Link
                    className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    TypeScript
                </Link>{' '}
                and deployed in
                <Link
                    className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
                    href="https://vercel.com"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    Vercel
                </Link>
            </>
        )
    },
    {
        id: 1,
        image: '/projects/lavelada.png',
        status: 'Finished',
        deploy: 'https://lavelada-3.netlify.app/',
        repository: 'https://github.com/LeonelSanz/la-velada-clone',
        title: 'La Velada Landing',
        description: (
            <>
                La Velada page clone developed with{' '}
                <Link
                    className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
                    href="https://astro.build/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    Astro,
                </Link>{' '}
                <Link
                    className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
                    href="https://tailwindcss.com/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    Tailwindcss
                </Link>{' '}
                and deployed in
                <Link
                    className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
                    href="https://www.netlify.com/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    Netlify
                </Link>
            </>
        )
    },
    {
        id: 2,
        image: '/projects/ecommerce-react.png',
        status: 'Finished',
        deploy: 'https://react-coder-beta.vercel.app/',
        repository: 'https://github.com/LeonelSanz/react-coder',
        title: 'E-commerce with React',
        description: (
            <>
                E-commerce developed with{' '}
                <Link
                    className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
                    href="https://react.dev/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    ReactJS,
                </Link>{' '}
                <Link
                    className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
                    href="https://firebase.google.com/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    Firebase
                </Link>{' '}
                <Link
                    className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
                    href="https://developers.mercadolibre.com.ar/es_ar/api-docs-es"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    Mercadolibre API
                </Link>{' '}
                and deployed in
                <Link
                    className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
                    href="https://vercel.com"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    Vercel
                </Link>
            </>
        )
    },
    {
        id: 3,
        image: '/projects/anime-commerce.png',
        status: 'Finished',
        deploy: 'https://leonelsanz.github.io/proyecto-final-html/',
        repository: 'https://github.com/LeonelSanz/proyecto-final-html',
        title: 'Anime E-commerce',
        description: (
            <>
                Anime E-commerce developed with{' '}
                <Link
                    className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
                    href="https://developer.mozilla.org/es/docs/Web/HTML"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    HTML,
                </Link>{' '}
                <Link
                    className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
                    href="https://developer.mozilla.org/es/docs/Web/CSS"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    CSS
                </Link>{' '}
                <Link
                    className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
                    href="https://sass-lang.com/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    SASS
                </Link>{' '}
                and deployed in
                <Link
                    className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
                    href="https://pages.github.com/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    Github Pages
                </Link>
            </>
        )
    },
]

//Component
export default function ProjectsSection() {
    return (
        <section id="projects" className="pt-24 max-[800px]:pt-5">
            <h3 className="text-2xl font-semibold tracking-tight mb-3 pb-4 dark:text-orange-100/90 text-black/80">
                Projects
            </h3>
            {projects.map((project) => (
                <ItemProjects key={project.id} {...project} />
            ))}
        </section>
    );
};