import Buttons from '../Buttons';

const HeroText = ({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle: string;
  description: string;
}) => {
  return (
    <div className="flex gap-4 lg:gap-4 !h-full flex-col items-center lg:items-end justify-center max-lg:px-4 sm:!w-[400px] xl:!w-[556px] -z-10">
      <p className="font-bold uppercase tracking-widest text-action">{title}</p>
      <h1 className="text-3xl font-bold text-ink">{subtitle}</h1>
      <p className="text-[13px] pb-1 max-lg:pb-0 leading-7 text-body lg:text-xl lg:leading-8 lg:text-right tracking-wide font-normal text-center">
        {description}
      </p>
      <Buttons.OutlineButton>
        <span className="text-gray-700 border-gray-200">Learn More</span>
      </Buttons.OutlineButton>
    </div>
  );
};

export default HeroText;
