import ReactGA from 'react-ga';
import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

// animations
import SlideInBottom from "../../animations/SlideInBottom";

// icons
import { ChevronBackCircle } from '@styled-icons/ionicons-solid/ChevronBackCircle';
import {
  AWSSVG,
  AWSAthenaSVG,
  AWSRedshiftSVG,
  AWSOpenSearchSVG,
  AWSEMRSVG,
  AWSQuickSightSVG,
  AWSGlueSVG,
  AWSLakeFormationSVG
} from '../../resources/styles/icons';

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';
import Table from '../../components/Table/Table';

// images
import FederatedQueries from "../../resources/images/blog/AWSDataAnalytics/data_analytics_federated_queries.jpeg"
import RedshiftCluster from "../../resources/images/blog/AWSDataAnalytics/data_analytics_redshift_cluster.jpeg"
import RedshiftSnapshot from "../../resources/images/blog/AWSDataAnalytics/data_analytics_redshift_snapshot.jpeg"
import RedshiftSpectrum from "../../resources/images/blog/AWSDataAnalytics/data_analytics_redshift_spectrum.jpeg"
import OpenSearchDynamoDB from "../../resources/images/blog/AWSDataAnalytics/data_analytics_opensearch_dynamodb.jpeg"
import OpenSearchCloudWatch from "../../resources/images/blog/AWSDataAnalytics/data_analytics_opensearch_cloudwatch.jpeg"
import OpenSearchKinesis from "../../resources/images/blog/AWSDataAnalytics/data_analytics_opensearch_kinesis.jpeg"
import QuickSightDashboard from "../../resources/images/blog/AWSDataAnalytics/aws_data_analytics_quicksight_dashboard.png"
import QuickSightDataSources from "../../resources/images/blog/AWSDataAnalytics/aws_data_analytics_quicksight_data_sources.jpeg"
import Glue from "../../resources/images/blog/AWSDataAnalytics/data_analytics_glue.jpeg"


// codeblocks
import { partitionsInAthena, columnarFormat } from "../../helpers/codeblocks";


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

const AWSDataAnalytics = () => {

  // analytics
  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      ReactGA.pageview('/blog/aws-data-analytics');
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
        <FlexTop>
          <Title>Amazon Data and Analytics</Title>
          <IconWrapper>
            <Icon><AWSSVG /></Icon>
            <Icon><AWSAthenaSVG /></Icon>
            <Icon><AWSRedshiftSVG /></Icon>
            <Icon><AWSOpenSearchSVG /></Icon>
            <Icon><AWSEMRSVG /></Icon>
            <Icon><AWSQuickSightSVG /></Icon>
            <Icon><AWSGlueSVG /></Icon>
            <Icon><AWSLakeFormationSVG /></Icon>
          </IconWrapper>
        </FlexTop>
        <Spacer />
        <Text>
          In this post we'll be diving into Amazon's services for Data Analytics which includes:
          <StyledAnchor href="#aws-athena"><StyledListItem>Athena</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-redshfit"><StyledListItem>Redshift</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-opensearch"><StyledListItem>OpenSearch</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-emr"><StyledListItem>EMR (Elastic MapReduce)</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-quicksight"><StyledListItem>Quicksight</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-glue"><StyledListItem>Glue</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-lake-formation"><StyledListItem>Lake Formation</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-kinesis-data-analytics"><StyledListItem>Kinesis Data Analytics</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-msk"><StyledListItem>MSK - Managed Streaming Service for Apache Kafka</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-big-data-ingestion-pipeline"><StyledListItem>Big Data Ingestion Pipeline</StyledListItem></StyledAnchor>
          <Spacer />
          <SubTitle id="aws-athena">Athena</SubTitle>
          AWS Athena is a serverless interactive query service provided by Amazon Web Services that allows you to analyze data directly in Amazon S3 using standard SQL.
          It is designed for simplicity and cost-efficiency, making it a popular choice for data analytics. Athena supports formats including <BoldText>CSV, JSON, ORC, Avro</BoldText> and <BoldText>Parquet</BoldText>.
          Athena is commonly used with AWS Quicksight for reporting and dashboards.
          <Spacer />
          <SubTitleSmall>Partitioning in AWS Athena</SubTitleSmall>
          Partitioning is a method of dividing a dataset into smaller, more manageable pieces based on one or more columns. Each partition is stored as a separate folder in Amazon S3.
          When queries are executed, Athena scans only the relevant partitions instead of the entire dataset, significantly improving performance and reducing costs.
          <Spacer />
          <SubTitleSmall>How Partitioning Works</SubTitleSmall>
          <StyledListItem>Folder-Based Structure:</StyledListItem>
          <StyledListItemIndent>Data is typically organized in S3 folders based on the partition key(s).</StyledListItemIndent>
          <StyledListItemIndent>Example: If your data is partitioned by year and month, the folder structure might look like this:</StyledListItemIndent>
          <CodeBlockIndent>
            s3://my-bucket/sales/year=2024/month=01/
            <Spacer />
            s3://my-bucket/sales/year=2024/month=02/
          </CodeBlockIndent>
          <Spacer />
          <StyledListItem>Defining Partitions in Athena:</StyledListItem>
          <StyledListItemIndent>Use the PARTITIONED BY clause when creating a table to define which columns should be used as partitions.</StyledListItemIndent>
          <StyledListItemIndent>Example:</StyledListItemIndent>
          <CodeBlockIndent>
            {partitionsInAthena}
          </CodeBlockIndent>
          <Spacer />
          <StyledListItem>Adding Partitions:</StyledListItem>
          <StyledListItemIndent>After data is added to S3, partitions must be registered with the table.</StyledListItemIndent>
          <StyledListItemIndent>Use ALTER TABLE to manually add partitions:</StyledListItemIndent>
          <CodeBlockIndent>
            ALTER TABLE sales ADD PARTITION (year='2023', month='01') LOCATION 's3://my-bucket/sales/year=2023/month=01/';
          </CodeBlockIndent>
          <Spacer />
          <SubTitleSmall>Benefits of Partitioning</SubTitleSmall>
          Improved Query Performance: Filters like WHERE year = '2023' AND month = '01' ensure Athena scans only the relevant folders.
          Reduced Query Costs: Since costs are based on the volume of data scanned, reducing unnecessary scans saves money.
          <Spacer />
          <SubTitleSmall>Optimization in AWS Athena</SubTitleSmall>
          Optimization involves structuring your data and queries to make the best use of Athena’s capabilities. Key optimization strategies include:
          <StyledListItem>Use Columnar File Formats</StyledListItem>
          <StyledListItemIndent>File formats like Parquet and ORC store data in a columnar layout, meaning only the columns required by the query are read.
            They also support compression and better data skipping, reducing the amount of data scanned.</StyledListItemIndent>
          <StyledListItemIndent>Example:</StyledListItemIndent>
          <CodeBlockIndent>
            {columnarFormat}
          </CodeBlockIndent>
          <Spacer />
          <StyledListItem>Use Glue Data Catalog for Schema Management</StyledListItem>
          <StyledListItemIndent>Leverage AWS Glue to manage schemas and enable automatic schema discovery.</StyledListItemIndent>
          <StyledListItemIndent>Use AWS Glue to convert your data to Parquet or ORC.</StyledListItemIndent>
          <Spacer />
          <StyledListItem>Compress Your Data</StyledListItem>
          <StyledListItemIndent>Compressing files (e.g., using Gzip, Snappy) reduces storage costs and the volume of data scanned.</StyledListItemIndent>
          <StyledListItemIndent>Some formats like Parquet and ORC support built-in compression.</StyledListItemIndent>
          <Spacer />
          <StyledListItem>Use Partition Pruning</StyledListItem>
          <StyledListItemIndent>Write queries that leverage partition keys in WHERE clauses to avoid scanning all partitions.</StyledListItemIndent>
          <StyledListItemIndent>Use functions like LIMIT when exploring data.</StyledListItemIndent>
          <StyledListItemIndent>Join smaller datasets first in complex queries.</StyledListItemIndent>
          <Spacer />
          <StyledListItem>Optimize Data Layout</StyledListItem>
          <StyledListItemIndent>Avoid very small files, as they can cause overhead during query execution.</StyledListItemIndent>
          <StyledListItemIndent>Aim for file sizes between 128 MB and 1 GB.</StyledListItemIndent>
          <Spacer />
          <SubTitleSmall>Federated Query</SubTitleSmall>
          Federated queries in AWS Athena allow you to query data across multiple data sources, not just Amazon S3. This feature enables you to use Athena as a
          single interface to analyze data stored in various systems such as relational databases, NoSQL databases, and custom data stores, in addition to files in S3.
          <Spacer />
          <StyledImage src={FederatedQueries} />
          <Spacer />
          <SubTitleSmall>How Federated Queries Work</SubTitleSmall>
          <StyledListItem>Connectors</StyledListItem>
          <StyledListItemIndent>Athena uses data source connectors to interact with different data systems.</StyledListItemIndent>
          <StyledListItemIndent>Connectors are based on the AWS Lambda service, which acts as a bridge between Athena and the external data source.</StyledListItemIndent>
          <Spacer />
          <StyledListItem>SQL Interface</StyledListItem>
          <StyledListItemIndent>You write SQL queries in Athena, just as you would for querying data in S3.</StyledListItemIndent>
          <StyledListItemIndent>Athena fetches data from the external source via the connector and processes it for your query.</StyledListItemIndent>
          <Spacer />
          <SubTitleSmall>Benefits of Federated Queries</SubTitleSmall>
          <StyledListItem>Unified Analytics:</StyledListItem>
          <StyledListItemIndent>Analyze data across disparate systems without the need to copy or ETL (Extract, Transform, Load) data into S3.</StyledListItemIndent>
          <StyledListItem>Simplified Data Access:</StyledListItem>
          <StyledListItemIndent>Use a single SQL interface to query various data sources, reducing complexity for data analysts.</StyledListItemIndent>
          <Spacer />
          <SubTitleSmall>Limitations</SubTitleSmall>
          <StyledListItem>Federated queries can have higher latency compared to querying S3 directly.</StyledListItem>
          <StyledListItem>Not all SQL functions and operations may be supported for all data sources.</StyledListItem>
          <StyledListItem>Data source permissions must be carefully managed to ensure security.</StyledListItem>
          <Spacer />
          <SubTitle id="aws-redshfit">Redshift</SubTitle>
          AWS Redshift is a fully managed, petabyte-scale cloud data warehouse service provided by Amazon Web Services.
          It is designed to make it simple and cost-effective to analyze all your data using standard SQL and existing business intelligence (BI) tools.
          <StyledListItem>Redshift uses columnar storage, data compression, and zone maps to minimize the amount of data read from disk.</StyledListItem>
          <StyledListItem>Leverages Massively Parallel Processing (MPP) architecture to split workloads across multiple nodes.</StyledListItem>
          <StyledListItem>Offers query optimization techniques, such as materialized views and result caching, for faster performance.</StyledListItem>
          <SubTitleSmall>Scalability</SubTitleSmall>
          <StyledListItem>Provisioned:</StyledListItem>
          <StyledListItemIndent>Scale clusters vertically (change node types) or horizontally (add more nodes) to accommodate growing data needs.</StyledListItemIndent>
          <StyledListItem>Serverless:</StyledListItem>
          <StyledListItemIndent>Automatically provisions resources based on workload, ideal for unpredictable or spiky workloads.</StyledListItemIndent>
          <SubTitleSmall>Redshift Cluster</SubTitleSmall>
          Here is a basic overview of how Redshift Clusters are designed. They are made up of leader/compute nodes. The leader node coordinates query execution and manages metadata where
          the compute nodes perform the actual data processing and return results to the leader node.
          <Spacer />
          <StyledImage src={RedshiftCluster} />
          <SubTitleSmall>Snapshots and Disaster Recovery</SubTitleSmall>
          Snapshots are backups of your Amazon Redshift cluster stored in Amazon S3. There are two types of snapshots:
          <StyledListItem>Automated Snapshots:</StyledListItem>
          <StyledListItemIndent>Created automatically by Redshift based on the backup retention period configured for your cluster.</StyledListItemIndent>
          <StyledListItemIndent>Occur every 8 hours or after 5 GB of data changes, whichever comes first.</StyledListItemIndent>
          <StyledListItemIndent>Retained for a configurable period (default is 1 day, maximum is 35 days).</StyledListItemIndent>
          <StyledListItem>Manual Snapshots:</StyledListItem>
          <StyledListItemIndent>Created explicitly by the user.</StyledListItemIndent>
          <StyledListItemIndent>Retained until deleted manually (not subject to automated deletion).</StyledListItemIndent>
          <SubTitleSmall>How Snapshots Work</SubTitleSmall>
          Snapshots are incremental, meaning only changes since the last snapshot are stored, reducing storage costs.
          Snapshots are region-specific but can be copied to another AWS region for disaster recovery purposes.
          <Spacer />
          <StyledImage src={RedshiftSnapshot} />
          <Spacer />
          <SubTitleSmall>Redshift Spectrum</SubTitleSmall>
          Spectrum allows you to run SQL queries directly against exabytes of data stored in Amazon S3. A Redshift cluster is required to start the query, which is
          submitted to thousands of spectrum nodes.
          <Spacer />
          <StyledImage src={RedshiftSpectrum} />
          <Spacer />
          <SubTitle id="aws-opensearch">OpenSearch</SubTitle>
          AWS OpenSearch Service (formerly Amazon Elasticsearch Service) is a fully managed service that makes it easy to deploy, operate, and scale OpenSearch or Elasticsearch clusters
          in the AWS Cloud. OpenSearch is a search and analytics engine, enabling fast, interactive search experiences and powerful data visualization capabilities.
          <Spacer />
          Here are some design patterns including OpenSearch:
          <SubTitleSmall>DynamoDB Design Pattern</SubTitleSmall>
          OpenSearch can be used to allow an application to search for a specific item (e.g. a partial search for the item name), returning the item id. It can then use DynamoDB to retrieve the item using the id retrieved from
          OpenSearch. This is a common pattern where you can still have DynamoDB as your main source of data utilising OpenSearch to provide the search capability.
          <StyledImage src={OpenSearchDynamoDB} />
          <SubTitleSmall>CloudWatch Logs Design Pattern</SubTitleSmall>
          A way to ingest CloudWatch Logs using OpenSearch by using a CloudWatch Log Subscription filter sending data in real time to a lambda function which is managed by AWS and then the lambda function in real time sends the data to OpenSearch.
          Alternatively, you can use Kinesis Data Firehose to send the data but this would be in near real time.
          <StyledImage src={OpenSearchCloudWatch} />
          <SubTitleSmall>Kinesis Data Streams & Kinesis Data Firehose Design Pattern</SubTitleSmall>
          To send data streams into OpenSearch there are two ways to do so. The first strategy involves sending data into Kinesis Data Firehose near real time with the option to do any data transformation via lambdas then sending the data into OpenSearch.
          Alternatively, you can use lambda to read the data stream in real time to then send to OpenSearch.
          <StyledImage src={OpenSearchKinesis} />
          <Spacer />
          <SubTitle id="aws-emr">EMR (Elastic MapReduce)</SubTitle>
          EMR is designed to process vast amounts of data using distributed computing frameworks like Apache Hadoop, Apache Spark, and others. It uses a cluster of nodes which could be made up of hundreds of EC2 instances for distributed computing, and the nodes
          are divided into three main types, each serving a distinct role in the cluster. EMR simplifies the processing, analysis, and transformation of big data, allowing organizations to derive insights from large datasets quickly and cost-effectively.
          <SubTitleSmall>Node Types in AWS EMR</SubTitleSmall>
          <StyledListItem><BoldText>Master Node</BoldText>: Manages the cluster, including the distribution of tasks and monitoring cluster health.</StyledListItem>
          <StyledListItem><BoldText>Core Nodes</BoldText>: Execute tasks and store data within the Hadoop Distributed File System (HDFS).</StyledListItem>
          <StyledListItem><BoldText>Task Nodes</BoldText>: Perform computational tasks but do not store data in HDFS.</StyledListItem>
          <SubTitleSmall>Purchasing Options & Best Practices</SubTitleSmall>
          <StyledListItem><BoldText>Master Node</BoldText>: Use On-Demand or Reserved Instances to ensure high availability and stability since the master node is critical to cluster operations.</StyledListItem>
          <StyledListItem><BoldText>Core Nodes</BoldText>: Use Reserved Instances for predictable workloads requiring persistent storage (Spot Instances can be considered with a fault-tolerant design e.g., enabling replication in HDFS).</StyledListItem>
          <StyledListItem><BoldText>Task Nodes</BoldText>: Use Spot Instances to minimize costs for transient compute needs..</StyledListItem>
          <Spacer />
          <SubTitle id="aws-quicksight">QuickSight</SubTitle>
          Amazon QuickSight is a cloud-scale business intelligence (BI) service that you can use to deliver easy-to-understand insights to the people who you work with, wherever they are. QuickSight connects to your data in the
          cloud and combines data from many different sources. In a single data dashboard, QuickSight can include AWS data, third-party data, big data, spreadsheet data, SaaS data, B2B data, and more. As a fully managed cloud-based service,
          QuickSight provides enterprise-grade security, global availability, and built-in redundancy. It also provides the user-management tools that you need to scale from 10 users to 10,000, all with no infrastructure to deploy or manage.
          <SubTitleSmall>QuickSight Integrations</SubTitleSmall>
          <StyledImage src={QuickSightDataSources} />
          <SubTitleSmall>Dashboard & Analysis</SubTitleSmall>
          Define users (standard versions) and Groups (enterprise version). Note that users and groups are not stored in IAM and only exist within QuickSight. The dashboards are a read-only snapshot of the analysis you can share. The data is imported as
          SPICE data which allows for really fast data analysis. The powerful aspect of QuickSight dashboards is that you can share them with users and groups.
          <StyledImage src={QuickSightDashboard} />
          <SubTitle id="aws-glue">Glue</SubTitle>
          AWS Glue is a serverless data integration service that makes it easy for analytics users to discover, prepare, move, and integrate data from multiple sources. You can use it for analytics, machine learning, and application development.
          It also includes additional productivity and data ops tooling for authoring, running jobs, and implementing business workflows.
          <StyledImage src={Glue} />
          <Spacer />
          <SubTitle id="aws-lake-formation">Lake Formation</SubTitle>
          AWS Lake Formation is a fully managed service that simplifies the process of creating, securing, and managing data lakes. A data lake is a centralized repository that stores structured and unstructured data at any scale, enabling you
          to analyze and process data using different tools and frameworks. Lake Formation helps automate and streamline the creation of data lakes, making it easier to collect, organize, secure, and share data for analytics and machine learning.


        </Text>
      </Container>
    </Wrapper>
  );
}

export default AWSDataAnalytics;