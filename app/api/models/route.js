import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    const searchParams = request.nextUrl.searchParams
    const brand_id = searchParams.get('brand_id')
    const model_id = searchParams.get('model_id')
    const generation_id = searchParams.get('generation_id')
    const product_id = searchParams.get('product_id')

    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_TUNING_SHOP_API}&brand_id=${brand_id}&model_id=&generation_id=&product_id=`)
        const data = res.data;

        if (!res?.data?.error) {
            return NextResponse.json({
                success: true,
                data: data?.data?.select_options?.model_id
            }, { status: 200 })
        } else {
            return NextResponse.json({
                success: false,
                message: "Failed to load data!"
            }, { status: 400 })
        }

    } catch (error) {
        return NextResponse.json({ error: 'Video not found' }, { status: 404 });
    }
}