import Link from "next/link";
import ItemProjects from "./project";
import { ProjectType } from "./types";

const projects: ProjectType[] = [
    {
        id: 0,
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