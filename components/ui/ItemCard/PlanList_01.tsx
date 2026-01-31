import PlanCard from "./PlanCard_01";

const PlanList_01 = () => {
  return (
    <div className="pb-24">
      <div className="mt-0 lg:mt-16 grid grid-cols-1 lg:grid-cols-4 gap-y-10 lg:gap-y-0 gap-x-1">
        <PlanCard
          planName="プラン_A"
          description="説明文入ります説明文入ります説明文入ります"
          price="0,000"
          bgColor="bg-accentColor"
          features={[
            "機能項目説明はいります1",
            "機能項目説明はいります2",
            "機能項目説明はいります3",
            "機能項目説明はいります4",
            "機能項目説明はいります5",
          ]}
          link="/"
        />
        <PlanCard
          planName="プラン_B"
          description="説明文入ります説明文入ります説明文入ります"
          price="0,000"
          bgColor="bg-[#0a66c1]"
          features={[
            "機能項目説明はいります",
            "機能項目説明はいります",
            "機能項目説明はいります",
            "機能項目説明はいります",
            "機能項目説明はいります",
          ]}
          link="/"
        />
        <PlanCard
          planName="プラン_C"
          description="説明文入ります説明文入ります説明文入ります"
          price="0,000"
          bgColor="bg-[#5087e2]"
          features={[
            "機能項目説明はいります",
            "機能項目説明はいります",
            "機能項目説明はいります",
            "機能項目説明はいります",
            "機能項目説明はいります",
          ]}
          link="/"
        />
        <PlanCard
          planName="プラン_D"
          description="説明文入ります説明文入ります説明文入ります"
          price="0,000"
          bgColor="bg-[#265cb3]"
          features={[
            "機能項目説明はいります",
            "機能項目説明はいります",
            "機能項目説明はいります",
            "機能項目説明はいります",
            "機能項目説明はいります",
          ]}
          link="/"
        />
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

export default PlanList_01;
