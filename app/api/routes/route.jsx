import { NextResponse } from "next/server";
import connect from "../../../db";
import Users from '../../../models/Users'

export const GET = async (request) => {
    try {
        await connect();
        const users = await Users.find();
        return new NextResponse(JSON.stringify(users), { status: 200 })
    }
    catch (error) {
        return new NextResponse("Error in fetching users " + error, { status: 500 })
    }
}
