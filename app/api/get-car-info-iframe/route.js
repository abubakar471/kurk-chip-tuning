import axios from 'axios';
import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function GET(request, { params }) {
    const searchParams = request.nextUrl.searchParams
    const brand_id = searchParams.get('brand_id')
    const model_id = searchParams.get('model_id')
    const generation_id = searchParams.get('generation_id')
    const product_id = searchParams.get('product_id')

    try {
        console.log("getting car info")
        const res = await axios.get(`${process.env.NEXT_PUBLIC_TUNING_SHOP_API}&brand_id=${brand_id}&model_id=${model_id}&generation_id=${generation_id}&product_id=${product_id}`)
        const data = res.data;

        if (!res?.data?.error) {
            const targetUrl = `https://tuning-shop.com/iframe/iframe.php?user=2489&car=${data?.data?.item_url}`
            const response = await fetch(targetUrl);
            let html = await response.text();
            const $ = cheerio.loadBuffer(html);

            // Convert relative URLs to absolute URLs
            $('link[rel="stylesheet"]').each((_, elem) => {
                const href = $(elem).attr('href');
                if (href && !href.startsWith('http')) {
                    $(elem).attr('href', new URL(href, targetUrl).href);
                }
            });

            $('script').each((_, elem) => {
                const src = $(elem).attr('src');
                if (src && !src.startsWith('http')) {
                    $(elem).attr('src', new URL(src, targetUrl).href);
                }
            });

            $('img').each((_, elem) => {
                const src = $(elem).attr('src');
                if (src && !src.startsWith('http')) {
                    $(elem).attr('src', new URL(src, targetUrl).href);
                }
            });

            // $('path').each((_, elem) => {
            //     const fill = $(elem).attr('fill');
            //     if (fill) {
            //         $(elem).attr('fill', "#FDFFFF");
            //     }
            // });

            $('.header-background').css({
                display: 'none !important',
            });
            $('.Filters').css({
                display: 'none !important',
            });
            $('.PoweredBy').css({
                display: 'none !important',
            });
            $('.SectionRow').css({
                background: "#222 !important"
            })
            $('main').css({
                background: "#222 !important"
            })
            $('.cta').css({
                background: "#FDFFFF !important",
                color: "#222222 !important"
            })
            $('.highcharts-color-1').attr({ fill: "#FDFFFF" })

            $('path ..highcharts-color-1').attr('class');
            // $('.VehicleInfo').css({
            //     display: 'flex',
            //     gap: "10px"
            // })
            // $('img', {
            //     background: "#fff",
            //     border: "1px solid #ccc",
            //     "border-radius": "4px",
            //     "box-sizing": "border-box",
            //     float: "left",
            //     height: "150px",
            //     padding: "16px",
            //     width: "200px !important",
            // })

            html = $.root().html();
            return new NextResponse(html, { status: 410, headers: { 'content-type': 'text/html' } })
        } else {
            return NextResponse.json({
                success: false,
                message: "Failed to load data!"
            }, { status: 400 })
        }


    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Video not found' }, { status: 404 });
    }

    // return new NextResponse(
    //     `
    //         <h1>MY G</h1>
    //         <h2>Permanently deleted or Gone</h2>
    //         <p>This page is not found and is gone from this server forever</p>
    //     `,
    //     { status: 410, headers: { 'content-type': 'text/html' } }
    // )
}