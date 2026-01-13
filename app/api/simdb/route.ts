import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbconnect';
import simModel from '@/models/schema';



export async function POST(req: Request) {
try {
    await dbConnect();


        const body = await req.json();
        
        const { userId, phone } = body;
        


    if (!phone || !userId) {
    return NextResponse.json({ error: 'Enter the required fields' }, { status: 400 });
    }



const lead = await simModel.create({
userId,
phone,
timestamp: new Date(),
});


return NextResponse.json({ success: true, lead });
} catch (err) {
console.error('Lead save error:', err);
return NextResponse.json({ error: 'Server error' }, { status: 500 });
}
}