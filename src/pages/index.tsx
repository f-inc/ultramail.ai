import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import { IconArrowNarrowRight } from "@tabler/icons-react";

declare var require: any;

export default function Home() {
  const notion =
    "https://www.notion.so/fdotinc/README-ee3239524e6e42b790f8b76470837cb6?pvs=4";
  return (
    <>
      <Head>
        <title>Ultramail</title>
        <meta name="description" content="Inbox Zero at your fingertips." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.background}>
        <div className={styles.barContainer}>
          <div className={styles.bar}>
            <Image src="/bar.svg" alt="Bar" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className={styles.header}>
          <Image src="/logo.svg" alt="Ultramail" width={130} height={40} />
          <div
            className={styles.twitterIcon}
            onClick={() => window.open("https://twitter.com/fdotinc", "_blank")}
          >
            <Image
              src="/twitter.svg"
              alt="Twitter Icon"
              width={24}
              height={24}
            />
          </div>
        </div>

        <main className={styles.main}>
          <div className={styles.center}>
            <h1 className={styles.hero}>AI is coming for your email.</h1>
            <h4 className={styles.description}>
              Inbox Zero at your fingertips.
            </h4>
            <div
              className={styles.button}
              onClick={() =>
                window.open(
                  "https://fdotinc.typeform.com/to/x4fsQpAy",
                  "_blank"
                )
              }
            >
              <p>🔮 Let me in</p>
            </div>
          </div>
          <div className={styles.footer}>
            © F.inc 2023 — from Fort Mason with love. All rights reserved.
          </div>
        </main>
      </div>
    </>
  );
}
