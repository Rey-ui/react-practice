const FeedBack = ({ feedbacks, totalFeedback, totalPercent }) => {
  return (
    <div>
      <div>Good: {feedbacks.good}</div>
      <div>Neutral:{feedbacks.neutral}</div>
      <div>Bad: {feedbacks.bad}</div>
      <div>Total: {totalFeedback}</div>
      <div>Positive: {totalPercent}</div>
    </div>
  );
};

export default FeedBack;
