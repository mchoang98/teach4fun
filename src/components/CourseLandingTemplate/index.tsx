import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

export type CourseLandingCourse = {
  title: string;
  image: string;
  href: string;
  description: string;
  badges: string[];
};

export type CourseLandingStat = {
  value: string;
  label: string;
};

export type CourseLandingAction = {
  label: string;
  href: string;
};

export type CourseLandingTemplateProps = {
  layoutTitle: string;
  layoutDescription: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryAction: CourseLandingAction;
  secondaryAction: CourseLandingAction;
  stats: CourseLandingStat[];
  statsAriaLabel: string;
  sectionTitle: string;
  sectionDescription: string;
  courses: CourseLandingCourse[];
  cardActionLabel?: string;
};

function CourseCard({
  course,
  cardActionLabel,
}: {
  course: CourseLandingCourse;
  cardActionLabel: string;
}) {
  return (
    <article className={styles.courseCard}>
      <img className={styles.courseImage} src={course.image} alt={course.title} />
      <div className={styles.courseBody}>
        <Heading as="h3" className={styles.courseTitle}>
          {course.title}
        </Heading>
        <p className={styles.courseDescription}>{course.description}</p>
        <div className={styles.metaRow}>
          {course.badges.map((badge) => (
            <span className={styles.badge} key={badge}>
              {badge}
            </span>
          ))}
        </div>
        <div className={styles.cardFooter}>
          <Link className={styles.cardButton} to={course.href}>
            {cardActionLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function CourseLandingTemplate({
  layoutTitle,
  layoutDescription,
  eyebrow,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  stats,
  statsAriaLabel,
  sectionTitle,
  sectionDescription,
  courses,
  cardActionLabel = 'Học ngay',
}: CourseLandingTemplateProps): ReactNode {
  return (
    <Layout title={layoutTitle} description={layoutDescription}>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>{eyebrow}</p>
              <Heading as="h1" className={styles.title}>
                {title}
              </Heading>
              <p className={styles.subtitle}>{subtitle}</p>
              <div className={styles.heroBottom}>
                <div className={styles.heroActions}>
                  <a className={styles.primaryButton} href={primaryAction.href}>
                    {primaryAction.label}
                  </a>
                  <Link className={styles.secondaryButton} to={secondaryAction.href}>
                    {secondaryAction.label}
                  </Link>
                </div>
                <div className={styles.stats} aria-label={statsAriaLabel}>
                  {stats.map((stat) => (
                    <div className={styles.stat} key={stat.label}>
                      <span className={styles.statValue}>{stat.value}</span>
                      <span className={styles.statLabel}>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="courses" className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2">{sectionTitle}</Heading>
              <p>{sectionDescription}</p>
            </div>
            <div className={styles.courseGrid}>
              {courses.map((course) => (
                <CourseCard
                  key={course.title}
                  course={course}
                  cardActionLabel={cardActionLabel}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
