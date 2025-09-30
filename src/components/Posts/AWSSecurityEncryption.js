import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";



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
  AWSShieldSVG,
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
import AWSACMIntegrationWithAPIGateway from "../../resources/images/blog/AWSSecurityEncryption/aws_security_encryption_acm_integration_with_api_gateway.jpeg";
import AWSWAFFixedIP from "../../resources/images/blog/AWSSecurityEncryption/aws_security_encryption_waf_fixed_ip.jpeg";
import AWSGuardDuty from "../../resources/images/blog/AWSSecurityEncryption/aws_security_encryption_guard_duty.jpeg";
import AWSInspector from "../../resources/images/blog/AWSSecurityEncryption/aws_security_encryption_inspector.jpeg";
import AWSMacie from "../../resources/images/blog/AWSSecurityEncryption/aws_security_encryption_macie.jpeg";

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
            <Icon><AWSShieldSVG /></Icon>
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
          <StyledAnchor href="#aws-waf"><StyledListItem>AWS Web Application Firewall</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-shield"><StyledListItem>AWS Shield</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-firewall-manager"><StyledListItem>AWS Firewall Manager</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-guard-duty"><StyledListItem>AWS Guard Duty</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-inspector"><StyledListItem>AWS Inspector</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-macie"><StyledListItem>AWS Macie</StyledListItem></StyledAnchor>
          <Spacer />
          <SubTitle id="aws-encryption-overview">Encryption Overview</SubTitle>
          Encryption is necessary to protect sensitive information being sent or received over a network from being hijacked or leaked. The information (data)
          is encrypted before sending and decrypting after receiving.
          <SubTitleSmall>Encryption in Flight (TLS/SSL)</SubTitleSmall>
          <Spacer />
          <StyledImage src={TLSSSLExample} />
          <Spacer />
          <SubTitleSmall>Server-side encryption at rest</SubTitleSmall>
          <Spacer />
          <StyledImage src={ServerSideEncryption} />
          <Spacer />
          <SubTitleSmall>Client-side encryption</SubTitleSmall>
          <Spacer />
          <StyledImage src={ClientSideEncryption} />
          <Spacer />
          <SubTitle id="aws-kms">KMS (Key Managed Service)</SubTitle>
          AWS Key Management Service (AWS KMS) is a managed service that enables you to create, manage, and control cryptographic keys across AWS services and applications.
          It helps with securing data using encryption and provides centralized key management with fine-grained access control.
          <SubTitleSmall>KMS Key Main Types</SubTitleSmall>
          <StyledListItem><BoldText>Symmetric (AES-256 keys)</BoldText></StyledListItem>
          <StyledListItemIndent>Single encryption key that is used to Encrypt and Decrypt</StyledListItemIndent>
          <StyledListItemIndent>AWS services that are integrated with KMS use Symmetric CMKs</StyledListItemIndent>
          <StyledListItemIndent>You never get access to the KMS Key unencrypted (must call KMS API to use)</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldText>Asymmetric (RSA & ECC key pairs)</BoldText></StyledListItem>
          <StyledListItemIndent>Public (Encrypt) and Private Key (Decrypt) pair</StyledListItemIndent>
          <StyledListItemIndent>Used for Encrypt/Decrypt, or Sign/Verify operations</StyledListItemIndent>
          <StyledListItemIndent>The public key is downloadable, but you can't access the Private Key unencrypted</StyledListItemIndent>
          <StyledListItemIndent>Use case: encryption outside of AWS by users who can't call the KMS API</StyledListItemIndent>
          <Spacer />
          <SubTitleSmall>Copying Snapshots Across Regions</SubTitleSmall>
          <Spacer />
          <StyledImage src={CrossAccountSnapshot} />
          <Spacer />
          <SubTitleSmall>Types of KMS Keys</SubTitleSmall>
          <StyledListItem>AWS Owned Keys (free): SSE-S3, SSE-SQS, SSE-DDB (default key)</StyledListItem>
          <StyledListItem>AWS Managed Key: free (aws/servicename, example: aws/rds or aws/ebs)</StyledListItem>
          <StyledListItem>Customer managed keys created in KMS: $1 / month</StyledListItem>
          <StyledListItem>Customer managed keys imported: $1 / month</StyledListItem>
          <StyledListItem>Pay for API call to KMS ($0.03 / 1000 calls)</StyledListItem>
          <Spacer />
          <SubTitleSmall>Automatic Key Rotation</SubTitleSmall>
          <StyledListItem>AWS-Managed KMS Key: every 1 year</StyledListItem>
          <StyledListItem>Customer-Managed KMS Key: (must be enabled) automatic & on-demand</StyledListItem>
          <StyledListItem>Imported KMS Key: only manual rotation possible using alias</StyledListItem>
          <Spacer />
          <SubTitleSmall>KMS Key Policies</SubTitleSmall>
          KMS policies work very similar to S3 policies however the difference is that you can't control access without the.
          <StyledListItem><BoldText>Default KMS Key Policy</BoldText></StyledListItem>
          <StyledListItemIndent>Created if you don't provide a specific KMS Key Policy</StyledListItemIndent>
          <StyledListItemIndent>Complete access to the key for everyone in the AWS account</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldText>Custom KMS Key Policy</BoldText></StyledListItem>
          <StyledListItemIndent>Define users, roles that can access the KMS key</StyledListItemIndent>
          <StyledListItemIndent>Define who can administer the key</StyledListItemIndent>
          <StyledListItemIndent>Useful for cross-account access of your KMS key</StyledListItemIndent>
          <Spacer />
          <SubTitle id="aws-multi-region-keys">KMS Multi-Region Keys</SubTitle>
          A multi region key is where a primary key is replicated into other regions. The key material is replicated which means the id of the key will be the same across all regions.
          <Spacer />
          <StyledImage src={MultiRegionKeys} />
          <Spacer />
          <SubTitleSmall>DynamoDB Global Tables and KMS Multi-Region Keys CLient-Side Encryption</SubTitleSmall>
          <Spacer />
          <StyledImage src={DynamoDBKMSMultiRegion} />
          <Spacer />
          <SubTitleSmall>Global Aurora and KMS Multi-Region Keys CLient-Side Encryption</SubTitleSmall>
          <Spacer />
          <StyledImage src={AuroraDBKMSMultiRegion} />
          <Spacer />
          <SubTitle id="aws-s3-replication-encryption">S3 Replication Encryption</SubTitle>
          When setting up Amazon S3 Replication with encryption, there are several key considerations to ensure data security and compliance. Here's a breakdown of the most important factors:
          <UnStyledListItem><BoldText>Source and Destination Encryption Compatibility</BoldText></UnStyledListItem>
          <StyledListItemIndent>Unencrypted objects and objects encrypted with SSE-S3 are replicated by default.</StyledListItemIndent>
          <StyledListItemIndent>If the source bucket has Server-Side Encryption (SSE) enabled, ensure the destination bucket supports the same or compatible encryption settings.</StyledListItemIndent>
          <StyledListItemIndent>If using SSE-KMS for encryption, both source and destination buckets must have the correct AWS KMS keys.</StyledListItemIndent>
          <StyledListItemIndent>The IAM role used for replication must have decrypt permissions on the source KMS key and encrypt permissions on the destination KMS key.</StyledListItemIndent>
          <Spacer />
          <UnStyledListItem><BoldText>Enabling Replication with Encrypted Objects</BoldText></UnStyledListItem>
          <StyledListItemIndent>Newly written objects (after enabling replication) will be replicated with encryption settings intact.</StyledListItemIndent>
          <StyledListItemIndent>Existing objects will not be replicated unless Batch Replication is used.</StyledListItemIndent>
          <Spacer />
          <UnStyledListItem><BoldText>Changing Encryption During Replication</BoldText></UnStyledListItem>
          <StyledListItemIndent>If an object in the source bucket is re-encrypted (e.g., changing from SSE-S3 to SSE-KMS), the replication does not automatically re-replicate it. You may need Batch Replication.</StyledListItemIndent>
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
          <SubTitleSmall>AWS Secrets Manager vs SSM Parameter Store</SubTitleSmall>
          <Table data={data} columns={columns} />
          <SubTitleSmall>Multi-Region Secrets</SubTitleSmall>
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
          <SubTitleSmall>Requesting Public Certificates</SubTitleSmall>
          To request a public certificate in AWS Certificate Manager (ACM), start by navigating to the ACM console and selecting the option to request a certificate. Choose a public certificate and enter the required domain names, including any wildcard domains if needed.
          Select a validation method—either DNS validation, which involves adding a CNAME record to your DNS provider, or email validation, which requires approving an email sent to the domain owner. Submit the request and complete the validation process based on your chosen method.
          Once validated, ACM issues the certificate, which can be used with AWS services like ELB, CloudFront, and API Gateway. ACM manages the certificate lifecycle, including automatic renewals for DNS-validated certificates, while email validation requires manual approval for renewals. Public certificates from ACM cannot be exported for external use.
          <SubTitleSmall>Importing Public Certificates</SubTitleSmall>
          There is no automatic renewal for certificates, you must import a new certificate before expiry. You can generate certificates outside of ACM and import them into the service. ACM sends daily expiration events starting 45 days prior to expiration. The number of days can be configured.
          AWS Config has a managed rule named acm-certificate-expiration-check to check for expiring certificates.
          <Spacer />
          <StyledImage src={AWSACMImportingPublicCertificates} />
          <Spacer />
          <SubTitleSmall>Integration with ALB</SubTitleSmall>
          AWS Certificate Manager (ACM) integrates with Application Load Balancers (ALB) to provide secure SSL/TLS termination for web applications. This integration simplifies the management of SSL certificates by automating issuance, renewal, and deployment.
          <Spacer />
          <StyledImage src={AWSACMIntegrationWithALB} />
          <Spacer />
          <SubTitleSmall>API Gateway - Endpoint Types</SubTitleSmall>
          <UnStyledListItem><BoldText>Edge-Optimised (default)</BoldText>:</UnStyledListItem>
          <StyledListItemIndent>Requests are routed through the CloudFront edge locations (improves latency)</StyledListItemIndent>
          <StyledListItemIndent>The API Gateway still lives in only one region</StyledListItemIndent>
          <UnStyledListItem><BoldText>Regional</BoldText>:</UnStyledListItem>
          <StyledListItemIndent>For clients within the same region</StyledListItemIndent>
          <StyledListItemIndent>Could manually combine with CloudFront (more control over the caching strategies and the distribution</StyledListItemIndent>
          <UnStyledListItem><BoldText>Private</BoldText>:</UnStyledListItem>
          <StyledListItemIndent>Can only be accessed from your VPC using an interface VPC endpoint (ENI)</StyledListItemIndent>
          <StyledListItemIndent>Use a resource policy to define access</StyledListItemIndent>
          <Spacer />
          <SubTitleSmall>Integration with API Gateway</SubTitleSmall>
          <UnStyledListItem><BoldText>Edge-Optimised Endpoints</BoldText>:</UnStyledListItem>
          <StyledListItemIndent>These endpoints use CloudFront distributions, so the ACM certificate should be provisioned in the US East (N. Virginia) region</StyledListItemIndent>
          <UnStyledListItem><BoldText>Regional Endpoints</BoldText>:</UnStyledListItem>
          <StyledListItemIndent>The ACM certificate must reside in the same AWS region where your API Gateway is deployed.</StyledListItemIndent>
          <Spacer />
          <StyledImage src={AWSACMIntegrationWithAPIGateway} />
          <Spacer />
          <SubTitle id="aws-waf">AWS Web Application Firewall</SubTitle>
          AWS WAF (Web Application Firewall) is a cloud-native security service that helps protect your web applications from common web exploits and vulnerabilities. It works by letting you define customizable rules to filter incoming traffic and block malicious requests before they reach your backend infrastructure.
          It's possible to deploy on:
          <StyledListItem>Application Load Balancer</StyledListItem>
          <StyledListItem>API Gateway</StyledListItem>
          <StyledListItem>CloudFront</StyledListItem>
          <StyledListItem>AppSync GraphQL API</StyledListItem>
          <StyledListItem>Cognito User Pool</StyledListItem>
          <Spacer />
          <SubTitleSmall>Web Access Control Lists</SubTitleSmall>
          You can define Web ACL's which act as rules for controlling traffic flow. Rules can inspect various parts of a web request, such as IP addresses, query strings, headers, and body content. You are allowed up to 10,000 IP addresses. Web ACLs are regional except for CloudFront.
          <StyledListItem><BoldText>Individual Rules:</BoldText> Each rule within a Web ACL specifies a set of criteria (e.g., IP addresses, string patterns, SQL injection signatures, XSS (cross-site-scripting) attacks, geo-match (block countries), rate-based rules (DDoS protection) ) to match parts of an incoming request.</StyledListItem>
          <StyledListItem><BoldText>Actions:</BoldText> Every rule comes with an associated action:</StyledListItem>
          <StyledListItemIndent>Block: Immediately stop the request.</StyledListItemIndent>
          <StyledListItemIndent>Allow: Permit the request if it meets the criteria.</StyledListItemIndent>
          <StyledListItemIndent>Count: Log the request for monitoring without affecting the outcome.</StyledListItemIndent>
          <StyledListItem><BoldText>Rule Groups:</BoldText> For better organization and reusability, multiple rules can be bundled into rule groups. AWS also offers managed rule groups—pre-configured by AWS or third-party providers—to simplify protection against common threats.</StyledListItem>
          <Spacer />
          <SubTitleSmall>Fixed IP while using WAF with Load Balancer</SubTitleSmall>
          WAF does not support Network Load Balancer so you can use Global Accelerator for fixed IP and a WAF on the Application Load Balancer.
          <Spacer />
          <StyledImage src={AWSWAFFixedIP} />
          <Spacer />
          <SubTitle id="aws-shield">AWS Shield</SubTitle>
          AWS Shield is designed to protect AWS-hosted applications from DDoS attacks, ensuring that malicious traffic does not overwhelm your infrastructure or degrade performance.
          <SubTitleSmall>Tiers of Service</SubTitleSmall>
          <StyledListItem><BoldText>Shield Standard:</BoldText> Automatically available for all AWS customers at no additional cost. It protects against the most common, frequently occurring network and transport layer attacks.</StyledListItem>
          <StyledListItem><BoldText>Shield Advanced:</BoldText> Provides additional detection and mitigation capabilities, expanded protection against more sophisticated attacks, cost protection measures, and 24/7 access to the AWS DDoS Response Team (DRT).</StyledListItem>
          <Spacer />
          <SubTitle id="aws-firewall-manager">AWS Firewall Manager</SubTitle>
          <SubTitleSmall>Centralised Management</SubTitleSmall>
          AWS Firewall Manager enables you to centrally configure, manage, and enforce security policies across your entire AWS organization. This is especially beneficial when you have many accounts and resources, ensuring consistent security measures.
          <SubTitleSmall>Policy Enforcement</SubTitleSmall>
          It streamlines the process of applying rules to services such as AWS WAF (Web Application Firewall), AWS Shield Advanced, VPC security groups, and more. This unified approach helps maintain a strong security posture and minimizes manual configuration errors.
          <Spacer />
          In summary, AWS Firewall Manager is a powerful tool for organizations looking to maintain a robust and uniform security posture across a complex, multi-account AWS environment. By automating policy enforcement and integrating seamlessly with AWS Organizations and other security services, it helps ensure that your cloud resources remain secure, compliant, and well-managed.
          <SubTitle id="aws-guard-duty">AWS Guard Duty</SubTitle>
          AWS GuardDuty is a managed threat detection service that continuously monitors your AWS environment for malicious or unauthorized activity. It leverages machine learning, anomaly detection, and integrated threat intelligence to identify potential security issues, allowing you to respond promptly before threats impact your operations. It can specifically protect against CryptoCurrency attacks
          (has a dedicated finding for it).
          <Spacer />
          <StyledImage src={AWSGuardDuty} />
          <Spacer />
          <SubTitle id="aws-inspector">AWS Inspector</SubTitle>
          AWS Inspector is an automated security assessment service designed to help you improve the security and compliance of applications deployed on AWS. It identifies vulnerabilities and deviations from security best practices across your AWS environment by analyzing your resource configurations and software.
          Inspector continuously examines your AWS resources—such as EC2 instances, container images, and potentially other services—to identify potential security vulnerabilities, misconfigurations, and deviations from best practices.
          <Spacer />
          <StyledImage src={AWSInspector} />
          <Spacer />
          <SubTitle id="aws-macie">AWS Macie</SubTitle>
          AWS Macie automatically identifies and categorizes sensitive data such as personally identifiable information (PII), financial data, or intellectual property, helping you understand what data you have and where it resides in your Amazon S3 buckets. By continuously monitoring your S3 storage for sensitive data, Macie helps you maintain compliance with data privacy regulations and internal security policies.
          <Spacer />
          <StyledImage src={AWSMacie} />
          <Spacer />
        </Text>
      </Container>
    </Wrapper >
  );
}

export default AWSSecurityEncryption;