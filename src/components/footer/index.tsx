export default function Footer() {
    return (
        <footer className="py-9 w-full border-t dark:border-t-neutral-900 border-t-neutral-300">
            <div className="flex items-center justify-center h-full mx-auto w-[600px] max-w-full">
                <div className="flex flex-col gap-2">
                    <h4 className="text-left font-extrabold text-2xl tracking-tighter dark:text-white">
                        <div className="flex gap-2 font-medium dark:text-neutral-400 text-neutral-800 text-xs">
                            <span>f</span>
                            <span>r</span>
                            <span>o</span>
                            <span>m</span>
                        </div>
                        <span className="hover:underline">
                            Argentina
                        </span>
                    </h4>
                    <p className="mt-2 text-sm leading-normal dark:text-orange-50/60 text-orange-950/80 dark:text-orange-50 [&>a]:text-orange-800 dark:[&>a]:text-orange-50 dark:hover:[&>a]:text-cyan-500 hover:[&>a]:text-cyan-700">
                        Coded in{' '}
                        <a
                            className="font-semibold hover:underline hover:text-orange-200 text-neutral-50"
                            href="https://code.visualstudio.com/"
                            target="_blank"
                        >
                            Visual Studio Code
                        </a>{' '}
                        by{' '}
                        <a
                            className="font-semibold hover:underline hover:text-orange-200 text-neutral-50"
                            href="https://www.linkedin.com/in/leonel-sanz-466b96234/"
                            target="_blank"
                        >
                            Leonel Sanz
                        </a>{'. '}
                        Built with{' '}
                        <a
                            className="font-semibold hover:underline hover:text-orange-200 text-neutral-50"
                            href="https://nextjs.org/"
                            target="_blank"
                        >
                            NextJS
                        </a>{' '}
                        and{' '}
                        <a
                            className="font-semibold hover:underline hover:text-orange-200 text-neutral-50"
                            href="https://tailwindcss.com/"
                            target="_blank"
                        >
                            Tailwind CSS
                        </a>{', '}
                        deployed with{' '}
                        <a
                            className="font-semibold hover:underline hover:text-orange-200 text-neutral-50"
                            href="https://vercel.com/"
                            target="_blank"
                        >
                            Vercel
                        </a>{'.'}
                    </p>
                </div>
            </div>
        </footer>
    )
}