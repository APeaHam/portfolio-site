import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from '@react-email/components';
import React from 'react';

interface contactEmail {
  email?: string;
  name?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const contactEmail = ({
  email, name,
}: contactEmail) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>Thank you for the email</Preview>
      <Container style={container}>
        <Heading style={h1}>Thank you for the email {name}</Heading>
        <Text style={{ ...text, marginBottom: '16px' }}>
          I will be in touch 2-3 business days.
        </Text>
        <Text style={{ ...text, marginBottom: '14px' }}>
          Message:
        </Text>
        <code  style={code}>{email}</code>
        <Text style={{ ...text, marginTop: '14px' }}>
          ~ Andy Pham 
        </Text>
        <Img
          src={`${baseUrl}/static/logo(3).png`}
          width="32"
          height="32"
          alt="Andy Pham"
          style= {
            {marginTop: '30px'}
          }
        />
        
      </Container>
    </Body>
  </Html>
);

contactEmail.PreviewProps = {
  email: 'sparo-ndigo-amurt-secan',
  name: 'Andy Pham',
} as contactEmail;

export default contactEmail;

const main = {
  backgroundColor: '#ffffff',
};

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
};

const link = {
  color: '#2754C5',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textDecoration: 'underline',
};

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '24px 0',
};

const footer = {
  color: '#898989',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
  lineHeight: '22px',
  marginTop: '12px',
  marginBottom: '24px',
};

const code = {
  display: 'inline-block',
  padding: '16px 4.5%',
  width: '90.5%',
  backgroundColor: '#f4f4f4',
  borderRadius: '5px',
  border: '1px solid #eee',
  color: '#333',
};
