import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

// helpers
import { Analytics } from "../../helpers/analytics";

// animations
import SlideInBottom from "../../animations/SlideInBottom";

// icons
import { ChevronBackCircle } from '@styled-icons/ionicons-solid/ChevronBackCircle';
import { AWSSVG, AWSKinesisSVG } from '../../resources/styles/icons';

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';
import Table from '../../components/Table/Table';

// images
import KinesisDataStreams from "../../resources/images/blog/AWSKinesis/kinesis_data_streams.jpeg"
import KinesisDataStreamsEncryption from "../../resources/images/blog/AWSKinesis/kinesis_data_streams_encryption.jpeg"
import KinesisFirehose from "../../resources/images/blog/AWSKinesis/kinesis_data_firehose.jpeg"
import KinesisDataOrdering from "../../resources/images/blog/AWSKinesis/kinesis_data_ordering.jpeg"
import SQSDataOrdering from "../../resources/images/blog/AWSSQS/sqs_data_ordering.jpeg"
import SQSDataOrderingGroupId from "../../resources/images/blog/AWSSQS/sqs_data_ordering_group_id.jpeg"


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
  margin-left: auto;
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

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
`;

const SubTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  font-style: italic;
`;

const SubTitleSmall = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const HeadingSmall = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  font-style: italic;
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

const AWSKinesis = () => {

  useEffect(() => {
    Analytics.event('blog', { slug: 'aws-kinesis' });
  }, []);

  const columns = ['Feature', 'Provisioned Mode', 'On-Demand Mode'];
  const data = [
    { 'Feature': 'Capacity Management', 'Provisioned Mode': 'Manual (based on shard count)', 'On-Demand Mode': 'Automatic (scales in response to traffic)' },
    { 'Feature': 'Throughput', 'Provisioned Mode': 'Depends on the number of shards', 'On-Demand Mode': 'Up to 200 MB/s write and 400 MB/s read automatically' },
    { 'Feature': 'Scalability', 'Provisioned Mode': 'Requires manual intervention', 'On-Demand Mode': 'Fully automatic, no manual intervention required' },
    { 'Feature': 'Cost', 'Provisioned Mode': 'Based on the number of shards', 'On-Demand Mode': 'Based on the data throughput (pay for what you use)' },
    { 'Feature': 'Best For', 'Provisioned Mode': 'Predictable traffic, cost control', 'On-Demand Mode': 'Unpredictable, variable traffic, ease of use' },
  ];

  const columns2 = ['Kinesis Data Streams', 'Kinesis Data Firehose'];
  const data2 = [
    { 'Kinesis Data Streams': 'Streaming service for ingest at scale', 'Kinesis Data Firehose': 'Load streaming data into S3 / Redshift / OpenSearch / 3rd Party/ custom HTTP' },
    { 'Kinesis Data Streams': 'Write custom code (producer / consumer)', 'Kinesis Data Firehose': 'Fully managed' },
    { 'Kinesis Data Streams': 'Real-time (~200ms)', 'Kinesis Data Firehose': 'Near real-time' },
    { 'Kinesis Data Streams': 'Manage scaling (shard splitting / merging)', 'Kinesis Data Firehose': 'Automatic scaling' },
    { 'Kinesis Data Streams': 'Data storage up to 365 days', 'Kinesis Data Firehose': 'No data storage' },
    { 'Kinesis Data Streams': 'Supports replay capacity', 'Kinesis Data Firehose': `Doesn't support replay capacity` },
  ];

  const columns3 = ['Kinesis', 'SNS', 'SQS'];
  const data3 = [
    { 'Kinesis': 'Standard: pull data 2MB per shard', 'SNS': 'Push data to many subscribers', 'SQS': 'Consumer "pull data"' },
    { 'Kinesis': 'Enhanced-fan out: push data 2MB per shard per consumer', 'SNS': 'Up to 12,500,000 subscribers', 'SQS': 'Data is deleted after being consumed' },
    { 'Kinesis': 'Possibility of replay data', 'SNS': 'Data is not persisted (lost if not delivered)', 'SQS': 'Can have many workers (consumers) as we want' },
    { 'Kinesis': 'Meant for real-time big data, analytics and ETL', 'SNS': 'Pub / Sub', 'SQS': 'No need to provision throughput' },
    { 'Kinesis': 'Ordering at the shard level', 'SNS': 'Up to 100,000 topics', 'SQS': 'Ordering guarantees only on FIFO queues' },
    { 'Kinesis': 'Data expires after X days', 'SNS': 'No need to provision throughput', 'SQS': 'Individual message delay capability' },
    { 'Kinesis': 'Provisioned mode or on-demand capacity mode', 'SNS': 'Integrates with SQS for fan-out architecture pattern', 'SQS': '' },
    { 'Kinesis': '', 'SNS': 'FIFO capability for SQS FIFO', 'SQS': '' },
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
        <Flex>
          <Title>Amazon Kinesis</Title>
          <IconWrapper>
            <Icon><AWSSVG /></Icon>
            <Icon><AWSKinesisSVG /></Icon>
          </IconWrapper>
        </Flex>
        <Spacer />
        <Text>
          In this post we'll be diving into Amazon Kinesis.
          <StyledAnchor href="#kinesis-overview"><StyledListItem>Kinesis Overview</StyledListItem></StyledAnchor>
          <StyledAnchor href="#kinesis-data-streams"><StyledListItem>Kinesis Data Streams</StyledListItem></StyledAnchor>
          <StyledAnchor href="#kinesis-data-firehose"><StyledListItem>Kinesis Data Firehose</StyledListItem></StyledAnchor>
          <StyledAnchor href="#kinesis-data-analytics"><StyledListItem>Kinesis Data Analytics</StyledListItem></StyledAnchor>
          <StyledAnchor href="#data-ordering-for-kinesis-vs-sqs-fifo"><StyledListItem>Data Ordering for Kinesis vs SQS FIFO</StyledListItem></StyledAnchor>
          <StyledAnchor href="#kinesis-vs-sqs-vs-sns"><StyledListItem>Kinesis vs SQS vs SNS</StyledListItem></StyledAnchor>
          <Spacer />
          <SubTitle id="kinesis-overview">Kinesis Overview</SubTitle>
          Amazon Kinesis is designed to handle real-time data streaming and processing. It allows you to collect, process, and analyze large streams of data in real-time, making it ideal for use cases that require
          immediate insights or actions based on incoming data. Here's an overview of the main components and features of Amazon Kinesis:
          <Spacer />
          <SubTitleSmall>Kinesis Data Streams</SubTitleSmall>
          <StyledListItem><BoldTextSmall>Purpose</BoldTextSmall>: Allows you to build real-time applications that can continuously capture and process gigabytes of data per second from hundreds of thousands of sources.</StyledListItem>
          <StyledListItem><BoldTextSmall>How It Works</BoldTextSmall>: Data is ingested into shards, which are scalable units of capacity. Each shard can ingest up to 1 MB of data per second and emit up to 2 MB per second.</StyledListItem>
          <StyledListItem><BoldTextSmall>Use Cases</BoldTextSmall>: Real-time dashboards, anomaly detection, log and event data streaming, etc.</StyledListItem>
          <Spacer />
          <Spacer />
          <SubTitleSmall>Kinesis Data Firehose</SubTitleSmall>
          <StyledListItem><BoldTextSmall>Purpose</BoldTextSmall>: A fully managed service for loading real-time streaming data into destinations like Amazon S3, Amazon Redshift, Amazon Elasticsearch Service, and third-party services.</StyledListItem>
          <StyledListItem><BoldTextSmall>How It Works</BoldTextSmall>: Data can be transformed using AWS Lambda before being sent to the destination. It’s designed to automatically scale to match your data throughput and to provide near real-time delivery.</StyledListItem>
          <StyledListItem><BoldTextSmall>Use Cases</BoldTextSmall>: Log and event data analytics, click stream data, and IoT data ingestion.</StyledListItem>
          <Spacer />
          <Spacer />
          <SubTitleSmall>Kinesis Data Analytics</SubTitleSmall>
          <StyledListItem><BoldTextSmall>Purpose</BoldTextSmall>: Enables real-time analysis of streaming data using standard SQL queries, without requiring you to write custom code.</StyledListItem>
          <StyledListItem><BoldTextSmall>How It Works</BoldTextSmall>: You can ingest data directly from Kinesis Data Streams or Firehose, run continuous SQL queries on the data, and output the results to other services or dashboards.</StyledListItem>
          <StyledListItem><BoldTextSmall>Use Cases</BoldTextSmall>: Real-time analytics, monitoring, streaming ETL (extract, transform, load) processes.</StyledListItem>
          <Spacer />
          <Spacer />
          <SubTitleSmall>Kinesis Video Streams</SubTitleSmall>
          <StyledListItem><BoldTextSmall>Purpose</BoldTextSmall>: Enables you to securely stream video from connected devices to AWS for analytics, machine learning, and processing.</StyledListItem>
          <StyledListItem><BoldTextSmall>How It Works</BoldTextSmall>: The service is designed to work with IoT devices, security cameras, drones, and other video-producing devices. It integrates with AWS AI services to enable real-time video analysis.</StyledListItem>
          <StyledListItem><BoldTextSmall>Use Cases</BoldTextSmall>: Video analytics, live video streaming, security and surveillance, IoT applications.</StyledListItem>
          <Spacer />
          <SubTitle id="kinesis-data-streams">Kinesis Data Streams</SubTitle>
          <Spacer />
          <StyledImage src={KinesisDataStreams} />
          <Spacer />
          <StyledListItem><BoldTextSmall>Shards</BoldTextSmall></StyledListItem>
          <StyledListItemIndent>A Kinesis Data Stream is composed of shards, which are the basic units of capacity. Each shard can ingest up to 1 MB of data per second and support 2 MB of output (or egress) per second.</StyledListItemIndent>
          <StyledListItemIndent>When creating a stream, you specify the number of shards, and you can adjust this number later to accommodate changes in your data throughput.</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldTextSmall>Producers</BoldTextSmall></StyledListItem>
          <StyledListItemIndent>Producers are the sources that send data to Kinesis Data Streams. These could be applications, servers, or devices generating log files, event data, or any other streaming data.</StyledListItemIndent>
          <StyledListItemIndent>Data is ingested in the form of records, which are composed of a sequence number, partition key, and data blob (the actual data).</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldTextSmall>Consumers</BoldTextSmall></StyledListItem>
          <StyledListItemIndent>Consumers are applications or services that process the data from the stream. They can be real-time analytics engines, data processing applications, or other services that require access to the streaming data.</StyledListItemIndent>
          <StyledListItemIndent>You can use different types of consumers, including:</StyledListItemIndent>
          <StyledListItemIndentExtra><BoldTextSmall>Shared Consumers</BoldTextSmall>: Multiple consumers can read from the same stream in parallel, each getting their own copy of the data.</StyledListItemIndentExtra>
          <StyledListItemIndentExtra><BoldTextSmall>Enhanced Fan-Out Consumers</BoldTextSmall>: These allow each consumer to receive its own dedicated throughput, reducing the potential for data processing lag.</StyledListItemIndentExtra>
          <Spacer />
          <StyledListItem><BoldTextSmall>Data Processing</BoldTextSmall></StyledListItem>
          <StyledListItemIndent>Kinesis Data Streams integrates seamlessly with AWS Lambda, allowing you to create serverless applications that automatically respond to new data.</StyledListItemIndent>
          <StyledListItemIndent>Alternatively, you can process data with EC2 instances, EMR clusters, or other processing frameworks.</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldTextSmall>Capacity Modes</BoldTextSmall></StyledListItem>
          <StyledListItemIndent><BoldTextSmall>Provisioned Mode</BoldTextSmall>: In Provisioned Mode, you manually specify the number of shards that your stream uses. The total throughput of the stream is determined by the number of shards, with each shard providing a fixed amount of capacity.</StyledListItemIndent>
          <Spacer />
          <StyledListItemIndent><BoldTextSmall>On-Demand Mode</BoldTextSmall>: On-Demand Mode automatically scales the capacity of your stream in response to incoming data without the need for manual shard management. It simplifies operations by eliminating the need to monitor and adjust shard counts.</StyledListItemIndent>
          <Spacer />
          <SubTitleSmall>Comparison Between Provisioned and On-Demand Modes</SubTitleSmall>
          <Spacer />
          <Table columns={columns} data={data} />
          <Spacer />
          <SubTitleSmall>Kinesis Data Streams Security</SubTitleSmall>
          <Spacer />
          <StyledImage src={KinesisDataStreamsEncryption} />
          <Spacer />
          <SubTitle id="kinesis-data-firehose">Kinesis Data Firehose</SubTitle>
          <Spacer />
          <StyledImage src={KinesisFirehose} />
          Amazon Kinesis Data Firehose is a fully managed service that makes it easy to reliably load and transform streaming data into data lakes, data stores, and analytics services. It is designed to handle real-time data streams,
          delivering them to destinations such as Amazon S3, Amazon Redshift, Amazon Elasticsearch Service (now Amazon OpenSearch Service), and third-party services like Splunk. Here's an overview of Amazon Kinesis Data Firehose:
          <Spacer />
          <StyledListItem><BoldTextSmall>Real-Time Data Ingestion</BoldTextSmall></StyledListItem>
          <StyledListItemIndent>Kinesis Data Firehose enables you to continuously capture, transform, and load streaming data. It supports large-scale data ingestion and delivery in real-time, typically within seconds.</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldTextSmall>Fully Managed Service</BoldTextSmall></StyledListItem>
          <StyledListItemIndent>Firehose automatically scales to match the throughput of your data streams. There is no need to manage the underlying infrastructure, as the service handles all aspects of scaling, provisioning, and maintenance.</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldTextSmall>Data Transformation</BoldTextSmall></StyledListItem>
          <StyledListItemIndent>You can configure Firehose to process and transform the data before delivery. This can be done using AWS Lambda functions to perform operations such as format conversion, data enrichment, or compression.</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldTextSmall>Data Buffering</BoldTextSmall></StyledListItem>
          <StyledListItemIndent>Firehose buffers data before delivering it to the destination. You can configure the size of the buffer (in MB) and the time interval for data delivery (in seconds). This helps optimize the delivery process by balancing throughput and latency.</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldTextSmall>Support for Multiple Destinations</BoldTextSmall></StyledListItem>
          <StyledListItemIndent>Firehose can deliver data to several AWS services and third-party platforms such as S3, Redshift, OpenSearch and Splunk.</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldTextSmall>Automatic Data Compression and Encryption</BoldTextSmall></StyledListItem>
          <StyledListItemIndent>Firehose supports compression of data before delivery, which reduces storage costs and improves transfer efficiency. It also provides options for encrypting data at rest using AWS Key Management Service (KMS).</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldTextSmall>Error Handling and Retry Mechanism</BoldTextSmall></StyledListItem>
          <StyledListItemIndent>Firehose has built-in mechanisms for handling data delivery failures. If the delivery to the destination fails, it automatically retries. Failed records can be sent to an Amazon S3 bucket for later analysis.</StyledListItemIndent>
          <Spacer />
          <SubTitleSmall>Kinesis Data Streams vs Firehose</SubTitleSmall>
          <Spacer />
          <Table columns={columns2} data={data2} />
          <Spacer />
          {/* <SubTitle id="kinesis-data-analytics">Kinesis Data Analytics</SubTitle> */}
          {/* <Spacer /> */}
          <SubTitle id="data-ordering-for-kinesis-vs-sqs-fifo">Data Ordering for Kinesis vs SQS FIFO</SubTitle>
          <Spacer />
          <SubTitleSmall>Ordering Data into Kinesis</SubTitleSmall>
          Imagine you have 100 trucks on the road sending their GPS position on a regular basis. By using a 'Partition Key' (truck_id) you can consume the data in order for each truck so that tracking their movement is accurate. The same key
          will always go to the same shard.
          <Spacer />
          <StyledImage src={KinesisDataOrdering} />
          <Spacer />
          <SubTitleSmall>Ordering Data into Kinesis</SubTitleSmall>
          For SQS standard, there is no ordering. For SQS FIFO, if you don't use a 'Group ID', messages are consumed in the order they are sent, with only one consumer.
          <Spacer />
          <StyledImage src={SQSDataOrdering} />
          <Spacer />
          You can use 'Group ID' (similar to Partition Key in Kinesis) to scale the number of consumers but messages will be grouped when they are related to each other.
          <Spacer />
          <StyledImage src={SQSDataOrderingGroupId} />
          <Spacer />
          <SubTitleSmall>Kinesis vs SQS ordering</SubTitleSmall>
          Lets assume there are 100 trucks, 5 kinesis shards and 1 SQS FIFO
          <Spacer />
          <StyledListItem><BoldTextSmall>Kinesis Data Streams</BoldTextSmall></StyledListItem>
          <StyledListItemIndent>On average you'll have 20 trucks per shard</StyledListItemIndent>
          <StyledListItemIndent>Trucks will have their data ordered within each shard</StyledListItemIndent>
          <StyledListItemIndent>The maximum amount of consumers in parallel we can have is 5</StyledListItemIndent>
          <StyledListItemIndent>Can receive up to 5MB/s of data</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldTextSmall>SQS FIFO</BoldTextSmall></StyledListItem>
          <StyledListItemIndent>Only one SQS FIFO queue</StyledListItemIndent>
          <StyledListItemIndent>You will have 100 Group IDs</StyledListItemIndent>
          <StyledListItemIndent>You can have up to 100 consumers (due to 100 group ids)</StyledListItemIndent>
          <StyledListItemIndent>You can have up to 300 messages per second (or 3000 if using batching)</StyledListItemIndent>
          <Spacer />
          <SubTitle id="kinesis-vs-sqs-vs-sns">Kinesis vs SQS vs SNS</SubTitle>
          <Spacer />
          <Table columns={columns3} data={data3} />
          <Spacer />
        </Text>
      </Container>
    </Wrapper>
  );
}

export default AWSKinesis;
