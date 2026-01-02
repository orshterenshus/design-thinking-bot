
import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a project name'],
    },
    phase: {
        type: String,
        enum: ['Empathize', 'Define', 'Ideate', 'Prototype', 'Test'],
        default: 'Empathize',
    },
    createdBy: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    sharedWith: [{
        user: { type: String, required: true },
        permission: { type: String, enum: ['Owner', 'Basic'], default: 'Basic' }
    }],
    messages: [{
        sender: { type: String, required: true },
        text: { type: String, required: true },
        timestamp: { type: Date, default: Date.now }
    }]
});

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
