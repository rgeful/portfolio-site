import { NextResponse } from 'next/server';

interface StravaActivity {
  start_date_local: string;
  distance: number;
}

interface CalendarData {
  date: string;
  count: number;
  level: number;
}

export async function GET() {
  try {
    const { STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET, STRAVA_REFRESH_TOKEN } = process.env;

    const tokenRes = await fetch('https://www.strava.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: STRAVA_CLIENT_ID,
        client_secret: STRAVA_CLIENT_SECRET,
        refresh_token: STRAVA_REFRESH_TOKEN,
        grant_type: 'refresh_token',
      }),
    });

    const tokenData = await tokenRes.json();

    if (!tokenRes.ok) {
      console.error('Strava token error:', tokenData);
      return NextResponse.json({ error: 'Failed to get access token', details: tokenData }, { status: 500 });
    }

    const accessToken = tokenData.access_token;

  const activitiesRes = await fetch(
    'https://www.strava.com/api/v3/athlete/activities?per_page=200',
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );

  const activities: StravaActivity[] = await activitiesRes.json();

  const calendarData = activities.reduce((acc: CalendarData[], activity: StravaActivity) => {
    const date = activity.start_date_local.split('T')[0];
    const distanceMiles = activity.distance / 1609.34;

    const existing = acc.find((item) => item.date === date);
    if (existing) {
      existing.count += distanceMiles;
      existing.level = Math.min(4, Math.ceil(existing.count / 3));
    } else {
      acc.push({
        date,
        count: distanceMiles,
        level: Math.min(4, Math.ceil(distanceMiles / 3)),
      });
    }
    return acc;
  }, []);

    return NextResponse.json(calendarData);
  } catch (error) {
    console.error('Error in Strava API route:', error);
    return NextResponse.json({ error: 'Internal server error', details: String(error) }, { status: 500 });
  }
}