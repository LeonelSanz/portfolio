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
                    A passionate Full Stack web developer with a specialization in Front-end. I love combining aesthetics and functionality 
                    to create interactive and engaging web experiences.
                    I excel in developing responsive and accessible websites, ensuring an optimal user experience on different devices and browsers. 
                    I have worked on personal projects to expand my practical experience. I have developed static and dynamic 
                    websites, implementing concepts such as event handling, DOM manipulation, and API communication. These projects have allowed me to 
                    refine my problem-solving skills.
                    I am a creative individual, detail-oriented, and passionate about constant learning. I stay updated on the latest trends and 
                    advancements in web development, and I am always ready to take on new challenges.
                </p>
            </div>
        </section>
    );
};