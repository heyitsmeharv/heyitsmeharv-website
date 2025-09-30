import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";



// animations
import SlideInBottom from "../../animations/SlideInBottom";

// icons
import { ChevronBackCircle } from '@styled-icons/ionicons-solid/ChevronBackCircle';
import { AWSSVG, AWSRDSSVG } from '../../resources/styles/icons';

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';
import Table from '../../components/Table/Table';

// images
import AutoScaling from "../../resources/images/blog/AWSDatabases/db_auto_scaling.jpeg";
import ReadReplicas from "../../resources/images/blog/AWSDatabases/db_read_replica.jpeg";
import MultiAZ from "../../resources/images/blog/AWSDatabases/db_multi_az.jpeg";
import MultiAZBackground from "../../resources/images/blog/AWSDatabases/db_multi_az_background.jpeg";
import HighAvailability from "../../resources/images/blog/AWSDatabases/db_high_availability.jpeg";
import Proxy from "../../resources/images/blog/AWSDatabases/db_proxy.jpeg";
import AuroraCluster from "../../resources/images/blog/AWSDatabases/db_aurora_cluster.jpeg";
import AuroraCustomEndpoint from "../../resources/images/blog/AWSDatabases/db_aurora_custom_endpoint.jpeg";
import AuroraServerless from "../../resources/images/blog/AWSDatabases/db_aurora_serverless.jpeg";
import AuroraGlobal from "../../resources/images/blog/AWSDatabases/db_aurora_global.jpeg";
import AuroraMachineLearning from "../../resources/images/blog/AWSDatabases/db_aurora_ml.jpeg";
import ElastiCache from "../../resources/images/blog/AWSDatabases/db_elasticache.jpeg";
import ElastiCacheSecurity from "../../resources/images/blog/AWSDatabases/db_elasticache_security.jpeg";
import NeptuneStreams from "../../resources/images/blog/AWSDatabases/db_neptune_streams.jpeg";
import DynamoDBDAX from "../../resources/images/blog/AWSDatabases/db_dynamodb_dax.jpeg";
import DynamoDBDAXvsElastiCache from "../../resources/images/blog/AWSDatabases/db_dynamodb_dax_vs_elasticache.jpeg";
import DynamoDBStreams from "../../resources/images/blog/AWSDatabases/db_dynamodb_streams.jpeg";
import DynamoDBGlobalTables from "../../resources/images/blog/AWSDatabases/db_dynamodb_global_tables.jpeg";
import DynamoDBTTL from "../../resources/images/blog/AWSDatabases/db_dynamodb_ttl.jpeg";
import RDSInvokeLambda from "../../resources/images/blog/AWSDatabases/db_rds_lambda_invoke.jpeg";
import RDSEventNotifications from "../../resources/images/blog/AWSDatabases/db_rds_event_notification.jpeg";

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

const StyledCodeSpan = styled.code`
  background-color: #f1f1f1;
  color: crimson;
  padding: 0 5px;
  margin: 0 5px;
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

const AWSDatabases = () => {
  const columns = ['Redis', 'Memcached'];
  const data = [
    { Redis: 'Multi AZ with Auto-Failover', Memcached: 'Multi-node for partitioning of data (sharding)' },
    { Redis: 'Read Replicas to scale reads and have high availability', Memcached: 'No high availability (replication)' },
    { Redis: 'Data durability using AOF persistence', Memcached: 'Non persistent' },
    { Redis: 'Backup and restore features', Memcached: 'No backups or restore' },
    { Redis: 'Supports Sets and Sorted sets', Memcached: 'Multi-threaded architecture' },
  ];

  const columns2 = ['DynamoDB', 'Kinesis Data Streams'];
  const data2 = [
    { DynamoDB: '24 hours retention', "Kinesis Data Streams": '1 year retention' },
    { DynamoDB: 'Limited number of consumers', "Kinesis Data Streams": 'High number of consumers' },
    { DynamoDB: 'Process using AWS Lambda Triggers or DynamoDB Stream Kinesis adaptor', "Kinesis Data Streams": 'Process using AWS Lambda, Kinesis Data Analytics, Kinesis Data Firehose, AWS Glue Streaming ETL...' },
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
          <Title>AWS Databases</Title>
          <IconWrapper>
            <Icon><AWSSVG /></Icon>
            <Icon><AWSRDSSVG /></Icon>
          </IconWrapper>
        </Flex>
        <Spacer />
        <Text>
          I'll be briefly covering databases which AWS provide as well as the key features that each service offer. I've also listed <StyledAnchor href="#skip">ports at the end</StyledAnchor> to be familiar with.
          <Spacer />
          <StyledAnchor href="#database-types"><StyledListItem>Database Types</StyledListItem></StyledAnchor>
          <StyledAnchor href="#rds"><StyledListItem>Amazon RDS</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aurora"><StyledListItem>Amazon Aurora</StyledListItem></StyledAnchor>
          <StyledAnchor href="#elasticache"><StyledListItem>Amazon ElastiCache</StyledListItem></StyledAnchor>
          <StyledAnchor href="#dynamodb"><StyledListItem>Amazon DynamoDB</StyledListItem></StyledAnchor>
          <StyledAnchor href="#s3"><StyledListItem>Amazon S3</StyledListItem></StyledAnchor>
          <StyledAnchor href="#documentdb"><StyledListItem>DocumentDB</StyledListItem></StyledAnchor>
          <StyledAnchor href="#neptune"><StyledListItem>Amazon Neptune</StyledListItem></StyledAnchor>
          <StyledAnchor href="#keyspaces"><StyledListItem>Amazon Keyspaces</StyledListItem></StyledAnchor>
          <StyledAnchor href="#qldb"><StyledListItem>Amazon QLDB (Quantum Ledger Database)</StyledListItem></StyledAnchor>
          <StyledAnchor href="#timestream"><StyledListItem>Amazon Timestream</StyledListItem></StyledAnchor>
          <Spacer />
          <SubTitle id="database-types">Database Types</SubTitle>
          <StyledListItem><BoldText>Relational database management system (SQL / OLTP)</BoldText>: RDS, Aurora - great for joins</StyledListItem>
          <StyledListItem><BoldText>NoSQL database - no joins, no SQL</BoldText>: DynamoDB (~JSON), ElastiCache (key / value pairs), Neptune (graphs), DocumentDB (for MongoDB), Keyspaces (for Apache Cassandra)</StyledListItem>
          <StyledListItem><BoldText>Object Store</BoldText>: S3 (for big objects) / Glacier (for backups / archives)</StyledListItem>
          <StyledListItem><BoldText>Data Warehouse</BoldText>: (SQL Analytics / BI): Redshift (OLAP), Athena, EMR</StyledListItem>
          <StyledListItem><BoldText>Search</BoldText>: OpenSearch (JSON) - free text, unstructured searches</StyledListItem>
          <StyledListItem><BoldText>Graphs</BoldText>: Amazon Neptune - displays relationships between data</StyledListItem>
          <StyledListItem><BoldText>Ledger</BoldText>: Amazon Quantum Ledger Database</StyledListItem>
          <StyledListItem><BoldText>Time series</BoldText>: Amazon Timestream</StyledListItem>
          <Spacer />
          <SubTitle id="rds">Amazon Relational Database Service (RDS)</SubTitle>
          This service allows you to create a database in the cloud. You can choose from the following:
          <StyledListItem>Microsoft SQL Server</StyledListItem>
          <StyledListItem>MySQL</StyledListItem>
          <StyledListItem>PostgreSQL</StyledListItem>
          <StyledListItem>MariaDB</StyledListItem>
          <StyledListItem>Oracle</StyledListItem>
          <Spacer />
          This service is managed by AWS which means you won't be able to SSH into the instance but you do benefit from a list of services:
          <StyledListItem>Automated provisioning, OS patching</StyledListItem>
          <StyledListItem>Continuous backups and point in time restore</StyledListItem>
          <StyledListItem>Monitoring dashboards</StyledListItem>
          <StyledListItem>Read replicas for improved read performance</StyledListItem>
          <StyledListItem>Multi AZ setup for disaster recovery</StyledListItem>
          <StyledListItem>Maintenance windows for upgrades</StyledListItem>
          <StyledListItem>Scaling capability</StyledListItem>
          <StyledListItem>Storage backed by EBS</StyledListItem>
          <Spacer />
          If you would like the option to have access to your RDS instance then there is 'RDS Custom' which allows you access to the underlying database and OS so you can configure and install patches yourself if that's a use case you require.
          <Spacer />
          <SubTitleSmall>Auto Scaling Storage</SubTitleSmall>
          This feature helps increase the storage on an RDS instance when it's running out of free space and it will do it automatically. You do have to set the 'Maximum Storage Threshold'. This feature can help with
          unpredictable workloads and supports all RDS database instances.
          <StyledImage src={AutoScaling} />
          <Spacer />
          <SubTitleSmall>Read Replicas</SubTitleSmall>
          RDS allows up to 15 read replicas within the same availability zone, across multiple availability zones or even cross region. It's also possible to take a replica read instance and make it the main RDS instance. The replication
          is <BoldText>ASYNC</BoldText>, meaning that the data will eventually be consistent. You can only query (SELECT) data from a read replica not do any manipulations such as INSERT, UPDATE, or DELETE queries.
          <StyledImage src={ReadReplicas} />
          It's important to note that there is a network cost for transferring data into another availability zone; the only use-case where that doesn't apply is if it's within the same region and your transferring to a read
          replica instance.
          <Spacer />
          <SubTitleSmall>RDS Multi AZ</SubTitleSmall>
          Multi AZ is mainly used for disaster recovery. The application will read/write to the main RDS instance via one DNS name, and that instance will be making a <BoldText>SYNC</BoldText> replication, meaning a real time exchange of
          information to a standby instance in another availability zone. That means every change that the application is sending to the main instance, the main instance will have to update the standby instance. If there is a problem with
          the main instance then there will be an automatic failover to the standby instance. This failover could happen due to network issues or instance/storage failure, if any of these events occur the standby instance would be promoted
          to the main instance. It's possible to setup read replicas for Multi AZ.
          <StyledImage src={MultiAZ} />
          There isn't any downtime for this process to happen, nor you need to modify your application as RDS handles this process in the background when configured. Here is a brief explanation of what happens.
          MultiAZBackground
          <StyledImage src={MultiAZBackground} />
          <Spacer />
          <SubTitleSmall>RDS Backups</SubTitleSmall>
          RDS has the ability to backup instances either automatically or manually. You can do a full backup of the database daily with the ability to restore to any point in time from oldest to five minutes ago. Transaction logs are backed up by RDS every five minutes. There is a
          retention period up to 35 days for automatic backups but can last as long as you want if backed up manually. <BoldText>Automated backups can be disabled.</BoldText> Do note that a stopped RDS instance still costs money as you're still paying for the existing storage.
          If you plan on stopping it for a long period of time, you should snapshot and restore instead.
          <Spacer />
          <SubTitleSmall>RDS Restore</SubTitleSmall>
          RDS has the ability to restore an instance by creating a backup of the existing database which is stored in S3, that is then used on a new RDS instance running MySQL.
          <Spacer />
          <SubTitleSmall>RDS Proxy</SubTitleSmall>
          This allows apps to pool and share database connections already established. Instead of having individual applications connect to the RDS instance, they will instead connect to the proxy which will pool the connections together into less connections to the RDS instance.
          You would want to do this to improve the database efficiency by reducing the strain on the RDS resources such as CPU and RAM. This feature auto-scales and is multi-AZ so you won't need to manage capacity which in turn reduces the failover time by up to 66%. This
          feature enforces IAM authentication, so users can only connect to the RDS instance using the correct credentials, and it's never publicly available as it can only be accessed from a VPC. This supports RDS (MySQL, PostgreSQL, MariaDB, MSSQL Server) and Aurora (MySQL and PostgreSQL).
          <StyledImage src={Proxy} />
          <Spacer />
          <SubTitleSmall>Invoking Lambda from RDS & Aurora</SubTitleSmall>
          <StyledListItem>Invoke Lambda functions from within your DB instance</StyledListItem>
          <StyledListItem>Allows you to process data events from within a database</StyledListItem>
          <StyledListItem>Supported for RDS for PostgreSQL and Aurora MySQL</StyledListItem>
          <StyledListItem>Must allow outbound traffic to your lambda function from within your DB instance (Public, NAT GW, VPC Endpoints)</StyledListItem>
          <StyledListItem>DB instance must have the required permissions to invoke the lambda function (Lambda Resource-based Policy & IAM Policy)</StyledListItem>
          <Spacer />
          <StyledImage src={RDSInvokeLambda} />
          <Spacer />
          <SubTitleSmall>RDS Event Notifications</SubTitleSmall>
          <StyledListItem>Notifications that tells information about the DB instance itself (created, stopped, started)</StyledListItem>
          <StyledListItem>You don't have any information about the data itself</StyledListItem>
          <StyledListItem>Subscribe to following event categories: DB instance, DB snapshot, DB Parameter Group, DB Security Group, RDS Proxy, Custom Engine Version</StyledListItem>
          <StyledListItem>Near real-time events (up to 5 minutes)</StyledListItem>
          <StyledListItem>Send notifications to SNS or subscribe to events using EventBridge</StyledListItem>
          <Spacer />
          <StyledImage src={RDSEventNotifications} />
          <Spacer />
          <SubTitleSmall>RDS Summary</SubTitleSmall>
          <StyledListItem>Managed PostgreSQL / MySQL / Oracle / SQL Server / DB2 / MariaDB / Custom</StyledListItem>
          <StyledListItem>Provisioned RDS instance Size and EBS Volume Type & Size</StyledListItem>
          <StyledListItem>Auto-scaling capability for Storage</StyledListItem>
          <StyledListItem>Support for Read Replicas and Multi AZ</StyledListItem>
          <StyledListItem>Security through IAM, Security Groups, KMS, SSL in transit</StyledListItem>
          <StyledListItem>Automated Backup with Point in time restore feature (up to 35 days)</StyledListItem>
          <StyledListItem>Manual DB Snapshot for longer-term recovery</StyledListItem>
          <StyledListItem>Managed and Scheduled maintenance (with downtime)</StyledListItem>
          <StyledListItem>Support for IAM Authentication, integration with Secrets Manager</StyledListItem>
          <StyledListItem>RDS Custom for access to and customize the underlying instance (Oracle & SQL Server)</StyledListItem>
          <Spacer />
          <StyledListItem><BoldText>Use case</BoldText>: Store relational datasets (RDBMS / OLTP), perform SQL queries, transactions</StyledListItem>
          <Spacer />
          <SubTitle id="aurora">Amazon Aurora</SubTitle>
          Aurora is a cloud optimized database which has significant performance improvements over RDS. It has a capacity of up to 128 TB (terabytes) and grows in increments of 10 GB (gigabytes). Aurora can have up to 15 replicas and it's failover
          is instantaneous (30 seconds) but it all comes at a cost as it's roughly 20% more than an RDS instance.
          <Spacer />
          <SubTitleSmall>Features of Aurora</SubTitleSmall>
          <StyledListItem>Automatic fail-over</StyledListItem>
          <StyledListItem>Backup and Recovery</StyledListItem>
          <StyledListItem>Isolation and Security</StyledListItem>
          <StyledListItem>Industry Compliance</StyledListItem>
          <StyledListItem>Push-button Scaling</StyledListItem>
          <StyledListItem>Automated Patching with Zero Downtime</StyledListItem>
          <StyledListItem>Advanced Monitoring</StyledListItem>
          <StyledListItem>Backtrack: restore data at any point in time without using backups</StyledListItem>
          <Spacer />
          Aurora has high availability and reading scaling as it copies the data across three availability zones with six copies and the storage is striped across 100's of volumes every time you write to the database.
          <StyledImage src={HighAvailability} />
          <Spacer />
          <SubTitleSmall>Aurora DB Cluster</SubTitleSmall>
          Below shows how you would interact with an Aurora instance and how the clusters work. You will be given two endpoints, read and write, the write endpoint will always connect to the main instance which is the only instance to write to the storage,
          whereas the read endpoint connects to the read replicas.
          <StyledImage src={AuroraCluster} />
          <Spacer />
          <SubTitleSmall>Aurora Custom Endpoints</SubTitleSmall>
          If you wish to run analytics on the database without effecting performance you can define a subset of Aurora instances to point towards a custom endpoint.
          <StyledImage src={AuroraCustomEndpoint} />
          <Spacer />
          <SubTitleSmall>Aurora Serverless</SubTitleSmall>
          Aurora Serverless is an automated database which auto scales based on usage. This could be good for infrequent, intermittent or unpredictable workloads.
          <StyledImage src={AuroraServerless} />
          <Spacer />
          <SubTitleSmall>Aurora Global</SubTitleSmall>
          Global Aurora has cross region read replicas which is good for disaster recovery. It takes less than a second to replicate data into another region.
          <StyledImage src={AuroraGlobal} />
          <Spacer />
          <SubTitleSmall>Aurora Machine Learning</SubTitleSmall>
          You can integrate Aurora with machine learning services (AWS Sagemaker and AWS Comprehend) to make predictions with your applications via SQL. Good use cases for this would be to check for fraud detection and product recommendations.
          <StyledImage src={AuroraMachineLearning} />
          <Spacer />
          <SubTitleSmall>Aurora Backups</SubTitleSmall>
          Aurora has the ability to backup instances either automatically or manually. You can do a full backup of the database daily with the ability to restore to any point in time. There is a
          retention period up to 35 days for automatic backups but can last as long as you want if backed up manually. <BoldText>Automated backups can't be disabled.</BoldText>
          <Spacer />
          <SubTitleSmall>Aurora Restore</SubTitleSmall>
          Aurora has the ability to restore an instance by creating a backup of the existing database using Percona XtraBackup which is stored in S3, that is then used on a new Aurora cluster running MySQL.
          <Spacer />
          <SubTitleSmall>Aurora Cloning</SubTitleSmall>
          Another feature of Aurora is that you can clone an existing database cluster from an existing one. This is faster than snapshot & restore and uses copy-on-write protocol. This feature is useful for creating a staging environment
          from a production database without impacting the live service.
          <Spacer />
          <SubTitleSmall>RDS & Aurora Security</SubTitleSmall>
          Both RDS and Aurora have:
          <StyledListItem>At-rest encryption: Main and replica encryptions use AWS KMS which must be defined at launch time otherwise the main instance and read replicas can't be encrypted.</StyledListItem>
          <StyledListItem>In-flight encryption: TLS-ready by default, user the AWS TLS root certificates client-side.</StyledListItem>
          <StyledListItem>IAM Authentication: IAM roles to connect to your database instead of username/password.</StyledListItem>
          <StyledListItem>Security Groups: Control network access to your RDS/Aurora database.</StyledListItem>
          <StyledListItem>No SSH available: Except on RDS Custom.</StyledListItem>
          <StyledListItem>Audit Logs: Can be enabled and sent to CloudWatch Logs for longer retention. </StyledListItem>
          <Spacer />
          <SubTitleSmall>Aurora Summary</SubTitleSmall>
          <StyledListItem>Compatible API for PostgreSQL / MySQL, separation of storage and compute</StyledListItem>
          <StyledListItem>Storage: data is stored in 6 replicas across 3 AZ - highly available, self-healing, auto-scaling</StyledListItem>
          <StyledListItem>Compute: Cluster of DB Instance across multiple AZ, auto-scaling of Read Replicas</StyledListItem>
          <StyledListItem>Cluster: Custom endpoints for writer and reader DB instances</StyledListItem>
          <StyledListItem>Same security / monitoring / maintenance features as RDS</StyledListItem>
          <StyledListItem>Backup & restore options:</StyledListItem>
          <StyledListItemIndent><BoldText>Aurora Serverless</BoldText>: for unpredictable / intermittent workloads, no capacity planning</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Aurora Global</BoldText>: up to 16 DB Read Instances in each region, less than 1 second storage replication</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Aurora Machine Learning</BoldText>: performance ML using SageMaker & Comprehend on Aurora</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Aurora Database Cloning</BoldText>: new cluster from existing one, faster than restoring a snapshot</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldText>Use case</BoldText>: same as RDS, but with less maintenance / more flexibility / more performance / more features</StyledListItem>
          <Spacer />
          <SubTitle id="elasticache">Elasticache</SubTitle>
          ElastiCache is an in memory database which helps high performance and low latency (Redis or Memcached). This also helps makes applications stateless and reduces the load off of database for read intensive workloads. Like RDS and Aurora, AWS takes
          care of the OS maintenance/patching, optimisations, setup, configuration, monitoring, failure recovery and backups. Using ElastiCache does involve a lot of application code changes.
          <StyledImage src={ElastiCache} />
          <SubTitleSmall>Redis vs Memcached</SubTitleSmall>
          <Spacer />
          <Table columns={columns} data={data} />
          <Spacer />
          <SubTitleSmall>Cache Security</SubTitleSmall>
          Elasticache supports IAM Authentication for Redis - the IAM policies are only used for AWS API-level security.
          <StyledImage src={ElastiCacheSecurity} />
          <Spacer />
          <SubTitleSmall>ElastiCache Summary</SubTitleSmall>
          <StyledListItem>Managed Redis / Memcached (similar offering as RDS, but for caches)</StyledListItem>
          <StyledListItem>In-memory data store, sub-millisecond latency</StyledListItem>
          <StyledListItem>Select an ElastiCache instance type (e.g. cache.m6g.large)</StyledListItem>
          <StyledListItem>Support for Clustering (Redis) and Multi AZ, Read Replicas (sharding)</StyledListItem>
          <StyledListItem>Security through IAM, Security Groups, KMS, Redis Auth</StyledListItem>
          <StyledListItem>Backup / Snapshot / Point in time restore feature</StyledListItem>
          <StyledListItem>Managed and Scheduled maintenance</StyledListItem>
          <StyledListItem>Requires some application code changes to be leveraged</StyledListItem>
          <Spacer />
          <StyledListItem><BoldText>Use case</BoldText>: Key/Value store, Frequent reads, less writes, cache results for DB queries, store session data for websites, cannot use SQL</StyledListItem>
          <Spacer />
          <SubTitle id="dynamodb">Amazon DynamoDB</SubTitle>
          Amazon DynamoDB is a fully managed NoSQL database service. It is designed to offer fast, consistent, and scalable performance for applications that require low-latency data access, even as they scale to handle
          millions of requests per second.
          <StyledListItem>DynamoDB is made of Tables</StyledListItem>
          <StyledListItem>Each table has a Primary Key (must be decided at creation time)</StyledListItem>
          <StyledListItem>Each table can have an infinite number of items (rows)</StyledListItem>
          <StyledListItem>Each item has attributes (can be added over time - can be null) </StyledListItem>
          <StyledListItem>Maximum size of an item is 400KB</StyledListItem>
          <StyledListItem>Data types supported are:</StyledListItem>
          <StyledListItemIndent><BoldText>Scalar Types</BoldText>- Strings, Numbers, Binary, Null</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Document Types</BoldText>- List, Map</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Set Types</BoldText>- String Set, Number Set, Binary Set</StyledListItemIndent>
          <Spacer />
          <SubTitleSmall>Read/Write Capacity Modes</SubTitleSmall>
          <StyledListItem>Control how you manage your table's capacity (read/write throughput)</StyledListItem>
          <Spacer />
          <StyledListItem><BoldText>Provisioned Mode (default)</BoldText></StyledListItem>
          <StyledListItemIndent>You specify the number of reads/writes per second</StyledListItemIndent>
          <StyledListItemIndent>You need to plan capacity beforehand</StyledListItemIndent>
          <StyledListItemIndent>Pay for provisioned Read Capacity Units (RCU) & Write Capacity Units (WCU)</StyledListItemIndent>
          <StyledListItemIndent>Possibility to add auto-scaling mode for RCU & WCU</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldText>On-Demand Mode</BoldText></StyledListItem>
          <StyledListItemIndent>Read/Writes automatically scale up/down with your workloads</StyledListItemIndent>
          <StyledListItemIndent>No capacity planning needed</StyledListItemIndent>
          <StyledListItemIndent>Pay for what you use, more expensive ($$$)</StyledListItemIndent>
          <StyledListItemIndent>Great for unpredictable workloads, steep sudden spikes</StyledListItemIndent>
          <Spacer />
          <SubTitleSmall>DynamoDB Advanced Features</SubTitleSmall>
          <HeadingSmall>DynamoDB Accelerator (DAX)</HeadingSmall>
          <StyledListItem>Fully-managed, Highly Available, Seamless in-memory cache for DynamoDB</StyledListItem>
          <StyledListItem>Help solve read congestion by caching</StyledListItem>
          <StyledListItem>Microseconds latency for cached data</StyledListItem>
          <StyledListItem>Doesn't require application logic modification (compatible with existing DynamoDB APIs)</StyledListItem>
          <StyledListItem>5 minutes TTL for cache (default)</StyledListItem>
          <Spacer />
          <StyledImage src={DynamoDBDAX} />
          <Spacer />
          <HeadingSmall>DynamoDB Accelerator (DAX) vs ElastiCache</HeadingSmall>
          <Spacer />
          <StyledImage src={DynamoDBDAXvsElastiCache} />
          <Spacer />
          <HeadingSmall>Stream Processing</HeadingSmall>
          <StyledListItem>Ordered stream of item-level modifications (create/update/delete) in a table</StyledListItem>
          <StyledListItem>Use cases:</StyledListItem>
          <StyledListItemIndent>React to changes in real-time (welcome email to users)</StyledListItemIndent>
          <StyledListItemIndent>Real-time usage analytics</StyledListItemIndent>
          <StyledListItemIndent>Insert into derivative tables</StyledListItemIndent>
          <StyledListItemIndent>Implement cross-region replication</StyledListItemIndent>
          <StyledListItemIndent>Invoke AWS Lambda on changes to your DynamoDB table</StyledListItemIndent>
          <Spacer />
          <Table columns={columns2} data={data2} />
          <Spacer />
          <HeadingSmall>DynamoDB Streams</HeadingSmall>
          <Spacer />
          <StyledImage src={DynamoDBStreams} />
          <Spacer />
          <HeadingSmall>DynamoDB Global Tables</HeadingSmall>
          <Spacer />
          <StyledImage src={DynamoDBGlobalTables} />
          <Spacer />
          <StyledListItem>Make a DynamoDB table accessible with low latency in multiple-regions</StyledListItem>
          <StyledListItem>Active-Active replication</StyledListItem>
          <StyledListItem>Applications can read and write to the table in any region</StyledListItem>
          <StyledListItem>Must enable DynamoDB Streams as a pre-requisite</StyledListItem>
          <Spacer />
          <HeadingSmall>DynamoDB - Time To Live (TTL)</HeadingSmall>
          Automatically delete items after an expiry timestamp.
          <Spacer />
          <StyledImage src={DynamoDBTTL} />
          <Spacer />
          <StyledListItem>Use cases: reduce stored data by keeping only current items, adhere to regulatory obligations, web session handling</StyledListItem>
          <Spacer />
          <HeadingSmall>DynamoDB - Backups for disaster recovery</HeadingSmall>
          <StyledListItem>Continuous backups using point-in-time recovery (PITR)</StyledListItem>
          <StyledListItemIndent>Optionally enabled for the last 35 days</StyledListItemIndent>
          <StyledListItemIndent>Point-in-time recovery to any time within the backup window</StyledListItemIndent>
          <StyledListItemIndent>The recovery process creates a new table</StyledListItemIndent>
          <Spacer />
          <StyledListItem>On-demand backups</StyledListItem>
          <StyledListItemIndent>Full backups for long-term retention, until explicitely deleted</StyledListItemIndent>
          <StyledListItemIndent>Doesn't affect performance or latency</StyledListItemIndent>
          <StyledListItemIndent>Can be configured and managed in AWS Backup (enabled cross-region copy)</StyledListItemIndent>
          <Spacer />
          <SubTitleSmall>DynamoDB - Integration with Amazon S3</SubTitleSmall>
          <StyledListItem><BoldText>Export to S3 (must enable PITR)</BoldText></StyledListItem>
          <StyledListItemIndent>Works for any point in time in the last 35 days</StyledListItemIndent>
          <StyledListItemIndent>Doesn't affect the read capacity of your table</StyledListItemIndent>
          <StyledListItemIndent>Perform data analysis on top of DynamoDB</StyledListItemIndent>
          <StyledListItemIndent>Retain snapshots for auditing</StyledListItemIndent>
          <StyledListItemIndent>ETL on top of S3 data before importing back into DynamoDB</StyledListItemIndent>
          <StyledListItemIndent>Export in DynamoDB JSON or ION format (data serialization language by amazon)</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldText>Import from S3</BoldText></StyledListItem>
          <StyledListItemIndent>Import CSV, DynamoDB JSON, or ION format</StyledListItemIndent>
          <StyledListItemIndent>Doesn't consume any write capacity</StyledListItemIndent>
          <StyledListItemIndent>Creates a new table</StyledListItemIndent>
          <StyledListItemIndent>Import errors are logged in CloudWatch Logs</StyledListItemIndent>
          <Spacer />
          <SubTitleSmall>DynamoDB Summary</SubTitleSmall>
          <StyledListItem>AWS propriety technology, managed serverless NoSQL database, millisecond latency</StyledListItem>
          <StyledListItem>Capacity modes: provisioned capacity with optional auto-scaling or on-demand capacity</StyledListItem>
          <StyledListItem>Can replace ElastiCache as a key/value store (storing session data for example, using TTL feature)</StyledListItem>
          <StyledListItem>Highly Available, Multi AZ by default, Read and Writes are decoupled, transaction capability</StyledListItem>
          <StyledListItem>DAX cluster for read cache, microsecond read latency</StyledListItem>
          <StyledListItem>Security, authentication and authorization is done through IAM</StyledListItem>
          <StyledListItem>Event Processing: DynamoDB Streams to integrate with AWS Lambda, or Kinesis Data Streams</StyledListItem>
          <StyledListItem>Global Table feature: active-active setup</StyledListItem>
          <StyledListItem>Automated backups up to 35 days with PITR (point-in-time-recovery - restore to new table), or on-demand backups</StyledListItem>
          <StyledListItem>Export to S3 without using RCU within the PITR window, import from S3 without using WCU</StyledListItem>
          <StyledListItem>Great for rapidly evolve schemas</StyledListItem>
          <Spacer />
          <StyledListItem><BoldText>Use case</BoldText>: Serverless applications (small documents 100s KB), distributed serverless cache</StyledListItem>
          <Spacer />
          <SubTitle id="s3">Amazon S3</SubTitle>
          <StyledListItem>S3 is a key / value store for objects</StyledListItem>
          <StyledListItem>Great for bigger objects, not so great for many small objects</StyledListItem>
          <StyledListItem>Serverless, scales infinitely, max object size is 5TB, versioning capability</StyledListItem>
          <StyledListItem>Tiers: S3 Standard, S3 Infrequent Access, S3 Intelligent, S3 Glacier + lifecycle policy</StyledListItem>
          <StyledListItem>Features: Versioning, Encryption, Replication, MFA-Delete, Access Logs</StyledListItem>
          <StyledListItem>Security: IAM, Bucket Policies, ACL, Access Points, Object Lambda, CORS, Object/Vault Lock</StyledListItem>
          <StyledListItem>Encryption: SSE-S3, SSE-KMS, SSE-C, client-side, TLS in transit, default encryption</StyledListItem>
          <StyledListItem>Batch operations on objects using S3 Batch, listing files using S3 Inventory</StyledListItem>
          <StyledListItem>Performance: Multi-part upload, S3 Transfer Accelerator, S3 Select</StyledListItem>
          <StyledListItem>Automation: S3 Event Notifications (SNS, SQS, Lambda, EventBridge)</StyledListItem>
          <Spacer />
          <StyledListItem><BoldText>Use case</BoldText>: static files, key / value store for big files, website hosting</StyledListItem>
          <Spacer />
          <SubTitle id="documentdb">DocumentDB</SubTitle>
          <StyledListItem>Aurora is an "AWS-implementation" of PostgreSQL / MySQL</StyledListItem>
          <StyledListItem><BoldText>DocumentDB is the same for MongoDB (which is a NoSQL database)</BoldText></StyledListItem>
          <StyledListItem>MongoDB is used to store, query and index JSON data</StyledListItem>
          <StyledListItem>Similar "deployment concepts" as Aurora</StyledListItem>
          <StyledListItem>Fully managed, highly available with replication across 3 AZ</StyledListItem>
          <StyledListItem>DocumentDB storage automatically grows in increments of 10GB</StyledListItem>
          <StyledListItem>Automatically scales to workloads with millions of requests per seconds</StyledListItem>
          <Spacer />
          <SubTitle id="neptune">Amazon Neptune</SubTitle>
          Amazon Neptune is a fully managed graph database service. It is designed to work with highly connected datasets, enabling you to efficiently store and navigate complex relationships
          within your data.
          <StyledListItem>Fully managed graph database</StyledListItem>
          <StyledListItem>Highly available across 3 AZ, with up to 15 read replicas</StyledListItem>
          <StyledListItem>Build and run applications working with highly connected datasets - optimized for these complex and hard queries</StyledListItem>
          <StyledListItem>Can store up to billions of relations and query the graph with milliseconds latency</StyledListItem>
          <StyledListItem>Great for knowledge graphs (Wikipedia), fraud detection, recommendation engines, social networking</StyledListItem>
          <Spacer />
          <SubTitleSmall>Streams</SubTitleSmall>
          <StyledListItem>Real-time ordered sequence of every change to your graph data</StyledListItem>
          <StyledListItem>Changes are available immediately after writing</StyledListItem>
          <StyledListItem>No duplicates, strict order</StyledListItem>
          <StyledListItem>Streams data is accessible in an HTTP REST API</StyledListItem>
          <StyledListItem>Use cases:</StyledListItem>
          <StyledListItemIndent>Send notifications when certain changes are made</StyledListItemIndent>
          <StyledListItemIndent>Maintain your graph data synchronized in another data store (e.g. S3, OpenSearch, ElastiCache)</StyledListItemIndent>
          <StyledListItemIndent>Replicate data across regions in Neptune</StyledListItemIndent>
          <Spacer />
          <StyledImage src={NeptuneStreams} />
          <Spacer />
          <SubTitle id="keyspaces">Amazon Keyspaces (for Apache Cassandra)</SubTitle>
          <StyledListItem>Apache Cassandra is an open source NoSQL distributed database</StyledListItem>
          <StyledListItem>A managed Apache Cassandra-compatible database service</StyledListItem>
          <StyledListItem>Serverless, Scalable, highly available, fully managed by AWS</StyledListItem>
          <StyledListItem>Automatically scale tables up/down based on the applications traffic</StyledListItem>
          <StyledListItem>Tables are replicated 3 times across multiple AZ</StyledListItem>
          <StyledListItem>Using the Cassandra Query Language (CQL)</StyledListItem>
          <StyledListItem>Single-digit millisecond latency at any scale, 1000s of requests per second</StyledListItem>
          <StyledListItem>Capacity: On-demand mode or provisioned mode with auto-scaling</StyledListItem>
          <StyledListItem>Encryption, backup, Point-In-Time Recovery (PITR) up to 35 days</StyledListItem>
          <Spacer />
          <StyledListItem><BoldText>Use case</BoldText>: store IoT (internet of things) devices info, time-series data</StyledListItem>
          <Spacer />
          <SubTitle id="qldb">Amazon QLDB (Quantum Ledger Database)</SubTitle>
          <StyledListItem>A ledger is a book recording financial transactions</StyledListItem>
          <StyledListItem>Fully Managed, Serverless, Highly Available, Replication across 3 AZ</StyledListItem>
          <StyledListItem>Used to review history of all the changes made to your application data over time</StyledListItem>
          <StyledListItem>Immutable system: no entry can be removed or modified, cryptographically verifiable</StyledListItem>
          <StyledListItem>2-3 times better performance than common ledger blockchain frameworks, manipulate data using SQL</StyledListItem>
          <StyledListItem>Difference with Amazon Managed Blockchain: no decentralization component, in accordance with financial regulation rules</StyledListItem>
          <Spacer />
          <SubTitle id="timestream">Amazon Timestream</SubTitle>
          <StyledListItem>Fully managed, fast, scalable, serverless time series database</StyledListItem>
          <StyledListItem>A graph containing points with a time included</StyledListItem>
          <StyledListItem>Automatically scales up / down to adjust capacity</StyledListItem>
          <StyledListItem>Store and analyze trillions of events per day</StyledListItem>
          <StyledListItem>1000s times faster & 1/10th the cost of relational database</StyledListItem>
          <StyledListItem>Scheduled queries, multi-measure records, SQL compatibility</StyledListItem>
          <StyledListItem>Data storage tiering: recent data kept in memory and historical data kept in a cost-optimized storage</StyledListItem>
          <StyledListItem>Built-in time series analytics functions (helps you identify patterns in your data in near real-time)</StyledListItem>
          <StyledListItem>Encryption in transit and at rest</StyledListItem>
          <Spacer />
          <StyledListItem><BoldText>Use case</BoldText>: IoT (internet of things) applications, operational applications, real-time analytics</StyledListItem>
          <Spacer />
          <SubTitle id="skip">List of Ports</SubTitle>
          <StyledListItem>FTP: 21</StyledListItem>
          <StyledListItem>SSH: 22</StyledListItem>
          <StyledListItem>SFTP: 22</StyledListItem>
          <StyledListItem>HTTP: 80</StyledListItem>
          <StyledListItem>HTTPS: 443</StyledListItem>
          <StyledListItem>PostgreSQL: 5432</StyledListItem>
          <StyledListItem>MySQL: 3306</StyledListItem>
          <StyledListItem>Maria DB: 3306</StyledListItem>
          <StyledListItem>Oracle RDS: 1521</StyledListItem>
          <StyledListItem>MSSQL Server: 1433</StyledListItem>
          <StyledListItem>Aurora (PostgerSQL): 5432</StyledListItem>
          <StyledListItem>Aurora (MySQL): 3306</StyledListItem>
          <Spacer />
        </Text>
      </Container>
    </Wrapper>
  );
}

export default AWSDatabases;