import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';

function Timeline() {
    return (
        <div className="flex flex-col md:flex-row justify-center p-8 md:p-10 content-block-bg">
            <div className="w-full md:w-7/12">
                <h2 className="text-3xl md:text-6xl mb-3 md:mb-8 font-bold text-title">Timeline</h2>
                {timeline.map((item, index) => (
                    <TimelineItem
                        key={index}
                        year={item.year}
                        title={item.title}
                        duration={item.duration}
                        details={item.details}
                        stack={item.stack}
                    />
                ))}
            </div>
        </div>
    )
}

export default Timeline;