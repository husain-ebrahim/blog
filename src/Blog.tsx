import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import * as faker from 'faker';

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: faker.name.findName(),
  description:
    faker.lorem.paragraph(),
  image: faker.image.sports(),
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: faker.name.findName(),
    date: faker.date.month(),
    description:
      faker.lorem.sentence(10),
    image: faker.image.animals(),
    imageLabel: 'Image Text',
  },
  {
    title: faker.music.genre(),
    date: faker.date.month(),
    description:
    faker.lorem.sentence(10),
    image: faker.image.animals(),
    imageLabel: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    faker.lorem.sentence(50),
  archives: [
    { title: faker.date.month(), url: '#' },
    { title: faker.date.month(), url: '#' },
    { title: faker.date.month(), url: '#' },
    { title: faker.date.month(), url: '#' },
    { title: faker.date.month(), url: '#' },
    { title: faker.date.month(), url: '#' },
    { title: faker.date.month(), url: '#' },
    { title: faker.date.month(), url: '#' },
    { title: faker.date.month(), url: '#' },
    { title: faker.date.month(), url: '#' },
    { title: faker.date.month(), url: '#' },
  ]
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Test Website" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
             />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
