import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './basics.module.css';

type LessonLink = {
  title: string;
  href: string;
  kind?: 'lesson' | 'practice' | 'exam' | 'project';
};

type Chapter = {
  number: string;
  title: string;
  summary: string;
  duration: string;
  lessons: LessonLink[];
  practice: LessonLink[];
  exams?: LessonLink[];
};

type NextCourse = {
  title: string;
  href: string;
  image: string;
  description: string;
  meta: string;
};

const chapters: Chapter[] = [
  {
    number: '01',
    title: 'Làm quen Python',
    summary: 'Hiểu Python dùng để làm gì, chạy file đầu tiên và luyện cách in thông tin rõ ràng.',
    duration: '2 bài',
    lessons: [
      {title: 'Tổng quan và chương trình đầu tiên', href: '/docs/python-basics/lam-quen-python/bai-01-tong-quan'},
    ],
    practice: [
      {title: 'Đề luyện làm quen Python', href: '/docs/python-basics/lam-quen-python/bai-01a-baitap', kind: 'exam'},
    ],
  },
  {
    number: '02',
    title: 'Biến và kiểu dữ liệu',
    summary: 'Lưu dữ liệu, ép kiểu, nhận input và tạo các chương trình nhỏ có dữ liệu người dùng.',
    duration: '2 bài',
    lessons: [
      {title: 'Biến, kiểu dữ liệu và ép kiểu', href: '/docs/python-basics/bien-kieu-du-lieu/bai-02-bien'},
    ],
    practice: [
      {title: 'Đề luyện biến và kiểu dữ liệu', href: '/docs/python-basics/bien-kieu-du-lieu/bai-02a-bien', kind: 'exam'},
    ],
  },
  {
    number: '03',
    title: 'Toán tử',
    summary: 'Tính toán giá trị mới, kiểm tra đúng sai bằng so sánh và logic để chuẩn bị học if.',
    duration: '11 bài',
    lessons: [
      {title: 'Toán tử số học', href: '/docs/python-basics/toan-tu/bai-01-toan-tu-so-hoc'},
      {title: 'Toán tử so sánh', href: '/docs/python-basics/toan-tu/bai-02-toan-tu-so-sanh'},
      {title: 'Toán tử logic', href: '/docs/python-basics/toan-tu/bai-03-toan-tu-logic'},
      {title: 'Toán tử gán', href: '/docs/python-basics/toan-tu/bai-04-toan-tu-gan'},
      {title: 'Toán tử bitwise', href: '/docs/python-basics/toan-tu/bai-05-toan-tu-bitwise'},
    ],
    practice: [
      {title: 'Thực hành toán tử số học', href: '/docs/python-basics/toan-tu/bai-01-toan-tu-so-hoc-thuc-hanh', kind: 'practice'},
      {title: 'Thực hành toán tử so sánh', href: '/docs/python-basics/toan-tu/bai-02-toan-tu-so-sanh-thuc-hanh', kind: 'practice'},
      {title: 'Thực hành toán tử logic', href: '/docs/python-basics/toan-tu/bai-03-toan-tu-logic-thuc-hanh', kind: 'practice'},
      {title: 'Thực hành toán tử gán', href: '/docs/python-basics/toan-tu/bai-04-toan-tu-gan-thuc-hanh', kind: 'practice'},
      {title: 'Thực hành toán tử bitwise', href: '/docs/python-basics/toan-tu/bai-05-toan-tu-bitwise-thuc-hanh', kind: 'practice'},
    ],
    exams: [
      {title: 'Bài tập tổng hợp operator', href: '/docs/python-basics/toan-tu/bai-03a-baitap', kind: 'exam'},
    ],
  },
  {
    number: '04',
    title: 'Rẽ nhánh và thuật toán',
    summary: 'Dùng kết quả True/False để viết chương trình biết ra quyết định.',
    duration: '9 bài',
    lessons: [
      {title: 'If else', href: '/docs/python-basics/re-nhanh-dieu-kien/bai-01-if-else'},
      {title: 'Lưu đồ thuật toán', href: '/docs/python-basics/re-nhanh-dieu-kien/bai-02-luu-do-thuat-toan'},
      {title: 'Match case cơ bản', href: '/docs/python-basics/re-nhanh-dieu-kien/bai-03-1-match-case'},
      {title: 'Pattern matching', href: '/docs/python-basics/re-nhanh-dieu-kien/bai-03-2-pattern-match-case'},
    ],
    practice: [
      {title: 'Thực hành if else', href: '/docs/python-basics/re-nhanh-dieu-kien/bai-01-if-else-thuc-hanh', kind: 'practice'},
      {title: 'Thực hành lưu đồ', href: '/docs/python-basics/re-nhanh-dieu-kien/bai-02-luu-do-thuat-toan-thuc-hanh', kind: 'practice'},
      {title: 'Thực hành match case', href: '/docs/python-basics/re-nhanh-dieu-kien/bai-03-1-match-case-thuc-hanh', kind: 'practice'},
      {title: 'Thực hành pattern matching', href: '/docs/python-basics/re-nhanh-dieu-kien/bai-03-2-pattern-match-case-thuc-hanh', kind: 'practice'},
    ],
    exams: [
      {title: 'Đề luyện điều kiện', href: '/docs/python-basics/re-nhanh-dieu-kien/baitap-004', kind: 'exam'},
    ],
  },
  {
    number: '05',
    title: 'Vòng lặp',
    summary: 'Tự động hóa việc lặp lại: điểm danh, đếm lượt, xử lý nhiều dòng dữ liệu.',
    duration: '10 bài',
    lessons: [
      {title: 'Vòng lặp for', href: '/docs/python-basics/vong-lap/bai-01-vong-lap-for'},
      {title: 'Vòng lặp while', href: '/docs/python-basics/vong-lap/bai-02-vong-lap-while'},
      {title: 'Vòng lặp lồng nhau', href: '/docs/python-basics/vong-lap/bai-03-vong-lap-long-nhau'},
      {title: 'Kỹ thuật lặp', href: '/docs/python-basics/vong-lap/bai-04-cac-ky-thuat'},
    ],
    practice: [
      {title: 'Thực hành for', href: '/docs/python-basics/vong-lap/bai-01-vong-lap-for-thuc-hanh', kind: 'practice'},
      {title: 'Thực hành while', href: '/docs/python-basics/vong-lap/bai-02-vong-lap-while-thuc-hanh', kind: 'practice'},
      {title: 'Thực hành vòng lặp lồng nhau', href: '/docs/python-basics/vong-lap/bai-03-vong-lap-long-nhau-thuc-hanh', kind: 'practice'},
      {title: 'Thực hành kỹ thuật lặp', href: '/docs/python-basics/vong-lap/bai-04-cac-ky-thuat-thuc-hanh', kind: 'practice'},
    ],
    exams: [
      {title: 'Đề vòng lặp tại lớp', href: '/docs/python-basics/vong-lap/bai-05-bai_tap_thuc_hanh', kind: 'exam'},
      {title: 'Đề vòng lặp nâng cao', href: '/docs/python-basics/vong-lap/bai-06-bai_tap_vong_lap_python', kind: 'exam'},
    ],
  },
  {
    number: '06',
    title: 'Chuỗi',
    summary: 'Xử lý tên, tin nhắn, username, hashtag và dữ liệu văn bản.',
    duration: '4 bài',
    lessons: [
      {title: 'Chuỗi trong Python', href: '/docs/python-basics/chuoi/bai-01-string'},
      {title: 'Phương thức xử lý chuỗi', href: '/docs/python-basics/chuoi/bai-02-string-method'},
    ],
    practice: [
      {title: 'Thực hành chuỗi', href: '/docs/python-basics/chuoi/bai-01-string-thuc-hanh', kind: 'practice'},
      {title: 'Thực hành string methods', href: '/docs/python-basics/chuoi/bai-02-string-method-thuc-hanh', kind: 'practice'},
    ],
  },
  {
    number: '07',
    title: 'Hàm',
    summary: 'Tách chương trình thành khối nhỏ, dễ đọc, dễ dùng lại và dễ kiểm tra.',
    duration: '7 bài',
    lessons: [
      {title: 'Khái niệm hàm', href: '/docs/python-basics/ham/bai-01-khai-niem-ham'},
      {title: 'Tham số và giá trị trả về', href: '/docs/python-basics/ham/bai-02-tham-so-va-gia-tri-tra-ve'},
      {title: 'Lambda function', href: '/docs/python-basics/ham/bai-03-ham-an-danh'},
    ],
    practice: [
      {title: 'Thực hành khái niệm hàm', href: '/docs/python-basics/ham/bai-01-khai-niem-ham-thuc-hanh', kind: 'practice'},
      {title: 'Thực hành tham số và return', href: '/docs/python-basics/ham/bai-02-tham-so-va-gia-tri-tra-ve-thuc-hanh', kind: 'practice'},
      {title: 'Thực hành lambda', href: '/docs/python-basics/ham/bai-03-ham-an-danh-thuc-hanh', kind: 'practice'},
    ],
    exams: [
      {title: 'Đề luyện hàm', href: '/docs/python-basics/ham/on-tap', kind: 'exam'},
    ],
  },
  {
    number: '08',
    title: 'Cấu trúc dữ liệu',
    summary: 'Quản lý danh sách, hồ sơ, bảng điểm, dữ liệu không trùng và dữ liệu cố định.',
    duration: '11 bài',
    lessons: [
      {title: 'Danh sách List', href: '/docs/python-basics/cau-truc-du-lieu/bai-01-danh-sach'},
      {title: 'Từ điển Dictionary', href: '/docs/python-basics/cau-truc-du-lieu/bai-02-tu-dien'},
      {title: 'Set và Tuple', href: '/docs/python-basics/cau-truc-du-lieu/bai-03-set-va-tuple'},
    ],
    practice: [
      {title: 'Thực hành List', href: '/docs/python-basics/cau-truc-du-lieu/bai-01-danh-sach-thuc-hanh', kind: 'practice'},
      {title: 'Thực hành Dictionary', href: '/docs/python-basics/cau-truc-du-lieu/bai-02-tu-dien-thuc-hanh', kind: 'practice'},
      {title: 'Thực hành Set và Tuple', href: '/docs/python-basics/cau-truc-du-lieu/bai-03-set-va-tuple-thuc-hanh', kind: 'practice'},
    ],
    exams: [
      {title: 'Đề luyện List', href: '/docs/python-basics/cau-truc-du-lieu/on-tap-list', kind: 'exam'},
      {title: 'Đề luyện Dictionary', href: '/docs/python-basics/cau-truc-du-lieu/on-tap-dict', kind: 'exam'},
      {title: 'Đề luyện Set và Tuple', href: '/docs/python-basics/cau-truc-du-lieu/on-tap-set-tuple', kind: 'exam'},
      {title: 'Đề tổng hợp cấu trúc dữ liệu', href: '/docs/python-basics/cau-truc-du-lieu/on-tap-tong-hop', kind: 'exam'},
      {title: 'Thực hành đăng nhập', href: '/docs/python-basics/cau-truc-du-lieu/practice', kind: 'project'},
    ],
  },
  {
    number: '09',
    title: 'Module và dự án nhỏ',
    summary: 'Tách code thành nhiều file, dùng module chuẩn và bắt đầu tổ chức dự án.',
    duration: '5 bài',
    lessons: [
      {title: 'Module trong Python', href: '/docs/python-basics/module-du-an-nho/bai-01-module'},
      {title: 'Quản lý module', href: '/docs/python-basics/module-du-an-nho/bai-03-duan'},
    ],
    practice: [
      {title: 'Thực hành module', href: '/docs/python-basics/module-du-an-nho/bai-01-module-thuc-hanh', kind: 'practice'},
      {title: 'Thực hành dự án nhỏ', href: '/docs/python-basics/module-du-an-nho/bai-03-duan-thuc-hanh', kind: 'practice'},
    ],
    exams: [
      {title: 'Đề luyện module', href: '/docs/python-basics/module-du-an-nho/bai-02-baitap', kind: 'exam'},
    ],
  },
  {
    number: '10',
    title: 'Xử lý ngoại lệ',
    summary: 'Giúp chương trình bình tĩnh khi người dùng nhập sai hoặc dữ liệu không như mong đợi.',
    duration: '4 bài',
    lessons: [
      {title: 'Ngoại lệ và xử lý ngoại lệ', href: '/docs/python-basics/xu-ly-ngoai-le/bai-01-ngoai-le-va-xu-ly'},
      {title: 'Ngoại lệ tùy chỉnh', href: '/docs/python-basics/xu-ly-ngoai-le/bai-02-ngoai-le-tuy-chinh'},
    ],
    practice: [
      {title: 'Thực hành try except', href: '/docs/python-basics/xu-ly-ngoai-le/bai-01-ngoai-le-va-xu-ly-thuc-hanh', kind: 'practice'},
      {title: 'Thực hành custom exception', href: '/docs/python-basics/xu-ly-ngoai-le/bai-02-ngoai-le-tuy-chinh-thuc-hanh', kind: 'practice'},
    ],
  },
  {
    number: '11',
    title: 'Đọc ghi file',
    summary: 'Lưu dữ liệu sau khi tắt chương trình bằng text, JSON và thao tác thư mục.',
    duration: '6 bài',
    lessons: [
      {title: 'Đọc và ghi file', href: '/docs/python-basics/doc-ghi-file/bai-01-doc-file'},
      {title: 'Làm việc với JSON', href: '/docs/python-basics/doc-ghi-file/bai-02-lam-viec-voi-json'},
      {title: 'File và module os', href: '/docs/python-basics/doc-ghi-file/bai-03-list-file-os'},
    ],
    practice: [
      {title: 'Thực hành đọc ghi file', href: '/docs/python-basics/doc-ghi-file/bai-01-doc-file-thuc-hanh', kind: 'practice'},
      {title: 'Thực hành JSON', href: '/docs/python-basics/doc-ghi-file/bai-02-lam-viec-voi-json-thuc-hanh', kind: 'practice'},
      {title: 'Thực hành os', href: '/docs/python-basics/doc-ghi-file/bai-03-list-file-os-thuc-hanh', kind: 'practice'},
    ],
  },
  {
    number: '12',
    title: 'Clean Code và PEP 8',
    summary: 'Viết code dễ đọc, dễ sửa, có tên biến tốt và cấu trúc chuyên nghiệp hơn.',
    duration: '4 bài',
    lessons: [
      {title: 'Clean Code trong Python', href: '/docs/python-basics/clean-code-pep8/bai-12-1-clean-code'},
      {title: 'PEP 8', href: '/docs/python-basics/clean-code-pep8/bai-12-2-pep-8'},
    ],
    practice: [
      {title: 'Thực hành Clean Code', href: '/docs/python-basics/clean-code-pep8/bai-12-1-clean-code-thuc-hanh', kind: 'practice'},
      {title: 'Thực hành PEP 8', href: '/docs/python-basics/clean-code-pep8/bai-12-2-pep-8-thuc-hanh', kind: 'practice'},
    ],
  },
];

const reviewLinks: LessonLink[] = [
  {title: 'Đề kiểm tra giữa khóa', href: '/docs/python-basics/on-tap-va-du-an/mid', kind: 'exam'},
  {title: 'Đề kiểm tra cuối khóa', href: '/docs/python-basics/on-tap-va-du-an/end', kind: 'exam'},
  {title: 'Đề luyện tổng hợp hàm', href: '/docs/python-basics/on-tap-va-du-an/on-tap-ham', kind: 'exam'},
  {title: 'Dự án thời khóa biểu', href: '/docs/python-basics/on-tap-va-du-an/practice-thoi-khoa-bieu', kind: 'project'},
  {title: 'Dự án thiết bị lớp học', href: '/docs/python-basics/on-tap-va-du-an/on-tap-buoi/bai-01-buoi1', kind: 'project'},
  {title: 'Đề tài cuối khóa', href: '/docs/python-basics/on-tap-va-du-an/detai', kind: 'project'},
];

const nextCourses: NextCourse[] = [
  {
    title: 'Python OOP nâng cao',
    image: '/img/courses/python-oop.svg',
    href: '/docs/python-advanced/PythonOOP-001%20Introduce/bai-010-gioi-thieu',
    description: 'Class, object, kế thừa, đa hình, abstraction, decorator và design patterns.',
    meta: 'Sau Python cơ bản',
  },
  {
    title: 'Python GUI với Tkinter',
    image: '/img/courses/python-gui.svg',
    href: '/docs/python-gui/bai-000-B%E1%BA%AFt%20%C4%91%E1%BA%A7u',
    description: 'Tạo cửa sổ, nút bấm, form nhập liệu, layout, listbox, combobox và drawing.',
    meta: 'Ứng dụng desktop',
  },
  {
    title: 'Lập trình Web với Flask',
    image: '/img/courses/python-flask.svg',
    href: '/docs/python-flask/Ch%C6%B0%C6%A1ng%201%20-%20HTML',
    description: 'Đi từ HTML, CSS, JavaScript đến backend Flask, database, giỏ hàng và deploy.',
    meta: 'Dự án web',
  },
];

function LinkList({title, items}: {title: string; items: LessonLink[]}) {
  return (
    <div className={styles.linkGroup}>
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <Link to={item.href}>
              <span className={styles.itemTitle}>{item.title}</span>
              <span className={styles.itemKind}>
                {item.kind === 'exam'
                  ? 'Đề'
                  : item.kind === 'project'
                    ? 'Dự án'
                    : item.kind === 'practice'
                      ? 'Thực hành'
                      : 'Bài học'}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ChapterBlock({chapter}: {chapter: Chapter}) {
  return (
    <article className={styles.chapter} id={`chapter-${chapter.number}`}>
      <div className={styles.chapterHeader}>
        <div>
          <span className={styles.chapterNumber}>Chương {chapter.number}</span>
          <Heading as="h3">{chapter.title}</Heading>
          <p>{chapter.summary}</p>
        </div>
        <span className={styles.duration}>{chapter.duration}</span>
      </div>
      <div className={styles.chapterGrid}>
        <LinkList title="Bài học" items={chapter.lessons} />
        <LinkList title="Thực hành tại lớp" items={chapter.practice} />
        {chapter.exams ? <LinkList title="Đề luyện" items={chapter.exams} /> : null}
      </div>
    </article>
  );
}

export default function PythonCourses(): ReactNode {
  return (
    <Layout
      title="Khóa học Python"
      description="Trang chọn bài học, bài tập và dự án Python trên Code for fun"
    >
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroLayout}>
              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}>Lộ trình Python</p>
                <Heading as="h1">Python cơ bản: học theo chương, luyện theo bài</Heading>
                <p className={styles.subtitle}>
                  Một trang chọn bài rõ ràng hơn sidebar: học sinh nhìn được toàn bộ lộ trình,
                  giáo viên chọn nhanh bài giảng, bài thực hành, đề luyện và dự án cuối khóa.
                </p>
                <div className={styles.actions}>
                  <Link className={styles.primaryButton} to="/docs/python-basics">
                    Vào tổng quan khóa học
                  </Link>
                  <a className={styles.secondaryButton} href="#curriculum">
                    Xem danh sách bài
                  </a>
                </div>
              </div>
              <aside className={styles.coursePanel} aria-label="Tóm tắt khóa Python cơ bản">
                <img src="/img/courses/python-basics.svg" alt="" className={styles.panelImage} />
                <div className={styles.panelBody}>
                  <strong>Python cơ bản</strong>
                  <span>12 chương nền tảng</span>
                  <span>60+ bài học và bài tập</span>
                  <span>Bài giảng, thực hành, đề kiểm tra, dự án</span>
                  <Link to="/docs/python-basics/lam-quen-python/bai-01-tong-quan">
                    Bắt đầu bài đầu tiên
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className={styles.quickNav}>
          <div className="container">
            <div className={styles.quickNavGrid}>
              {chapters.map((chapter) => (
                <a href={`#chapter-${chapter.number}`} key={chapter.number}>
                  <span>{chapter.number}</span>
                  {chapter.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.curriculum} id="curriculum">
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Curriculum</p>
              <Heading as="h2">Danh sách bài học và bài tập</Heading>
              <p>
                Mỗi chương được chia thành ba luồng: học lý thuyết, làm bài thực hành ngay tại
                lớp, rồi chuyển sang đề luyện hoặc dự án khi cần kiểm tra.
              </p>
            </div>
            <div className={styles.contentLayout}>
              <div className={styles.chapters}>
                {chapters.map((chapter) => (
                  <ChapterBlock chapter={chapter} key={chapter.number} />
                ))}
                <article className={styles.chapter} id="review">
                  <div className={styles.chapterHeader}>
                    <div>
                      <span className={styles.chapterNumber}>Ôn tập</span>
                      <Heading as="h3">Kiểm tra và dự án cuối khóa</Heading>
                      <p>
                        Khu vực dành cho đề tổng hợp, bài kiểm tra và dự án console để học sinh
                        ghép các kiến thức rời rạc thành sản phẩm nhỏ.
                      </p>
                    </div>
                    <span className={styles.duration}>6 mục</span>
                  </div>
                  <div className={styles.reviewGrid}>
                    {reviewLinks.map((item) => (
                      <Link to={item.href} key={item.href}>
                        <span>{item.kind === 'project' ? 'Dự án' : 'Đề luyện'}</span>
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </article>
              </div>

              <aside className={styles.studyGuide}>
                <Heading as="h2">Cách dùng trang này</Heading>
                <ol>
                  <li>Chọn chương theo lộ trình bên trái hoặc thanh chọn nhanh.</li>
                  <li>Học bài giảng trước, làm file thực hành ngay sau bài.</li>
                  <li>Dùng đề luyện khi cần kiểm tra hoặc giao bài về nhà.</li>
                  <li>Cuối khóa chọn một dự án để học sinh demo sản phẩm.</li>
                </ol>
                <a href="#review">Đi tới ôn tập và dự án</a>
              </aside>
            </div>
          </div>
        </section>

        <section className={styles.nextPath}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Sau khóa cơ bản</p>
              <Heading as="h2">Lộ trình tiếp theo</Heading>
            </div>
            <div className={styles.nextGrid}>
              {nextCourses.map((course) => (
                <article className={styles.nextCourse} key={course.title}>
                  <img src={course.image} alt="" />
                  <div>
                    <span>{course.meta}</span>
                    <Heading as="h3">{course.title}</Heading>
                    <p>{course.description}</p>
                    <Link to={course.href}>Xem khóa học</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
