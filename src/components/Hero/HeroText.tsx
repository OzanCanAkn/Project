import Buttons from "../Buttons";

const HeroText = ({ title, subtitle, description }: { title: string, subtitle: string, description: string }) => {
    return (
        <div className="flex !h-full flex-col items-center lg:items-end justify-center max-lg:px-4 sm:!w-[400px] xl:!w-[556px] -z-10">
            <p className="mb-3 font-bold uppercase text-[#0381FF] lg:mb-6">{title}</p>
            <h1 className="mb-3 text-3xl font-bold lg:mb-6">{subtitle}</h1>
            <p className="mb-3 text-[13px] leading-7 lg:mb-8 lg:text-xl lg:leading-8 lg:text-right text-center">{description}</p>
            <Buttons.OutlineButton>
                <span className="text-gray-700 border-gray-200">Learn More</span>
            </Buttons.OutlineButton>
        </div>
    )
}

export default HeroText;