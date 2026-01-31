import PlanCard from "./PlanCard_03";

const PlanList_03 = () => {
  return (
    <div className="pb-24">
      <div className="mt-0 lg:mt-16 ">
        <div>
          <div className="bg-accentColor text-white p-6 rounded-t-2xl">
            <h3 className="ext-lg lg:text-2xl font-bold leading-relaxed lg:leading-[38.40px] mb-1 text-center">
              プラン_A
            </h3>
          </div>
          <div className="mt-[2px] bg-white border border-[#EFEFEF] p-7 font-light text-[#393939] text-center">
            <p className="font-light">
              説明文入ります説明文入ります説明文入ります
            </p>
            <p className="my-4 text-[30px] lg:text-[40px] font-bold text-accentColor">
              <span className="text-lg font-extrabold">￥</span>0,000
            </p>
          </div>
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

export default PlanList_03;
