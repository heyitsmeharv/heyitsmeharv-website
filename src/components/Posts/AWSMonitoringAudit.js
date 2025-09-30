import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

// helpers
import { Analytics } from "../../helpers/analytics";

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
import CloudWatchContributorInsights from "../../resources/images/blog/AWSMonitoringAudit/aws_monitoring_audit_cw_contributor_insights.jpeg"
import EventBridgeSchedule from "../../resources/images/blog/AWSMonitoringAudit/aws_monitoring_audit_event_bridge_schedule.jpeg"
import EventBridgeRules from "../../resources/images/blog/AWSMonitoringAudit/aws_monitoring_audit_event_bridge_rules.jpeg"
import CloudTrail from "../../resources/images/blog/AWSMonitoringAudit/aws_monitoring_audit_cloud_trail.jpeg"
import CloudTrailEventBridge from "../../resources/images/blog/AWSMonitoringAudit/aws_monitoring_audit_cloud_trail_event_bridge.jpeg"
import CloudTrailEventBridge2 from "../../resources/images/blog/AWSMonitoringAudit/aws_monitoring_audit_cloud_trail_event_bridge2.jpeg"
import ConfigEventRulesRemediation from "../../resources/images/blog/AWSMonitoringAudit/aws_monitoring_audit_config_event_rules_remediation.jpeg"
import ConfigEventBridge from "../../resources/images/blog/AWSMonitoringAudit/aws_monitoring_audit_config_event_bridge.jpeg"
import ConfigEventBridge2 from "../../resources/images/blog/AWSMonitoringAudit/aws_monitoring_audit_config_event_bridge2.jpeg"

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

  useEffect(() => {
    Analytics.event('blog_opened', { slug: 'aws-monitoring-auditing' });
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
          <StyledAnchor href="#aws-cloudtrail"><StyledListItem>CloudTrail</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-config"><StyledListItem>Config</StyledListItem></StyledAnchor>
          <StyledAnchor href="#overview"><StyledListItem>Overview</StyledListItem></StyledAnchor>
          <Spacer />
          <SubTitle id="aws-cloudwatch">CloudWatch</SubTitle>
          Amazon CloudWatch is a monitoring and observability service provided by AWS that collects and tracks metrics, monitors logs, and generates alerts for your applications and infrastructure.
          It enables you to gain actionable insights into system performance, optimize resource utilization, and troubleshoot operational issues in real time.
          CloudWatch supports a variety of AWS resources and custom applications, making it a centralised solution for monitoring and managing your cloud infrastructure.
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
          <SubTitleSmall>CloudWatch Insights</SubTitleSmall>
          Amazon CloudWatch Logs Insights is a powerful, fully managed tool designed to help you analyze, query, and visualize log data from AWS services and applications. It simplifies the process of searching and extracting meaningful insights from massive volumes of log data,
          enabling quick troubleshooting and operational insights.
          <HeadingSmall>Container Insights</HeadingSmall>
          CloudWatch container insights is a way to collect, aggregate, and summarize metrics and logs from your containers. It's available for containers that you run on Amazon ECS, on Amazon EKS, on Kubernetes platform directly on EC2 or on Fargate, both for ECS and EKS.
          So the idea is that we can very easily extract the metrics and the logs out of our containers into a very detailed and granular dashboard from within CloudWatch. If you are using CloudWatch container insights on Kubernetes, would it be for Amazon EKS
          or Kubernetes running on EC2 - The way CloudWatch insights work is that it's using a containerized version of the CloudWatch agents to discover containers.
          <HeadingSmall>Lambda Insights</HeadingSmall>
          Lambda Insights is about monitoring and troubleshooting solution for your serverless applications running on AWS Lambda. So again, it's going to collect, aggregate, and summarize system level metric, including CPU time, memory, disk, and network, and also information around your cold starts,
          and your Lambda worker shutdowns. It's provided for your Lambda function as a Lambda layer. The idea is that it runs next to your Lambda and it's going to create, again, a specified dashboard called Lambda insights to monitor the performance of your Lambda functions.
          <HeadingSmall>Contributor Insights</HeadingSmall>
          Contributor Insights is used to analyse logs and create time series that display contributed data. This could be used to identify heavy traffic from users to understand who is impacting system performance via VPC logs or DNS logs. Looking at the VPC flow log, which is the log
          of all the network request made within your VPC, which is then passed to CloudWatch logs and then analyzed by the CloudWatch contributor insights. From that, we can find the top 10 IP addresses that are generating traffic and understand if they are good actors or bad actors.
          <Spacer />
          <StyledImage src={CloudWatchContributorInsights} />
          <Spacer />
          <HeadingSmall>Application Insights</HeadingSmall>
          CloudWatch application insights provides automated dashboards that will show potential problems with monitored applications to help isolate ongoing issues. So your applications can be running on Amazon EC2 linked to other AWS resources such as EBS, RDS, ELB, ASG, Lambda, SQS, DynamoDB,
          S3 buckets, maybe your ECS cluster, your EKS cluster, SNS topics, or your API gateway. In case there is an issue with your application, CloudWatch applications insights is going to put together an automated dashboard that shows you the potential issue with some services using SageMaker machine learning service internally.
          All the alerts and findings will be sent to Amazon EventBridge and SSM OpsCenter so that you can be alerted in case there is an issue detected with your application.
          <HeadingSmall>CloudWatch Insights and Operational Visibility</HeadingSmall>
          <StyledListItem><BoldText>CloudWatch Container Insights</BoldText></StyledListItem>
          <StyledListItemIndent>Metrics and logs from ECS, EKS, Kubernetes on EC2, and Fargate, needs agent for Kubernetes.</StyledListItemIndent>
          <StyledListItem><BoldText>CloudWatch Lambda Insights</BoldText></StyledListItem>
          <StyledListItemIndent>Detailed metrics to troubleshoot serverless applications.</StyledListItemIndent>
          <StyledListItem><BoldText>CloudWatch Contributors Insights</BoldText></StyledListItem>
          <StyledListItemIndent>Find the 'Top-N' contributors through CloudWatch Logs.</StyledListItemIndent>
          <StyledListItem><BoldText>CloudWatch Application Insights</BoldText></StyledListItem>
          <StyledListItemIndent>Create automated dashboards to troubleshoot your application and related AWS services.</StyledListItemIndent>
          <Spacer />
          <SubTitle id="aws-eventbridge">EventBridge</SubTitle>
          Amazon EventBridge is a serverless event bus service that simplifies the process of connecting applications using events. It helps in building event-driven architectures by allowing you to ingest, filter, transform, and route events
          between services, both within AWS and from external SaaS applications. There are lots of things you can do with Amazon EventBridge such as scheduling cron jobs every hour which triggers a lambda function. You can also do things based of
          events like notifying yourself whenever there's been login activity for a root user.
          <StyledImage src={EventBridgeSchedule} />
          <SubTitleSmall>EventBridge Rules</SubTitleSmall>
          Here is an overview of how EventBridge can integrate with other AWS services with both sources and destinations.
          <StyledImage src={EventBridgeRules} />
          <SubTitleSmall>EventBridge Schema Registry</SubTitleSmall>
          EventBridge offers a schema registry to discover, track, and generate code bindings for event schemas. EventBridge operates with event buses that receive and process events. You can have multiple event buses:
          <StyledListItem>Default Event Bus - Automatically available for all AWS accounts.</StyledListItem>
          <StyledListItem>Custom Event Bus - Created for your own applications.</StyledListItem>
          <StyledListItem>Partner Event Bus - Used for SaaS integrations.</StyledListItem>
          <Spacer />
          EventBridge can analyse the events in the bus and infer from the schema, the schema registry allows you to generate code for your application, that will know in advance how data is structured in the event bus.
          <Spacer />
          <SubTitle id="aws-cloudtrail">CloudTrail</SubTitle>
          AWS CloudTrail is a service that enables governance, compliance, and operational and risk auditing of your AWS account. It records all API calls and activities within your AWS environment and delivers log files to an S3 bucket.
          <Spacer />
          <StyledImage src={CloudTrail} />
          <Spacer />
          <SubTitleSmall>CloudTrail Events</SubTitleSmall>
          <HeadingSmall>Management Events</HeadingSmall>
          Logs operations that change the configuration of AWS resources (e.g., creating or deleting EC2 instances). By default, trails are configured to log management events. Can separate Read Events from Write Events.
          <Spacer />
          <HeadingSmall>Data Events</HeadingSmall>
          Tracks resource-specific operations, such as S3 object-level activities (e.g., uploads, downloads) and Lambda function invocations. By default, data events are not logged (high volumes).
          <Spacer />
          <SubTitleSmall>CloudTrail Insights</SubTitleSmall>
          Detects unusual activity, such as spikes in resource creation or sudden changes in API usage patterns.
          <SubTitleSmall>Events Retention</SubTitleSmall>
          Provides a 90-day history of management events by default in the CloudTrail console. Users can create trails for long-term logging by using S3 and Athena.
          <SubTitleSmall>CloudTrail With EventBridge</SubTitleSmall>
          <Spacer />
          <StyledImage src={CloudTrailEventBridge} />
          <Spacer />
          <Spacer />
          <StyledImage src={CloudTrailEventBridge2} />
          <Spacer />
          <SubTitle id="aws-config">Config</SubTitle>
          AWS Config is a fully managed service that enables you to assess, audit, and evaluate the configurations of your AWS resources. It helps you maintain compliance with internal policies, regulatory standards, and best practices
          by continuously monitoring and recording resource configuration changes.
          <SubTitleSmall>Config Rules</SubTitleSmall>
          Config Rules are used to evaluate the compliance of resources against custom or managed policies. Any non-compliant resources will be flagged and you will be notified. There can be over 75 AWS managed config rules or you can make custom
          rules using AWS Lambda. Please note that config rules do not prevent actions from happening only raises them as non compliant.
          <HeadingSmall>Remediation</HeadingSmall>
          You can set Remediation Retries if the resource is still non-compliant after auto-remediation. Automate remediation of non-compliant resources using SSM Automation Documents.
          <Spacer />
          <StyledImage src={ConfigEventRulesRemediation} />
          <Spacer />
          <HeadingSmall>Notifications</HeadingSmall>
          You can use EventBridge to trigger notifications when AWS resources are non-compliant.
          <Spacer />
          <StyledImage src={ConfigEventBridge} />
          <Spacer />
          It's also possible to send all events including all states and configurations not just non-compliant resources by using SNS filtering.
          <Spacer />
          <StyledImage src={ConfigEventBridge2} />
          <Spacer />
          <SubTitle id="overview">CloudWatch vs CloudTrail vs Config</SubTitle>
          <StyledListItem><BoldText>CloudWatch</BoldText></StyledListItem>
          <StyledListItemIndent>Performance monitoring (metrics, CPU, network, etc) & dashboards.</StyledListItemIndent>
          <StyledListItemIndent>Event & Alerting.</StyledListItemIndent>
          <StyledListItemIndent>Log aggregation & Analysis.</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldText>CloudTrail</BoldText></StyledListItem>
          <StyledListItemIndent>Record API calls made within your AWS account by everyone.</StyledListItemIndent>
          <StyledListItemIndent>Can define trails by specific resources.</StyledListItemIndent>
          <StyledListItemIndent>Global service.</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldText>Config</BoldText></StyledListItem>
          <StyledListItemIndent>Record configuration changes.</StyledListItemIndent>
          <StyledListItemIndent>Evaluate resources against compliance rules.</StyledListItemIndent>
          <StyledListItemIndent>Get timeline of changes and compliance.</StyledListItemIndent>
          <Spacer />
          <SubTitleSmall>Elastic Load Balancer</SubTitleSmall>
          <StyledListItem><BoldText>CloudWatch</BoldText></StyledListItem>
          <StyledListItemIndent>Monitor incoming connections metric.</StyledListItemIndent>
          <StyledListItemIndent>Visualise error codes as a percentage over time.</StyledListItemIndent>
          <StyledListItemIndent>Make a dashboard to get an idea of your load balancer performance.</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldText>Config</BoldText></StyledListItem>
          <StyledListItemIndent>Track security group rules for the load balancer.</StyledListItemIndent>
          <StyledListItemIndent>Track configuration changes for the load balancer.</StyledListItemIndent>
          <StyledListItemIndent>Ensure an SSL certificate is always assigned to the load balancer (compliance).</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldText>CloudTrail</BoldText></StyledListItem>
          <StyledListItemIndent>Track who made any changes to the load balancer with API calls.</StyledListItemIndent>
          <Spacer />
        </Text>
      </Container>
    </Wrapper>
  );
}

export default AWSMonitoringAudit;