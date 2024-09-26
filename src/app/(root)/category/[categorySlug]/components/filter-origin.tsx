
import { useProductField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FilterTypes} from "@/types/filterTypes";
import { ResponseType } from "@/types/response";

const FilterOirigin = () => {
  const { result, loading }: ResponseType<FilterTypes> = useProductField()

  return (
    <div className="my-5">
      <p className=""></p>
      {
        loading && result === null && (
          <p>Loading...</p>
        )
      }
      <RadioGroup>
        {
          result !== null && result.schema.attributes.origin.enum.map((origin)=>(
            <div key={origin} className="flex items-center space-x-2">
              <RadioGroupItem value={origin} id={origin}/>
              <Label htmlFor={origin}>{origin}</Label>
            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterOirigin