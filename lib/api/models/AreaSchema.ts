import mongoose from 'mongoose';

export type Area = {
  areaId: string;
  name: string;
  place: string;
  country: string;
  location: { type: string; coordinates: number[] };
};

export interface AreaDocument extends Area, mongoose.Document {}

const AreaSchema = new mongoose.Schema<AreaDocument>({
  areaId: { type: String, required: true },
  name: { type: String, required: true },
  place: { type: String, required: true },
  country: { type: String, required: true },
  location: {
    type: { type: String, enum: ['Point'], required: true },
    coordinates: { type: [Number], required: true },
  },
});

export default mongoose.models.Area || mongoose.model('Area', AreaSchema);
