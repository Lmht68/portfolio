import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
    return (
        <div className="flex flex-col items-center justify-center py-5 md:py-10 md:px-10 bg-stone-200 dark:bg-stone-800 text-stone-900 dark:text-stone-100 mx-0 md:mx-8 md:rounded-lg overflow-x-hidden">
            <h2 className="text-3xl md:text-6xl mb-3 md:mb-8 font-bold text-title">Portfolio</h2>
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-full
                            px-5 scroll-px-5 md:grid md:grid-cols-2 lg:grid-cols-3 
                            md:gap-4 md:px-0 md:pb-0 md:overflow-visible">
                {portfolio.map((project, index) => (
                    <div key={index} className="min-w-full snap-start flex">
                        <PortfolioItem
                            imgUrl={project.imgUrl}
                            title={project.title}
                            desc={project.desc}
                            stack={project.stack}
                            link={project.link}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;