'use client';
import { useEffect, useState } from 'react';
import { ActivityCalendar } from 'react-activity-calendar';

interface ActivityData {
  date: string;
  count: number;
  level: number;
}

export default function StravaPage() {
  const [data, setData] = useState<ActivityData[]>([]);
  const totalMiles = data.reduce((sum, day) => sum + day.count, 0);

  useEffect(() => {
    fetch('/api/strava')
      .then((res) => res.json())
      .then((data) => {
        console.log('Strava API response:', data);
        setData(data);
      })
      .catch((error) => console.error('Error fetching Strava data:', error));
  }, []);

  return (
    <div className="p-10 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Run Log</h1>
      {data.length > 0 ? (
        <div className="flex flex-col items-center gap-4">
          <ActivityCalendar
            data={data}
            theme={{
              light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
              dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
            labels={{
              totalCount: `${Math.round(totalMiles)} miles ran in the last year`,
            }}
          />
        </div>
      ) : (
        <p>Loading runs...</p>
      )}
    </div>
  );
}