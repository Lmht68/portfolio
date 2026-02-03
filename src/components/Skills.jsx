function Skills() {
    return (
        <div className='flex flex-col justify-center items-center p-5 md:p-10 content-block-bg'>
            <p className="text-base md:text-2xl mb-3 md:mb-8 font-bold text-title">I have experience with these technologies</p>
            <a href="https://go-skill-icons.vercel.app">
                <span className="sr-only">Skill icons</span>
                <img src="https://go-skill-icons.vercel.app/api/icons?i=python,c,cpp,java,javascript,typescript,kotlin,bash,powershell,numpy,scipy,pandas,opencv,pytorch,sklearn,matplotlib,seaborn,qt,flask,fastapi,nodejs,expressjs,spring,react,jquery,tailwind,bootstrap,d3,jest,pytest,junit,selenium,sqlite,postgres,mongodb,firebase,aws,gcp,cmake,docker,githubactions,git,linux,arduino,raspberrypi&perline=15"
                    alt="Programming languages and technologies: Python, C, C++, Java, JavaScript, Kotlin, Bash, PowerShell, NumPy, SciPy, Pandas, OpenCV, PyTorch, Scikit-learn, Matplotlib, Seaborn, Qt, Flask, FastAPI, Node.js, Express.js, Spring, React, jQuery, Tailwind CSS, Bootstrap, D3.js, Jest, Pytest, JUnit, Selenium, SQLite, PostgreSQL, MongoDB, Firebase, AWS, GCP, CMake, Docker, GitHub Actions, Git, Linux, Arduino, Raspberry Pi"
                />
            </a>
        </div>
    )
}

export default Skills;