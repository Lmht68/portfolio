function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center py-16 px-8 content-block-bg">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Hi, I'm <span className="text-title">Thinh</span></h1>
            <p className="text-base md:text-xl mb-3">Software Developer</p>
            <p className="mt-6 text-sm max-w-3xl font-medium leading-relaxed">
                I’m a <span className="font-bold text-title">Computer Science</span> graduate from
                Ontario Tech University with two years of professional internship experience, focused on building reliable, efficient,
                and secure systems. I work across software development, embedded systems, data science, and cybersecurity, taking projects
                from design and architecture through implementation, testing, and deployment, with an emphasis on clean, maintainable code and real-world reliability.
            </p>
        </div>
    )
}

export default Intro;