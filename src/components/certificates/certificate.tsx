import Image from "next/image";
import { CertificateType } from "./types";
import { ExternalIcon } from "@/icons";

export default function ItemCertificates(certificate: CertificateType) {
    return (
        <article key={certificate.id} className="mb-14">
            <div className="group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover:/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 border border-transparent hover:dark:border-neutral-950 hover:border-neutral-450 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:block lg:group-hover:dark:bg-neutral-800/20 lg:group-hover:bg-neutral-300/20 lg:group-hover:dark:shadow-[inset_0_1px_0_0_rgba(221, 223, 225, 0.1)] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide sm:col-span-2">
                    <div className="rounded-lg overflow-hidden max-[700px]:hidden border-2 border-neutral-900 shadow-xl dark:shadow-black/50 shadow-black/20">
                        <Image
                            className="opacity-80 object-cover w-full h-full sepia group-hover:sepia-0"
                            src={certificate.image ? certificate.image : ''}
                            alt=""
                            width={250}
                            height={250}
                        />
                    </div>
                </div>
                <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium flex flex-col gap-1 text-orange-200">
                        <div>
                            <a
                                className="inline-flex items-baseline font-medium leading-tight dark:text-orange-200 text-orange-800 hover:dark:text-orange-300 hover:text-orange-800 focus-visible:text-orange-300 group/link text-lg"
                                href={certificate.url}
                                target="_blank"
                                aria-label={certificate.title}
                            >
                                <span className="inline-block">
                                    {certificate.title}
                                    <ExternalIcon />
                                </span>
                                <span className="absolute -inset-x-3 -inset-y-3"></span>
                            </a>
                        </div>
                        <div>
                            <div
                                className="dark:text-orange-100/50 text-orange-900/80 font-normal"
                                aria-hidden="true"
                            >
                                {certificate.fecha}
                            </div>
                        </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal dark:text-orange-50/60 text-orange-950/80 dark:text-orange-50 [&>a]:text-orange-800 dark:[&>a]:text-orange-50 dark:hover:[&>a]:text-cyan-500 hover:[&>a]:text-cyan-700">
                        {certificate.plataforma}
                    </p>
                </div>
            </div>
        </article>
    );
};