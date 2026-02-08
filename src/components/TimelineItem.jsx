function TimelineItem({ year, title, duration, details, stack }) {
    const displayDuration = calculateDuration(year, duration);

    return (
        <ol className="flex flex-col md:flex-row relative border-l border-violet-600 dark:border-orange-300">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-violet-600 dark:border-orange-300 bg-stone-200 dark:bg-stone-800" />
                <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py-1 font-semibold bg-stone-800 dark:bg-stone-200 text-stone-100 dark:text-stone-900 rounded-md">
                        {year}
                    </span>
                    <h3 className="text-lg font-semibold">
                        {title}
                    </h3>
                    <div className="my-1 text-sm font-normal leading-none text-stone-500">
                        {displayDuration}
                    </div>
                </div>
                <p className="my-2 text-base font-normal">
                    {details}
                </p>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
                    {stack.map((item, index) => (
                        <span key={index} className="inline-block px-2 py-1 font-semibold content-block-border">
                            {item}
                        </span>
                    ))}
                </p>
            </li>
        </ol>
    )
}

export default TimelineItem;

function calculateDuration(year, duration) {
    // Only calculate if the year label is "Today"
    if (year !== 'Today') return duration;

    const start = new Date(duration);
    const now = new Date();

    if (isNaN(start.getTime())) return duration;

    let totalMonths = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());

    if (totalMonths <= 0) return "1 month";

    const yrs = Math.floor(totalMonths / 12);
    const mos = totalMonths % 12;
    const yearText = yrs > 0 ? `${yrs} year${yrs > 1 ? 's' : ''}` : "";
    const monthText = mos > 0 ? `${mos} month${mos > 1 ? 's' : ''}` : "";

    return [yearText, monthText].filter(Boolean).join(' & ');
}