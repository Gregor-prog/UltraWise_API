import {Schema,model} from "mongoose"

const consumption = new Schema({
    waterConsumedHr : {type: Number, required:true  },

},
    {timestamps:true}
)

const consumptionSchema = model("consumptionSchema", consumption)

export default consumptionSchema