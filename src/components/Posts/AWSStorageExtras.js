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
  AWSSnowSVG,
  AWSFSXSVG,
  AWSStorageGatewaySVG,
  AWSTransferFamilySVG,
  AWSDataSyncSVG,
} from '../../resources/styles/icons';

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';
import Table from '../Table/Table';

// images
import SnowballGlacier from "../../resources/images/blog/AWSStorageExtras/aws_storage_extras_snowball_glacier.jpeg";
import FSxSupport from "../../resources/images/blog/AWSStorageExtras/aws_storage_extras_fsx.jpeg";
import FSxScratchFileSystem from "../../resources/images/blog/AWSStorageExtras/aws_storage_extras_fsx_scratch_file_system.jpeg";
import FSxPersistantFileSystem from "../../resources/images/blog/AWSStorageExtras/aws_storage_extras_fsx_persistent_file_system.jpeg";
import FSxNetApp from "../../resources/images/blog/AWSStorageExtras/aws_storage_extras_fsx_netapp.jpeg";
import FSxOpenZFS from "../../resources/images/blog/AWSStorageExtras/aws_storage_extras_fsx_openzfs.jpeg";
import StorageGatewayS3 from "../../resources/images/blog/AWSStorageExtras/aws_storage_extras_storage_gateway_s3.jpeg";
import VolumeGateway from "../../resources/images/blog/AWSStorageExtras/aws_storage_extras_volume_gateway.jpeg";
import TapeGateway from "../../resources/images/blog/AWSStorageExtras/aws_storage_extras_tape_gateway.jpeg";
import StorageGateway from "../../resources/images/blog/AWSStorageExtras/aws_storage_extras_storage_gateway.jpeg";

// codeblocks


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

const AWSStorageExtras = () => {

  // analytics
  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      logPageView();
    }
  }, []);

  const columns = ['Device', 'Compute', 'Memory', 'Storage'];
  const data = [
    { Device: 'Snowball Edge Storage Optimised', Compute: '104 vCPUs.', Memory: '416 GB', Storage: '210 TB' },
    { Device: 'Snowball Edge Compute Optimised', Compute: '104 vCPUs.', Memory: '416 GB', Storage: '28 TB' },
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
          <Title>Amazon Storage Extras</Title>
          <IconWrapper>
            <Icon><AWSSVG /></Icon>
            <Icon><AWSSnowSVG /></Icon>
            <Icon><AWSFSXSVG /></Icon>
            <Icon><AWSStorageGatewaySVG /></Icon>
            <Icon><AWSTransferFamilySVG /></Icon>
            <Icon><AWSDataSyncSVG /></Icon>
          </IconWrapper>
        </FlexTop>
        <Spacer />
        <Text>
          In this post we'll be diving into Amazon's storage extras.
          <StyledAnchor href="#aws-snowball"><StyledListItem>Snowball</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-fsx"><StyledListItem>FSx</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-storage-gateway"><StyledListItem>Storage Gateway</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-transfer-family"><StyledListItem>Transfer Family</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-data-sync"><StyledListItem>Data Sync</StyledListItem></StyledAnchor>
          <StyledAnchor href="#storage-options-comparison"><StyledListItem>Storage Options Comparison</StyledListItem></StyledAnchor>
          <Spacer />
          <SubTitle id="aws-snowball">Snowball</SubTitle>
          AWS Snowball is a service designed to facilitate secure, large-scale data transfer into and out of AWS. It is ideal for migrating large datasets where traditional methods (like the internet) would take too long or be cost-prohibitive.
          Snowball is a portable device to collect and process data at the edge, and migrate data into and out of AWS.
          <Spacer />
          <Table columns={columns} data={data} />
          <Spacer />
          <SubTitleSmall>Snowball into Glacier</SubTitleSmall>
          Snowball cannot import to Glacier directly so S3 must be used first, in combination with an S3 lifecycle policy.
          <Spacer />
          <StyledImage src={SnowballGlacier} />
          <Spacer />
          <SubTitle id="aws-fsx">FSx</SubTitle>
          Amazon FSx is a fully managed file storage service from AWS that provides high-performance file systems optimized for a variety of workloads. It enables customers to run applications that require shared file storage without needing to manage
          the underlying infrastructure. FSx supports multiple file systems, allowing organizations to choose the best option for their needs.
          <Spacer />
          <StyledImage src={FSxSupport} />
          <Spacer />
          <StyledListItem><BoldTextSmall>Amazon FSx for Windows File Server</BoldTextSmall>:</StyledListItem>
          <StyledListItemIndent>Provides a Windows-native file system (SMB protocol).</StyledListItemIndent>
          <StyledListItemIndent>Integrates with Active Directory.</StyledListItemIndent>
          <StyledListItemIndent>Supports DFS namespaces, NTFS permissions, and shadow copies.</StyledListItemIndent>
          <StyledListItemIndent>Ideal for Windows-based applications, file shares, and home directories.</StyledListItemIndent>
          <StyledListItemIndent>Can be mounted on Linux EC2 instances.</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldTextSmall>Amazon FSx for Lustre</BoldTextSmall>:</StyledListItem>
          <StyledListItemIndent>High-performance file system optimized for high-throughput workloads.</StyledListItemIndent>
          <StyledListItemIndent>Ideal for HPC, machine learning, analytics, and media processing.</StyledListItemIndent>
          <StyledListItemIndent>Supports integration with Amazon S3 for hybrid workflows.</StyledListItemIndent>
          <Spacer />
          <SubTitleSmall>FSx File System Deployment Options</SubTitleSmall>
          <StyledListItem><BoldTextSmall>Scratch File System</BoldTextSmall>:</StyledListItem>
          <StyledListItemIndent>Temporary Storage.</StyledListItemIndent>
          <StyledListItemIndent>Data not replicated (doesn't persist if the server fails).</StyledListItemIndent>
          <StyledListItemIndent>High burst.</StyledListItemIndent>
          <StyledListItemIndent>Usage: short-term processing, optimise costs.</StyledListItemIndent>
          <Spacer />
          <StyledImage src={FSxScratchFileSystem} />
          <Spacer />
          <StyledListItem><BoldTextSmall>Persistent File System</BoldTextSmall>:</StyledListItem>
          <StyledListItemIndent>Long term storage.</StyledListItemIndent>
          <StyledListItemIndent>Data is replicated within the same AZ.</StyledListItemIndent>
          <StyledListItemIndent>Replaced failed files within minutes.</StyledListItemIndent>
          <StyledListItemIndent>Usage: long term processing, sensitive data.</StyledListItemIndent>
          <Spacer />
          <StyledImage src={FSxPersistantFileSystem} />
          <Spacer />
          <StyledListItem><BoldTextSmall>Amazon FSx for NetApp ONTAP</BoldTextSmall>:</StyledListItem>
          <StyledListItemIndent>Fully managed NetApp ONTAP file system.</StyledListItemIndent>
          <StyledListItemIndent>Supports SMB, NFS, and iSCSI.</StyledListItemIndent>
          <StyledListItemIndent>Offers NetApp features like snapshots, replication, and deduplication.</StyledListItemIndent>
          <StyledListItemIndent>Suitable for enterprise applications and hybrid cloud storage.</StyledListItemIndent>
          <StyledListItemIndent>Point-in-time instantaneous cloning (helpful for testing new workloads).</StyledListItemIndent>
          <Spacer />
          <StyledImage src={FSxNetApp} />
          <Spacer />
          <StyledListItem><BoldTextSmall>Amazon FSx for OpenZFS</BoldTextSmall>:</StyledListItem>
          <StyledListItemIndent>High-performance ZFS-based file system.</StyledListItemIndent>
          <StyledListItemIndent>Provides snapshot, cloning, and compression capabilities.</StyledListItemIndent>
          <StyledListItemIndent>Ideal for DevOps, CI/CD, and data-intensive applications.</StyledListItemIndent>
          <StyledListItemIndent>Point-in-time instantaneous cloning (helpful for testing new workloads).</StyledListItemIndent>
          <Spacer />
          <StyledImage src={FSxOpenZFS} />
          <Spacer />
          <SubTitle id="aws-storage-gateway">Storage Gateway</SubTitle>
          Amazon Storage Gateway is a hybrid cloud storage service that enables on-premises applications to use AWS cloud storage securely, efficiently, and seamlessly. It helps businesses extend their existing
          on-premises storage to AWS, providing scalable, cost-effective storage for backups, disaster recovery, archiving, and cloud migration.
          <Spacer />
          <SubTitleSmall>Types of Amazon Storage Gateways</SubTitleSmall>
          <HeadingSmall>S3 File Gateway</HeadingSmall>
          <StyledListItem>Configured S3 buckets are configured using the NFS and SMB protocol.</StyledListItem>
          <StyledListItem>Supports S3 Standard, S3 Standard IA, S3 One Zone A, S3 Intelligent Tiering.</StyledListItem>
          <StyledListItem>Transition to S3 Glacier using Lifecycle Policy.</StyledListItem>
          <StyledListItem>Bucket access using IAM roles for each File Gateway.</StyledListItem>
          <StyledListItem>SMB protocol has integration with Active Directory (AD) for authentication.</StyledListItem>
          <Spacer />
          <StyledImage src={StorageGatewayS3} />
          <Spacer />
          <HeadingSmall>Volume Gateway</HeadingSmall>
          <StyledListItem>Block storage using iSCSI protocol backed by S3.</StyledListItem>
          <StyledListItem>Backed by EBS snapshots which can help restore on-premises volumes.</StyledListItem>
          <StyledListItem>Cached volumes: low latency access to most recent data.</StyledListItem>
          <StyledListItem>Stored volumes: entire dataset is on premise, scheduled backups to S3.</StyledListItem>
          <Spacer />
          <StyledImage src={VolumeGateway} />
          <Spacer />
          <HeadingSmall>Tape Gateway</HeadingSmall>
          <StyledListItem>Provides a virtual tape library (VTL) that integrates with existing backup applications.</StyledListItem>
          <StyledListItem>Stores virtual tapes in Amazon S3, with automatic tiering to Glacier for long-term archiving.</StyledListItem>
          <StyledListItem>Compatible with backup software like Veeam, Veritas, Commvault, and NetBackup.</StyledListItem>
          <StyledListItem>Use Cases: Backup, archival, disaster recovery.</StyledListItem>
          <Spacer />
          <StyledImage src={TapeGateway} />
          <Spacer />
          <SubTitleSmall>Storage Gateway - Hardware appliance</SubTitleSmall>
          Using Storage Gateway means you need on-premise virtualisation, otherwise you can use a Storage Gateway Hardware Appliance - which works with File Gateway, Volume Gateway and Tape Gateway.
          <Spacer />
          <StyledImage src={StorageGateway} />
          <Spacer />
          <SubTitle id="aws-transfer-family">Transfer Family</SubTitle>
          Amazon Transfer Family is a fully managed secure file transfer service that enables businesses to transfer files into and out of AWS using standard file transfer protocols such as SFTP
          (Secure File Transfer Protocol), FTPS (File Transfer Protocol over SSL/TLS), and FTP (File Transfer Protocol). It provides seamless integration with Amazon S3 and Amazon EFS, enabling organizations
          to move, process, and store files efficiently in the AWS cloud.
          <SubTitle id="aws-data-sync">Data Sync</SubTitle>

          <SubTitle id="storage-options-comparison">Storage Options Comparison</SubTitle>

        </Text>
      </Container>
    </Wrapper>
  );
}

export default AWSStorageExtras;