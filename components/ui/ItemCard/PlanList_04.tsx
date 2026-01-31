import PlanCard_04 from "./PlanCard_04";

const PlanList_04 = () => {
  return (
    <div className="pb-24">
      <div className="mt-10 lg:mt-16">
          {/* PlanCard_04に各プランの情報を渡して表示 */}
          <PlanCard_04
            title="プラン_A"
            description="説明文入ります説明文入ります説明文入ります"
            price="0,000"
          />
          <PlanCard_04
            title="プラン_B"
            description="説明文入ります説明文入ります説明文入ります"
            price="0,000"
          />
          <PlanCard_04
            title="プラン_C"
            description="説明文入ります説明文入ります説明文入ります"
            price="0,000"
          />
          <PlanCard_04
            title="プラン_D"
            description="説明文入ります説明文入ります説明文入ります"
            price="0,000"
          />
          <PlanCard_04
            title="プラン_E"
            description="説明文入ります説明文入ります説明文入ります"
            price="0,000"
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

export default PlanList_04;
