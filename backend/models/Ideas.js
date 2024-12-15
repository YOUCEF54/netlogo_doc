import { Schema, model } from 'mongoose';

const IdeaSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now },
});

export default model('Idea', IdeaSchema);
