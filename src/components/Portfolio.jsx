import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
    return (
        <div className="flex flex-col items-center justify-center p-8 md:p-10 content-block-bg">
            <h2 className="text-3xl md:text-6xl mb-3 md:mb-8 font-bold text-title">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolio.map((project, index) => (
                    <PortfolioItem
                        key={index}
                        imgUrl={project.imgUrl}
                        title={project.title}
                        desc={project.desc}
                        stack={project.stack}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;