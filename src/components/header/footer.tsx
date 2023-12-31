import HeaderFooterItem from "./footer-item";
import { GithubIcon, LinkedinIcon, CvIcon, MailIcon } from "@/icons";

type Props = {};

export default function FooterHeader({}: Props) {
    return (
        <div className="mt-auto max-[700px]:mt-4">
            <div className="flex max-[700px]:flex-col items-center max-[700px]:items-start">
                <div className="flex items-center gap-3">
                    <HeaderFooterItem
                        href="https://github.com/LeonelSanz"
                        title="Github"
                        icon={<GithubIcon />}
                    />
                    <HeaderFooterItem
                        href="https://www.linkedin.com/in/leonel-sanz-466b96234/"
                        title="Linkedin"
                        icon={<LinkedinIcon />}
                    />
                    <HeaderFooterItem
                        href="mailto:leonelsanz15@gmail.com"
                        title="Gmail"
                        icon={<MailIcon />}
                    />
                    <HeaderFooterItem
                        href="https://drive.google.com/file/d/10pLcwBtDeOQwRT09USXVfmPLhMoHhBJI/view?usp=sharing"
                        title="CV"
                        icon={<CvIcon />}
                    />
                </div>
                <div className="ml-auto text-sm bg max-[700px]:ml-0 max-[700px]:mt-2 dark:text-neutral-200 bg-neutral-800 rounded-2xl px-2 p-[2px]">
                    Contact me
                </div>
            </div>
        </div>
    )
}