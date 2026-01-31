// components/ui/ItemCard/PlanCard_04.tsx
interface PlanCardProps {
  title: string
  description: string
  price: string
}

const PlanCard_04: React.FC<PlanCardProps> = ({ title, description, price }) => {
  return (
    <div className="lg:flex justify-between items-center py-6 px-0 lg:p-6 border-b border-[#eeeeee]">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="font-light mt-1">{description}</p>
      </div>
      <p className="text-lg font-extrabold">
        <span>￥</span>{price}
      </p>
    </div>
  )
}

export default PlanCard_04
