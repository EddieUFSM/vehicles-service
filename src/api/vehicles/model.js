import mongoose from 'mongoose'
const { Schema } = mongoose


const vehicleSchema = new Schema({
  placa: {
    type: String,
    require: true,
    unique: true
  },
  chassi: {
    type: String,
    require: true
  }, 
  renavam: {
    type: Number,
    require: true,
    unique: true
  },
  modelo: {
    type: String,
    require: true
  },
  marca: {
    type: String,
    require: true
  }, 
  ano: {
    type: Number,
    require: true
  },
}, {
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

vehicleSchema.methods = {
  view(full){}
}

const model = mongoose.model('Vehicle', vehicleSchema)

export const schema = model.schema
export default model
