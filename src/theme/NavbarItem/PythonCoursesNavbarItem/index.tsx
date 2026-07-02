import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';

type Course = {
  title: string;
  description: string;
  href: string;
  image: string;
};

type Props = {
  label?: string;
  to?: string;
  className?: string;
  mobile?: boolean;
};

const courses: Course[] = [
  {
    title: 'Python cơ bản',
    description: 'Cú pháp, biến, điều kiện, vòng lặp, hàm và dữ liệu.',
    href: '/docs/python-basics',
    image: '/img/courses/python-basics.svg',
  },
  {
    title: 'Python OOP nâng cao',
    description: 'Class, object, kế thừa, đa hình và design patterns.',
    href: '/docs/python-advanced/PythonOOP-001%20Introduce/bai-010-gioi-thieu',
    image: '/img/courses/python-oop.svg',
  },
  {
    title: 'Python GUI với Tkinter',
    description: 'Xây ứng dụng desktop với cửa sổ, nút bấm và layout.',
    href: '/docs/python-gui/bai-000-B%E1%BA%AFt%20%C4%91%E1%BA%A7u',
    image: '/img/courses/python-gui.svg',
  },
  {
    title: 'Web với Python Flask',
    description: 'HTML, CSS, JavaScript, Flask, database và deploy.',
    href: '/docs/python-flask/Ch%C6%B0%C6%A1ng%201%20-%20HTML',
    image: '/img/courses/python-flask.svg',
  },
];

function CourseLink({course}: {course: Course}) {
  return (
    <Link className={styles.courseLink} to={course.href}>
      <img className={styles.courseImage} src={useBaseUrl(course.image)} alt="" />
      <span className={styles.courseContent}>
        <span className={styles.courseTitle}>{course.title}</span>
        <span className={styles.courseDescription}>{course.description}</span>
      </span>
    </Link>
  );
}

export default function PythonCoursesNavbarItem({
  label = 'Python',
  to = '/python',
  className,
  mobile = false,
}: Props): ReactNode {
  if (mobile) {
    return (
      <>
        <Link className={clsx('menu__link', className)} to={to}>
          {label}
        </Link>
        <ul className={styles.mobileCourseList}>
          {courses.map((course) => (
            <li key={course.href}>
              <Link className="menu__link menu__link--sublist-caret" to={course.href}>
                {course.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <div className={clsx('navbar__item', styles.wrapper, className)}>
      <Link
        className={clsx('navbar__link', styles.trigger)}
        to={to}
        aria-haspopup="dialog">
        {label}
      </Link>
      <div className={styles.dialog} role="dialog" aria-label="Chọn nhanh khóa học Python">
        <div className={styles.dialogHeader}>
          <span className={styles.dialogTitle}>Chọn khóa học Python</span>
          <Link className={styles.viewAllLink} to="/python">
            Xem tất cả
          </Link>
        </div>
        <div className={styles.courseGrid}>
          {courses.map((course) => (
            <CourseLink key={course.href} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
