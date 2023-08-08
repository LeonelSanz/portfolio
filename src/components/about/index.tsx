/* eslint-disable react/no-unescaped-entities */

type Props = {};

export default function AboutSection({}: Props) {
    return (
        <section id="about" className="pt-24 max-[800px]:pt-0">
            <h3 className="text-2xl max-[800px]:block hidden font-semibold tracking-tight mb-3 pb-4 dark:text-orange-100/90 text-black/80">
                About
            </h3>
            <div className="dark:text-neutral-400 text-neutral-900">
                <p className="mb-4 leading-6 text-base">
                    Passionate and ambitious web developer with a strong foundation in front-end development.
                    With a keen eye for detail and a determination to learn and grow, I am a dedicated and motivated individual who thrives on challenges.
                    I have a genuine passion for web development and constantly stay up-to-date with the latest industry trends and best practices.
                    I am a fast learner and enjoy solving problems creatively.
                </p>
            </div>
        </section>
    );
};