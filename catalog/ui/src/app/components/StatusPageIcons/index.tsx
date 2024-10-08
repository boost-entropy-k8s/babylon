import React from 'react';
import Operational from './Operational';
import PartialOutage from './PartialOutage';
import MajorOutage from './MajorOutage';
import DegradedPerformance from './DegradedPerformance';
import UnderMaintenance from './UnderMaintenance';

const StatusPageIcons: React.FC<{ status: string } & React.HTMLAttributes<HTMLOrSVGElement>> = ({
  status,
  ...props
}) => {
  switch (status) {
    case 'Degraded performance':
      return <DegradedPerformance {...props} />;
    case 'Partial outage':
      return <PartialOutage {...props} />;
    case 'Major outage':
      return <MajorOutage {...props} />;
    case 'Under maintenance':
      return <UnderMaintenance {...props} />;
    default:
      return <Operational {...props} />;
  }
};

export default StatusPageIcons;
