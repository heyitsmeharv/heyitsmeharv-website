import ReactGA from 'react-ga';
import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

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

const AWSKenisis = () => {

  // analytics
  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      ReactGA.pageview('/blog/aws-kinesis');
    }
  }, []);

  const columns = ['Feature', 'Provisioned Mode', 'On-Demand Mode'];
  const data = [
    { 'Feature': 'Capacity Management', 'Provisioned Mode': 'Manual (based on shard count)', 'On-Demand Mode': 'Automatic (scales in response to traffic)' },
    { 'Feature': 'Throughput', 'Provisioned Mode': 'Depends on the number of shards', 'On-Demand Mode': 'Up to 200 MB/s write and 400 MB/s read automatically' },
    { 'Feature': 'Scalability', 'Provisioned Mode': 'Requires manual intervention', 'On-Demand Mode': 'Fully automatic, no manual intervention required' },
    { 'Feature': 'Cost', 'Provisioned Mode': 'Based on the number of shards', 'On-Demand Mode': 'Based on the data throughput (pay for what you use)' },
    { 'Feature': 'Best For', 'Provisioned Mode': 'Predictable traffic, cost control', 'On-Demand Mode': 'Unpredictable, variable traffic, ease of use' },
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
          <StyledAnchor href="#kinesis-video-streams"><StyledListItem>Kinesis Video Streams</StyledListItem></StyledAnchor>
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
          <SubTitle id="kinesis-data-analytics">Kinesis Data Analytics</SubTitle>

          <Spacer />
          <SubTitle id="kinesis-video-streams">Kinesis Video Streams</SubTitle>

        </Text>
      </Container>
    </Wrapper>
  );
}

export default AWSKenisis;
