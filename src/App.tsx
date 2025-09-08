import React, { useEffect, useState } from 'react';
import { Timeline } from './components';
import { TimelineSegment } from './types';
import './App.scss';

const App: React.FC = () => {
  const [timelineData, setTimelineData] = useState<TimelineSegment[]>([]);

  useEffect(() => {
    fetch('/db.json')
      .then((r) => r.json())
      .then((data) => setTimelineData(data.timelineData))
      .catch(() => setTimelineData([]));
  }, []);

  return (
    <div className="app">
      <Timeline data={timelineData} />
      {/* <Timeline data={timelineData} /> */}
    </div>
  );
};

export default App;