if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: "../.env" });
}

const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

const dbUrl = process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    await mongoose.connect(dbUrl);
    console.log("Connected to DB for initialization");
}

const initdb = async () => {
    try {
        await main();
        await Listing.deleteMany({});
        
        // Find an existing user or fallback to a default ObjectId
        const firstUser = await User.findOne({});
        const defaultOwner = firstUser ? firstUser._id : "67ff3820623294338e24ce5b";

        initdata.data = initdata.data.map((obj) => ({
            ...obj,
            owner: defaultOwner,
            geometry: obj.geometry || { type: "Point", coordinates: [77.2090, 28.6139] } // Default coordinates (e.g. New Delhi)
        }));

        await Listing.insertMany(initdata.data);
        console.log("Sample data initialized successfully!");
    } catch (err) {
        console.error("Initialization error:", err);
    } finally {
        mongoose.connection.close();
    }
};

initdb();

