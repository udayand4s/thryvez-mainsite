import { Schema, model, models, Document } from 'mongoose';

export interface sim extends Document {
    userId: string;
    phone: number;
    timestamp: Date;
}

const simSchema = new Schema<sim>({
    userId: { type: String, required: true }, 
    phone: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
});

const simModel = models.sim || model<sim>('sim', simSchema);
export default simModel;