import testimonials from "../data/testimonials";

function Testimonials() {
    return (
        <div className="max-w-6xl mx-auto px-5">
            <div className="grid gap-2 md:grid-cols-2">
                {testimonials.map((item, index) => (
                    <div
                        key={index}
                        className="p-5 rounded-xl border border-violet-600 dark:border-orange-300 
                        bg-stone-200/70 dark:bg-stone-800/70 backdrop-blur flex flex-col"
                    >
                        <p className="text-stone-800 dark:text-stone-200 mb-6 leading-relaxed">
                            "{item.testimonial}"
                        </p>

                        <div className="flex items-center gap-4 mb-3">
                            <img
                                src={item.imgUrl}
                                alt={item.company}
                                className="w-10 h-10 rounded-full object-contain bg-white"
                            />

                            <div className="text-sm">
                                <p className="font-medium text-stone-900 dark:text-stone-100">
                                    {item.title}
                                </p>
                                <p className="text-stone-700 dark:text-stone-400">
                                    {item.company}
                                </p>
                            </div>
                        </div>

                        {item.url && (
                            <div className="mt-auto text-right">
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-stone-700 dark:text-stone-400  hover:text-violet-600 dark:hover:text-orange-300 transition-colors"
                                >
                                    View more ↗
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;