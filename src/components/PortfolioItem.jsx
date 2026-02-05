function PortfolioItem({ title, desc, imgUrl, stack, link }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="h-full overflow-hidden flex flex-col justify-between content-block-border"
        >
            <img
                src={imgUrl}
                alt="portfolio"
                className="max-w-full h-auto object-cover cursor-pointer"
            />
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold ">{title}</h3>
                <p className="text-sm mb-2">{desc}</p>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
                    {stack.map((item, index) => (
                        <span key={index} className="inline-block px-2 py-1 font-semibold content-block-border">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </a>
    )
}

export default PortfolioItem;