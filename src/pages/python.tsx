import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './python.module.css';

type Course = {
  title: string;
  image: string;
  href: string;
  level: string;
  duration: string;
  lessons: string;
  description: string;
};

const courses: Course[] = [
  {
    title: 'Python cơ bản',
    image: '/img/courses/python-basics.svg',
    href: '/docs/python-basics',
    level: 'Người mới bắt đầu',
    duration: '11 chủ đề',
    lessons: '40+ bài học',
    description:
      'Lộ trình nền tảng để học cú pháp Python, biến, điều kiện, vòng lặp, hàm, dữ liệu, module và xử lý file.',
  },
  {
    title: 'Python OOP nâng cao',
    image: '/img/courses/python-oop.svg',
    href: '/docs/python-advanced/PythonOOP-001%20Introduce/bai-010-gioi-thieu',
    level: 'Sau Python cơ bản',
    duration: '10 chủ đề',
    lessons: '25+ bài học',
    description:
      'Tập trung vào class, object, kế thừa, đa hình, trừu tượng hóa, decorator, module/package và design patterns.',
  },
  {
    title: 'Python GUI với Tkinter',
    image: '/img/courses/python-gui.svg',
    href: '/docs/python-gui/bai-000-Bắt%20đầu',
    level: 'Thực hành ứng dụng',
    duration: '12 bài chính',
    lessons: 'GUI desktop',
    description:
      'Học cách tạo cửa sổ, nút bấm, textbox, layout, listbox, combobox, slider, vẽ hình và đọc ghi file.',
  },
  {
    title: 'Lập trình Web với Python Flask',
    image: '/img/courses/python-flask.svg',
    href: '/docs/python-flask/Chương%201%20-%20HTML',
    level: 'Dự án web',
    duration: '5 chương',
    lessons: 'HTML, CSS, JS, Flask, Deploy',
    description:
      'Lộ trình xây web từ frontend căn bản đến backend Flask, database, giỏ hàng, bảo mật và deploy sản phẩm.',
  },
];

const summaryStats = [
  {value: '4', label: 'khóa học'},
  {value: '80+', label: 'bài học'},
  {value: '3', label: 'hướng dự án'},
];

function CourseCard({course}: {course: Course}) {
  return (
    <article className={styles.courseCard}>
      <img className={styles.courseImage} src={course.image} alt={course.title} />
      <div className={styles.courseBody}>
        <Heading as="h3" className={styles.courseTitle}>
          {course.title}
        </Heading>
        <p className={styles.courseDescription}>{course.description}</p>
        <div className={styles.metaRow}>
          <span className={styles.badge}>{course.level}</span>
          <span className={styles.badge}>{course.duration}</span>
          <span className={styles.badge}>{course.lessons}</span>
        </div>
        <div className={styles.cardFooter}>
          <Link className={styles.cardButton} to={course.href}>
            Học ngay
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function PythonCourses(): ReactNode {
  return (
    <Layout
      title="Khóa học Python"
      description="Tổng hợp các khóa học Python trên Code for fun">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>Lộ trình Python</p>
              <Heading as="h1" className={styles.title}>
                Chọn khóa học Python phù hợp
              </Heading>
              <p className={styles.subtitle}>
                Tất cả nội dung Python được gom lại tại một nơi: nền tảng, OOP,
                GUI và Flask.
              </p>
              <div className={styles.heroBottom}>
                <div className={styles.heroActions}>
                  <a className={styles.primaryButton} href="#courses">
                    Xem các khóa học
                  </a>
                  <Link className={styles.secondaryButton} to="/docs/python-basics">
                    Bắt đầu từ cơ bản
                  </Link>
                </div>
                <div className={styles.stats} aria-label="Tóm tắt lộ trình Python">
                  {summaryStats.map((stat) => (
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
              <Heading as="h2">Danh sách khóa học</Heading>
              <p>
                Mỗi card tóm tắt mục tiêu, mức độ và nội dung chính để học viên
                chọn nhanh lộ trình phù hợp.
              </p>
            </div>
            <div className={styles.courseGrid}>
              {courses.map((course) => (
                <CourseCard key={course.title} course={course} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
