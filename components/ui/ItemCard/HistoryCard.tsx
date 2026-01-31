type HistoryCardProps = {
  date: string;
  description: string;
};

const HistoryCard = ({ date, description }: HistoryCardProps) => {
  return (
    <li className="pb-10 flex gap-10">
      <div className="w-4 flex flex-col items-center relative">
        <span className="block rounded-lg bg-accentColor w-4 h-4 relative"></span>
        <span className="block rounded-lg bg-black w-[1px] h-40 lg:h-24 absolute top-4"></span>
      </div>
      <div>
        <h3 className="text-lg lg:text-[22px] leading-relaxed lg:leading-[160%] text-accentColor">
          {date}
        </h3>
        <p className="mt-1 leading-relaxed lg:leading-[160%] lg:text-base font-[300]">
          {description}
        </p>
      </div>
    </li>
  );
};

export default HistoryCard;
