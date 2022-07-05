import React, { useState } from 'react';
import Head from 'next/head';
import FileUpload from '../components/file-upload';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Pill from '../components/shared/pill';
import { DOCUMENT_TYPES } from '../components/shared/constants';

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(
    DOCUMENT_TYPES.DELEGATIONS,
  );

  const pills = [
    <Pill
      onClick={() => setSelectedIndex(DOCUMENT_TYPES.DELEGATIONS)}
      index={DOCUMENT_TYPES.DELEGATIONS}
      key={DOCUMENT_TYPES.DELEGATIONS}
      selectedIndex={selectedIndex}
      title="Delegaciones"
    />,
    <Pill
      onClick={() => setSelectedIndex(DOCUMENT_TYPES.ASOCIATES)}
      index={DOCUMENT_TYPES.ASOCIATES}
      key={DOCUMENT_TYPES.ASOCIATES}
      selectedIndex={selectedIndex}
      title="Asociados"
    />,
    <Pill
      onClick={() => setSelectedIndex(DOCUMENT_TYPES.STATES)}
      index={DOCUMENT_TYPES.STATES}
      key={DOCUMENT_TYPES.STATES}
      selectedIndex={selectedIndex}
      title="Estados"
    />,
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} flex flex-col`}>
        <div className="amic-logo mb-3">
          <Image
            src="/logo.png"
            alt="AMIC"
            width="100px"
            height="100px"
          ></Image>
        </div>
        <div className="title">
          <h1>Tipo de archivo</h1>
        </div>
        <div className="pills grid grid-cols-3">{pills.map((p) => p)}</div>

        <FileUpload></FileUpload>
      </main>
    </div>
  );
}

