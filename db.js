import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("Connected to MongoDB")
    }
    catch(error) {
        throw new Error("Error in connecting to MongoDB.", error)
    }
}

export default connect