import {
  Heading,
  Button,
  Form,
  FormField,
  TextInput,
  TextArea,
  Box,
  Image,
  Stack,
  Paragraph,
  Grid,
  Carousel
} from 'grommet'
import Head from 'next/head'

export default () => (
  <>
    <Head>
      <title>Jelly Ninja</title>
      <link
        href="https://fonts.googleapis.com/css?family=Amatic+SC|Roboto&display=swap"
        rel="stylesheet"
      />
    </Head>
    <main
      style={{
        padding: 0
      }}
    >
      <img
        src="/static/phone.png"
        style={{
          position: 'absolute',
          right: 125,
          bottom: -250,
          width: 250,
          zIndex: -1
        }}
      />
      <img
        src="/static/artboard.png"
        style={{
          position: 'absolute',
          height: '100vh',
          right: 0
        }}
      />
      <Box align="center" animation="fadeIn" justify="center" height="large">
        <Heading level={1} alignSelf="center">
          Developing mobile and web apps from scratch to launch
        </Heading>
        <Button primary label="get a quoute within a day" />
      </Box>
      <Box>
        <img src="/static/logo.png" width="48" height="48" />
      </Box>

      <Box pad="xlarge" style={{ zIndex: 1, background: 'white' }}>
        <Heading level={2}>Here is how we are doing that</Heading>
        <Heading level={3}>First meeting</Heading>
        <Paragraph>
          Let us hear the problem that you are trying to fix and we'll go
          through it together to prepare the end goal, strategy and plan.
        </Paragraph>
        <Heading level={3} alignSelf="end">
          Research and prototyping
        </Heading>
        <Paragraph alignSelf="end">
          We going to refine the idea down to value proposition, then come up
          with hypothesis that verify viability with help of quantitative and
          qualitative study.
        </Paragraph>
        <Heading level={3}>Production</Heading>
        <Paragraph>
          Canonical software development by battle tested methodologies and
          engineering paradigms.
        </Paragraph>
        <Heading level={3} alignSelf="end">
          Rinse and repeat
        </Heading>
        <Paragraph alignSelf="end">
          We support all the way through first sales to in house team assembly
          and hand over process.
        </Paragraph>
      </Box>
      <Box pad="xlarge">
        <Heading level={2}>Our work</Heading>
        <Box>
          <Box align="center">
            <Heading level={3}>Ajaib</Heading>
            <Paragraph>
              Indonesian investment banking app build with Django for database
              api and back office, react native framework.
            </Paragraph>
            <Image src="/static/ajaib00.png" />
          </Box>
          <Box align="center">
            <Heading level={3}>Ready to meet</Heading>
            <Paragraph>
              Dating app build with expo and fire base for backend.
            </Paragraph>
            <Image src="/static/readytomeet00.png" />
          </Box>
          <Box align="center">
            <Heading level={3}>Restbook</Heading>
            <Paragraph>
              Restaurant table reservation app. Third place hackathone winner.
            </Paragraph>
            <Image src="/static/restbook00.png" />
          </Box>
          <Box align="center">
            <Heading level={3}>Flip.Chat</Heading>
            <Paragraph>
              Secure and fast mobile messenger build with cocos2d cross platform
              framework as client and php phalcon framework.
            </Paragraph>
            <Image src="/static/flipchat00.png" />
          </Box>
          <Box align="center">
            <Heading level={3}>Yol</Heading>
            <Paragraph>
              Social network app for Azerbaijan car owners build with php
              laravel framework and with android and swift client.
            </Paragraph>
            <Image src="/static/yol00.png" />
          </Box>
        </Box>
      </Box>
      <Box>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf9fkEr3P4qESTr9Sh0LM3V_YlDtDdayTGEhEuEKlIoxLgQdA/viewform?embedded=true"
          height="903"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading...
        </iframe>
      </Box>
    </main>
  </>
)
