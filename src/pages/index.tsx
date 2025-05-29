import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import LogoUrl from '@site/static/img/icon.png';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import { Recruition } from '../components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary ', styles.heroBanner)}>
      <div className="container ">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}></div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <div
        className={clsx(styles.BriefDescribe)}
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 4,
        }}>
        <Heading
          as="h2"
          className="hero__title"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
          }}>
          <span>Studying languages in a funny, interactive, and smarter</span>
        </Heading>
        <img
          width={100}
          height={100}
          style={{
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
          }}
          src={LogoUrl}></img>
      </div>
      <main>
        <Recruition></Recruition>
      </main>
    </Layout>
  );
}
