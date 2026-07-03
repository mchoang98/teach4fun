import type {ReactNode} from 'react';
import CourseLandingTemplate, {
  type CourseLandingCourse,
  type CourseLandingStat,
} from '@site/src/components/CourseLandingTemplate';

const courses: CourseLandingCourse[] = [
  {
    title: 'Tổng quan AWS Cloud',
    image: '/img/courses/cloud-aws.svg',
    href: '/docs/cloud/aws',
    description:
      'Nắm bức tranh tổng thể của khóa AWS cho Developer, các domain kiến thức và lộ trình học DVA-C02.',
    badges: ['AWS Developer', 'DVA-C02', 'Mục lục tổng quát'],
  },
  {
    title: 'Foundation và IAM',
    image: '/img/courses/cloud-aws.svg',
    href: '/docs/cloud/aws/chuong1/bai-01-tong-quan-aws-cloud-computing',
    description:
      'Học nền tảng Cloud Computing, AWS account, region, CLI/SDK, shared responsibility và IAM cơ bản.',
    badges: ['Chương 1-2', 'Bảo mật nền tảng', 'CLI/SDK'],
  },
  {
    title: 'Compute, Lambda và API',
    image: '/img/courses/cloud-aws.svg',
    href: '/docs/cloud/aws/chuong3/tong_quan_compute_tren_aws',
    description:
      'Triển khai backend serverless với Lambda, version/alias, concurrency, API Gateway, auth, CORS và throttling.',
    badges: ['Chương 3-4', 'Serverless', 'API Gateway'],
  },
  {
    title: 'Data store và Messaging',
    image: '/img/courses/cloud-aws.svg',
    href: '/docs/cloud/aws/chuong5/bai-01-tong-quan-data-store-tren-aws',
    description:
      'Làm việc với DynamoDB, S3, RDS, SQS, SNS, EventBridge và các pattern event-driven thường gặp.',
    badges: ['Chương 5-6', 'DynamoDB/S3', 'SQS/SNS'],
  },
  {
    title: 'Security nâng cao',
    image: '/img/courses/cloud-aws.svg',
    href: '/docs/cloud/aws/chuong7/bai_01_tong_quan_security_nang_cao',
    description:
      'Tìm hiểu Cognito, KMS, Secrets Manager, Parameter Store và các best practices bảo mật cho developer.',
    badges: ['Chương 7', 'Cognito/KMS', 'Secrets'],
  },
  {
    title: 'Deploy, Monitoring và Ôn thi',
    image: '/img/courses/cloud-aws.svg',
    href: '/docs/cloud/aws/chuong8/MUC_LUC_CHUONG_8',
    description:
      'Hệ thống hóa CloudFormation, SAM, CodePipeline, CloudWatch, X-Ray, troubleshooting và luyện đề DVA-C02.',
    badges: ['Chương 8-10', 'CI/CD', 'Mock exam'],
  },
];

const summaryStats: CourseLandingStat[] = [
  {value: '10', label: 'chương'},
  {value: '70+', label: 'bài học'},
  {value: '1', label: 'lộ trình DVA-C02'},
];

export default function CloudCourses(): ReactNode {
  return (
    <CourseLandingTemplate
      layoutTitle="Khóa học Cloud"
      layoutDescription="Tổng hợp lộ trình AWS Cloud cho Developer trên Code for fun"
      eyebrow="Lộ trình Cloud"
      title="Chọn chủ đề Cloud phù hợp"
      subtitle="Tất cả nội dung AWS cho Developer được gom lại tại một nơi: nền tảng, bảo mật, serverless, data store, deployment, monitoring và ôn thi DVA-C02."
      primaryAction={{label: 'Xem các chủ đề', href: '#courses'}}
      secondaryAction={{label: 'Bắt đầu từ tổng quan', href: '/docs/cloud/aws'}}
      stats={summaryStats}
      statsAriaLabel="Tóm tắt lộ trình Cloud"
      sectionTitle="Danh sách chủ đề"
      sectionDescription="Mỗi card gom các chương liên quan để học viên chọn nhanh phần Cloud cần học hoặc ôn tập."
      courses={courses}
      cardActionLabel="Học ngay"
    />
  );
}
