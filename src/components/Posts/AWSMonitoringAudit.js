import ReactGA from 'react-ga';
import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

// animations
import SlideInBottom from "../../animations/SlideInBottom";

// icons
import { ChevronBackCircle } from '@styled-icons/ionicons-solid/ChevronBackCircle';
import {
  AWSSVG,
  AWSCloudWatchSVG,
  AWSCloudTrailSVG,
  AWSConfigSVG
} from '../../resources/styles/icons';

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';
import Table from '../Table/Table';

// images
import CloudWatchMetric from "../../resources/images/blog/AWSMonitoringAudit/aws_monitoring_audit_cw_metrics.jpeg"

const Wrapper = styled.div`
  padding: 1rem 25%;
  line-height: 6.5rem;
  
  @media only screen and (max-width: 1000px) {
    line-height: 5rem;
    padding: 0;
  }

  @media only screen and (min-width: 1001px) and (max-width: 1800px) {
    line-height: 6.5rem;
    padding: 1rem 20%;
  }
`;

const Container = styled.div`
  padding: 4rem;
  background: ${({ theme }) => theme.background};
  animation: ${SlideInBottom} 0.5s forwards;
`;

const OverflowContainer = styled.div`
  overflow: auto;
`;

const Flex = styled.div`
  display: flex;
  align-items: baseline;
`;

const FlexCenter = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const FlexTop = styled.div`
  display: flex;
  align-items: start;

  @media only screen and (max-width: 2300px) {
    flex-direction: column;
  }
`;

const IconWrapper = styled.div`
  display: flex;
`;

const CodeBlock = styled.pre`
  font-family: 'Calibri';
  font-size: 2rem;
  background: #292929;
  color: ${({ theme }) => theme.buttonText};
  word-wrap: break-word;
  padding: 1rem 2rem 1rem;
  border-radius: 2rem;
  overflow-x: auto;
  line-height: 3.5rem;
`;

const CodeBlockIndent = styled.pre`
  font-family: 'Calibri';
  font-size: 2rem;
  background: #292929;
  color: ${({ theme }) => theme.buttonText};
  word-wrap: break-word;
  padding: 1rem 2rem 1rem;
  border-radius: 2rem;
  overflow-x: auto;
  line-height: 3.5rem;
  margin-left: 10%;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
`;

const SubTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 2% auto;
`;

const SubTitleSmall = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 2% auto;
`;

const HeadingSmall = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  font-style: italic;
  margin: 2% auto;
`;

const Text = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
`;

const BoldText = styled.b`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  font-weight: bold;
`;

const BoldTextSmall = styled.b`
  color: ${({ theme }) => theme.text};
  font-size: 1.8rem;
  font-weight: bold;
`;

const StyledCodeSpan = styled.code`
  background-color: #f1f1f1;
  color: crimson;
  padding: 0 5px;
  margin: 0 5px;
`;

const UnStyledListItem = styled.li`
  list-style-type: none;
  color: ${({ theme }) => theme.text};
  margin-left: 5%;
`;

const StyledListItem = styled.li`
  color: ${({ theme }) => theme.text};
  margin-left: 5%;
`;

const StyledListItemIndent = styled.li`
  color: ${({ theme }) => theme.text};
  margin-left: 10%;
`;

const StyledListItemIndentExtra = styled.li`
  color: ${({ theme }) => theme.text};
  margin-left: 15%;
`;

const StyledAnchor = styled.a`
  color: ${({ theme }) => theme.text};
`;

const StyledAnchorText = styled.span`
  color: ${({ theme }) => theme.text};
  font-style: italic;
  font-weight: bold;
`;

const StyledBackIcon = styled(ChevronBackCircle)`
  color: ${({ theme }) => theme.secondary};
  width: 4rem;
`;

const StyledImage = styled.img`
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height ? props.height : '100%'};
  margin-right: ${props => props.mr ? props.mr : '0px'};
  margin-left: ${props => props.ml ? props.ml : '0px'};
  margin-top: ${props => props.mt ? props.mt : '0px'};
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  margin-left: auto;
  margin-right: 25px;

  @media only screen and (max-width: 1000px) {
    width: 36px;
    height: 36px;
  }
`;

const Spacer = styled.br`
  display: block;
  margin: 10px 0;
`;

const AWSMonitoringAudit = () => {

  // analytics
  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      ReactGA.pageview('/blog/aws-monitoring-audit');
    }
  }, []);

  const columns = ['Feature', 'Description'];
  const data = [
    { Feature: 'Metrics', Description: 'Tracks CPU, memory, network utilization, and custom metrics from your applications.' },
    { Feature: 'Logs', Description: 'Centralizes log collection and analysis with search and filtering capabilities.' },
    { Feature: 'Alarms', Description: 'Notifies users or triggers actions based on metric thresholds.' },
    { Feature: 'Dashboards', Description: 'Custom visualizations for real-time monitoring.' },
    { Feature: 'Custom Anomaly Detection', Description: 'Automatically identifies metric patterns and deviations.' },
    { Feature: 'Synthetic Monitoring', Description: 'Tests application endpoints proactively with canary scripts.' }
  ];

  return (
    <Wrapper>
      <StyledNavButton>
        <StyledNavLink
          exact to={`/blog`}>
          <StyledBackIcon />
        </StyledNavLink>
      </StyledNavButton>
      <Container>
        <FlexTop>
          <Title>Amazon Machine Learning</Title>
          <IconWrapper>
            <Icon><AWSSVG /></Icon>
            <Icon><AWSCloudWatchSVG /></Icon>
            <Icon><AWSCloudTrailSVG /></Icon>
            <Icon><AWSConfigSVG /></Icon>
          </IconWrapper>
        </FlexTop>
        <Spacer />
        <Text>
          In this post we'll be diving into Amazon's monitoring and auditing solutions.
          <StyledAnchor href="#aws-cloudwatch"><StyledListItem>CloudWatch</StyledListItem></StyledAnchor>
          <Spacer />
          <SubTitle id="aws-cloudwatch">CloudWatch</SubTitle>
          Amazon CloudWatch is a monitoring and observability service provided by AWS that collects and tracks metrics, monitors logs, and generates alerts for your applications and infrastructure.
          It enables you to gain actionable insights into system performance, optimize resource utilization, and troubleshoot operational issues in real time.
          CloudWatch supports a variety of AWS resources and custom applications, making it a centralized solution for monitoring and managing your cloud infrastructure.
          <HeadingSmall>CloudWatch Features</HeadingSmall>
          <Table data={data} columns={columns} />
          <Spacer />
          <SubTitleSmall>CloudWatch Metrics</SubTitleSmall>
          Amazon CloudWatch Metrics are fundamental data points collected over time about the performance, usage, or health of your AWS resources and custom applications. 
          Metrics provide critical insights for monitoring and optimizing infrastructure and applications.
          Each metric is uniquely identified by its namespace, metric name, and dimensions, and is stored for analysis and visualization.
          <Spacer />
          Here is an example on how you can continually stream CloudWatch metrics to a destination of your choice, with near-real-time delivery and low latency.
          <StyledImage src={CloudWatchMetric} />
          <Spacer />
          <SubTitleSmall>CloudWatch Logs</SubTitleSmall>

        </Text>
      </Container>
    </Wrapper>
  );
}

export default AWSMonitoringAudit;