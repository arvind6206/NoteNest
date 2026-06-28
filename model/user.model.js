import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String
})

const noteSchema = new mongoose.Schema({
    title: {
    type: String,
    required: true
    },

    content: {
        type: String,
        required: true
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    isPinned: {
        type: Boolean,
        default: false
    },
    isArchived: {
        type: Boolean,
        default: false
    },
    isTrashed: {
        type: Boolean,
        default: false
    }
},{timestamps: true}
)

const userModel = mongoose.model('User', userSchema) 
export {userModel}