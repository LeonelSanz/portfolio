import Skill from "./skill";
import {
    CloudinaryIcon,
    CssIcon,
    FirebaseIcon,
    GitIcon,
    HtmlIcon,
    JavaIcon,
    JavaScriptIcon,
    MongoDbIcon,
    MysqlIcon,
    NextjsIcon,
    ReactJsIcon,
    TailwindcssIcon,
    TypeScriptIcon
} from "@/icons";

export default function SkillsSection() {
    return (
        <section id="skills" className="py-24 max-[800px]:pt-5">
            <h3 className="text-2xl font-semibold tracking-tight mb-3 pb-4 dark:text-orange-100/90 text-black/80">
                Skills
            </h3>
            <div className="max-w-[380px] mx-auto">
                <div className="grid grid-cols-4  space-x-2 justify-center items-center">
                    <Skill title="Html" icon={<HtmlIcon />} />
                    <Skill title="CSS" icon={<CssIcon />} />
                    <Skill title="JavaScript" icon={<JavaScriptIcon />} />
                    <Skill title="ReactJS" icon={<ReactJsIcon />} />
                    <Skill title="NextJS" icon={<NextjsIcon />} />
                    <Skill title="TypeScript" icon={<TypeScriptIcon />} />
                    <Skill title="TailwindCss" icon={<TailwindcssIcon />} />
                    <Skill title="Firebase" icon={<FirebaseIcon />} />
                    <Skill title="Git" icon={<GitIcon />} />
                    <Skill title="MongoDB" icon={<MongoDbIcon />} />
                    <Skill title="Cloudinary" icon={<CloudinaryIcon />} />
                    <Skill title="Java" icon={<JavaIcon />} />
                    <Skill title="MySQL" icon={<MysqlIcon />} />
                </div>
            </div>
        </section>
    );
};