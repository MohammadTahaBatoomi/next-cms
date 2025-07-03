import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineOppositeContentClasses,
} from "@mui/lab";
import { Link, Typography } from "@mui/material";

const transactions = [
  {
    time: "09:30 am",
    color: "primary",
    content: (
      <>
        Payment received <br /> John Doe $385.90
      </>
    ),
  },
  {
    time: "10:00 am",
    color: "secondary",
    content: (
      <>
        <Typography fontWeight="600">New sale recorded</Typography>{" "}
        <Link href="/" underline="none">
          #ML-3467
        </Link>
      </>
    ),
  },
  {
    time: "12:00 am",
    color: "success",
    content: (
      <>
        Payment was made
        <br />
        $64.95 to Michael
      </>
    ),
  },
  {
    time: "09:30 am",
    color: "warning",
    content: (
      <>
        <Typography fontWeight="600">New sale recorded</Typography>{" "}
        <Link href="/" underline="none">
          #ML-3467
        </Link>
      </>
    ),
  },
  {
    time: "09:30 am",
    color: "error",
    content: <Typography fontWeight="600">New arrival recorded</Typography>,
  },
  {
    time: "12:00 am",
    color: "success",
    content: <>Payment Received</>,
    hasConnector: false,
  },
];

const RecentTransactions = () => {
  return (
    <div className="border border-[#eceef0] py-6 px-8 rounded-lg mx-4.5 xl:mx-0">
      <h1 className="mb-4 text-lg font-medium">Recent Transactions</h1>

      <Timeline
        className="theme-timeline"
        sx={{
          p: 0,
          mb: "-40px",
          "& .MuiTimelineConnector-root": {
            width: "1px",
            backgroundColor: "#efefef",
          },
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.5,
            paddingLeft: 0,
          },
        }}
      >
        {transactions.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>{item.time}</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color={item.color as any} variant="outlined" />
              {item.hasConnector !== false && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>{item.content}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default RecentTransactions;
