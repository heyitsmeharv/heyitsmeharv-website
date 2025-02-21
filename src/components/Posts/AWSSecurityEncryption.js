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
  AWSKMSSVG,
  AWSSSMSVG,
  AWSSecretsManagerSVG,
  AWSCertificateManagerSVG,
  AWSSheildSVG,
  AWSFirewallSVG,
  AWSWAFSVG,
  AWSInspectorSVG,
  AWSMacieSVG
} from '../../resources/styles/icons';

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';
import Table from '../Table/Table';

// images
import TLSSSLExample from "../../resources/images/blog/AWSSecurityEncryption/aws_security_encryption_ssl_tls.jpeg";
import ServerSideEncryption from "../../resources/images/blog/AWSSecurityEncryption/aws_security_encryption_server_rest.jpeg";
import ClientSideEncryption from "../../resources/images/blog/AWSSecurityEncryption/aws_security_encryption_client.jpeg";
import CrossAccountSnapshot from "../../resources/images/blog/AWSSecurityEncryption/aws_security_encryption_cross_account_snapshot.jpeg";
import MultiRegionKeys from "../../resources/images/blog/AWSSecurityEncryption/aws_security_encryption_multi_region_keys.jpeg";
import DynamoDBKMSMultiRegion from "../../resources/images/blog/AWSSecurityEncryption/aws_security_encryption_dynamo_db_kms_multi_region_client_encryption.jpeg";
import AuroraDBKMSMultiRegion from "../../resources/images/blog/AWSSecurityEncryption/aws_security_encryption_aurora_db_kms_multi_region_client_encryption.jpeg";
import AMISharingKMS from "../../resources/images/blog/AWSSecurityEncryption/aws_security_encryption_ami_kms.jpeg";
import SSMParameterStore from "../../resources/images/blog/AWSSecurityEncryption/aws_security_encryption_ssm_parameter_store.jpeg";
import MultiRegionSecrets from "../../resources/images/blog/AWSSecurityEncryption/aws_security_encryption_multi_region_secrets.jpeg";
import AWSACM from "../../resources/images/blog/AWSSecurityEncryption/aws_security_encryption_acm.jpeg";
import AWSACMImportingPublicCertificates from "../../resources/images/blog/AWSSecurityEncryption/aws_security_encryption_acm_importing_public_certs.jpeg";
import AWSACMIntegrationWithALB from "../../resources/images/blog/AWSSecurityEncryption/aws_security_encryption_acm_integration_with_alb.jpeg";

// codeblocks
// import { cloudwatchlogsInsights, cloudwatchlogsAlarmStatus } from "../../helpers/codeblocks.js";

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

const AWSSecurityEncryption = () => {

  // analytics
  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      logPageView();
    }
  }, []);

  const columns = ['Feature', 'SSM Parameter Store', 'AWS Secrets Manager'];
  const data = [
    { Feature: 'Use Case', 'SSM Parameter Store': 'Configuration & secrets', 'AWS Secrets Manager': 'Primarily secrets' },
    { Feature: 'Encryption', 'SSM Parameter Store': 'KMS (optional)', 'AWS Secrets Manager': 'KMS (mandatory)' },
    { Feature: 'Rotation', 'SSM Parameter Store': 'Manual or Lambda', 'AWS Secrets Manager': 'Automated rotation' },
    { Feature: 'Versioning', 'SSM Parameter Store': 'Yes', 'AWS Secrets Manager': 'Yes' },
    { Feature: 'Pricing', 'SSM Parameter Store': 'Free (except for API calls)', 'AWS Secrets Manager': 'Paid service' }
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
          <Title>Amazon Security & Encryption</Title>
          <IconWrapper>
            <Icon><AWSSVG /></Icon>
            <Icon><AWSKMSSVG /></Icon>
            <Icon><AWSSSMSVG /></Icon>
            <Icon><AWSSecretsManagerSVG /></Icon>
            <Icon><AWSCertificateManagerSVG /></Icon>
            <Icon><AWSSheildSVG /></Icon>
            <Icon><AWSFirewallSVG /></Icon>
            <Icon><AWSWAFSVG /></Icon>
            <Icon><AWSInspectorSVG /></Icon>
            <Icon><AWSMacieSVG /></Icon>
          </IconWrapper>
        </FlexTop>
        <Spacer />
        <Text>
          In this post we'll be diving into Amazon's security and encryption solutions.
          <StyledAnchor href="#aws-encryption-overview"><StyledListItem>Encryption Overview</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-kms"><StyledListItem>KMS (Key Managed Service)</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-multi-region-keys"><StyledListItem>KMS Multi-Region Keys</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-s3-replication-encryption"><StyledListItem>S3 Replication Encryption</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-ami-sharing-via-kms"><StyledListItem>AMI Sharing Process Encrypted via KMS</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-ssm-parameter-store"><StyledListItem>SSM Parameter Store Overview</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-secrets-manager"><StyledListItem>AWS Secrets Manager</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-certificate-manager"><StyledListItem>AWS Certificate Manager (ACM)</StyledListItem></StyledAnchor>

          <Spacer />
          <SubTitle id="aws-encryption-overview">Encryption Overview</SubTitle>
          Encryption is necessary to protect sensitive information being sent or received over a network from being hijacked or leaked. The information (data)
          is encrypted before sending and decrypting after receiving.
          <HeadingSmall>Encryption in Flight (TLS/SSL)</HeadingSmall>
          <Spacer />
          <StyledImage src={TLSSSLExample} />
          <Spacer />
          <HeadingSmall>Server-side encryption at rest</HeadingSmall>
          <Spacer />
          <StyledImage src={ServerSideEncryption} />
          <Spacer />
          <HeadingSmall>Client-side encryption</HeadingSmall>
          <Spacer />
          <StyledImage src={ClientSideEncryption} />
          <Spacer />
          <SubTitle id="aws-kms">KMS (Key Managed Service)</SubTitle>
          AWS Key Management Service (AWS KMS) is a managed service that enables you to create, manage, and control cryptographic keys across AWS services and applications.
          It helps with securing data using encryption and provides centralized key management with fine-grained access control.
          <HeadingSmall>KMS Key Main Types</HeadingSmall>
          <UnStyledListItem>Symmetric (AES-256 keys)</UnStyledListItem>
          <StyledListItem>Single encryption key that is used to Encrypt and Decrypt</StyledListItem>
          <StyledListItem>AWS services that are integrated with KMS use Symmetric CMKs</StyledListItem>
          <StyledListItem>You never get access to the KMS Key unencrypted (must call KMS API to use)</StyledListItem>
          <Spacer />
          <UnStyledListItem>Asymmetric (RSA & ECC key pairs)</UnStyledListItem>
          <StyledListItem>Public (Encrypt) and Private Key (Decrypt) pair</StyledListItem>
          <StyledListItem>Used for Encrypt/Decrypt, or Sign/Verify operations</StyledListItem>
          <StyledListItem>The public key is downloadable, but you can't access the Private Key unencrypted</StyledListItem>
          <StyledListItem>Use case: encryption outside of AWS by users who can't call the KMS API</StyledListItem>
          <Spacer />
          <HeadingSmall>Copying Snapshots Across Regions</HeadingSmall>
          <Spacer />
          <StyledImage src={CrossAccountSnapshot} />
          <Spacer />
          <HeadingSmall>Types of KMS Keys</HeadingSmall>
          <StyledListItem>AWS Owned Keys (free): SSE-S3, SSE-SQS, SSE-DDB (default key)</StyledListItem>
          <StyledListItem>AWS Managed Key: free (aws/servicename, example: aws/rds or aws/ebs)</StyledListItem>
          <StyledListItem>Customer managed keys created in KMS: $1 / month</StyledListItem>
          <StyledListItem>Customer managed keys imported: $1 / month</StyledListItem>
          <StyledListItem>Pay for API call to KMS ($0.03 / 1000 calls)</StyledListItem>
          <Spacer />
          <HeadingSmall>Automatic Key Rotation</HeadingSmall>
          <StyledListItem>AWS-Managed KMS Key: every 1 year</StyledListItem>
          <StyledListItem>Customer-Managed KMS Key: (must be enabled) automatic & on-demand</StyledListItem>
          <StyledListItem>Imported KMS Key: only manual rotation possible using alias</StyledListItem>
          <Spacer />
          <HeadingSmall>KMS Key Policies</HeadingSmall>
          KMS policies work very similar to S3 policies however the difference is that you can't control access without the.
          <UnStyledListItem>Default KMS Key Policy</UnStyledListItem>
          <StyledListItem>Created if you don't provide a specific KMS Key Policy</StyledListItem>
          <StyledListItem>Complete access to the key for everyone in the AWS account</StyledListItem>
          <Spacer />
          <UnStyledListItem>Custom KMS Key Policy</UnStyledListItem>
          <StyledListItem>Define users, roles that can access the KMS key</StyledListItem>
          <StyledListItem>Define who can administer the key</StyledListItem>
          <StyledListItem>Useful for cross-account access of your KMS key</StyledListItem>
          <Spacer />
          <SubTitle id="aws-multi-region-keys">KMS Multi-Region Keys</SubTitle>
          A multi region key is where a primary key is replicated into other regions. The key material is replicated which means the id of the key will be the same across all regions.
          <Spacer />
          <StyledImage src={MultiRegionKeys} />
          <Spacer />
          <HeadingSmall>DynamoDB Global Tables and KMS Multi-Region Keys CLient-Side Encryption</HeadingSmall>
          <Spacer />
          <StyledImage src={DynamoDBKMSMultiRegion} />
          <Spacer />
          <HeadingSmall>Global Aurora and KMS Multi-Region Keys CLient-Side Encryption</HeadingSmall>
          <Spacer />
          <StyledImage src={AuroraDBKMSMultiRegion} />
          <Spacer />
          <SubTitle id="aws-s3-replication-encryption">S3 Replication Encryption</SubTitle>
          When setting up Amazon S3 Replication with encryption, there are several key considerations to ensure data security and compliance. Here's a breakdown of the most important factors:
          <UnStyledListItem><BoldText>Source and Destination Encryption Compatibility</BoldText></UnStyledListItem>
          <StyledListItem>Unencrypted objects and objects encrypted with SSE-S3 are replicated by default.</StyledListItem>
          <StyledListItem>If the source bucket has Server-Side Encryption (SSE) enabled, ensure the destination bucket supports the same or compatible encryption settings.</StyledListItem>
          <StyledListItem>If using SSE-KMS for encryption, both source and destination buckets must have the correct AWS KMS keys.</StyledListItem>
          <StyledListItem>The IAM role used for replication must have decrypt permissions on the source KMS key and encrypt permissions on the destination KMS key.</StyledListItem>
          <Spacer />
          <UnStyledListItem><BoldText>Enabling Replication with Encrypted Objects</BoldText></UnStyledListItem>
          <StyledListItem>Newly written objects (after enabling replication) will be replicated with encryption settings intact.</StyledListItem>
          <StyledListItem>Existing objects will not be replicated unless Batch Replication is used.</StyledListItem>
          <Spacer />
          <UnStyledListItem><BoldText>Changing Encryption During Replication</BoldText></UnStyledListItem>
          <StyledListItem>If an object in the source bucket is re-encrypted (e.g., changing from SSE-S3 to SSE-KMS), the replication does not automatically re-replicate it. You may need Batch Replication.</StyledListItem>
          <Spacer />
          <SubTitle id="aws-ami-sharing-via-kms">AMI Sharing Process Encrypted via KMS</SubTitle>
          It's possible to launch an EC2 instance using an AMI from one account into a different account by following these steps:
          <StyledListItem><BoldText>Grant Launch Permission</BoldText>- Modify the AMI properties in Account A to allow Account B to launch it.</StyledListItem>
          <StyledListItem><BoldText>Share the KMS Key</BoldText>- Update the key policy to grant Account B access to the encrypted AMI.</StyledListItem>
          <StyledListItem><BoldText>Set Up IAM in Account B</BoldText>- Create an IAM role or user with permissions to use both the AMI and KMS key, including access to DescribeKey, ReEncrypt, CreateGrant, and Decrypt API calls.</StyledListItem>
          <StyledListItem><BoldText>Launch the EC2 Instance</BoldText>- Once permissions are in place, Account B can launch an instance from the shared AMI. Optionally, Account B can re-encrypt the instance's volumes with its own KMS key.</StyledListItem>
          <Spacer />
          This process ensures secure AMI sharing and proper encryption management across AWS accounts.
          <Spacer />
          <StyledImage src={AMISharingKMS} />
          <Spacer />
          <SubTitle id="aws-ssm-parameter-store">SSM Parameter Store</SubTitle>
          AWS Systems Manager Parameter Store is a secure, scalable, and centralized storage solution for managing configuration data and sensitive information such as:
          <StyledListItem><BoldText>Database connection strings</BoldText></StyledListItem>
          <StyledListItem><BoldText>API keys</BoldText></StyledListItem>
          <StyledListItem><BoldText>Passwords</BoldText></StyledListItem>
          <StyledListItem><BoldText>Application configurations</BoldText></StyledListItem>
          <StyledListItem><BoldText>Environment variables</BoldText></StyledListItem>
          <Spacer />
          <StyledImage src={SSMParameterStore} />
          <Spacer />
          <SubTitle id="aws-secrets-manager">AWS Secrets Manager</SubTitle>
          AWS Secrets Manager is a fully managed service that helps you securely store, manage, and automatically rotate secrets such as:
          <StyledListItem><BoldText>Database credentials (RDS, Redshift, etc.)</BoldText></StyledListItem>
          <StyledListItem><BoldText>API keys</BoldText></StyledListItem>
          <StyledListItem><BoldText>OAuth tokens</BoldText></StyledListItem>
          <StyledListItem><BoldText>Application credentials</BoldText></StyledListItem>
          <StyledListItem><BoldText>Encryption keys</BoldText></StyledListItem>
          <StyledListItem><BoldText>Other sensitive configuration data</BoldText></StyledListItem>
          <Spacer />
          AWS Secrets Manager provides a secure, scalable, and automated solution for managing sensitive credentials and secrets. It is ideal for applications requiring automatic secret rotation, centralized secret storage, and strict security policies.
          <HeadingSmall>AWS Secrets Manager vs SSM Parameter Store</HeadingSmall>
          <Table data={data} columns={columns} />
          <HeadingSmall>Multi-Region Secrets</HeadingSmall>
          Secrets Manager can replicate secrets across multiple AWS regions by keeping read replicas in sync with the primary secret. It also provides the ability to promote a read replica secret to a standalone secret.
          <Spacer />
          <StyledImage src={MultiRegionSecrets} />
          <Spacer />
          <SubTitle id="aws-certificate-manager">AWS Certificate Manager (ACM)</SubTitle>
          AWS Certificate Manager (ACM) is a managed service that simplifies the process of provisioning, managing, and deploying SSL/TLS certificates for use with AWS services and internal resources. These certificates help secure network communications
          by encrypting data and ensuring the integrity of transmitted information.
          <Spacer />
          <StyledImage src={AWSACM} />
          <Spacer />
          <HeadingSmall>Requesting Public Certificates</HeadingSmall>
          To request a public certificate in AWS Certificate Manager (ACM), start by navigating to the ACM console and selecting the option to request a certificate. Choose a public certificate and enter the required domain names, including any wildcard domains if needed.
          Select a validation method—either DNS validation, which involves adding a CNAME record to your DNS provider, or email validation, which requires approving an email sent to the domain owner. Submit the request and complete the validation process based on your chosen method.
          Once validated, ACM issues the certificate, which can be used with AWS services like ELB, CloudFront, and API Gateway. ACM manages the certificate lifecycle, including automatic renewals for DNS-validated certificates, while email validation requires manual approval for renewals. Public certificates from ACM cannot be exported for external use.
          <HeadingSmall>Importing Public Certificates</HeadingSmall>
          There is no automatic renewal for certificates, you must import a new certificate before expiry. You can generate certificates outside of ACM and import them into the service. ACM sends daily expiration events starting 45 days prior to expiration. The number of days can be configured.
          AWS Config has a managed rule named acm-certificate-expiration-check to check for expiring certificates.
          <Spacer />
          <StyledImage src={AWSACMImportingPublicCertificates} />
          <Spacer />
          <HeadingSmall>Integration with ALB</HeadingSmall>
          AWS Certificate Manager (ACM) integrates with Application Load Balancers (ALB) to provide secure SSL/TLS termination for web applications. This integration simplifies the management of SSL certificates by automating issuance, renewal, and deployment.
          <Spacer />
          <StyledImage src={AWSACMIntegrationWithALB} />
          <Spacer />
        </Text>
      </Container>
    </Wrapper >
  );
}

export default AWSSecurityEncryption;