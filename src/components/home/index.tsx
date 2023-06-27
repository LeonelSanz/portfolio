import Image from "next/image";

function HomeSection() {
    return (
        <>
            <section className="h-screen relative flex items-center max-w-[1000px] mx-auto">
                <div className="p-0 h-full text-center max-w-full max-[700px]:after:hidden">
                    <div className="flex items-center flex-col justify-center w-full gap-4">
                        <div className="flex flex-col pt-72 -z-10 gap-3 max-[700px]:px-2">
                            <h1 className="font-extrabold relative max-[700px]:text-7xl inline-block tracking-tighter text-transparent text-8xl bg-clip-text bg-gradient-to-b dark:from-[#fde089] dark:to-[#ec8b26] from-[#ffd24e] to-[#b96205]">
                                <span>{'Hi!'}</span>
                                <span className="shake-left-right inline-flex">
                                    <Image
                                        src="/wave.png"
                                        alt="Wave Icon"
                                        width={80}
                                        height={80}
                                    />
                                </span>
                                <span>{", I'm Leonel Sanz"}</span>
                            </h1>
                            <h2 className="dark:text-[#cecece] text-neutral-700 tracking-tight font-semibold text-2xl">
                                {'Full Stack Web Developer'}
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="absolute shadow-2xl bottom-3 left-[50%] translate-x-[-50%]">
                    <a href="#content" className="animate-bounce block">
                        <Image
                            src="/pointing-up2.png"
                            alt="Pointing Icon"
                            width={37}
                            className="rotate-180"
                            height={37}
                        />
                    </a>
                </div>
            </section>
        </>
    )
}

export default HomeSection;