const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema (
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                type: String,
                name: {
                    type: String,
                    trim: true
                },
                duration: Number,
                weight: Number,
                reps: Number,
                sets: Number,
                distance: Number
            }
        ]
    }
)

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout