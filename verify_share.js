
const mongoose = require('mongoose');
const { Schema } = mongoose;

const MONGO_URI = 'mongodb+srv://natboa:OM7y1smSfbSRDAYE@design-thinking-db.gezkwx5.mongodb.net/design-thinking-bot';

// Re-define models for standalone script since we can't import from next.js app structure easily
const ProjectSchema = new Schema({
    name: String,
    phase: String,
    createdBy: String,
    sharedWith: [String],
    createdAt: { type: Date, default: Date.now }
});
const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);

const UserSchema = new Schema({
    username: { type: String, unique: true },
    email: String,
    password: String
});
const User = mongoose.models.User || mongoose.model('User', UserSchema);

async function run() {
    try {
        console.log('Connecting to DB...');
        await mongoose.connect(MONGO_URI);
        console.log('Connected to DB');

        // Cleanup
        await User.deleteMany({ username: { $in: ['test_owner', 'test_viewer'] } });
        await Project.deleteMany({ name: 'Test Project Shared' });

        // 1. Create Users
        await User.create({ username: 'test_owner', email: 'owner@test.com', password: '123' });
        await User.create({ username: 'test_viewer', email: 'viewer@test.com', password: '123' });
        console.log('Users created');

        // 2. Create Project by Owner
        const project = await Project.create({
            name: 'Test Project Shared',
            phase: 'Empathize',
            createdBy: 'test_owner'
        });
        console.log('Project created:', project._id);

        // 3. Test Visibility BEFORE Share
        const projectsForOwner = await Project.find({
            $or: [{ createdBy: 'test_owner' }, { sharedWith: 'test_owner' }]
        });
        console.log('Owner sees projects:', projectsForOwner.length); // Should be 1

        const projectsForViewer = await Project.find({
            $or: [{ createdBy: 'test_viewer' }, { sharedWith: 'test_viewer' }]
        });
        console.log('Viewer sees projects (Pre-Share):', projectsForViewer.length); // Should be 0

        if (projectsForViewer.length !== 0) throw new Error('Viewer should not see project yet');

        // 4. Share Project
        await Project.findByIdAndUpdate(project._id, { $addToSet: { sharedWith: 'test_viewer' } });
        console.log('Project shared with test_viewer');

        // 5. Test Visibility AFTER Share
        const projectsForViewerAfter = await Project.find({
            $or: [{ createdBy: 'test_viewer' }, { sharedWith: 'test_viewer' }]
        });
        console.log('Viewer sees projects (Post-Share):', projectsForViewerAfter.length); // Should be 1

        if (projectsForViewerAfter.length !== 1) throw new Error('Viewer should see project now');

        console.log('VERIFICATION SUCCESSFUL');

    } catch (e) {
        console.error('Verification Failed:', e);
    } finally {
        // Cleanup
        await User.deleteMany({ username: { $in: ['test_owner', 'test_viewer'] } });
        await Project.deleteMany({ name: 'Test Project Shared' });
        console.log('Cleanup done, disconnecting...');
        await mongoose.disconnect();
    }
}

run();
