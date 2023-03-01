import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Under Construction',
    img: '/img/ilya-pavlov-OqtafYT5kTw-unsplash.jpg',
    credits: (
        <>
          <span className="meta">
              Picture Credits&nbsp;
              <a href="https://unsplash.com/@ilyapavlov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ilya Pavlov</a> on&nbsp;
              <a href="https://unsplash.com/de/fotos/OqtafYT5kTw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </span>
        </>
    ),
    description: (
      <>
          This Page is currently under construction. Not all manuals are available yet. If you searching for an manual that is not listed yet, please <br/><b>Checkout our existing Site <a target="_blank" href={"https://nx-designs.ch/support/manuals"}>here</a></b>.
      </>
    ),
  },
  // {
  //   title: 'Focus on What Matters',
  //   Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  //   description: (
  //     <>
  //       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
  //       ahead and move your docs into the <code>docs</code> directory.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Powered by React',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({img, credits, title, description}) {
  return (
    <div className={clsx('col col--6 col--offset-3')}>
      <div className="text--center">
        <img src={img} className="intro_image" />
          <div>{credits}</div>
      </div>
      <div className="text--center padding--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row align-items-center">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
