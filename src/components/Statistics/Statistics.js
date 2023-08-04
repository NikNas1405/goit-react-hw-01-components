import {
  Title,
  Wrapper,
  StatList,
  StatListItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const StatisticsCard = ({ stats, title }) => {
  return (
    <Wrapper className="statistics">
      <Title className="title">{title}</Title>

      <StatList className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatListItem key={id} className="item">
              <Label className="label">{label}</Label>
              <Percentage className="percentage">{percentage} %</Percentage>
            </StatListItem>
          );
        })}
      </StatList>
    </Wrapper>
  );
};
