import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Sanity sends a payload, we just need to ensure the request is valid
    const body = await request.json();
    
    const secret = request.nextUrl.searchParams.get('secret');
    const envSecret = process.env.SANITY_WEBHOOK_SECRET;

    // If an environment secret is configured, ensure it matches the URL parameter
    if (envSecret && secret !== envSecret) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    // Revalidate the entire site cache layout
    // This will force Next.js to pull the absolute newest data from Sanity on the next load
    revalidatePath('/', 'layout');

    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now(), 
      message: "Cache flushed successfully"
    });
  } catch (err: any) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
