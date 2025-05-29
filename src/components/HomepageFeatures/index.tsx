import Heading from '@theme/Heading';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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

export function Recruition() {
  const recruitBenefits: { title: string; descriptions: string[] }[] = [
    {
      title: 'Trải nghiệm thực tế quy mô lớn',
      descriptions: [
        'Bạn sẽ tham gia vào một dự án có kiến trúc rõ ràng, CI/CD chuyên nghiệp, quy trình phát triển bài bản (Agile/Scrum), giúp bạn hiểu rõ cách làm việc như một developer chuyên nghiệp.',
      ],
    },
    {
      title: 'Tham gia từ đầu → cơ hội kiến tạo sản phẩm',
      descriptions: [
        'Không chỉ là "code theo task", bạn sẽ được tham gia từ giai đoạn thiết kế hệ thống, kiến trúc, đưa ra giải pháp kỹ thuật — điều mà ít dự án outsource mang lại.',
        'Bạn sẽ là người trực tiếp thiết kế thuật toán, hệ thống của ứng dụng, từ đó hiểu rõ hơn về các system design',
      ],
    },
    {
      title: 'Mentorship & Peer Review',
      descriptions: [
        'Code của bạn sẽ được review, bạn cũng sẽ được tham gia review code của người khác. Điều này giúp bạn phát triển kỹ năng clean code, đọc hiểu hệ thống lớn, và tư duy phản biện.',
      ],
    },
    {
      title: 'Thử thách với công nghệ mới',
      descriptions: [
        'Chúng tôi đang sử dụng/study các công nghệ như [Spring Boot, React, Kubernetes, GraphQL, Kafka,…], phù hợp với những bạn muốn bắt kịp xu hướng công nghệ.',
        'Bạn sẽ được tự tay tạo nên hệ thống Microservice phức tạp và mạnh mẽ mà bất cứ công ti lớn nào trên thế giới đang sử dụng',
      ],
    },
  ];

  const recruitRequirements = [];

  return (
    <div style={{ backgroundColor: '', margin: '40px 0' }}>
      <header
        className=" "
        style={{
          textAlign: 'center',
          fontSize: 40,
          fontWeight: 800,
          margin: 30,
        }}>
        Bạn sẽ học được gì khi trở thành một trong những developers của chúng
        tôi?
      </header>
      <div
        className=""
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        {recruitBenefits.map((item, index) => {
          return (
            <div
              style={{
                maxWidth: 1000,
                boxShadow: ' 0 4px 10px rgba(0, 0, 0, 0.3)',
                border: '1px solid gray',
                borderRadius: 4,
                padding: 20,
                margin: 20,
              }}>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                }}>
                {index + 1}, {item.title}
              </h2>
              {item.descriptions.map((desc) => (
                <p style={{ margin: 20 }}> {desc}</p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
