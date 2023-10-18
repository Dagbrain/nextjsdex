import type { LiFiWidget } from '@lifi/widget';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css'

const LiFiWidgetDynamic = dynamic(
  () => import('@lifi/widget').then((module) => module.LiFiWidget) as any,
  {
    ssr: false,
  },
) as typeof LiFiWidget;

const Home: NextPage = () => {
  return (
    <main>
      <div className={styles.title}>
        <h1>PylonDEX</h1>
      </div>
      <div className={styles.Widget}>
    <LiFiWidgetDynamic integrator="PylonDEX"
      config={{
        fee: 0.01,
        fromChain: 137,
        toChain:137,
        containerStyle: {
          width: 392,
          height: 640,
          border: `0px solid rgb(234, 234, 234)`,
          borderRadius: '16px',
          display: 'flex',
          maxWidth: 392,
          boxShadow: '0 5px 15px 0 rgba(14, 245, 6, 0.425)',
        },
        theme: {
            palette: {
              primary: { main: 'rgba(14, 245, 6, 0.425)' },
              secondary: { main: 'rgba(14, 245, 6, 0.425)' },
            },
            shape: {
              borderRadius: 16,
              borderRadiusSecondary: 16,
              boxShadow: '0 5px 15px 0 rgba(14, 245, 6, 0.425)',
            },
            typography: {
              fontFamily: 'Comic Sans MS',
            },
          },
          appearance: 'dark',
          hiddenUI: ['appearance'],
          variant: 'expandable',
          subvariant: 'split',
      }}
    />
     </div>
    </main>
  );
};

export default Home;