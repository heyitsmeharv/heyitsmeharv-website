import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

// helpers
import { logPageView } from "../../helpers/analytics";

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
import CloudWatchSubscriptions from "../../resources/images/blog/AWSMonitoringAudit/aws_monitoring_audit_cw_subscriptions.jpeg"
import CloudWatchCrossAccountSubscriptions from "../../resources/images/blog/AWSMonitoringAudit/aws_monitoring_audit_cw_cross_account_subscriptions.jpeg"
import CloudWatchCrossAccountAggregation from "../../resources/images/blog/AWSMonitoringAudit/aws_monitoring_audit_cw_cross_account_aggregation.jpeg"
import CloudWatchLogsAgentEC2 from "../../resources/images/blog/AWSMonitoringAudit/aws_monitoring_audit_cw_agent_ec2.jpeg"
import CloudWatchAlarmsTargets from "../../resources/images/blog/AWSMonitoringAudit/aws_monitoring_audit_cw_alarm_targets.jpeg"
import CloudWatchCompositeAlarms from "../../resources/images/blog/AWSMonitoringAudit/aws_monitoring_audit_cw_composite_alarms.jpeg"
import CloudWatchMetricFilterAlarm from "../../resources/images/blog/AWSMonitoringAudit/aws_monitoring_audit_cw_metric_filter_alarm.jpeg"
import EventBridgeSchedule from "../../resources/images/blog/AWSMonitoringAudit/aws_monitoring_audit_event_bridge_schedule.jpeg"


// codeblocks
import { cloudwatchlogsInsights, cloudwatchlogsAlarmStatus } from "../../helpers/codeblocks.js";

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
      logPageView();
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
          <Title>Amazon Monitoring & Audit</Title>
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
          <StyledAnchor href="#aws-eventbridge"><StyledListItem>EventBridge</StyledListItem></StyledAnchor>
          <Spacer />
          <SubTitle id="aws-cloudwatch">CloudWatch</SubTitle>
          Amazon CloudWatch is a monitoring and observability service provided by AWS that collects and tracks metrics, monitors logs, and generates alerts for your applications and infrastructure.
          It enables you to gain actionable insights into system performance, optimize resource utilization, and troubleshoot operational issues in real time.
          CloudWatch supports a variety of AWS resources and custom applications, making it a centralized solution for monitoring and managing your cloud infrastructure.
          <HeadingSmall>CloudWatch Features</HeadingSmall>
          <Table data={data} columns={columns} />
          <Spacer />
          <SubTitleSmall>CloudWatch Metrics</SubTitleSmall>
          CloudWatch Metrics are fundamental data points collected over time about the performance, usage, or health of your AWS resources and custom applications.
          Metrics provide critical insights for monitoring and optimizing infrastructure and applications.
          Each metric is uniquely identified by its namespace, metric name, and dimensions, and is stored for analysis and visualization.
          <Spacer />
          Here is an example on how you can continually stream CloudWatch metrics to a destination of your choice, with near-real-time delivery and low latency.
          <StyledImage src={CloudWatchMetric} />
          <Spacer />
          <SubTitleSmall>CloudWatch Logs</SubTitleSmall>
          CloudWatch Logs is a fully managed service that enables you to monitor, store, and access log files from AWS services, custom applications, and on-premises systems.
          <HeadingSmall>Core Components of CloudWatch Logs</HeadingSmall>
          <StyledListItem>Log Groups: A logical grouping of log streams with shared retention, access policies, and tags.</StyledListItem>
          <StyledListItem>Log Streams: A sequence of log events from a single source, such as an application or a Lambda function.</StyledListItem>
          <StyledListItem>Log Events: Individual entries in a log stream, containing a timestamp and raw data.</StyledListItem>
          <StyledListItem>Log Retention: Configurable from 1 day to indefinite retention for each log group.</StyledListItem>
          <Spacer />
          Logs are encrypted by default although you can setup KMS-based encryption with your own keys. Logs can be send to:
          <StyledListItem>S3 (exports) - Can take up to 12 hours to become available for export using the CreateExportTask API</StyledListItem>
          <StyledListItem>Kinesis Data Streams</StyledListItem>
          <StyledListItem>Kinesis Data Firehose</StyledListItem>
          <StyledListItem>AWS Lambda</StyledListItem>
          <StyledListItem>OpenSearch</StyledListItem>
          <Spacer />
          <HeadingSmall>CloudWatch Logs Insights</HeadingSmall>
          CloudWatch Logs Insights is used for querying log data. It uses a purpose-built query language that supports filtering, aggregation, and visualization. Insights is a feature which essentially
          fetches desired event fields, filter based on conditions, calculate aggregate statistics. Here is an example on how you can use insights to find errors in logs:
          <Spacer />
          <CodeBlock>
            {cloudwatchlogsInsights}
          </CodeBlock>
          <Spacer />
          Insights is a query engine not a real-time engine.
          <HeadingSmall>CloudWatch Logs Subscriptions</HeadingSmall>
          If you want real-time processing and analysis you should use CloudWatch Logs Subscriptions. Subscription filters can be used to filter which log events are delivered to destinations.
          Kinesis Data Streams, Kinesis Data Firehose or Lambda are the potential destinations.
          <StyledImage src={CloudWatchSubscriptions} />
          <HeadingSmall>CloudWatch Logs Aggregation Multi-Account & Multi-Region</HeadingSmall>
          It is possible to aggregate data from different CloudWatch Logs into different accounts and different regions into a common destination such as the Kinesis Data Stream in one specific account.
          <StyledImage src={CloudWatchCrossAccountAggregation} />
          <HeadingSmall>CloudWatch Logs Cross-Account Subscriptions</HeadingSmall>
          So, let's say you have a sender account and the recipient accounts. So you create a CloudWatch Log subscription filter, and then this gets sent into a subscription destination, which is a virtual representant
          of the Kinesis Data Stream in the recipient accounts. Then you attach a destination access policy to allow the first account to actually send data into this destination. Then you create an IAM role in the recipient account,
          which has the permission to send records into your Kinesis Data Stream, and you make sure that this role can be assumed by the first account.
          <StyledImage src={CloudWatchCrossAccountSubscriptions} />
          <SubTitleSmall>CloudWatch Agent & CloudWatch Logs Agent</SubTitleSmall>
          Amazon CloudWatch provides two agents for collecting and sending data to CloudWatch: the CloudWatch Agent and the older CloudWatch Logs Agent. These agents are used to collect logs and metrics from Amazon EC2 instances,
          on-premises servers, and other sources.
          <HeadingSmall>CloudWatch Logs For EC2</HeadingSmall>
          By default, no logs are going from your EC2 instance to CloudWatch. For that this to happen, you need to create and start an agent which is a small program on your EC2 instances that will push the log files that you want.
          The EC2 instance must have an IAM role that allows it to send the log to CloudWatch Logs. The agents can also be setup on on-premises servers.
          <StyledImage src={CloudWatchLogsAgentEC2} />
          <HeadingSmall>CloudWatch Logs Agent & Unified Agent</HeadingSmall>
          There are two different agents you can find in CloudWatch. You have the CloudWatch Logs Agent, which is the older one and the CloudWatch Unified Agent, which is the newer one.
          <StyledListItem>CloudWatch Logs Agent</StyledListItem>
          <StyledListItemIndent>Older version of the agent</StyledListItemIndent>
          <StyledListItemIndent>Can only send logs to CloudWatch Logs</StyledListItemIndent>
          <StyledListItem>CloudWatch Unified Agents</StyledListItem>
          <StyledListItemIndent>Collect additional system level metrics such as RAM, processed, etc...</StyledListItemIndent>
          <StyledListItemIndent>Centralised configuration using SSM Parameter Store</StyledListItemIndent>
          <Spacer />
          <HeadingSmall>CloudWatch Unified Agent - Metrics</HeadingSmall>
          These are the specific metrics in which you can capture on a linux server/EC2 instance:
          <StyledListItem>CPU (active, guest, idle, system, user, steal)</StyledListItem>
          <StyledListItem>Disk Metrics (free, used, total), Disk IO (writes, reads, bytes, iops)</StyledListItem>
          <StyledListItem>RAM (free, inactive, used, total, cached)</StyledListItem>
          <StyledListItem>Netstat (number of TCP and UDP connections, net packets, bytes)</StyledListItem>
          <StyledListItem>Processes (total, dead, blocked, idle, running, sleep)</StyledListItem>
          <StyledListItem>Swap Space (free, used, used %)</StyledListItem>
          <Spacer />
          <SubTitleSmall>CloudWatch Alarms</SubTitleSmall>
          CloudWatch Alarms are designed to trigger actions based on metrics, which are numerical data points collected from AWS resources and custom applications. Alarms evaluate these metrics over time and compare them to predefined
          thresholds to determine if action is needed.
          <HeadingSmall>CloudWatch Alarms Targets</HeadingSmall>
          CloudWatch Alarms have three states:
          <StyledListItem>OK - means the alarm has not been triggered.</StyledListItem>
          <StyledListItem>INSUFFICIENT_DATA - means there's not enough data for the alarm to determine a state.</StyledListItem>
          <StyledListItem>ALARM - means that your threshold has been breached and therefore a notification will be sent.</StyledListItem>
          <Spacer />
          The period is how long you want the alarm to evaluate for on the metric. For example, 10 seconds, 30 seconds, or multiple of 60 seconds.
          <Spacer />
          Now, alarms have three main targets:
          <StyledListItem>EC2 instances - stopping, terminating, rebooting, or recovering any instance.</StyledListItem>
          <StyledListItem>Auto-Scaling - scale out or scale in.</StyledListItem>
          <StyledListItem>SNS - send a notification.</StyledListItem>
          <Spacer />
          <StyledImage src={CloudWatchAlarmsTargets} />
          <Spacer />
          <HeadingSmall>CloudWatch Alarms - Composite Alarms</HeadingSmall>
          The difference between alarms and composite alarms is that CloudWatch alarms are used on a single metric whereas composite alarms are capable of monitoring the states of multiple other alarms using AND or OR conditions. Composite
          alarms are suited for more complex alarms.
          <StyledImage src={CloudWatchCompositeAlarms} />
          <Spacer />
          Alarms can be created based on CloudWatch Logs Metric Filters.
          <StyledImage src={CloudWatchMetricFilterAlarm} />
          <Spacer />
          It's worth noting that you can test alarms and notifications through the CLI by setting the state to 'ALARM'.
          <Spacer />
          <CodeBlock>
            {cloudwatchlogsAlarmStatus}
          </CodeBlock>
          <Spacer />
          <SubTitle id="aws-eventbridge">EventBridge</SubTitle>
          Amazon EventBridge is a serverless event bus service that simplifies the process of connecting applications using events. It helps in building event-driven architectures by allowing you to ingest, filter, transform, and route events 
          between services, both within AWS and from external SaaS applications. There are lots of things you can do with Amazon EventBridge such as scheduling cron jobs every hour which triggers a lambda function. You can also do things based of 
          events like notifying yourself whenever there's been login activity for a root user.
          <StyledImage src={EventBridgeSchedule} />
          <SubTitleSmall>EventBridge Rules</SubTitleSmall>

        </Text>
      </Container>
    </Wrapper>
  );
}

export default AWSMonitoringAudit;