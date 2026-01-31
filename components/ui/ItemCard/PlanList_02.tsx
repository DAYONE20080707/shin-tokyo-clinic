import PlanCard from "./PlanCard_02";

const PlanList_02 = () => {
  return (
    <div className="pb-24">
      <div className="overflow-x-scroll lg:overflow-y-auto">
        <div className="mt-0 lg:mt-16 grid grid-cols-5 gap-x-1 min-w-[1200px]">
          <PlanCard
            title="プラン一覧"
            colorClass="bg-accentColor"
            features={[
              "機能項目",
              "機能項目",
              "機能項目",
              "機能項目",
              "機能項目",
            ]}
            isLargePadding={true}
          />
          <PlanCard
            title="プラン_A"
            description="説明文入ります説明文入ります説明文入ります"
            price="0,000"
            colorClass="bg-accentColor"
            features={["◎", "◎", "◎", "◎", "◎"]}
          />
          <PlanCard
            title="プラン_B"
            description="説明文入ります説明文入ります説明文入ります"
            price="0,000"
            colorClass="bg-[#0a66c1]"
            features={["◎", "◎", "◎", "◎", "◎"]}
          />
          <PlanCard
            title="プラン_C"
            description="説明文入ります説明文入ります説明文入ります"
            price="0,000"
            colorClass="bg-[#5087e2]"
            features={["◎", "◎", "◎", "◎", "◎"]}
          />
          <PlanCard
            title="プラン_D"
            description="説明文入ります説明文入ります説明文入ります"
            price="0,000"
            colorClass="bg-[#5087e2]"
            features={["◎", "◎", "◎", "◎", "◎"]}
          />
        </div>
      </div>
      <ul className="mt-6 text-xs gap-y-2">
        <li className="mb-2">
          ※注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります
        </li>
        <li className="mb-2">
          ※注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります
        </li>
        <li className="mb-2">
          ※注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります
        </li>
        <li>
          ※注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります注釈はいります
        </li>
      </ul>
    </div>
  );
};

export default PlanList_02;
