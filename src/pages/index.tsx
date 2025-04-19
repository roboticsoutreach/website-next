import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

import HomeContent from '../components/home-content/home-content.mdx';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">
            We are a society at the University of Southampton that runs robotics and STEM outreach events for young people.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="https://susu.org/groups/student-robotics-southampton">
              Join the Society
            </Link>

            <Link
              className="button button--secondary button--lg"
              to="https://discord.gg/eEAjAgY5Xe">
              Join us on Discord
            </Link>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <HomeContent></HomeContent>
        </div>

        <div className={clsx(styles.buttons, 'margin-bottom--lg')}>
          <Link
              className="button button--secondary"
              to="/kb/society/about">
              About Us
          </Link>
          <Link
              className="button button--secondary"
              to="/kb/society/meetings">
              Our Meetings
          </Link>
        </div>
      </main>
    </Layout>
  );
}
