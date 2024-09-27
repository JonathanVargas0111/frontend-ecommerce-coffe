
import { useProductField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FilterTypes} from "@/types/filterTypes";
import { ResponseType } from "@/types/response";

type FilterOriginProps={
  setFilterOrigin: (origin: string) => void
}

const FilterOirigin = (props:FilterOriginProps) => {
  const { setFilterOrigin} = props
  const { result, loading }: ResponseType<FilterTypes> = useProductField()

  return (
    <div className="my-5">
      <p className=""></p>
      {
        loading && result === null && (
          <p>Loading...</p>
        )
      }
      <RadioGroup onValueChange={(value) => setFilterOrigin(value)}>
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