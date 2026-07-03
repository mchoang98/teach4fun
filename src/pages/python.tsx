import type {ReactNode} from 'react';
import CourseLandingTemplate, {
  type CourseLandingCourse,
  type CourseLandingStat,
} from '@site/src/components/CourseLandingTemplate';

const courses: CourseLandingCourse[] = [
  {
    title: 'Python cơ bản',
    image: '/img/courses/python-basics.svg',
    href: '/docs/python-basics',
    description:
      'Lộ trình nền tảng để học cú pháp Python, biến, điều kiện, vòng lặp, hàm, dữ liệu, module và xử lý file.',
    badges: ['Người mới bắt đầu', '11 chủ đề', '40+ bài học'],
  },
  {
    title: 'Python OOP nâng cao',
    image: '/img/courses/python-oop.svg',
    href: '/docs/python-advanced/PythonOOP-001%20Introduce/bai-010-gioi-thieu',
    description:
      'Tập trung vào class, object, kế thừa, đa hình, trừu tượng hóa, decorator, module/package và design patterns.',
    badges: ['Sau Python cơ bản', '10 chủ đề', '25+ bài học'],
  },
  {
    title: 'Python GUI với Tkinter',
    image: '/img/courses/python-gui.svg',
    href: '/docs/python-gui/bai-000-B%E1%BA%AFt%20%C4%91%E1%BA%A7u',
    description:
      'Học cách tạo cửa sổ, nút bấm, textbox, layout, listbox, combobox, slider, vẽ hình và đọc ghi file.',
    badges: ['Thực hành ứng dụng', '12 bài chính', 'GUI desktop'],
  },
  {
    title: 'Lập trình Web với Python Flask',
    image: '/img/courses/python-flask.svg',
    href: '/docs/python-flask/Ch%C6%B0%C6%A1ng%201%20-%20HTML',
    description:
      'Lộ trình xây web từ frontend căn bản đến backend Flask, database, giỏ hàng, bảo mật và deploy sản phẩm.',
    badges: ['Dự án web', '5 chương', 'HTML, CSS, JS, Flask, Deploy'],
  },
];

const summaryStats: CourseLandingStat[] = [
  {value: '4', label: 'khóa học'},
  {value: '80+', label: 'bài học'},
  {value: '3', label: 'hướng dự án'},
];

export default function PythonCourses(): ReactNode {
  return (
    <CourseLandingTemplate
      layoutTitle="Khóa học Python"
      layoutDescription="Tổng hợp các khóa học Python trên Code for fun"
      eyebrow="Lộ trình Python"
      title="Chọn khóa học Python phù hợp"
      subtitle="Tất cả nội dung Python được gom lại tại một nơi: nền tảng, OOP, GUI và Flask."
      primaryAction={{label: 'Xem các khóa học', href: '#courses'}}
      secondaryAction={{label: 'Bắt đầu từ cơ bản', href: '/docs/python-basics'}}
      stats={summaryStats}
      statsAriaLabel="Tóm tắt lộ trình Python"
      sectionTitle="Danh sách khóa học"
      sectionDescription="Mỗi card tóm tắt mục tiêu, mức độ và nội dung chính để học viên chọn nhanh lộ trình phù hợp."
      courses={courses}
      cardActionLabel="Học ngay"
    />
  );
}
