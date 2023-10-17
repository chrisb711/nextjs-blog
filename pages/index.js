import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Accordion from '../components/Accordion/Accordion';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My Self Introduction</p>
        <p>
          This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
          ))}
        </ul>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className={utilStyles.anchorNav}>
            <Link href="#anchor-1" className={utilStyles.navItem}>
                Anchor 1 #
            </Link>
            <Link href="#anchor-2" className={utilStyles.navItem}>
                Anchor 2 #
            </Link>
            <Link href="#anchor-3" className={utilStyles.navItem}>
                Anchor 3 #
            </Link>
        </div>


        <div className={utilStyles.sectionElement} id="anchor-1">
            anchor 1
        </div>
        <div className={utilStyles.sectionElement} id="anchor-2">
            anchor 2<br/><br/>
            <Accordion title="Titel" />
        </div>
        <div className={utilStyles.sectionElement} id="anchor-3">
            anchor 3
        </div>
      </section>



    </Layout>
  );
}
