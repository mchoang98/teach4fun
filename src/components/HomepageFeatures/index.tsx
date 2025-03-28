import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  gif: string; // Use URL of the GIF
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Bài Học Tương Tác',
    gif: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDgzNjlxbHB2dzkxdWl4dWd2OWtwcHB0ZzNkbXZubGRucHk5cWM1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ifeW9wTv01cHDocrY2/giphy.gif', // GIF URL
    description: (
      <>
        Nền tảng của chúng tôi cung cấp các bài học tương tác giúp bạn học lập trình qua việc thực hành ngay lập tức.
      </>
    ),
  },
  {
    title: 'Khu Vườn Mã Lệnh',
    gif: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHNyb2tsdzRnMXp0aXRhcXF4NWFpaXoyY3QwbDlrZ3h2dnM0dHFjYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2IudUHdI075HL02Pkk/giphy.gif', // GIF URL
    description: (
      <>
        Thử nghiệm mã lệnh trực tiếp trong trình duyệt với khu vườn mã lệnh tích hợp sẵn, không cần thiết lập phức tạp!
      </>
    ),
  },
  {
    title: 'Theo Dõi Tiến Trình',
    gif: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3oxdnFkb294cnZzNGxpYnZvMWJ2aDhud3Y0a25kcG94c3hyc2l1byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohhwMWeNKJIj3Rcha/giphy.gif', // GIF URL
    description: (
      <>
        Theo dõi quá trình học tập của bạn từ người mới bắt đầu đến nâng cao với hệ thống theo dõi tiến trình.
      </>
    ),
  },
];

function Feature({ title, gif, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* Hiển thị GIF */}
        <img src={gif} alt={title} className={styles.featureGif} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
